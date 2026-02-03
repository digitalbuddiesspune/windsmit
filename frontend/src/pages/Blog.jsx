import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Calendar, ArrowRight, Inbox } from 'lucide-react'
import Footer from '../components/Footer'

function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['all', 'HVAC', 'Air Conditioning', 'BMS', 'Maintenance', 'Energy Efficiency']

  const getApiUrl = () => {
    const envUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
    let cleanUrl = envUrl.replace(/\/+$/, '')
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) cleanUrl = `https://${cleanUrl}`
    if (!cleanUrl.includes('/api') && !cleanUrl.includes('localhost')) cleanUrl = `${cleanUrl}/api`
    return cleanUrl
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${getApiUrl()}/blog?published=true`)
        const data = await response.json()
        setPosts(Array.isArray(data) ? data : [])
      } catch (error) {
        console.error('Error fetching posts:', error)
        setPosts([])
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const titleMatch = post.title?.toLowerCase().includes(searchTerm.toLowerCase())
    const excerptMatch = post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && (titleMatch || excerptMatch)
  })

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-emerald-500 selection:text-white">

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-[#0F172A]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Windsmit Journal
          </h1>
          <p className="text-lg text-slate-400">
            HVAC insights, maintenance tips and energy efficiency guides
          </p>
        </div>
      </section>


      {/* FILTER */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-30">
        <div className="bg-white rounded-xl shadow-lg p-3 flex flex-col md:flex-row gap-4">

          <div className="flex gap-2 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100'
                }`}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>

          <div className="relative ml-auto w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-100 rounded-lg outline-none"
            />
          </div>
        </div>
      </div>


      {/* BLOG GRID */}
      <main className="max-w-7xl mx-auto px-6 py-16">

        {loading ? (
          <p>Loading...</p>
        ) : filteredPosts.length === 0 ? (
          <EmptyState />
        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredPosts.map(post => (
              <article
                key={post._id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition flex flex-col"
              >

                {/* image */}
                <Link to={`/blog/${post._id}`} className="h-44 overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </Link>

                {/* content */}
                <div className="p-5 flex flex-col flex-grow">

                  {/* date bigger */}
                  <span className="flex items-center gap-2 text-sm text-slate-500 mb-2 font-medium">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.createdAt)}
                  </span>

                  {/* title bigger + bold */}
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 hover:text-emerald-600 leading-snug">
                    <Link to={`/blog/${post._id}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* read article bigger */}
                  <Link
                    to={`/blog/${post._id}`}
                    className="mt-auto text-base font-semibold text-emerald-600 inline-flex items-center gap-2"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                </div>
              </article>
            ))}

          </div>

        )}
      </main>


      {/* NEWSLETTER */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-10 text-center text-white">
          <Inbox className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Stay updated</h2>
          <p className="text-slate-400">Get monthly HVAC insights in your inbox</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const EmptyState = () => (
  <div className="text-center py-24">
    <h3 className="text-xl font-semibold text-slate-600">No posts found</h3>
  </div>
)

export default Blog
