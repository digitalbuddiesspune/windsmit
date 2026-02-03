import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Footer from '../components/Footer'

// Hook for scroll depth and progress
const useReadingProgress = () => {
  const [completion, setCompletion] = useState(0)
  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.body.scrollHeight - window.innerHeight
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100)
      }
    }
    window.addEventListener('scroll', updateScrollCompletion)
    return () => window.removeEventListener('scroll', updateScrollCompletion)
  }, [])
  return completion
}

function BlogPostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const readingProgress = useReadingProgress()

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

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
    const fetchPost = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${getApiUrl()}/blog/${id}`)
        if (!response.ok) throw new Error('Post not found')
        const data = await response.json()
        setPost(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    if (id) fetchPost()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="h-[65vh] bg-slate-200 animate-pulse w-full"></div>
        <div className="max-w-4xl mx-auto -mt-32 relative bg-white rounded-t-[3rem] p-12 space-y-8">
           <div className="h-4 bg-slate-100 rounded w-1/4 mx-auto"></div>
           <div className="h-12 bg-slate-100 rounded w-3/4 mx-auto"></div>
           <div className="space-y-4">
             <div className="h-4 bg-slate-100 rounded w-full"></div>
             <div className="h-4 bg-slate-100 rounded w-full"></div>
             <div className="h-4 bg-slate-100 rounded w-5/6"></div>
           </div>
        </div>
      </div>
    )
  }

  if (error || !post) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <h2 className="text-2xl font-bold text-slate-800">Post not found</h2>
      <button onClick={() => navigate('/blog')} className="mt-4 text-emerald-600 font-medium">Return to Blog</button>
    </div>
  )

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Slim Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-emerald-500 z-[100] transition-all duration-150 ease-out" 
        style={{ width: `${readingProgress}%` }} 
      />

      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-slate-900">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover opacity-80 scale-100 hover:scale-105 transition-transform duration-[10s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900"></div>

        {/* Floating Nav */}
        
        {/* Hero Content */}
        <div className="absolute bottom-0 mt-10 left-0 w-full pb-24 md:pb-36 z-10 px-6">
          <div className="max-w-5xl mx-auto text-center md:text-left">
           
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-slate-300 ">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-600 p-[2px]">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-sm">
                    {post.author.charAt(0)}
                  </div>
                </div>
                <span className="font-xl text-lg text-white">{post.author}</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-slate-500 hidden md:block"></div>
              <time className="text-medium font-semibold">{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
              <div className="h-1 w-1 rounded-full bg-slate-500 hidden md:block"></div>
              <span className="flex items-center gap-1.5 text-medium font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {post.readTime} 
              </span>
              
            </div>
            
          </div>
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <main className="relative z-20 max-w-5xl mx-auto px-6 -mt-16 mb-24">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 p-8 md:p-16 border border-slate-100">
          
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar Share */}
            <aside className="lg:w-12 flex flex-row lg:flex-col items-center gap-4">
              <div className="sticky top-32 flex flex-row lg:flex-col gap-3">
                <p className="hidden lg:block text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center mb-2">Share</p>
                <ShareButton platform="twitter" />
                <ShareButton platform="facebook" />
                <ShareButton platform="linkedin" />
              </div>
            </aside>

            {/* Article Content */}
            <article className="flex-1 max-w-3xl">
              {post.excerpt && (
                <p className="text-2xl md:text-3xl text-slate-800 leading-snug  mb-12 text-slate-500/90">
                  {post.excerpt}
                </p>
              )}

              <div className="prose prose-lg md:prose-xl prose-slate 
                max-w-none
                prose-headings:text-slate-900 prose-headings:font-bold
                prose-p:text-slate-600 prose-p:leading-[1.8] prose-p:font-serif
                prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-2xl prose-blockquote:text-emerald-700
                prose-img:rounded-3xl prose-img:shadow-2xl
                first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-letter:float-left first-letter:mr-4 first-letter:mt-2
              ">
                {post.content.split('\n').map((paragraph, index) => (
                   paragraph ? <p key={index}>{paragraph}</p> : <br key={index}/>
                ))}
              </div>

              {/* Tags Section */}
              <div className="mt-20 pt-10 border-t border-slate-100">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wider mr-2">Tags:</span>
                  {['Growth', 'Future', 'Tech'].map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-slate-50 text-slate-500 text-xs font-bold rounded-full border border-slate-100 hover:border-emerald-200 hover:text-emerald-600 transition-all cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-24 py-16 border-t border-slate-100 text-center">
          <p className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-4">Keep Reading</p>
          <Link to="/blog" className="group">
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 group-hover:opacity-70 transition-opacity underline decoration-emerald-500/30 decoration-8 underline-offset-8">
              Explore more stories
            </h2>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

const ShareButton = ({ platform }) => {
  return (
    <button className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 hover:bg-white hover:text-emerald-600 hover:shadow-xl hover:shadow-emerald-500/10 border border-transparent hover:border-emerald-100 transition-all duration-300 flex items-center justify-center group">
       <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
          {platform === 'twitter' && <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>}
          {platform === 'facebook' && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>}
          {platform === 'linkedin' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>}
       </svg>
    </button>
  )
}

export default BlogPostDetail