import React from 'react';
import { motion } from 'framer-motion';
import { FaDraftingCompass, FaPencilRuler, FaHome, FaRegObjectGroup, FaCheckCircle, FaPhoneAlt, FaArrowRight, FaLightbulb } from 'react-icons/fa';
import Footer from '../components/Footer';
import heroImage from '../assets/architect_hero.png';

const IndustrialCollaboration = () => {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-yellow-100 selection:text-yellow-900">

            {/* 1. HERO SECTION */}
<section className="relative flex items-center overflow-hidden
                    h-[85vh] min-h-[800px] 
                    md:h-[85vh] md:min-h-[600px] 
                    sm:h-auto sm:min-h-[500px] sm:pt-24">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={"https://res.cloudinary.com/dvkxgrcbv/image/upload/v1770105208/wmremove-transformed_kq0s5e.jpg"}
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
                        

                       
<h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight sm:text-3xl">

                            HVAC That Respects  <br />

                            <span className="text-[#fff212]">

                                Design & architecture

                            </span>

                        </h1>

                        <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl font-light">

At Windsmit Air, we collaborate early-so HVAC becomes part of the architecture, not an afterthought. We work alongside architects and interior designers to deliver systems that are technically precise, visually discreet, and energy-conscious, ensuring your design intent remains uncompromised.                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">

                            <a href="#partner-with-us" className="flex items-center justify-center gap-3 px-8 py-4  bg-gradient-to-r from-green-400 to-emerald-300 text-white font-bold rounded-full hover:bg-yellow-400 transition-all shadow-lg hover:shadow-yellow-500/30">

                                Collaborate With Us <FaArrowRight />

                            </a>

                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. FOR DESIGNERS & ARCHITECTS */}
            <section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center mb-16 max-w-3xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">

        How We Support Your Design Process

      </h2>

      <p className="text-lg text-slate-600">

        Practical HVAC planning that blends perfectly with your architecture,

        interiors, and project workflow.

      </p>

    </div>

    {/* Cards */}

    <div className="grid md:grid-cols-4 gap-8">

      {[

        {

          icon: FaDraftingCompass,

          title: "Early-Stage Coordination",

          desc: "HVAC coordination during concept and layout planning to avoid clashes later."

        },

        {

          icon: FaRegObjectGroup,

          title: "Concealed Solutions",

          desc: "Clean, hidden systems aligned with interior aesthetics and modern design."

        },

        {

          icon: FaPencilRuler,

          title: "Technical Drawings Support",

          desc: "Detailed drawings, layouts, and complete coordination for smooth execution."

        },

        {

          icon: FaLightbulb,

          title: "Energy-Efficiency Consulting",

          desc: "Solutions tailored to climate and usage for optimal comfort and lower energy costs."

        }

      ].map((item, index) => (

        <motion.div

          key={index}

          whileHover={{ y: -10 }}

          className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"

        >

          <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-300 text-black rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#fff212] group-hover:text-black transition-colors">

            <item.icon />

          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-4">

            {item.title}

          </h3>

          <p className="text-slate-600 leading-relaxed">

            {item.desc}

          </p>

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
                            <h4 className="text-[#fff212] font-bold tracking-widest uppercase mb-4">Our Promise</h4>
 <h2 className="text-3xl md:text-5xl font-bold mb-8">Why Architects Choose Windsmit Air</h2>                            <div className="space-y-6">
                                 {[

  {

    title: "Design-First Approach",

    desc: "HVAC planned around space, not forced into it."

  },

  {

    title: "Technical Clarity",

    desc: "Precise calculations, clear drawings, and zero guesswork for smooth execution."

  },

  {

    title: "Aesthetic Sensitivity",

    desc: "Minimal visual footprint with clean ceilings and concealed solutions."

  },

  {

    title: "Seamless Coordination",

    desc: "Smooth integration with lighting, electrical, interiors, and all contractors working as one team."

  }

].map((model, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1">
                                            <FaCheckCircle className="text-[#fff212] text-xl" />
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

    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">

      Let’s Create something Beautiful

    </h2>

    <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">

      We believe collaboration extends beyond projects.  

      Professional HVAC workshops for architects & designers, awareness sessions on comfort,

      efficiency and sustainability, and technical discussions that bridge design vision with engineering reality.  

      Partner with us early to create spaces that look beautiful and perform flawlessly.

    </p>

    <a

      href="/contact"

      className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-green-600 to-green-600 text-white font-bold rounded-full hover:scale-105 transition-all shadow-xl"

    >

      Collaborate With Us

    </a>

  </div>

</section>

            <Footer />
        </div>
    );
};

export default IndustrialCollaboration;
