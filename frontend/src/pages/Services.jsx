import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
// ADD Navigation to this import line:
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'; 

import {
  FaBroom, FaFan, FaTint, FaShieldAlt, FaSnowflake, FaWind,
  FaPowerOff, FaThermometerHalf, FaVolumeUp, FaBolt,
  FaTools, FaWater, FaSprayCan, FaHammer, FaPhoneAlt, FaWhatsapp,
  FaCheckCircle, FaGasPump, FaSearch, FaMicrochip, FaProjectDiagram,
  FaTv, FaWifi
} from "react-icons/fa";
import Footer from '../components/Footer';

import servicesData from '../components/Servicess.json';

// IMPORTANT: Add these CSS imports for the swiper functionality
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
// Icon Mapping
const iconMap = {
  FaBroom: FaBroom,
  FaFan: FaFan,
  FaTint: FaTint,
  FaShieldAlt: FaShieldAlt,
  FaSnowflake: FaSnowflake,
  FaWind: FaWind,
  FaPowerOff: FaPowerOff,
  FaThermometerHalf: FaThermometerHalf,
  FaVolumeUp: FaVolumeUp,
  FaBolt: FaBolt,
  FaTools: FaTools,
  FaWater: FaWater,
  FaSprayCan: FaSprayCan,
  FaHammer: FaHammer,
  FaPhoneAlt: FaPhoneAlt,
  FaWhatsapp: FaWhatsapp,
  FaCheckCircle: FaCheckCircle,
  FaGasPump: FaGasPump,
  FaSearch: FaSearch,
  FaMicrochip: FaMicrochip,
  FaProjectDiagram: FaProjectDiagram,
  FaTv: FaTv,
  FaWifi: FaWifi
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showAllServices, setShowAllServices] = useState(false);

  // Images for the Hero Swiper
  const heroSwiperImages = [
"https://res.cloudinary.com/dfsvuupuv/image/upload/v1770200959/Untitled_1080_x_1080_px_2_y0ew8i_vij1nc.svg",
    "https://res.cloudinary.com/dfsvuupuv/image/upload/v1770200796/ductableac2-removebg-preview_n60gdu_nbzrcr.png",
    "https://res.cloudinary.com/dfsvuupuv/image/upload/v1770200945/Toweac2-removebg-preview__1_-removebg-preview_sao5e1_vp6yde.png",
    
    "https://res.cloudinary.com/dfsvuupuv/image/upload/v1770200761/casseteac2-removebg-preview_vfevao_gwl8lr.png"
  ];

  // Data for "Room Air Conditioning" Section
const acProducts = [
  {
    url: "https://res.cloudinary.com/dfsvuupuv/image/upload/v1770200739/Air_Conditioning_wxwyl4_nahbat.png",
    title: "High Wall Split AC",
    desc: "Sleek cooling for modern homes.",
    content: [
      "High Wall Split ACs are the most preferred cooling solution for modern residential spaces.",
      "Offer silent operation with advanced filtration for cleaner indoor air.",
      "Compact indoor units blend seamlessly with contemporary interiors.",
      "Designed for precise temperature control and long-term energy efficiency."
    ]
  },
  {
    url: "https://res.cloudinary.com/dfsvuupuv/image/upload/v1770200810/Gemini_Generated_Image_e3nicqe3nicqe3ni-removebg-preview_1_agc0pc_qca1dd.png",
    title: "Cassette AC",
    desc: "Uniform 360° airflow.",
    content: [
      "Cassette ACs are ideal for commercial areas with false ceilings.",
      "Provide uniform 360-degree airflow for consistent cooling across the space.",
      "Only the elegant panel is visible, keeping interiors clean and uncluttered.",
      "Widely used in offices, retail outlets, and hospitality environments."
    ]
  },
  {
    url: "https://res.cloudinary.com/dfsvuupuv/image/upload/v1770200808/Gemini_Generated_Image_28yeej28yeej28ye-removebg-preview_1_iirkfz_nvm9nw.png",
    title: "Ductable AC",
    desc: "Centralized solutions for large spaces.",
    content: [
      "Ductable AC systems deliver centralized cooling for large areas and multiple rooms.",
      "Maintain a premium aesthetic with concealed ducting and visible grilles only.",
      "Ensure uniform temperature distribution across entire floors or zones.",
      "Commonly used in banquet halls, villas, and large commercial buildings."
    ]
  },

  {
    url: "https://res.cloudinary.com/dfsvuupuv/image/upload/v1770200813/Gemini_Generated_Image_qrdcjeqrdcjeqrdc-removebg-preview_1_p6wuig_jyhzhw.png",
    title: "Tower AC",
    desc: "High-capacity floor standing units.",
    content: [
      "Tower ACs are powerful floor-standing units built for high cooling demand.",
      "Deliver rapid cooling for large, open, or crowded spaces.",
      "Perfect where wall or ceiling mounting is not practical.",
      "Commonly installed in gyms, halls, showrooms, and conference rooms."
    ]
  }
];


  const visibleServices = showAllServices ? servicesData.residentialServices : servicesData.residentialServices.slice(0, 4);

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-green-100 selection:text-green-900">

      {/* 1. HERO SECTION - STICKY FULL SCREEN */}
