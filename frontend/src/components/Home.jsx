import { useState, useEffect } from 'react'
import Footer from './Footer'
import OurExpertise from './OurExpertise'

function Home() {
  const [activeService, setActiveService] = useState('AC')
  const [currentBanner, setCurrentBanner] = useState(0)
  const [openServices, setOpenServices] = useState({})

  // Banner images - replace these with your actual banner URLs
  const banners = [
    // {
    //   id: 1,
    //   image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769165851/White_and_Blue_Modern_Air_Conditioning_Installation_Services_Facebook_Post_Landscape_1920_x_600_mm_1920_x_600_mm_2_s79yu4.svg',
    //   alt: 'Banner 1'
    // },
    // {
    //   id: 2,
    //   image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769165130/White_and_Blue_Modern_Air_Conditioning_Installation_Services_Facebook_Post_Landscape_1920_x_600_mm_1920_x_600_mm_io7uxq.svg',
    //   alt: 'Banner 2'
    // },
    {
      id: 3,
      image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769236709/ChatGPT_Image_Jan_24_2026_12_07_49_PM_u0niic.png',
      alt: 'Banner 3'
    }
  ]

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [banners.length])

  const goToSlide = (index) => {
    setCurrentBanner(index)
  }

  const goToPrevious = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const goToNext = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length)
  }

  const toggleService = (serviceId) => {
    setOpenServices((prev) => {
      // Convert serviceId to number to ensure consistent type
      const id = Number(serviceId)
      
      // Check if this service is currently open
      const isCurrentlyOpen = prev[id] === true
      
      // If it's already open, close it. Otherwise, close all and open only this one
      if (isCurrentlyOpen) {
        // Close all services
        return {
          1: false,
          2: false,
          3: false,
          4: false
        }
      } else {
        // Close all services first, then open only the clicked one
        return {
          1: id === 1,
          2: id === 2,
          3: id === 3,
          4: id === 4
        }
      }
    })
  }

  const servicesList = [
    {
      id: 1,
      title: "AIR CONDITIONING",
      items: ["Split AC", "Window AC", "Cassette AC", "Ductable AC", "Tower AC"]
    },
    {
      id: 2,
      title: "HVAC",
      items: [
        "Standard & Custom Air Handling Units",
        "Terminal Units",
        "VRF System",
        "Evaporative Cooling System",
        "Dampers, Louvers, Diffusers & Grills",
        "Exhaust and Fresh Air Fans",
        "Air Curtains"
      ]
    },
    {
      id: 3,
      title: "BMS",
      items: [
        "Supervisory Controllers",
        "DDC Controllers",
        "Sensors",
        "Thermostats",
        "Valves",
        "Panels"
      ]
    },
    {
      id: 4,
      title: "SYSTEM SERVICE & ANNUAL MAINTENANCE",
      items: ["24 X 7 Available"]
    }
  ]

  const servicesData = {
    AC: {
      title: "Air Conditioning",
      icon: "❄️",
      description: "Precision cooling for every space type.",
      items: ['Split & Window AC', 'Cassette Units', 'Ductable Systems', 'Tower ACs', 'VRF Technology']
    },
    HVAC: {
      title: "HVAC Systems",
      icon: "⚡",
      description: "Industrial grade air handling and ventilation.",
      items: ['Air Handling Units (AHU)', 'Terminal Units', 'Evaporative Cooling', 'Exhaust & Fresh Air Fans', 'Dampers & Louvers']
    },
    BMS: {
      title: "BMS & Automation",
      icon: "🧠",
      description: "Smart control for intelligent buildings.",
      items: ['DDC Controllers', 'Smart Sensors', 'Thermostats', 'Valve Automation', 'Control Panels']
    }
  }

  return (
    <div className="w-full bg-[#FAFAFA] text-gray-900 font-sans selection:bg-[#FFEB3B] selection:text-black">
      
      {/* --- BANNER CAROUSEL SECTION --- */}
      <section className="relative w-full overflow-hidden h-screen">
        <div className="relative w-full h-full">
          {/* Banner Images */}
          <div className="relative w-full h-full">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Previous banner"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Next banner"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentBanner
                    ? 'w-8 bg-[#4CAF50]'
                    : 'w-2 bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- HERO SECTION: Asymmetric Editorial --- */}
      <section className="relative pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden bg-black">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#FFEB3B]/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-[#4CAF50]/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/4"></div>

        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">OUR IDENTITY</h2>
              <div className="h-1 w-20 md:w-24 bg-[#FFEB3B] mx-auto lg:mx-0 rounded-full"></div>
            </div>

            {/* Name Section */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-white">Name:</h3>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                <span className="font-semibold text-[#4CAF50]">Windsmit air</span> is an expression of our attitude, motto, and efforts to create healthier and pleasant spaces. The name signifies <span className="font-semibold text-white">"smiling air (SMIT)"</span> and emphasizes our belief in providing clean, pure, and happy air through design and engineering.
              </p>
            </div>

            {/* Logo Section */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-white">Logo:</h3>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Our logo is a <span className="font-semibold text-white">"little gratitude"</span> to the sun, which energizes the earth and provides business opportunities. The logo features a <span className="font-semibold text-[#FFEB3B]">yellow background</span> to represent the sun's energy and <span className="font-semibold text-[#4CAF50]">green color</span> to characterize trees as a source of healthy air. Additionally, <span className="font-semibold text-white">flags over the alphabet 'I'</span> symbolizes the direction of blowing wind towards the winning approach. <span className="font-semibold text-white">(WIN)</span>.
              </p>
            </div>
          </div>

          {/* Hero Visual - Image */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <img
              src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769173734/output-onlinegiftools_1_ftxcaj.gif"
              alt="Clean Air Day"
              className="w-full h-auto object-cover rounded-2xl md:rounded-[2rem]"
            />
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-12 bg-white text-gray-900">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Section */}
            <div className="space-y-6 md:space-y-8 order-1">
              {/* Subtitle */}
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-8 md:w-12 bg-[#4CAF50]"></div>
                <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-gray-600">OUR SERVICES</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
                WE WILL PROVIDE YOU THE BEST SERVICE
              </h2>

              {/* CTA Button */}
              <button className="px-6 md:px-8 py-3 md:py-4 bg-[#fff121] text-black rounded-lg font-semibold uppercase flex items-center gap-2 hover:bg-[#45a049] transition-colors text-sm md:text-base">
                OUR SERVICES
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Section - Service Cards Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 order-2">
              {/* Service Card 1: AIR CONDITIONING */}
              <div className="bg-gray-50 rounded-lg p-3 md:p-4 shadow-lg border border-gray-100 flex flex-col items-center text-center relative min-h-[180px] md:min-h-[200px]">
                {/* Icon */}
                <div className="mb-2 md:mb-3">
                  <svg className="w-8 h-8 md:w-12 md:h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                {/* Separator Line */}
                <div className="h-0.5 w-8 md:w-12 bg-[#4CAF50] mb-2 md:mb-3"></div>
                {/* Text */}
                <h3 className="text-[10px] md:text-xs font-bold uppercase text-gray-900 mb-3 md:mb-4 leading-tight">AIR CONDITIONING</h3>
                {/* Plus Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleService(1)
                  }}
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#4CAF50] flex items-center justify-center hover:scale-110 transition-transform"
                  type="button"
                >
                  {Boolean(openServices[1]) ? (
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </button>
                {/* Dropdown Content */}
                {Boolean(openServices[1]) && (
                  <div className="w-full mt-2 md:mt-3 animate-fade-in">
                    <ul className="space-y-1 md:space-y-2 text-left text-gray-700 text-[10px] md:text-xs">
                      {servicesList[0].items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#4CAF50] mr-1 md:mr-2 font-bold text-lg md:text-2xl leading-none">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Service Card 2: HVAC */}
              <div className="bg-gray-50 rounded-lg p-3 md:p-4 shadow-lg border border-gray-100 flex flex-col items-center text-center relative min-h-[180px] md:min-h-[200px]">
                {/* Icon */}
                <div className="mb-2 md:mb-3">
                  <svg className="w-8 h-8 md:w-12 md:h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                {/* Separator Line */}
                <div className="h-0.5 w-8 md:w-12 bg-[#4CAF50] mb-2 md:mb-3"></div>
                {/* Text */}
                <h3 className="text-[10px] md:text-xs font-bold uppercase text-gray-900 mb-3 md:mb-4 leading-tight">HVAC</h3>
                {/* Plus Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleService(2)
                  }}
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#4CAF50] flex items-center justify-center hover:scale-110 transition-transform"
                  type="button"
                >
                  {Boolean(openServices[2]) ? (
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </button>
                {/* Dropdown Content */}
                {Boolean(openServices[2]) && (
                  <div className="w-full mt-2 md:mt-3 animate-fade-in">
                    <ul className="space-y-1 md:space-y-2 text-left text-gray-700 text-[10px] md:text-xs">
                      {servicesList[1].items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#4CAF50] mr-1 md:mr-2 font-bold text-lg md:text-2xl leading-none">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Service Card 3: BMS */}
              <div className="bg-gray-50 rounded-lg p-3 md:p-4 shadow-lg border border-gray-100 flex flex-col items-center text-center relative min-h-[180px] md:min-h-[200px]">
                {/* Icon */}
                <div className="mb-2 md:mb-3">
                  <svg className="w-8 h-8 md:w-12 md:h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                {/* Separator Line */}
                <div className="h-0.5 w-8 md:w-12 bg-[#4CAF50] mb-2 md:mb-3"></div>
                {/* Text */}
                <h3 className="text-[10px] md:text-xs font-bold uppercase text-gray-900 mb-3 md:mb-4 leading-tight">BMS</h3>
                {/* Plus Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleService(3)
                  }}
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#4CAF50] flex items-center justify-center hover:scale-110 transition-transform"
                  type="button"
                >
                  {Boolean(openServices[3]) ? (
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </button>
                {/* Dropdown Content */}
                {Boolean(openServices[3]) && (
                  <div className="w-full mt-2 md:mt-3 animate-fade-in">
                    <ul className="space-y-1 md:space-y-2 text-left text-gray-700 text-[10px] md:text-xs">
                      {servicesList[2].items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#4CAF50] mr-1 md:mr-2 font-bold text-lg md:text-2xl leading-none">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Service Card 4: SYSTEM SERVICE & ANNUAL MAINTENANCE */}
              <div className="bg-gray-50 rounded-lg p-3 md:p-4 shadow-lg border border-gray-100 flex flex-col items-center text-center relative min-h-[180px] md:min-h-[200px]">
                {/* Icon */}
                <div className="mb-2 md:mb-3">
                  <svg className="w-8 h-8 md:w-12 md:h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                {/* Separator Line */}
                <div className="h-0.5 w-8 md:w-12 bg-[#4CAF50] mb-2 md:mb-3"></div>
                {/* Text */}
                <h3 className="text-[9px] md:text-xs font-bold uppercase text-gray-900 mb-3 md:mb-4 leading-tight">SYSTEM SERVICE & ANNUAL MAINTENANCE</h3>
                {/* Plus Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleService(4)
                  }}
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#4CAF50] flex items-center justify-center hover:scale-110 transition-transform"
                  type="button"
                >
                  {Boolean(openServices[4]) ? (
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </button>
                {/* Dropdown Content */}
                {Boolean(openServices[4]) && (
                  <div className="w-full mt-2 md:mt-3 animate-fade-in">
                    <ul className="space-y-1 md:space-y-2 text-left text-gray-700 text-[10px] md:text-xs">
                      {servicesList[3].items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#4CAF50] mr-1 md:mr-2 font-bold text-lg md:text-2xl leading-none">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section with Contact Details */}
      <section className="w-full relative overflow-hidden bg-black">
        <div className="relative w-full">
          {/* Image with left padding */}
          <div className="relative w-full bg-black pl-8 md:pl-12 lg:pl-16 xl:pl-20">
            <img 
              src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769166501/White_and_Blue_Modern_Air_Conditioning_Installation_Services_Facebook_Post_Landscape_1920_x_600_mm_1_zydfot.svg" 
              alt="Cooler" 
              className="w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] object-cover"
            />
          </div>
          
          {/* Text Overlay on Image */}
          <div className="absolute inset-0 flex items-center justify-end px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
            <div className="max-w-md text-white text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2">Contact Us</h2>
              
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 md:mb-3">Get in Touch</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                    Ready to improve your indoor air quality? Contact us today for expert HVAC solutions, installation, and maintenance services.
                  </p>
                </div>
                
                <button className="px-6 md:px-8 py-3 md:py-4 bg-gray-800 text-white rounded-lg font-semibold uppercase hover:bg-gray-700 transition-colors text-sm md:text-base lg:text-lg w-full sm:w-auto mx-auto block">
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS & INTRO: The "Ticker" --- */}
      <section className="border-y border-black/5 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            <div className="text-center sm:text-left sm:pr-4 md:pr-8">
              <h3 className="text-3xl md:text-4xl font-bold text-[#4CAF50] mb-2">2022</h3>
              <p className="text-gray-500 text-xs md:text-sm font-medium uppercase tracking-wider">Established</p>
            </div>
            <div className="text-center sm:px-4 md:px-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-500 text-xs md:text-sm font-medium uppercase tracking-wider">Projects Completed</p>
            </div>
            <div className="text-center sm:text-right sm:pl-4 md:pl-8">
              <h3 className="text-3xl md:text-4xl font-bold text-[#25D366] mb-2">24/7</h3>
              <p className="text-gray-500 text-xs md:text-sm font-medium uppercase tracking-wider">Active Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR EXPERTISE: Carousel Section --- */}
      <OurExpertise />

      <Footer />
    </div>
  )
}

export default Home