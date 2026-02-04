import { useState, useEffect, useRef } from 'react'
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
  const [showShareDropdown, setShowShareDropdown] = useState(false)
  const shareDropdownRef = useRef(null)
  const readingProgress = useReadingProgress()

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shareDropdownRef.current && !shareDropdownRef.current.contains(event.target)) {
        setShowShareDropdown(false)
      }
    }
    if (showShareDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showShareDropdown])

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

  // Share functions
  const getShareUrl = () => {
    return window.location.href
  }

  const getShareText = () => {
    return post ? `${post.title} - ${post.excerpt || ''}` : ''
  }

  const handleShare = (platform) => {
    const url = encodeURIComponent(getShareUrl())
    const text = encodeURIComponent(getShareText())
    const title = encodeURIComponent(post?.title || '')

    let shareUrl = ''
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        break
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${text}%20${url}`
        break
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
        break
      case 'email':
        shareUrl = `mailto:?subject=${title}&body=${text}%20${url}`
        break
      case 'copy':
        navigator.clipboard.writeText(getShareUrl())
        setShowShareDropdown(false)
        // You could add a toast notification here
        return
      default:
        return
    }
    window.open(shareUrl, '_blank', 'width=600,height=400')
    setShowShareDropdown(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="h-[65vh] bg-slate-200 animate-pulse sw-full"></div>
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
              <div className="sticky top-32 flex flex-row lg:flex-col gap-3 relative" ref={shareDropdownRef}>
                <button
                  onClick={() => setShowShareDropdown(!showShareDropdown)}
                  className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 hover:bg-white hover:text-emerald-600 hover:shadow-xl hover:shadow-emerald-500/10 border border-transparent hover:border-emerald-100 transition-all duration-300 flex items-center justify-center group"
                  aria-label="Share"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
                
                {/* Share Dropdown */}
                {showShareDropdown && (
                  <div className="absolute left-14 lg:left-0 lg:top-14 z-50 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 min-w-[200px] animate-in fade-in slide-in-from-left-2 duration-200">
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => handleShare('twitter')}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                          <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-slate-700">Twitter</span>
                      </button>
                      
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                          <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-slate-700">LinkedIn</span>
                      </button>
                      
                      <button
                        onClick={() => handleShare('whatsapp')}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-green-50 transition-colors">
                          <svg className="w-5 h-5 text-slate-400 group-hover:text-green-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-slate-700">WhatsApp</span>
                      </button>
                      
                      <button
                        onClick={() => handleShare('facebook')}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                          <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-slate-700">Facebook</span>
                      </button>
                      
                      <button
                        onClick={() => handleShare('email')}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                          <svg className="w-5 h-5 text-slate-400 group-hover:text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-slate-700">Email</span>
                      </button>
                      
                      <div className="border-t border-slate-100 my-1"></div>
                      
                      <button
                        onClick={() => handleShare('copy')}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                          <svg className="w-5 h-5 text-slate-400 group-hover:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-slate-700">Copy Link</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </aside>

            {/* Article Content */}
            <article className="flex-1 max-w-3xl">
              {post.excerpt && (
                <p className="text-2xl md:text-3xl  font-semibold text-slate-800 leading-snug  mb-12 text-slate-500/90">
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
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 group-hover:opacity-70 transition-opacity">
              Explore more stories
            </h2>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default BlogPostDetail