function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: "Local Expertise, Professional Standards",
      description: "Our skilled technicians are experienced and certified, Deep understanding of Nagpur’s climate, usage patterns, and power conditions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Honest pricing & execution",
      description: "Transparent costs, and execution exactly as promised—no hidden extras, no compromises.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Engineer-First, Not Sales-First",
      description: "Every project is handled with proper heat-load calculations, airflow design, and system logic - not rule-of-thumb selling.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Right-Capacity, Right-System Promise",
      description: "We design systems that are right-sized, preventing overcooling, high bills, and long-term failures.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Architect & Interior Designer–Friendly Execution",
      description: "Clear drawings, coordination support, and site discipline that aligns with design intent — no last-minute chaos.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Energy Bills Matter to Us",
      description: "We design HVAC systems with operating cost in mind, not just installation -helping clients save every month.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ]

  return (
    <>
      {/* ===== Section Heading (OUTSIDE IMAGE) ===== */}
      <section className="relative z-10 w-full py-16 bg-slate-900 text-center overflow-hidden">
        <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
            Travel to deliver
          </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
          Why choose <br />
          <span className="text-emerald-400">Windsmit Air?</span>
        </h2>
        <div className="absolute -bottom-px left-0 right-0 z-20 pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 sm:h-20 md:h-24 lg:h-28 block"
            aria-hidden="true"
          >
            <path
              d="M0,0 C150,90 350,0 600,70 C850,140 1050,20 1200,70 L1200,120 L0,120 Z"
              fill="#0f172a"
            />
          </svg>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section
        className="w-full relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769605425/3fbc0260-c7ea-4230-bd93-80d6639437d2.png)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">

            {features.map((feature) => (
              <div key={feature.id} className="group h-full">
                <div className="h-full min-h-[220px] md:min-h-[240px] flex items-start gap-4 rounded-2xl p-5 md:p-6 border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/15 transition">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-md">
                    {feature.icon}
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-400 mb-1.5">
                      {feature.title}
                    </h3>
                    <p
                      className="text-sm md:text-[15px] leading-relaxed text-gray-300"
                      style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 5,
                        overflow: 'hidden'
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs
