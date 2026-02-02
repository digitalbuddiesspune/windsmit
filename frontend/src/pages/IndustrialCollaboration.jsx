import React from 'react';
import { motion } from 'framer-motion';
import { FaDraftingCompass, FaPencilRuler, FaHome, FaRegObjectGroup, FaCheckCircle, FaPhoneAlt, FaArrowRight, FaLightbulb } from 'react-icons/fa';
import Footer from '../components/Footer';
import heroImage from '../assets/architect_hero.png';

const IndustrialCollaboration = () => {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-yellow-100 selection:text-yellow-900">

            {/* 1. HERO SECTION */}
            <section className="relative h-[85vh] min-h-[650px] flex items-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={"https://res.cloudinary.com/dvkxgrcbv/image/upload/v1770052070/architect_hero_c4l6z1.jpg"}
                        alt="Collaboration with Architects & Designers"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/40 to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        

                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Where Design Meets <br />
                            <span className="text-[#fff212]">
                                Invisible Comfort
                            </span>
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl font-light">
                            We collaborate with <strong>Interior Designers</strong> and <strong>Architects</strong> to integrate seamless, aesthetic HVAC solutions that honor your creative vision without compromising on performance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href="#partner-with-us" className="flex items-center justify-center gap-3 px-8 py-4  bg-gradient-to-r from-green-400 to-emerald-300 text-black font-bold rounded-full hover:bg-yellow-400 transition-all shadow-lg hover:shadow-yellow-500/30">
                                Collaborate With Us <FaArrowRight />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. FOR DESIGNERS & ARCHITECTS */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Aesthetics First, Cooling Second</h2>
                        <p className="text-lg text-slate-600">
                            You design beautiful spaces. We ensure they stay comfortable without ugly vents ruining the view.
                            Our engineering team works backwards from your design to find the perfect climate solution.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaPencilRuler,
                                title: "Design-Led Engineering",
                                desc: "We respect your ceiling plans. Our team provides precise CAD layouts to fit ducts into tight bulkheads and architectural features."
                            },
                            {
                                icon: FaRegObjectGroup,
                                title: "Invisible Grilles",
                                desc: "Specialized in linear slot diffusers, uneven flow patterns, and concealed units that blend perfectly with modern interiors."
                            },
                            {
                                icon: FaLightbulb,
                                title: "Smart Integration",
                                desc: "We integrate HVAC controls with Home Automation systems (BMS/IoT) for a clutter-free, single-interface user experience."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-300 text-black rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#fff212] group-hover:text-black transition-colors">
                                    <item.icon />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed gray-700">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. FEATURING PROJECTS */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                {/* Decorative background visual */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500/5 skew-x-12 transform origin-top" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row gap-16 items-center">

                        <div className="w-full md:w-1/2">
                            <h4 className="text-green-600 font-bold tracking-widest uppercase mb-4">Our Promise</h4>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">Why Architects Trust Us</h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Early-Stage Consultation", desc: "We join your design meetings early to prevent bulkhead clashes and structural conflicts." },
                                    { title: "Custom Fabrication", desc: "We fabricate custom duct shapes and plenum boxes to fit unique ceiling geometries." },
                                    { title: "Low Noise Guarantee", desc: "Premium acoustic insulation ensuring your client hears the silence, not the machine." },
                                    { title: "Project Management", desc: "Dedicated site engineers who speak your language and coordinate with your civil team." }
                                ].map((model, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1">
                                            <FaCheckCircle className="text-[#fff212]  bg-green text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{model.title}</h4>
                                            <p className="text-gray-400">{model.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 relative">
                            {/* Using a grid of smaller interaction images/placeholders to suggest portfolio */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <img src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1770052038/photo-1600607686527-6fb886090705_uo38fe.avif" alt="Minimalist Interior" className="rounded-xl w-full h-64 object-cover opacity-80 hover:opacity-100 transition-opacity" />
                                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                                        <p className="text-3xl font-bold text-[#fff212]">50+</p>
                                        <p className="text-sm text-gray-300">Design Firms Partnered</p>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="bg-[#fff212] p-6 rounded-xl text-black">
                                        <FaDraftingCompass className="text-4xl mb-2" />
                                        <p className="font-bold">Precision Planning</p>
                                    </div>
                                    <img src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1770052030/photo-1600210492486-724fe5c67fb0_pgkxne.avif" alt="Luxury Living Room" className="rounded-xl w-full h-64 object-cover opacity-80 hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. CONTACT / CTA */}
            <section id="partner-with-us" className="py-24 bg-gray-100 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">Let's Create Something Beautiful</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Working on a new residence or commercial space?
                        Send us your layout, and we'll design the perfect climate system for it.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="tel:+919021097544" className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-600 text-white font-bold rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
                            <FaPhoneAlt /> Call Design Desk
                        </a>
                        <a href="/contact" className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-white transition-all">
                            Submit Floor Plan
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default IndustrialCollaboration;
