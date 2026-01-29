import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { FaBuilding, FaIndustry, FaHospital, FaHotel, FaArrowRight, FaCogs, FaTools, FaCheckCircle, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const HvacServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const heroImages = [
    "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769606429/IMG_8217_1_alotmv.png",
    "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769606405/IMG_8214_hry6ni.png",
    "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769606443/IMG_8220_ahyxjl.png",
    "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769680750/IMG_8253-removebg-preview_wlf1cz.png",
    "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769607191/IMG_8221_1_krylvf.png",
  ];

  const parasection = [
    {
      "id": 1,
      "name": "Standard & Custom Air Handling Units",
      "description": [
        "Air Handling Units (AHUs) condition and circulate air within buildings for comfort and quality.",
        "- Custom-designed to meet specific space and energy efficiency requirements",
        "- Includes filters, fans, heating/cooling coils, and dampers",
        "- Installed in rooftops or mechanical rooms as modular systems",
        "- Offered with design, installation, commissioning, and maintenance by Windsmit Air"
      ],
      "image": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769673623/MainAirhandling_unit_dynaae.webp"
    },
    {
      "id": 2,
      "name": "Terminal Units",
      "description": [
        "Terminal units distribute conditioned air to different zones efficiently.",
        "- Adjust airflow based on specific room requirements",
        "- Enhance comfort and reduce energy consumption",
        "- Ideal for zoned air distribution in commercial and residential spaces",
        "- Integrated by Windsmit Air into optimized HVAC layouts"
      ],
      "image": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769673778/terminalmain_unit_md6ozn.jpg"
    },
    {
      "id": 3,
      "name": "VRF System",
      "description": [
        "VRF systems control temperature precisely by adjusting refrigerant flow to indoor units.",
        "- Supports multiple zones with a single outdoor unit",
        "- High energy efficiency and precise thermal comfort",
        "- Scalable for offices, hotels, residences, and commercial spaces",
        "- Designed and installed by Windsmit Air for optimal performance"
      ],
      "image": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769673815/vrf_system_kx5jkn.png"
    },
    {
      "id": 4,
      "name": "Evaporative Cooling System",
      "description": [
        "Evaporative cooling systems supply fresh cool air and remove stale indoor air.",
        "- Uses water evaporation to reduce indoor temperature",
        "- Helps lower CO₂ levels and improve air quality",
        "- Ideal for hot, dry climates",
        "- Integrated with effective ducting and controls by Windsmit Air"
      ],
      "image": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769673829/evoprative_cooling_sysetem_dxu2af.jpg"
    },
    {
      "id": 5,
      "name": "Dampers, Louvers, Diffusers & Grills",
      "description": [
        "Dampers, louvers, diffusers, and grills control airflow direction and distribution.",
        "- Maintain aesthetic and functional interior design",
        "- Regulate air pressure in ducts",
        "- Enable efficient HVAC operation",
        "- Provided by Windsmit Air for tailored airflow solutions"
      ],
      "image": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769673851/damper_difuser_rywvjs.jpg"
    },
    {
      "id": 6,
      "name": "Exhaust and Fresh Air Fans",
      "description": [
        "Exhaust and fresh air fans maintain healthy indoor ventilation.",
        "- Exhaust fans remove stale or polluted air",
        "- Fresh air fans supply clean outdoor air",
        "- Improve indoor air quality and HVAC efficiency",
        "- Suitable for residential, commercial, and industrial applications"
      ],
      "image": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769673866/Exhaust-Fans_pypbdl.jpg"
    },
    {
      "id": 7,
      "name": "Air Curtains",
      "description": [
        "Air curtains create an invisible air barrier over doorways to separate environments.",
        "- Maintain conditioned air inside",
        "- Keep dust, insects, and pests out",
        "- Reduce energy loss from open doors",
        "- Offered by Windsmit Air for commercial and industrial entrances"
      ],
      "image": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769673878/Air_Curtain_si1sqq.webp"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">

      {/* 1. HERO SECTION (Split Layout) */}
      <section className="bg-black pt-28 pb-16 md:py-0 overflow-hidden min-h-[90vh] flex items-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black z-0" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex items-center h-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 w-full items-center">

            {/* LEFT COLUMN: SWIPER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative order-1 flex flex-col items-center justify-center min-h-[450px] md:h-full w-full"
            >
              {/* Glow effect */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
                  filter: 'blur(40px)',
                }}
              />

              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full max-w-sm md:max-w-md h-[400px] flex items-center justify-center"
              >
                {heroImages.map((img, i) => (
                  <SwiperSlide
                    key={i}
                    className="!flex items-center justify-center bg-transparent"
                  >
                    <img
                      src={img}
                      alt={`Hero Slide ${i}`}
                      className="max-h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(59,130,246,0.3)]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            {/* RIGHT COLUMN: TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center md:text-left order-2 flex flex-col justify-center h-full"
            >
             
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Advanced Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  HVAC Systems
                </span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
                Serving Nagpur's commercial landscape with precise climate control, ventilation, and automation systems since 2022.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                <a href="tel:+919021097544" className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-sm hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30">
                  <FaPhoneAlt /> Consult Engineer
                </a>
                <a href="#projects" className="flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white font-bold rounded-sm hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm">
                  View Solutions <FaArrowRight />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-blue-600 font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-blue-600"></span> Windsmit Air HVAC
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Engineering <span className="text-blue-600">Excellence</span> in <br /> Climate Control
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  At Windsmit Air, we specialize in high-performance HVAC solutions tailored for industrial and commercial applications. From precision air handling to large-scale VRF implementations, our engineering approach ensures optimal efficiency and reliability.
                </p>
                <p>
                  We integrate cutting-edge technology with robust mechanical design to deliver systems that stand the test of time.
                </p>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="relative overflow-hidden ">
                <img
                  src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769671975/Untitled_1080_x_1080_px_1080_x_1080_px_1_jto2od.png"
                  alt="Windsmit Air Engineering"
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 3. INDUSTRIES WE SERVE */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-slate-500">Tailored climate solutions for every sector.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FaBuilding, title: "Corporate Offices" },
              { icon: FaIndustry, title: "Industrial Plants" },
              { icon: FaHospital, title: "Healthcare" },
              { icon: FaHotel, title: "Hospitality" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-slate-100 flex flex-col items-center text-center transition-all"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-4">
                  <item.icon />
                </div>
                <h3 className="font-bold text-slate-800">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DETAILED SERVICES LIST (Parasection) */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h4 className="text-blue-600 font-bold mb-2">OUR EXPERTISE</h4>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">Comprehensive HVAC Infrastructure</h2>
            </div>
            <p className="text-slate-500 max-w-md text-right hidden md:block">
              From VRF systems to large-scale ventilation, we design, install, and maintain extensive setups.
            </p>
          </div>

          <div className="grid gap-12">
            {parasection.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row gap-10 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl relative group h-[400px]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-slate-900">{service.name}</h3>
                  <div className="text-lg text-slate-600 leading-relaxed theme-text space-y-2">
                    {/* Handle description array - separate intro from points if possible, or just map all */}
                    {Array.isArray(service.description) ? (
                      service.description.map((line, idx) => (
                        <p key={idx} className={`${line.startsWith('-') ? 'flex items-start gap-2 pl-2' : 'font-medium mb-3'}`}>
                          {line.startsWith('-') && <span className="text-blue-500 mt-1.5">•</span>}
                          <span>{line.startsWith('-') ? line.substring(1).trim() : line}</span>
                        </p>
                      ))
                    ) : (
                      <p>{service.description}</p>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="mt-4 px-8 py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-sm hover:bg-slate-900 hover:text-white transition-all uppercase tracking-wider text-sm"
                  >
                    View System Specs
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS / TIMELINE */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-16 text-center">Project Execution Framework</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Site Survey", desc: "Heat load calculation & layout analysis." },
              { step: "02", title: "Design", desc: "AutoCAD drafting of ducting & piping." },
              { step: "03", title: "Installation", desc: "Precision mounting & commissioning." },
              { step: "04", title: "Support", desc: "AMC & 24/7 technical breakdown support." }
            ].map((item, i) => (
              <div key={i} className="relative p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors group">
                <div className="text-5xl font-bold text-white/5 mb-4 group-hover:text-blue-500/20 transition-colors">{item.step}</div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-2xl w-full rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="h-48 bg-slate-100 relative">
                <img src={selectedService.image} alt={selectedService.name} className="w-full h-full object-cover mix-blend-multiply opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 drop-shadow-md bg-white/80 px-6 py-2 rounded-full backdrop-blur-sm text-center mx-4">
                    {selectedService.name}
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Features & Specs</h4>

                <div className="space-y-3 mb-8">
                  {Array.isArray(selectedService.description) && selectedService.description.filter(l => l.startsWith('-')).map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded transition-colors">
                      <FaCheckCircle className="text-blue-600 shrink-0 mt-1" />
                      <span className="text-slate-700">{feature.replace('-', '').trim()}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 flex-col sm:flex-row">
                  <a href="tel:+919021097544" className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-bold text-center hover:bg-blue-700 transition flex justify-center items-center gap-2">
                    <FaPhoneAlt /> Call Engineer
                  </a>
                  <a href={`https://wa.me/919021097544?text=Inquiry regarding ${selectedService.name}`} className="flex-1 border-2 border-green-500 text-green-600 py-4 rounded-lg font-bold text-center hover:bg-green-50 transition flex justify-center items-center gap-2">
                    <FaWhatsapp /> WhatsApp Inquiry
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default HvacServices;