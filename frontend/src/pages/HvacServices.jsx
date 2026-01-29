import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { FaBuilding, FaIndustry, FaHospital, FaHotel, FaArrowRight, FaCogs, FaTools, FaCheckCircle, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import servicesData from '../components/Servicess.json';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const HvacServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const heroImages = [
    "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769606429/IMG_8217_1_alotmv.png",
    "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769606405/IMG_8214_hry6ni.png"
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">

      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-slate-900 z-10" />
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 6000 }}
          className="absolute inset-0 w-full h-full opacity-40 mix-blend-overlay"
        >
          {heroImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-12 bg-blue-500"></span>
              <span className="text-blue-400 font-bold tracking-widest uppercase">Industrial Grade Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced HVAC <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Engineering</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
              Serving Nagpur's commercial landscape with precise climate control, ventilation, and automation systems since 2022.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+919021097544" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-sm hover:bg-blue-700 transition-all flex items-center gap-3 shadow-lg hover:shadow-blue-500/30">
                <FaPhoneAlt /> Consult Engineer
              </a>
              <a href="#projects" className="px-8 py-4 border border-white/30 text-white font-bold rounded-sm hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm flex items-center gap-3">
                View Solutions <FaArrowRight />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INDUSTRIES WE SERVE */}
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

      {/* 3. COMMERCIAL SERVICES LIST */}
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
            {servicesData.commercialServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row gap-10 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl relative group h-[400px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-slate-900">{service.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed theme-text">{service.desc}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
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

      {/* 4. PROCESS / TIMELINE */}
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
                <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover mix-blend-multiply opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-slate-800 drop-shadow-md bg-white/80 px-6 py-2 rounded-full backdrop-blur-sm">{selectedService.title}</h3>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Technical Specifications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {selectedService.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <FaCheckCircle className="text-blue-600 shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="tel:+919021097544" className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-bold text-center hover:bg-blue-700 transition flex justify-center items-center gap-2">
                    <FaPhoneAlt /> Call Engineer
                  </a>
                  <a href={`https://wa.me/919021097544?text=Inquiry regarding ${selectedService.title}`} className="flex-1 border-2 border-green-500 text-green-600 py-4 rounded-lg font-bold text-center hover:bg-green-50 transition flex justify-center items-center gap-2">
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