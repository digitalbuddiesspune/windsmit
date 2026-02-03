import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = `https://${cleanUrl}`
    }
    if (!cleanUrl.includes('/api') && !cleanUrl.includes('localhost')) {
      cleanUrl = `${cleanUrl}/api`
    }
    return cleanUrl
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${getApiUrl()}/blog?published=true`)
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        const data = await response.json()
        setPosts(data)
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
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Logic: First post is "Featured", rest are grid
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null
  const regularPosts = filteredPosts.length > 0 ? filteredPosts.slice(1) : []

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const blogHeroBg =
    'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1770111563/Untitled_1600_x_900_px_1600_x_700_px_q3psx1.svg'
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url(${blogHeroBg})`,
    backgroundSize: '150%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* --- FULL-SCREEN HERO (static background, like solution pages) --- */}
      <section
        className="min-h-screen w-full pt-20 pb-12 px-6 relative flex flex-col items-center justify-center"
        style={heroStyle}
        aria-label="Blog hero"
      >
        <div className="max-w-7xl mx-auto relative z-10 text-center pt-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            The Windsmit Journal
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tight mb-4 leading-tight">
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Innovations</span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed pb-10">
            Expert perspectives on HVAC technology, sustainable cooling, and the future of building management systems.
          </p>
        </div>
      </section>

      {/* --- FLOATING FILTER BAR (Overlaps the Dark Hero) --- */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 relative z-30">
        <div className="bg-white rounded-xl shadow-xl shadow-slate-200/50 p-4 flex flex-col md:flex-row items-center justify-between gap-4 border border-slate-100">
          
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {category === 'all' ? 'View All' : category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
            />
            <svg className="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        
        {loading ? (
          <BlogSkeleton />
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-32">
            <div className="inline-block p-4 rounded-full bg-slate-100 mb-4">
               <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900">No articles found</h3>
            <p className="text-slate-500 mt-2">Try adjusting your search or filters.</p>
          </div>
        ) : (
          <>
            {/* --- FEATURED POST (Hero Style) --- */}
            {featuredPost && (
              <div className="mb-20">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-8 h-px bg-slate-300"></span>
                  Latest Featured
                </p>
                
                <Link to={`/blog/${featuredPost._id || featuredPost.id}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                   {/* Image Side */}
                   <div className="relative rounded-3xl overflow-hidden bg-slate-100 flex items-center justify-center shadow-2xl shadow-slate-200/50" style={{ maxHeight: '400px', minHeight: '300px' }}>
                     <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title} 
                        className="max-w-full max-h-full w-auto h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                     />
                     <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                   </div>

                   {/* Text Side */}
                   <div className="flex flex-col justify-center">
                     <div className="flex items-center gap-3 mb-4 text-sm font-medium text-emerald-600">
                        <span className="bg-emerald-50 px-3 py-1 rounded-full">{featuredPost.category}</span>
                        <span className="text-slate-400">&bull;</span>
                        <span className="text-slate-500">{formatDate(featuredPost.createdAt)}</span>
                     </div>
                     <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-[1.1] group-hover:text-emerald-700 transition-colors">
                       {featuredPost.title}
                     </h2>
                     <p className="text-lg text-slate-600 font-serif leading-relaxed mb-8 line-clamp-3">
                       {featuredPost.excerpt}
                     </p>
                     <div className="flex items-center gap-2 text-slate-900 font-bold group-hover:translate-x-2 transition-transform duration-300">
                        Read Full Article 
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                     </div>
                   </div>
                </Link>
              </div>
            )}

            {/* --- REGULAR POSTS GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {regularPosts.map((post) => (
                <article key={post._id || post.id} className="group flex flex-col">
                  
                  <Link to={`/blog/${post._id || post.id}`} className="block overflow-hidden rounded-2xl mb-6 relative bg-slate-100 flex items-center justify-center shadow-md hover:shadow-xl transition-shadow duration-300" style={{ maxHeight: '250px', minHeight: '200px' }}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="max-w-full max-h-full w-auto h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                       <span className="bg-white/95 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                         {post.category}
                       </span>
                    </div>
                  </Link>

                  <div className="flex flex-col flex-grow">
                    <div className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                      {formatDate(post.createdAt)}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                      <Link to={`/blog/${post._id || post.id}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>

      {/* --- NEWSLETTER SECTION --- */}
      <section className="bg-slate-50 border-t border-slate-200 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Subscribe to our newsletter</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">
             Get the latest insights on HVAC maintenance and energy efficiency delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white shadow-sm"
            />
            <button className="px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-slate-900/20">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const BlogSkeleton = () => (
  <div className="animate-pulse">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
       <div className="bg-slate-200 rounded-3xl w-full" style={{ maxHeight: '400px', minHeight: '300px' }}></div>
       <div className="space-y-4">
          <div className="h-4 bg-slate-200 w-32 rounded"></div>
          <div className="h-12 bg-slate-200 w-full rounded"></div>
          <div className="h-4 bg-slate-200 w-full rounded"></div>
          <div className="h-4 bg-slate-200 w-2/3 rounded"></div>
       </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i}>
          <div className="bg-slate-200 rounded-2xl mb-4" style={{ maxHeight: '250px', minHeight: '200px' }}></div>
          <div className="h-4 bg-slate-200 w-24 mb-2 rounded"></div>
          <div className="h-6 bg-slate-200 w-full mb-2 rounded"></div>
        </div>
      ))}
    </div>
  </div>
)

export default Blog