import { useState } from 'react'

function OurExpertise() {
  const expertiseKeys = ['AC', 'HVAC', 'BMS']
  const [activeExpertiseIndex, setActiveExpertiseIndex] = useState(0)
  const activeExpertise = expertiseKeys[activeExpertiseIndex]

  const expertiseData = {
    AC: {
      title: "Air Conditioning", 
      description: "Energy-efficient air conditioning solutions for residential and commercial spaces. From split AC systems to window units, cassette systems, and ductable AC systems, we provide comprehensive cooling solutions with advanced inverter technology for perfect temperature control and superior comfort.",
      image: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769236036/74444331-39e2-4c08-bfcc-a8cd14f95449.png"
    },
    HVAC: {
      title: "HVAC Systems", 
      description: "Industrial-grade HVAC systems including custom-designed Air Handling Units (AHU), Variable Refrigerant Flow (VRF) technology, evaporative cooling systems, and precision terminal units. Our solutions deliver optimal climate control with energy-efficient operation and advanced airflow management.",
      image: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769236364/9319ea7f-5a2b-4716-b76c-54eab48b082c.png"
    },
    BMS: {
      title: "BMS & Automation", 
      description: "Intelligent building management systems for automated climate control. Our BMS solutions include Direct Digital Control (DDC) systems, smart sensors and thermostats, automated valve systems, and centralized control panels. Real-time monitoring and optimization for maximum efficiency and energy savings.",
      image: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769236654/ba10943d-0369-4694-bc74-58073f3504b2.png"
    }
  }

  const currentExpertise = expertiseData[activeExpertise]

  const handleExpertiseClick = (index) => {
    setActiveExpertiseIndex(index)
  }

  const goToPrevious = () => {
    setActiveExpertiseIndex((prev) => (prev - 1 + expertiseKeys.length) % expertiseKeys.length)
  }

  const goToNext = () => {
    setActiveExpertiseIndex((prev) => (prev + 1) % expertiseKeys.length)
  }

  return (
    <section className="w-full bg-black text-white py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Our Expertise</h2>
          <div className="h-1 w-20 md:w-24 bg-[#FFEB3B] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Left Side - Expertise Carousel */}
          <div className="lg:col-span-4 relative mt-4 md:mt-8 order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl min-h-[100px] md:min-h-[120px]">
              {/* Expertise Items Carousel */}
              <div className="relative h-full">
                {expertiseKeys.map((key, index) => {
                  const expertise = expertiseData[key]
                  const isActive = index === activeExpertiseIndex
                  return (
                    <div
                      key={key}
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                        isActive 
                          ? 'opacity-100 translate-x-0 z-10' 
                          : index < activeExpertiseIndex
                            ? 'opacity-0 -translate-x-full z-0'
                            : 'opacity-0 translate-x-full z-0'
                      }`}
                    >
                      <button
                        onClick={() => handleExpertiseClick(index)}
                        className={`w-full h-full p-4 md:p-6 rounded-xl md:rounded-2xl transition-all duration-300 flex items-center justify-center ${
                          isActive
                            ? 'bg-white/10 shadow-lg shadow-[#FFEB3B]/20' 
                            : 'bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center gap-3 md:gap-4">
                          <span className="text-2xl md:text-3xl lg:text-4xl">{expertise.icon}</span>
                          <span className={`text-base md:text-lg lg:text-xl font-bold ${isActive ? 'text-[#FFEB3B]' : 'text-white/80'}`}>
                            {expertise.title}
                          </span>
                        </div>
                      </button>
                    </div>
                  )
                })}
              </div>

              {/* Left Carousel Dots Indicator */}
              <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {expertiseKeys.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleExpertiseClick(index)}
                    className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                      index === activeExpertiseIndex
                        ? 'w-5 md:w-6 bg-[#FFEB3B]'
                        : 'w-1.5 md:w-2 bg-white/60 hover:bg-white/80'
                    }`}
                    aria-label={`Go to ${expertiseData[expertiseKeys[index]].title}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Single Card */}
          <div className="lg:col-span-8 relative order-1 lg:order-2">
            <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20">
                  <img
                    src={currentExpertise.image}
                    alt={currentExpertise.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12">
                  <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
                      {currentExpertise.title}
                    </h3>
                    <div className="h-1 w-12 md:w-16 bg-[#FFEB3B] mb-4 md:mb-6 rounded-full mx-auto"></div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                      {currentExpertise.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-[#FFEB3B] hover:bg-[#FFEB3B]/90 text-black p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Previous expertise"
              >
                <svg className="w-4 h-4 md:w-5 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-[#FFEB3B] hover:bg-[#FFEB3B]/90 text-black p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Next expertise"
              >
                <svg className="w-4 h-4 md:w-5 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurExpertise
