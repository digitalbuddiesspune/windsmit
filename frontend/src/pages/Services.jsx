import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { FaBroom, FaWind, FaTools, FaHammer, FaCheckCircle, FaWhatsapp, FaPhoneAlt, FaSnowflake } from 'react-icons/fa';
import servicesData from '../components/Servicess.json';
import 'swiper/css';
import 'swiper/css/effect-fade';

// Icon Mapping
const iconMap = {
  FaBroom: FaBroom,
  FaWind: FaWind,
  FaTools: FaTools,
  FaHammer: FaHammer,
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showAllServices, setShowAllServices] = useState(false);

  // Images for the Hero Swiper
  const heroSwiperImages = [
    "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769512953/Untitled_1080_x_1080_px_2_p2grtr.svg",
    "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769512077/ductable55-removebg-preview_w3kwse.png",
    "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769512293/Toweac2-removebg-preview__1_-removebg-preview_sao5e1.png",
    "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769508123/window-ac-500x500-removebg-preview_musv8k.png",
    "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769513344/cassette-ac-dealer-removebg-preview22_ecx7yj.png"
  ];

  // Data for "Room Air Conditioning" Section
  const acProducts = [
    {
      url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769512747/Untitled_1080_x_1080_px_1_msyvy1.svg",
      title: "High Wall Split AC",
      desc: "Sleek cooling for modern homes.",
      content: "High Wall Split ACs are the most popular choice for residential spaces. They offer whisper-quiet operation and advanced air purification filters. Designed to blend seamlessly with your interior decor, these units provide precise temperature control. They are highly energy-efficient, helping reduce electricity bills significantly."
    },
    {
      url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769515524/Gemini_Generated_Image_e3nicqe3nicqe3ni-removebg-preview_1_agc0pc.png",
      title: "Cassette AC",
      desc: "Uniform 360° airflow.",
      content: "Cassette ACs are ideal for commercial spaces with false ceilings. They provide 360-degree uniform airflow, ensuring no hot spots in the room. The unit is discreetly tucked away, with only the decorative panel visible."
    },
    {
      url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769515422/Gemini_Generated_Image_28yeej28yeej28ye-removebg-preview_1_iirkfz.png",
      title: "Ductable AC",
      desc: "Centralized solutions for large spaces.",
      content: "Ductable ACs provide a centralized cooling solution for entire floors or large zones. They offer a clean aesthetic as only the supply and return grilles are visible. Highly recommended for premium residences and banquet halls."
    },
    {
      url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769519496/Gemini_Generated_Image_k1c2bwk1c2bwk1c2-removebg-preview_ucj0tq.png",
      title: "Window AC",
      desc: "Economical cooling for compact spaces.",
      content: "Window ACs remain a classic, reliable, and cost-effective cooling option. These all-in-one units are easy to install in a standard window or wall opening. They are incredibly durable and require minimal maintenance."
    },
    {
      url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769515403/Gemini_Generated_Image_qrdcjeqrdcjeqrdc-removebg-preview_1_p6wuig.png",
      title: "Tower AC",
      desc: "High-capacity floor standing units.",
      content: "Tower ACs are high-capacity, floor-standing units designed for rapid cooling. They are the go-to solution for areas where wall or ceiling mounting is not feasible. Ideal for gyms and conference rooms."
    }
  ];

  const visibleServices = showAllServices ? servicesData.residentialServices : servicesData.residentialServices.slice(0, 4);

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-green-100 selection:text-green-900">

      {/* 1. HERO SECTION */}
      <section className="bg-black pt-28 pb-16 md:py-0 overflow-hidden min-h-[90vh] flex items-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black z-0" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex items-center h-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 w-full items-center">

            {/* LEFT COLUMN: SWIPER */}
            {/* LEFT COLUMN: SWIPER */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="relative order-2 md:order-1 flex flex-col items-center justify-center min-h-[450px] md:h-full w-full"
>
  {/* Glow effect - Smoother blend */}
  <div 
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none"
    style={{
      background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
      filter: 'blur(40px)',
    }}
  />

  <Swiper
    modules={[Autoplay, EffectFade]}
    effect="fade"
    fadeEffect={{ crossFade: true }}
    slidesPerView={1}         // ONLY show 1 image at a time
    centeredSlides={true}     // Force it to the center
    loop={true}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    /* Ensure the swiper itself is a flex container and occupies the full area */
    className="w-full max-w-sm md:max-w-md h-[400px] flex items-center justify-center"
  >
    {heroSwiperImages.map((img, i) => (
      <SwiperSlide 
        key={i} 
        /* DEAD CENTER logic: !flex items-center justify-center */
        className="!flex items-center justify-center bg-transparent"
      >
        <img
          src={img}
          alt={`Hero Slide ${i}`}
          /* max-h-full keeps it within the vertical bounds */
          className="max-h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(34,197,94,0.3)]"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</motion.div>
            {/* RIGHT COLUMN: TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-center md:text-left order-1 md:order-2 flex flex-col justify-center h-full"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Mastering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                  Cool Comfort
                </span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
                Expert AC installation and maintenance services in Nagpur. ensuring your home stays perfectly cool.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                <a href="tel:+919021097544" className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-green-400 hover:text-white transition-all shadow-xl hover:shadow-green-500/20 group">
                  <FaPhoneAlt className="group-hover:rotate-12 transition-transform" /> Call Now
                </a>
                <a href="https://wa.me/919021097544" className="flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-md">
                  <FaWhatsapp /> WhatsApp Us
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT / TRUST SECTION */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769592342/Untitled_1080_x_1080_px_blzpqc.png" alt="Windsmit Quality" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
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

      {/* 3. NEW SECTION: ROOM AIR CONDITIONING (Horizontal Cards) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Room <span className="text-green-600">Air Conditioning</span>
            </h2>
            <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full" />
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
              Discover the perfect cooling solution tailored for your space.
            </p>
          </div>

          <div className="space-y-12">
            {acProducts.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="group flex flex-col md:flex-row items-stretch bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Side */}
                <div className="w-full md:w-5/12 bg-white flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={product.url}
                    alt={product.title}
                    className="relative z-10 w-full h-[250px] md:h-[300px] object-contain transform group-hover:scale-110 transition-transform duration-700 drop-shadow-lg"
                  />
                </div>

                {/* Content Side */}
                <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full">
                      Premium Cooling
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {product.title}
                  </h3>
                  <div className="text-gray-500 font-medium italic mb-6 flex items-center gap-2">
                    <FaSnowflake className="text-green-400" /> {product.desc}
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                    {product.content}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => window.location.href = `https://wa.me/919021097544?text=Interested in ${product.title}`}
                      className="px-8 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg hover:shadow-green-600/30 text-center"
                    >
                      Check Pricing
                    </button>
                    <button
                      onClick={() => setSelectedService({ title: product.title, price: "On Request", details: [product.desc, product.content, "Professional Installation", "1 Year Warranty"] })}
                      className="px-8 py-3 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-green-600 hover:text-green-600 transition-colors text-center"
                    >
                      Specifications
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESIDENTIAL SERVICES GRID */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Residential Services</h2>
            <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full" />
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg text-gray-500 font-medium">
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
                    <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-inner">
                      <Icon />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">{service.title}</h3>
                    <p className="text-green-600 font-bold text-lg mb-3">{service.price}</p>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="mt-auto w-full py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all"
                    >
                      View Details
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="px-10 py-3.5 bg-white border-2 border-green-600 text-green-700 font-bold rounded-full hover:bg-green-600 hover:text-white transition-all shadow-md active:scale-95"
            >
              {showAllServices ? "Show Less" : "View All 13 Services"}
            </button>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section className="py-20 bg-green-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-green-200/80 text-lg">Hassle-free service in 4 simple steps.</p>
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
                <p className="text-green-200 text-sm px-4">{step.desc}</p>
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
                  <p className="text-green-600 font-semibold">{selectedService.price}</p>
                </div>
                <button onClick={() => setSelectedService(null)} className="p-2 hover:bg-gray-100 rounded-full transition text-gray-400 hover:text-gray-900">✕</button>
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

    </div>
  );
};

export default Services;