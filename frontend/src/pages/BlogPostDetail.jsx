import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Footer from '../components/Footer'

// Simple hook for reading progress
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

  const formatDate = (dateString) => {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', month: 'long', day: 'numeric' 
    })
  }

  // --- Modern Skeleton Loader ---
  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="h-[60vh] bg-slate-200 animate-pulse w-full"></div>
        <div className="max-w-3xl mx-auto -mt-32 relative bg-white rounded-t-3xl p-8 shadow-2xl space-y-6">
           <div className="h-4 bg-slate-100 rounded w-1/3 mx-auto"></div>
           <div className="h-4 bg-slate-100 rounded w-full"></div>
           <div className="h-4 bg-slate-100 rounded w-full"></div>
           <div className="h-64 bg-slate-100 rounded-xl"></div>
        </div>
      </div>
    )
  }

  if (error || !post) return <div className="p-20 text-center">Post not found</div>

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* Reading Progress (Top Fixed) */}
      <div className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500 z-50" style={{ width: `${readingProgress}%` }} />

      {/* --- IMMERSIVE HERO SECTION --- */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover animate-fade-in scale-105"
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90"></div>
        </div>

        {/* Back Button (Floating Glass) */}
        <div className="absolute top-8 left-6 md:left-12 z-20">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-all text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-16 pb-32 md:pb-40 max-w-7xl mx-auto flex flex-col items-start z-10">
          
          {/* Category Pill */}
          <span className="mb-6 px-4 py-1.5 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg shadow-emerald-500/20">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 max-w-4xl tracking-tight drop-shadow-sm">
            {post.title}
          </h1>

          {/* Author Meta */}
          <div className="flex items-center gap-4 text-slate-200">
             <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">
                  {post.author.charAt(0)}
                </div>
                <div className="text-sm font-medium text-white">
                  {post.author}
                  <span className="mx-2 opacity-50">•</span>
                  {formatDate(post.createdAt)}
                </div>
             </div>
             <span className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-emerald-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime}
             </span>
          </div>
        </div>
      </div>

      {/* --- CONTENT CARD (Floating Overlap) --- */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 -mt-24 md:-mt-32 mb-20">
        <div className="bg-white rounded-2xl md:rounded-[2rem] shadow-2xl shadow-slate-200/50 p-6 md:p-12 lg:p-16 border border-slate-100">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Sidebar (Sharing) */}
            <div className="lg:col-span-1 hidden lg:flex flex-col gap-6 pt-4">
              <div className="sticky top-8 flex flex-col gap-4">
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest rotate-180 mb-4 writing-vertical-lr">Share</p>
                 <ShareButton platform="twitter" />
                 <ShareButton platform="facebook" />
                 <ShareButton platform="linkedin" />
              </div>
            </div>

            {/* Main Article */}
            <article className="lg:col-span-11 max-w-none">
              
              {/* Lead / Excerpt */}
              {post.excerpt && (
                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium mb-10 border-l-4 border-emerald-500 pl-6">
                  {post.excerpt}
                </p>
              )}

              {/* Body Text */}
              <div className="prose prose-lg md:prose-xl prose-slate 
                prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                prose-p:text-slate-600 prose-p:leading-8 prose-p:font-serif
                prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:text-emerald-500 hover:prose-a:underline
                prose-img:rounded-2xl prose-img:shadow-xl prose-img:my-10
                prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-slate-50 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900 first-letter:float-left first-letter:mr-3
              ">
                {post.content.split('\n').map((paragraph, index) => (
                   paragraph ? <p key={index}>{paragraph}</p> : <br key={index}/>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-3">
                 {['Design', 'Technology', 'Innovation'].map(tag => (
                   <span key={tag} className="px-4 py-2 bg-slate-50 text-slate-600 text-sm font-semibold rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                     #{tag}
                   </span>
                 ))}
              </div>

              {/* Mobile Share */}
              <div className="lg:hidden mt-10 pt-8 border-t border-slate-100">
                <div className="flex justify-center gap-6">
                   <ShareButton platform="twitter" />
                   <ShareButton platform="facebook" />
                   <ShareButton platform="linkedin" />
                </div>
              </div>

            </article>
          </div>
        </div>
        
        {/* Next Post Teaser */}
        <div className="mt-20 text-center">
            <h3 className="text-slate-400 font-medium uppercase tracking-widest text-sm mb-4">Up Next</h3>
            <Link to="/blog" className="inline-block group">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Browse all articles
                </h2>
                <div className="h-1 w-20 bg-emerald-500 mx-auto mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Link>
        </div>

      </div>
      
      <Footer />
    </div>
  )
}

// Minimal Modern Share Button
const ShareButton = ({ platform }) => {
  return (
    <button className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 hover:bg-emerald-500 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 flex items-center justify-center">
       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          {platform === 'twitter' && <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>}
          {platform === 'facebook' && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>}
          {platform === 'linkedin' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>}
       </svg>
    </button>
  )
}

export default BlogPostDetail