<section className="relative md:sticky md:top-0 bg-black overflow-x-hidden overflow-y-auto min-h-screen md:h-screen pt-20 pb-12 md:pt-0 md:pb-0 flex items-center z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black z-0" />

<div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full min-w-0 relative z-10 flex items-center justify-center h-full">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 w-full min-w-0 items-center">

            {/* LEFT COLUMN: SWIPER */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="relative order-2 md:order-1 flex flex-col items-center justify-center min-h-[240px] sm:min-h-[320px] md:min-h-[450px] md:h-full w-full min-w-0 group"
>
  {/* Glow effect */}
  <div 
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none"
    style={{
      background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
      filter: 'blur(40px)',
    }}
  />

  <Swiper
    modules={[Autoplay, EffectFade, Navigation]}
    navigation={{
      prevEl: '.swiper-button-prev-custom',
      nextEl: '.swiper-button-next-custom',
    }}
    effect="fade"
    fadeEffect={{ crossFade: true }}
    slidesPerView={1}
    centeredSlides={true}
    loop={true}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    className="w-full max-w-[280px] sm:max-w-md md:max-w-lg h-[220px] sm:h-[320px] md:h-[400px] lg:h-[420px] flex items-center justify-center relative"
  >
    {heroSwiperImages.map((img, i) => (
      <SwiperSlide 
        key={i} 
        className="!flex items-center justify-center bg-transparent"
      >
        <img
          src={img}
          alt={`Hero Slide ${i}`}
          className="max-h-[180px] sm:max-h-[260px] md:max-h-[300px] lg:max-h-[340px] w-auto object-contain drop-shadow-[0_20px_50px_rgba(34,197,94,0.3)]"
        />
      </SwiperSlide>
    ))}

    {/* CUSTOM NAVIGATION ARROWS (SVG COPY-PASTE) */}
    
    {/* Left Arrow - visible on touch, hover on desktop */}
    <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 text-white/50 hover:text-green-400 transition-all opacity-70 md:opacity-0 md:group-hover:opacity-100" aria-label="Previous slide">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6"/>
      </svg>
    </button>

    {/* Right Arrow */}
    <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 text-white/50 hover:text-green-400 transition-all opacity-70 md:opacity-0 md:group-hover:opacity-100" aria-label="Next slide">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </button>
  </Swiper>
</motion.div>
            {/* RIGHT COLUMN: TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-center md:text-left order-1 md:order-2 flex flex-col justify-center h-full min-w-0 w-full max-w-full overflow-hidden"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight break-words">
                Mastering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                  Cool Comfort
                </span>
              </h1>
              <p className="text-gray-300 sm:text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-5 sm:mb-6 md:mb-10 max-w-full break-words mx-auto md:mx-0 font-light leading-relaxed" style={{ overflowWrap: 'break-word' }}>
                Expert AC installation and maintenance services in Nagpur. Ensuring your home stays perfectly cool.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center md:justify-start w-full max-w-full flex-wrap">
                <a href="tel:+919021097544" className="flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black font-bold rounded-full hover:bg-green-400 hover:text-white transition-all shadow-xl hover:shadow-green-500/20 group text-sm sm:text-base flex-shrink-0">
                  <FaPhoneAlt className="group-hover:rotate-12 transition-transform flex-shrink-0" /> Call Now
                </a>
                <a href="https://wa.me/919021097544" className="flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-md text-sm sm:text-base flex-shrink-0">
                  <FaWhatsapp className="flex-shrink-0" /> WhatsApp Us
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT / TRUST SECTION */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-green-600 font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-green-600"></span> Why Windsmit Air?
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Enhancing Your Indoor <br /> <span className="text-green-600">Air Quality & Comfort</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Since 2022, Windsmit Air has been Nagpur's trusted partner for advanced cooling solutions. We don't just fix ACs; we optimize your entire indoor climate.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-6">
                  {[
                    "Certified Technicians",
                    "Transparent Pricing",
                    "Genuine Parts",
                    "Rapid Response",
                    "Energy Efficient",
                    "After-Sales Support"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="relative  overflow-hidden">
                <img src="https://res.cloudinary.com/dfsvuupuv/image/upload/v1770200996/Untitled_design_3_ferdqm_rdydia.png" alt="Windsmit Quality" className="w-full h-[550px] object-cover transform hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-4xl font-bold">500+</p>
                    <p className="text-white/80 font-medium">Happy Clients in Nagpur</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. ROOM AIR CONDITIONING – HVAC STYLE LAYOUT */}
<section className="py-24 px-6 bg-gray-50 relative z-20">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <div className="max-w-2xl">
        <h4 className="text-green-600 font-bold mb-2 uppercase tracking-wider">
          Room Cooling Solutions
        </h4>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Room <span className="text-green-600">Air Conditioning</span>
        </h2>
      </div>
      <p className="text-gray-800 max-w-md text-right hidden md:block">
        Tailored AC systems engineered for efficiency, comfort, and reliability.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-16">
      {acProducts.map((product, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px", once: true }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col md:flex-row items-center gap-12 ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}
        >

          {/* Image */}
          <div className="w-full md:w-1/2 h-[420px] overflow-hidden rounded-3xl shadow-2xl relative group">
            <img
              src={product.url}
              alt={product.title}
              className="w-full h-full object-contain bg-white p-10 transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-green-600/5 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              {product.title}
            </h3>

            <p className="text-green-600 font-semibold italic flex items-center gap-2">
              <FaSnowflake /> {product.desc}
            </p>

           <div className="space-y-3">
  {product.content.map((point, i) => (
    <div key={i} className="flex items-start gap-3 text-gray-600">
      <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
      <p className="leading-relaxed">{point}</p>
    </div>
  ))}
</div>


            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() =>
                  window.location.href = `https://wa.me/919021097544?text=Interested in ${product.title}`
                }
                className="px-8 py-3 bg-gray-900 text-white font-bold rounded-sm hover:bg-green-600 transition-all uppercase tracking-wide text-sm"
              >
                Check Pricing
              </button>

      
            </div>
          </div>

        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* 4. RESIDENTIAL SERVICES GRID */}
    <section className="py-24 px-6 bg-white relative z-20">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Residential Services</h2>
      <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full" />
      <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg font-medium">
        Professional maintenance & repair services for long-lasting cooling.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <AnimatePresence>
        {visibleServices.map((service) => {
          const Icon = iconMap[service.icon] || FaTools;
          return (
            <motion.div
              layout
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-inner">
                <Icon />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-green-600 mb-4 h-[50px] flex items-center justify-center">
                {service.title}
              </h3>

              {/* Price Section - Centered with small text below */}
              <div className="mb-6 flex flex-col items-center">
                <span className="text-black font-extrabold text-4xl">
                  {service.price}
                </span>
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider mt-1">
                  Onwards per visit
                </span>
              </div>

              {/* Description - Limited to 2 lines */}
              <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                {service.shortDesc}
              </p>

              {/* Button */}
              <button
                onClick={() => setSelectedService(service)}
                className="mt-auto w-full py-2.5 rounded-xl border border-gray-900 bg-gray-900 text-white text-sm font-semibold hover:bg-white hover:text-black transition-all"
              >
                View Details
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>

    {/* Show All Button */}
    <div className="mt-16 text-center">
      <button
        onClick={() => setShowAllServices(!showAllServices)}
        className="px-10 py-3.5 bg-white border-2 border-green-600 text-green-700 font-bold rounded-full hover:bg-green-600 hover:text-white transition-all shadow-md active:scale-95"
      >
        {showAllServices ? "Show Less" : "View All Services"}
      </button>
    </div>
  </div>
</section>

      {/* 5. PROCESS SECTION */}
      <section className="py-20 bg-gray-100 text-gray-900 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-green-500 text-lg">Hassle-free service in 4 simple steps.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-green-800/50 -z-0" />
            {[
              { title: "Book Service", desc: "Call or WhatsApp us." },
              { title: "Expert Diagnosis", desc: "Thorough analysis." },
              { title: "Quick Fix", desc: "Genuine parts usage." },
              { title: "Cool Comfort", desc: "Enjoy your space." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center group">
                <div className="w-24 h-24 mx-auto bg-green-800 rounded-full flex items-center justify-center text-3xl font-bold border-4 border-green-900 shadow-xl mb-6 group-hover:scale-110 transition-transform bg-green-800">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-green-600 font-medium text-sm px-4">{step.desc}</p>
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
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-yellow-400" />
        
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
            <div className="mt-1">
              <p className="text-green-600 font-bold text-xl">{selectedService.price}</p>
              {/* Added Price Disclaimer */}
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium leading-tight">
                *Prices shown are indicative; actual charges may vary based on inspection.
              </p>
            </div>
          </div>
          <button 
            onClick={() => setSelectedService(null)} 
            className="p-2 hover:bg-gray-100 rounded-full transition text-gray-400 hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3 mb-8">
          {selectedService.details?.map((detail, i) => (
            <div key={i} className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
              <span className="text-gray-600 text-sm">{detail}</span>
            </div>
          ))}
        </div>

        <a
          href={`https://wa.me/919021097544?text=Hi, I am interested in ${selectedService.title}`}
          className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition shadow-lg hover:shadow-green-600/30"
        >
          <FaWhatsapp className="text-xl" /> Book via WhatsApp
        </a>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
<footer className="relative z-20">
  <Footer />
</footer>
    </div>
  );
};

export default Services;