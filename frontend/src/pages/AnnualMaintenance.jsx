import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaWhatsapp, FaPhoneAlt, FaTools, FaShieldAlt, FaClock, FaLeaf, FaWrench, FaChartLine } from 'react-icons/fa';
import Footer from '../components/Footer';

const AnnualMaintenance = () => {
    const bgImage = "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769705615/Untitled_1920_x_1000_px_1_fmdnhx.png";

    const services = [
        {
            id: 1,
            title: "Comprehensive AMC",
            desc: "Complete peace of mind with all-inclusive maintenance.",
            icon: FaShieldAlt,
            features: [
                "4 Preventive Services/Year",
                "Unlimited Breakdown Calls",
                "Compressor & Parts Coverage",
                "Gas Charging Included"
            ]
        },
        {
            id: 2,
            title: "Non-Comprehensive AMC",
            desc: "Expert labor and service support for your systems.",
            icon: FaTools,
            features: [
                "3 Preventive Services/Year",
                "Breakdown Labor Free",
                "Spares at Discounted Rates",
                "Priority Support"
            ]
        },
        {
            id: 3,
            title: "System Health Audit",
            desc: "In-depth analysis to restore peak efficiency.",
            icon: FaChartLine,
            features: [
                "Energy Efficiency Report",
                "Airflow & Static Pressure Test",
                "Electrical Safety Check",
                "Cooling Performance Analysis"
            ]
        },
        {
            id: 4,
            title: "On-Demand Service",
            desc: "Quick fixes and repairs whenever you need them.",
            icon: FaWrench,
            features: [
                "Rapid Response Time",
                "Genuine Spare Parts",
                "Transparent Pricing",
                "30-Day Service Warranty"
            ]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans">

            {/* 1. HERO SECTION (90vh height) */}
            <div
                className="relative h-[90vh] w-full bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center p-6"
                style={{ backgroundImage: `url('${bgImage}')` }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"></div>

                {/* Hero Content */}
                <div className="relative z-10 w-full max-w-5xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-yellow-400 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4">
                            Windsmit Air Nagpur
                        </h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                            System Service & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-200">
                                Annual Maintenance
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-200 font-medium leading-relaxed mb-8">
                            Ensuring uninterupted comfort and maximum efficiency for your residential
                            and commercial HVAC systems.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="tel:+919021097544"
                                className="px-8 py-4 bg-yellow-500 text-slate-900 font-bold rounded-full hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.5)] transform hover:-translate-y-1 flex items-center gap-2"
                            >
                                <FaPhoneAlt /> Call Expert
                            </a>
                            <a
                                href="#plans"
                                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all flex items-center gap-2"
                            >
                                View Plans
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll Down</span>
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-white/50 rounded-full"></div>
                    </div>
                </motion.div>
            </div>

            {/* 2. CONTENT SECTION (White Background) */}
            <div id="plans" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Maintenance Packages</h2>
                        <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
                        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
                            Choose a plan that suits your needs. From preventive care to comprehensive coverage.
                        </p>
                    </div>

                    {/* Service Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-100 flex flex-col h-full group"
                            >
                                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-yellow-600 text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <service.icon />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">{service.desc}</p>

                                <ul className="space-y-3 mb-8 bg-white p-4 rounded-xl">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                                            <FaCheckCircle className="text-[#00b050] mt-0.5 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`https://wa.me/919021097544?text=Enquiry for ${service.title}`}
                                    className="w-full py-3 rounded-lg bg-slate-900 text-white text-sm font-bold hover:bg-yellow-500 hover:text-slate-900 transition-colors text-center block mt-auto shadow-md"
                                >
                                    Get Quote
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats Strip */}
                    <div className="mt-24 bg-slate-900 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-yellow-500/5"></div>
                        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { label: "Response Time", val: "< 4 Hours", Icon: FaClock },
                                { label: "Happy Clients", val: "500+", Icon: FaShieldAlt },
                                { label: "Technicians", val: "Certified", Icon: FaTools },
                                { label: "Savings", val: "Up to 30%", Icon: FaLeaf },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <stat.Icon className="text-yellow-500 text-3xl mb-3" />
                                    <h4 className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.val}</h4>
                                    <p className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AnnualMaintenance;
