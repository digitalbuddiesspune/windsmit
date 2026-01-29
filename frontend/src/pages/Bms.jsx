import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { FaBuilding, FaIndustry, FaHospital, FaHotel, FaArrowRight, FaCheckCircle, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const Bms = () => {
    const [selectedService, setSelectedService] = useState(null);

    const heroImages = [
        "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769681867/ChatGPT_Image_Jan_29_2026_03_44_41_PM_vudkx6.png",
        "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769681843/ChatGPT_Image_Jan_29__2026__03_40_03_PM-removebg-preview_hulp9v.png",
"https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769681890/smartthermostats-2048px-2898-3x2-1-removebg-preview_qtcfd7.png"    ];

    const bmsData = {
        "title": "BMS",
        "items": [
            {
                "id": 1,
                "name": "Supervisory Controllers",
                "image": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769681921/IMG_8261_c6o6hx.jpg",
                "description": "Supervisory controllers form the top layer of the Building Management System, enabling centralized monitoring and control of HVAC and allied systems.",
                "points": [
                    "Provide centralized control and visualization of building automation systems.",
                    "Collect and analyze data from multiple DDC controllers and field devices.",
                    "Support scheduling, alarms, trends, and energy optimization strategies.",
                    "Windsmit Air deploys supervisory controllers to ensure efficient, reliable, and intelligent building operations."
                ]
            },
            {
                "id": 2,
                "name": "DDC Controllers",
                "image": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769681933/IMG_8262_hvjazo.jpg",
                "description": "Direct Digital Controllers (DDC) execute real-time control of HVAC equipment using programmed logic and sensor feedback.",
                "points": [
                    "Control AHUs, chillers, fans, dampers, and valves with high precision.",
                    "Process sensor inputs and issue commands to actuators automatically.",
                    "Enable energy-efficient operation through optimized control sequences.",
                    "Windsmit Air integrates DDC controllers for dependable HVAC automation and system performance."
                ]
            },
            {
                "id": 3,
                "name": "Sensors",
                "image": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769681951/IMG_8265_znswu5.jpg",
                "description": "Sensors provide real-time environmental data essential for accurate HVAC control and indoor comfort management.",
                "points": [
                    "Measure temperature, humidity, pressure, and air quality parameters.",
                    "Ensure accurate feedback for DDC and supervisory control decisions.",
                    "Improve indoor air quality and occupant comfort levels.",
                    "Windsmit Air installs reliable sensing solutions for precise and responsive HVAC control."
                ]
            },
            {
                "id": 4,
                "name": "Thermostats",
                "image": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769681965/IMG_8266_v4qhb2.jpg",
                "description": "Thermostats act as local user interfaces for temperature control within HVAC-controlled spaces.",
                "points": [
                    "Allow occupants to set and adjust desired temperature levels.",
                    "Communicate temperature data to HVAC control systems.",
                    "Support energy efficiency through accurate setpoint control.",
                    "Windsmit Air provides thermostats compatible with integrated BMS solutions."
                ]
            },
            {
                "id": 5,
                "name": "Valves",
                "image": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769681985/IMG_8267_tgcbf9.jpg",
                "description": "HVAC valves regulate chilled and hot water flow to maintain precise thermal control in buildings.",
                "points": [
                    "Control water flow to coils in AHUs, FCUs, and terminal units.",
                    "Work with actuators for automated modulation and balancing.",
                    "Improve energy efficiency and system response time.",
                    "Windsmit Air supplies and integrates valves designed for long-term HVAC reliability."
                ]
            },
            {
                "id": 6,
                "name": "Panels",
                "image": "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769681998/IMG_8268_t85a4v.jpg",
                "description": "Control panels house and organize BMS and HVAC control components for safe and reliable system operation.",
                "points": [
                    "Contain controllers, power supplies, relays, and communication modules.",
                    "Ensure safe wiring, protection, and structured system layout.",
                    "Enable easy maintenance and system expansion.",
                    "Windsmit Air designs and installs customized panels tailored to project-specific HVAC requirements."
                ]
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-yellow-100 selection:text-yellow-900">

            {/* 1. HERO SECTION (Split Layout) */}
            <section className="bg-black pt-28 pb-16 md:py-0 overflow-hidden min-h-[90vh] flex items-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black z-0" />

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
                                    background: 'radial-gradient(circle, rgba(234, 179, 8, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
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
                                className="w-full max-w-sm md:max-w-md h-[300px] flex items-center justify-center"
                            >
                                {heroImages.map((img, i) => (
                                    <SwiperSlide
                                        key={i}
                                        className="!flex items-center justify-center bg-transparent"
                                    >
                                        <img
                                            src={img}
                                            alt={`Hero Slide ${i}`}
                                            className="max-h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(234,179,8,0.3)]"
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
                                Smart Building <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
                                    Management Systems
                                </span>
                            </h1>
                            

                            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                                <a href="tel:+919021097544" className="flex items-center justify-center gap-3 px-8 py-4 bg-yellow-600 text-white font-bold rounded-sm hover:bg-yellow-700 transition-all shadow-lg hover:shadow-yellow-500/30">
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
                            <h4 className="text-yellow-600 font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                                <span className="w-8 h-0.5 bg-yellow-600"></span> Windsmit Air Automation
                            </h4>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                Intelligent <span className="text-yellow-600">Control</span> For <br /> Modern Infrastructure
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    We provide comprehensive Building Management Systems (BMS) that empower you to monitor, control, and optimize your entire facility's performance. From HVAC to lighting and security, our solutions ensure seamless integration.
                                </p>
                                <p>
                                    Our expert engineers design custom automation strategies that reduce energy consumption and enhance operational efficiency.
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
                                    src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769684143/Untitled_1080_x_1080_px_1080_x_1080_px_2_u1lw1a.png"
                                    alt="Windsmit BMS Architecture"
                                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. INDUSTRIES WE SERVE */}
            <section className="py-20 bg-yellow-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
                        <p className="text-slate-500">Tailored automation solutions for every sector.</p>
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
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-yellow-100 flex flex-col items-center text-center transition-all"
                            >
                                <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600 text-2xl mb-4">
                                    <item.icon />
                                </div>
                                <h3 className="font-bold text-slate-800">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. DETAILED SERVICES LIST (BMS Items) */}
            <section id="projects" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h4 className="text-yellow-600 font-bold mb-2">我们的 EXPERTISE</h4>
                            <h2 className="text-4xl font-bold text-slate-900 leading-tight">Automation Components</h2>
                        </div>
                        <p className="text-slate-500 max-w-md text-right hidden md:block">
                            State-of-the-art controllers, sensors, and actuators for precise building management.
                        </p>
                    </div>

                    <div className="grid gap-12">
                        {bmsData.items.map((service, index) => (
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
                                    <div className="absolute inset-0 bg-yellow-900/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>

                                {/* Content */}
                                <div className="w-full md:w-1/2 space-y-6">
                                    <h3 className="text-3xl font-bold text-slate-900">{service.name}</h3>
                                    <div className="text-lg text-slate-600 leading-relaxed theme-text space-y-4">
                                        <p className="font-medium">{service.description}</p>

                                        <div className="space-y-2">
                                            {service.points.map((point, idx) => (
                                                <p key={idx} className="flex items-start gap-2 pl-2 text-base">
                                                    <span className="text-yellow-500 mt-1.5">•</span>
                                                    <span>{point}</span>
                                                </p>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setSelectedService(service)}
                                        className="mt-4 px-8 py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-sm hover:bg-slate-900 hover:text-white transition-all uppercase tracking-wider text-sm"
                                    >
                                        View Specs
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
                            { step: "01", title: "Assessment", desc: "Analyzing facility requirements." },
                            { step: "02", title: "System Design", desc: "Creating BMS architecture." },
                            { step: "03", title: "Integration", desc: "Installing sensors & controllers." },
                            { step: "04", title: "Monitoring", desc: "Testing & Handover." }
                        ].map((item, i) => (
                            <div key={i} className="relative p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors group">
                                <div className="text-5xl font-bold text-white/5 mb-4 group-hover:text-yellow-500/20 transition-colors">{item.step}</div>
                                <h3 className="text-xl font-bold mb-3 text-yellow-400">{item.title}</h3>
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
                                    {selectedService.points.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded transition-colors">
                                            <FaCheckCircle className="text-yellow-600 shrink-0 mt-1" />
                                            <span className="text-slate-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-4 flex-col sm:flex-row">
                                    <a href="tel:+919021097544" className="flex-1 bg-yellow-600 text-white py-4 rounded-lg font-bold text-center hover:bg-yellow-700 transition flex justify-center items-center gap-2">
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

export default Bms;
