import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaCalendarAlt, FaArrowRight, FaInbox } from 'react-icons/fa'
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

      {/* HERO - full screen like other sections */}
      <section
className="h-[55vh] sm:h-[50vh] md:h-[60vh] w-full pt-20 pb-12 px-4 sm:px-6 relative flex flex-col items-center justify-center bg-slate-900"
        aria-label="Blog hero"
      >
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
            Blog
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 leading-tight">
            Windsmit <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Journal</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            HVAC insights, maintenance tips and energy efficiency guides.
          </p>
        </div>
      </section>

      {/* FILTER - overlaps bottom of hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-16 relative z-20">
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
            <FaSearch className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
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


      {/* BLOG CARDS - centered grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {loading ? (
          <div className="flex justify-center py-24">
            <p className="text-slate-500">Loading...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {filteredPosts.map(post => (
              <article
                key={post._id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col w-full sm:w-[min(100%,320px)] lg:w-[min(100%,340px)]"
              >
                {/* image */}
                <Link to={`/blog/${post._id}`} className="h-44 sm:h-48 overflow-hidden bg-slate-100 block">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt=""
                      className="w-fulls h-full object-cover hover:scale-105 transition duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      <span className="text-sm">No image</span>
                    </div>
                  )}
                </Link>

                {/* content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    {post.category && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                        {post.category}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 text-sm text-slate-500">
                      <FaCalendarAlt className="w-3.5 h-3.5 flex-shrink-0" />
                      {formatDate(post.createdAt)}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug line-clamp-2">
                    <Link to={`/blog/${post._id}`} className="hover:text-emerald-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>

                  {post.author && (
                    <p className="text-sm text-slate-500 mb-3 truncate">{post.author}</p>
                  )}

                  <Link
                    to={`/blog/${post._id}`}
                    className="mt-auto text-sm font-semibold text-emerald-600 inline-flex items-center gap-1.5 hover:text-emerald-700"
                  >
                    Read full article
                    <FaArrowRight className="w-3.5 h-3.5" />
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
          <FaInbox className="mx-auto mb-4" />
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