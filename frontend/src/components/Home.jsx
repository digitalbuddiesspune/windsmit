import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import WhyChooseUs from './WhyChooseUs'
import Testimonials from './Testimonials'

// --- 1. DATA CONSTANTS ---

const expertiseData = [
  {
    id: 1,
    tabLabel: "Air Conditioning",
    heading: "Precision Cooling Systems",
    description: "We engineer cooling solutions that go beyond simple temperature control. Our systems are designed for optimal humidity regulation, energy efficiency, and silent operation suitable for luxury residences and corporate offices.",
    video: "https://res.cloudinary.com/dfsvuupuv/video/upload/v1771227090/our_expertise-Air_conditioning_xugrmu.mp4",
    features: ["Inverter Technology", "Multi-Zone Control", "Eco-friendly Refrigerants", "Smart WiFi Integration"]
  },
  {
    id: 2,
    tabLabel: "Commercial HVAC",
    heading: "Reliable Cooling for Businesses",
    description: "Large-scale air handling for commercial infrastructure. We specialize in ductwork design that maximizes airflow while minimizing noise and energy loss, ensuring your workspace meets all air quality standards.",
    image: "https://res.cloudinary.com/dfsvuupuv/image/upload/v1771227651/PTX_360_tvo2ds.gif",
    features: ["Custom AHU Design", "VRF/VRV Systems", "Fresh Air Injection", "Negative Pressure Rooms"]
  },
  {
    id: 3,
    tabLabel: "BMS Automation",
    heading: "Intelligent Building Control",
    description: "Future-proof your facility with our Building Management Systems. Monitor energy usage, detect faults instantly, and automate climate schedules from a central dashboard.",
    image: "https://res.cloudinary.com/dfsvuupuv/image/upload/v1770200738/Air_Conditioning_4_alpusn_mtqvtl.png",
    features: ["IoT Sensors", "Remote Monitoring", "Auto-Fault Detection", "Energy Analytics"]
  },
  {
    id: 4,
    tabLabel: "Retrofitting",
    heading: "System Modernization",
    description: "Upgrade your aging infrastructure without a complete tear-down. Our retrofitting services replace critical components to boost efficiency and extend the lifespan of your existing HVAC setup.",
    image: "https://res.cloudinary.com/dfsvuupuv/image/upload/v1770200856/original-f8d808f97930122a95a552cab6a30133_jnjhvk_xrlbyz.gif",
    features: ["Compressor Upgrades", "Duct Sealing", "Digital Thermostat Install", "Filter Upgrades"]
  }
]

const servicesList = [
  {
    id: 1,
    title: "Air Conditioning",
    description: "Complete cooling solutions for residential and commercial spaces.",
    items: ["Split AC", "Window AC", "Cassette AC", "Ductable AC", "Tower AC"]
  },
  {
    id: 2,
    title: "HVAC Solutions",
    description: "Advanced ventilation and air handling engineering.",
    items: [
      "Standard & Custom AHUs",
      "Terminal Units & VRF Systems",
      "Evaporative Cooling",
      "Dampers, Louvers, Diffusers",
      "Exhaust & Fresh Air Fans",
      "Air Curtains"
    ]
  },
  {
    id: 3,
    title: "BMS (Building Management)",
    description: "Smart control systems for automated building efficiency.",
    items: [
      "Supervisory Controllers",
      "DDC Controllers",
      "Sensors & Thermostats",
      "Automated Valves",
      "Control Panels"
    ]
  },
  {
    id: 4,
    title: "Service & Maintenance",
    description: "Reliable support to keep your systems running smoothly.",
    items: ["24/7 Emergency Support", "Annual Maintenance Contracts (AMC)", "System Health Checks"]
  }
]

const banners = [
  {
    id: 3,
    image: 'https://res.cloudinary.com/dfsvuupuv/image/upload/v1771226474/home_page-instead_technecian_kegfx7.png',
    alt: 'Professional HVAC Engineering'
  }
]

// Helper to normalize API URL (same pattern as Blog/Admin)
const getApiUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL || 'https://windsmit-backend.onrender.com/api'
  let cleanUrl = envUrl.replace(/\/+$/, '')
  if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
    cleanUrl = `https://${cleanUrl}`
  }
  if (!cleanUrl.includes('/api')) {
    cleanUrl = `${cleanUrl}/api`
  }
  return cleanUrl
}

// --- 2. INTERNAL COMPONENTS ---

function OurExpertise() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="bg-slate-900 py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 md:mb-10 text-center sm:text-left md:text-center max-w-3xl mx-auto">
          <span className="font-semibold uppercase tracking-widest text-xs sm:text-sm mb-1.5 block" style={{ color: '#00b050' }}>
            Technical Mastery
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Our Expertise
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          “Engineered comfort backed by deep HVAC knowledge, precise execution, and years of hands-on industry experience.”
          </p>
        </div>

        {/* Category Tabs - Horizontal scroll on mobile; padding so first/last headings aren't cut off */}
        <div className="mb-4 sm:mb-6 -mx-4 sm:-mx-6 md:mx-0 px-4 sm:px-6 md:px-0">
          <div
            className="flex flex-row gap-2 sm:gap-3 overflow-x-auto overflow-y-hidden pb-2 pl-4 pr-4 sm:pl-4 sm:pr-4 md:pl-0 md:pr-0 md:justify-center scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {expertiseData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`flex-shrink-0 min-w-0 text-left px-4 sm:px-6 py-3 sm:py-4 rounded-lg transition-all duration-300 border-l-4 group whitespace-nowrap ${
                  activeTab === index
                    ? "bg-slate-800 border-[#00b050] shadow-lg shadow-black/20"
                    : "bg-transparent border-slate-700 hover:bg-slate-800/50 hover:border-slate-500"
                }`}
              >
                <h3 className={`text-sm sm:text-base font-bold mb-1 transition-colors ${
                  activeTab === index ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                }`}>
                  {item.tabLabel}
                </h3>
                {activeTab === index && (
                  <p className="text-xs font-medium uppercase tracking-wider animate-fadeIn" style={{ color: '#00b050' }}>
                    Currently Viewing
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Display - Full Width Below Tabs */}
        <div className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
          {expertiseData.map((item, index) => (
            activeTab === index && (
              <div 
                key={item.id}
                className="w-full h-full bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col md:flex-row animate-fadeIn"
              >
                 {/* Image / Video Side */}
                 <div className="md:w-1/2 relative h-64 sm:h-80 md:h-auto">
                   {item.video ? (
                     <video
                       src={item.video}
                       autoPlay
                       muted
                       loop
                       playsInline
                       className="absolute inset-0 w-full h-full object-cover"
                       aria-label={item.heading}
                     />
                   ) : (
                     <img 
                       src={item.image} 
                       alt={item.heading}
                       className="absolute inset-0 w-full h-full object-cover"
                     />
                   )}
                   <div className="absolute inset-0 mix-blend-multiply" style={{ backgroundColor: 'rgba(0,176,80,0.2)' }}></div>
                 </div>

                 {/* Content Side */}
                 <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                   <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                     {item.heading}
                   </h3>
                   <p className="text-slate-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                     {item.description}
                   </p>
                   
                   <div className="space-y-2 sm:space-y-3 mt-auto">
                     <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Key Features</h4>
                     {item.features.map((feature, i) => (
                       <div key={i} className="flex items-center text-slate-200 text-xs sm:text-sm">
                         <div className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: '#00b050' }}></div>
                         {feature}
                       </div>
                     ))}
                   </div>
                 </div>
              </div>
            )
          ))}
        </div>
      </div>
      
      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  )
}


// --- 3. MAIN COMPONENT ---

function Home() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [openServices, setOpenServices] = useState({})
  const [stories, setStories] = useState([])
  const [activeStory, setActiveStory] = useState(null)
  const [showStories, setShowStories] = useState(true)
  const [projectCount, setProjectCount] = useState(0)
  const [hasAnimatedProjects, setHasAnimatedProjects] = useState(false)
  const [videos, setVideos] = useState([])
  const [fullscreenVideo, setFullscreenVideo] = useState(null)
  const projectsRef = useRef(null)

  // Auto-slide logic
  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length)
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [])

  // Fetch stories setting
  useEffect(() => {
    const fetchStoriesSetting = async () => {
      try {
        const response = await fetch(`${getApiUrl()}/settings/showStories`)
        if (response.ok) {
          const data = await response.json()
          setShowStories(data.value)
        }
      } catch (error) {
        console.error('Error fetching stories setting:', error)
        // Default to true if error
        setShowStories(true)
      }
    }
    fetchStoriesSetting()
  }, [])
  useEffect(() => {
  if (!projectsRef.current || hasAnimatedProjects) return
  const el = projectsRef.current

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (!entry.isIntersecting) return

      setHasAnimatedProjects(true)
      const target = 100
      const duration = 1500
      const startTime = performance.now()

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const value = Math.floor(progress * target)
        setProjectCount(value)
        if (progress < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
      observer.unobserve(el)
    },
    { threshold: 0.4 }
  )

  observer.observe(el)
  return () => observer.disconnect()
}, [hasAnimatedProjects])

  // Fetch stories for \"Instagram-like\" story section
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const API_URL = getApiUrl()
        const response = await fetch(`${API_URL}/stories?active=true`)
        if (!response.ok) return
        const data = await response.json()
        setStories(data)
      } catch {
        // fail silently on homepage
      }
    }
    fetchStories()
  }, [])

  // Fetch videos for "Our Work in Action" section
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const API_URL = getApiUrl()
        const response = await fetch(`${API_URL}/stories?active=true`)
        if (!response.ok) return
        const data = await response.json()
        setVideos(data)
      } catch {
        // fail silently on homepage
      }
    }
    fetchVideos()
  }, [])

  // Close fullscreen video on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && fullscreenVideo) {
        setFullscreenVideo(null)
      }
    }
    if (fullscreenVideo) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [fullscreenVideo])

  // Accordion toggle logic
  const toggleService = (serviceId) => {
    setOpenServices((prev) => {
      const id = Number(serviceId)
      const isCurrentlyOpen = prev[id] === true
      return isCurrentlyOpen 
        ? { ...prev, [id]: false } 
        : { ...prev, [id]: true }
    })
  }

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-800 antialiased">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden bg-slate-900">
        {/* Mobile-only background image */}
        <div className="relative sm:hidden">
          <img
            src="https://res.cloudinary.com/dfsvuupuv/image/upload/v1770200716/497afe2e9cac98cc156cb917956f6939_ogbgpx_e5vciw.jpg"
            alt="HVAC System"
            className="w-full h-auto opacity-90"
          />
          {/* GRADIENT: Strong overlay for mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
          
          {/* Hero Content Overlay - Mobile */}
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4 py-10">
            <div className="max-w-xl w-full text-white text-center">
              {/* Main Heading */}
              <h1 className="text-xl font-bold leading-[1.1] mb-4 tracking-tight">
                Because Every Breath <br />
                Deserves <span style={{ color: '#00b050' }}>Better Air.</span>
              </h1>
              {/* Description */}
              <p className="text-sm sm:text-base text-slate-100 mb-5 leading-relaxed">
                Windsmit Air delivers premium HVAC, Air Conditioning, and Building Management solutions designed for health and efficiency.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-row gap-2 justify-center flex-wrap">
                <Link to="/services" className="group relative px-4 py-3 text-white text-sm font-semibold overflow-hidden transition-all duration-300 ease-out hover:shadow-xl rounded-lg whitespace-nowrap inline-block text-center" style={{ backgroundColor: '#00b050' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#009040'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00b050'}>
                  <span className="relative z-10">Explore Solutions</span>
                </Link>
                <Link to="/contact" className="group relative px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-sm font-semibold overflow-hidden transition-all duration-300 ease-out hover:bg-white/20 hover:border-white/50 rounded-lg whitespace-nowrap inline-block text-center">
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop banner images */}
        <div className="hidden sm:block relative">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`relative transition-opacity duration-1000 ease-in-out ${
                index === currentBanner ? 'opacity-100 z-10' : 'absolute inset-0 opacity-0 z-0'
              }`}
            >
              {/* IMAGE: Desktop display in original dimensions */}
              <img
                src={banner.image}
                alt={banner.alt}
                className="hidden sm:block opacity-90"
                width="1920"
                height="950"
                style={{ width: '1920px', maxWidth: '100%', height: 'auto', aspectRatio: '1920/950' }}
              />
              
              {/* GRADIENT: Subtle overlay for desktop */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-transparent"></div>
              
              {/* Hero Content Overlay - Desktop */}
              <div className="absolute inset-0 z-20 flex items-center justify-start px-12 lg:px-16 xl:px-24">
                <div className="max-w-xl text-white text-left">
                  {/* Green horizontal line */}
                  <div className="w-20 h-1 mb-4 mt-12 lg:mt-16" style={{ backgroundColor: '#00b050' }}></div>
                  
                  {/* Main Heading */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 lg:mb-6 tracking-tight">
                  Because Every Breath <br />
                  Deserves <span style={{ color: '#00b050' }}>Better Air.</span>
                  </h1>
                  
                  {/* Description */}
                  <p className="text-base md:text-lg text-slate-100 mb-6 md:mb-8 leading-relaxed max-w-xl">
                  Engineering efficient air-conditioning and HVAC solutions for modern homes, offices, and every space.
                  </p>
                  
                  {/* Buttons */}
                  <div className="flex flex-row gap-3 justify-start">
                    <Link to="/services" className="px-5 py-2.5 text-white text-sm font-medium rounded-full transition-all duration-200 ease-out hover:shadow-md inline-block" style={{ backgroundColor: '#00b050' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#009040'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00b050'}>
                      Explore Solutions
                    </Link>
                    <Link to="/contact" className="px-5 py-2.5 bg-slate-800/90 text-white text-sm font-medium border border-slate-500/50 rounded-full transition-all duration-200 ease-out hover:bg-slate-700/90 hover:border-slate-400/70 inline-block">
                      Talk to HVAC Expert
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- OUR WORK IN ACTION SECTION --- */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-8">
            <span className="inline-block px-2.5 py-0.5 font-semibold uppercase tracking-widest text-xs rounded-full mb-1.5" style={{ backgroundColor: 'rgba(0,176,80,0.15)', color: '#00b050' }}>
              Project Highlights
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">Our Work in Action</h2>
            <p className="text-sm sm:text-base text-slate-800 max-w-2xl mx-auto mt-2">
              Explore our recent installations and project showcases
            </p>
          </div>

          {/* Videos Display */}
          {videos.length === 0 ? (
            <div className="text-slate-500 py-12">No videos available at the moment.</div>
          ) : videos.length === 1 ? (
            // Single video - centered
            <div className="flex justify-center">
              <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 aspect-video rounded-xl overflow-hidden shadow-lg relative group cursor-pointer" onClick={() => setFullscreenVideo(videos[0])}>
                <video
                  src={videos[0].videoUrl}
                  className="w-full h-full object-cover"
                  muted
                  loop
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-14 h-14 ml-1" style={{ color: '#00b050' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ) : videos.length === 2 ? (
            // Two videos - equally spaced
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <div key={video._id || index} className="aspect-video rounded-xl overflow-hidden shadow-lg relative group cursor-pointer" onClick={() => setFullscreenVideo(video)}>
                  <video
                    src={video.videoUrl}
                    className="w-full h-full object-cover"
                    muted
                    loop
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 ml-1" style={{ color: '#00b050' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Three or more videos - horizontal scroll
            <div className="overflow-x-auto pb-4 -mx-4 sm:-mx-6 md:mx-0 px-4 sm:px-6 md:px-0">
              <div className="flex gap-6 min-w-max md:min-w-0 md:grid md:grid-cols-3 lg:grid-cols-4">
                {videos.map((video, index) => (
                  <div key={video._id || index} className="flex-shrink-0 w-[300px] sm:w-[400px] md:w-full aspect-video rounded-xl overflow-hidden shadow-lg relative group cursor-pointer" onClick={() => setFullscreenVideo(video)}>
                    <video
                      src={video.videoUrl}
                      className="w-full h-full object-cover"
                      muted
                      loop
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 ml-1" style={{ color: '#00b050' }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen Video Modal */}
      {fullscreenVideo && (
        <div 
          className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setFullscreenVideo(null)}
        >
          <div className="relative w-full max-w-6xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setFullscreenVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#00b050] transition-colors z-10"
              aria-label="Close video"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              src={fullscreenVideo.videoUrl}
              className="w-full h-full rounded-lg"
              controls
              autoPlay
            />
          </div>
        </div>
      )}



      {/* --- IDENTITY SECTION --- */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-white">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-12 items-center">
    {/* Left Content */}
    <div className="space-y-5 sm:space-y-6 md:space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2 sm:mb-3">
          <span className="h-px w-8 sm:w-12" style={{ backgroundColor: '#00b050' }}></span>
          <span className="font-semibold uppercase tracking-widest text-xs sm:text-sm" style={{ color: '#00b050' }}>Our Identity</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          Breathing Life into <br></br> <span style={{ color: '#00b050' }}>Every Space</span>
        </h2>
      </div>

      <div className="space-y-5 sm:space-y-6">
        {/* The Name */}
        <div className="flex gap-3 sm:gap-4">
          <div className="flex-shrink-0 mt-0.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(0,176,80,0.15)', color: '#00b050' }}>
              {/* USER ICON */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 20a8 8 0 0116 0" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">A Name That Stands for Happier Air</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            <span style={{ color: '#00b050' }}>Windsmit Air</span> represents our belief that air should not only cool a space but also uplift the people within it. Smit means smile, symbolizing our commitment to creating healthy, pleasant, and positive indoor environments.
            </p>
          </div>
        </div>

        {/* The Philosophy */}
        <div className="flex gap-3 sm:gap-4">
          <div className="flex-shrink-0 mt-0.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-300 flex items-center justify-center text-yellow-600">
              
              {/* YOUR BULB ICON */}
              <img 
                src="https://res.cloudinary.com/dfsvuupuv/image/upload/v1770200998/Untitled_design_teizv6_qtlknh.svg"
                alt="Philosophy Icon"
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
              />

            </div>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">What Our Logo Represents</h3>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed"> 
            Our logo pays gratitude to the sun, the source of energy and life, <span className="font-semibold text-yellow-300">Yellow</span> radiates warmth and opportunity, <span style={{ color: '#00b050' }}>Green</span> breathes nature and health. The flags above the “I” guide the wind forward - symbolizing our constant pursuit of progress and a WINning direction in all we do.
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* Right Image */}
    <div className="relative order-first lg:order-last">
      <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
        <img
          src="https://res.cloudinary.com/dfsvuupuv/image/upload/v1770200849/output-onlinegiftools_1_ftxcaj_do94ye.gif"
          alt="Clean Air Environment"
          className="w-full h-full object-cover transition-transform ease-out"
        />
      </div>

      {/* Decorative Elements */}
      <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 rounded-full -z-10" style={{ backgroundColor: 'rgba(0,176,80,0.1)' }}></div>
      <div className="hidden sm:block absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-yellow-50 rounded-full -z-10"></div>
    </div>
  </div>
</section>

      {/* --- STATS SECTION --- */}
      <section className="bg-slate-900 py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
           <div className="p-4 sm:p-5">
             <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">2022</span>
             <span className="text-xs sm:text-sm font-medium uppercase tracking-wider" style={{ color: '#00b050' }}>Year Established</span>
           </div>
           <div className="p-4 sm:p-5">
             <span
  ref={projectsRef}
  className="block text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1"
>
  {projectCount}
  <span className="ml-1">+</span>
</span>
             <span className="text-xs sm:text-sm font-medium uppercase tracking-wider" style={{ color: '#00b050' }}>Successful Projects</span>
           </div>
           <div className="p-4 sm:p-5">
             <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">24/7</span>
             <span className="text-xs sm:text-sm font-medium uppercase tracking-wider" style={{ color: '#00b050' }}>Client Support</span>
           </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative bg-white py-0 mb-0">
        <div className="grid lg:grid-cols-2">
            <div className="h-64 sm:h-80 md:h-96 lg:h-[500px] w-full relative bg-slate-900 overflow-hidden order-2 lg:order-1">
                <video
                  src="https://res.cloudinary.com/dfsvuupuv/video/upload/v1771226763/Ready_to_upgrade_your_air_conditioining_jlqvwy.mp4"
                  className="w-full h-full object-cover object-left"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label="Ready to upgrade your air conditioning"
                />
            </div>
            <div className="flex items-center bg-slate-100 px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-12 md:py-16 lg:py-20 order-1 lg:order-2">
                <div className="max-w-lg mx-auto lg:mx-0">
                    <span className="font-semibold uppercase tracking-wider text-xs sm:text-sm mb-1.5 block" style={{ color: '#00b050' }}>Get in touch</span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Ready to upgrade your air conditioning?</h2>
                    <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                        Contact us today for a consultation. Whether it's a new installation or maintaining an existing system, our experts are ready to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Link to="/contact" className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-slate-900 text-white text-sm sm:text-base font-semibold rounded hover:bg-slate-800 transition-colors text-center">
                            Request Quote
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- INCLUDED COMPONENTS --- */}
      <div className="-mt-px">
        <OurExpertise />
      </div>
      <div className="w-full h-0.5 bg-slate-700"></div>
      <WhyChooseUs />
      <div className="w-full h-0.5 bg-slate-700"></div>
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home