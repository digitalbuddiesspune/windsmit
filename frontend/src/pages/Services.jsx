import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';

import repairServices from '../components/Servicess.json';

import { useState } from 'react';

// Swiper Styles

import 'swiper/css';

import 'swiper/css/effect-coverflow';

import 'swiper/css/pagination';

import 'swiper/css/navigation';

function Services() {

  const [activeService, setActiveService] = useState(null);

  const [visibleCount, setVisibleCount] = useState(4);

  const allServices = repairServices.repairServices;

  const acImages = [

    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769512953/Untitled_1080_x_1080_px_2_p2grtr.svg", title: "High Wall Split AC", desc: "Sleek cooling for modern homes.", content: "High Wall Split ACs are the most popular choice for residential spaces..." },

    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769513344/cassette-ac-dealer-removebg-preview22_ecx7yj.png", title: "Cassette AC", desc: "Uniform 360° airflow.", content: "Cassette ACs are ideal for commercial spaces..." },

    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769512077/ductable55-removebg-preview_w3kwse.png", title: "Ductable AC", desc: "Centralized solutions for large spaces.", content: "Ductable ACs provide a centralized cooling solution..." },

    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769512293/Toweac2-removebg-preview__1_-removebg-preview_sao5e1.png", title: "Tower AC", desc: "High-capacity floor standing units.", content: "Tower ACs are high-capacity, floor-standing units..." },

    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769508123/window-ac-500x500-removebg-preview_musv8k.png", title: "Window AC", desc: "Economical cooling for compact spaces.", content: "Window ACs remain a classic, reliable, and cost-effective cooling option..." }

  ];

  const acMainImages = [

    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769512747/Untitled_1080_x_1080_px_1_msyvy1.svg", title: "High Wall Split AC", desc: "Sleek cooling for modern homes.", content: "High Wall Split ACs are the most popular choice for residential spaces..." },

    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769515524/Gemini_Generated_Image_e3nicqe3nicqe3ni-removebg-preview_1_agc0pc.png", title: "Cassette AC", desc: "Uniform 360° airflow.", content: "Cassette ACs are ideal for commercial spaces..." },

    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769515422/Gemini_Generated_Image_28yeej28yeej28ye-removebg-preview_1_iirkfz.png", title: "Ductable AC", desc: "Centralized solutions for large spaces.", content: "Ductable ACs provide a centralized cooling solution..." },

    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769519496/Gemini_Generated_Image_k1c2bwk1c2bwk1c2-removebg-preview_ucj0tq.png", title: "Window Ac", desc: "Economical cooling for compact spaces.", content: "Window ACs remain a classic..." },

    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769515403/Gemini_Generated_Image_qrdcjeqrdcjeqrdc-removebg-preview_1_p6wuig.png", title: "Tower AC", desc: "High-capacity floor standing units.", content: "Tower ACs are high-capacity units..." },

  ];

  return (

    <div className="bg-white min-h-screen">

      {/* 1. UPDATED BLACK SECTION: Reduced top padding and margins */}

      <section className="bg-black/90 pt-24 pb-10 md:pt-28 md:pb-16 md:min-h-screen flex flex-col items-center w-full overflow-hidden relative">


      
        <div className="max-w-4xl mx-auto px-6 w-full">
          
          <div className="text-center mb-4 mt-10" >
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Air Conditioning
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-green-500 mx-auto"></div>
          </div>

          <div className="relative max-w-4xl mx-auto mt-5">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
              pagination={{ clickable: true, el: '.custom-pagination' }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="w-full !overflow-visible"
            >
              {acImages.map((item, index) => (
<SwiperSlide className="max-w-[240px] sm:max-w-[300px] py-8">
                  <div className="relative bg-[#111] border border-gray-800 rounded-2xl p-6 shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Responsive image height */}
                    <div className="h-40 md:h-52 flex items-center justify-center mb-4 z-10 relative">
                      <img src={item.url} alt={item.title} className="max-h-full object-contain" />
                    </div>
                    <div className="text-center border-t border-gray-800 pt-4 z-10 relative">
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-[10px] uppercase tracking-widest">{item.desc}</p>
                    </div>
                    <div className="side-overlay absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-500 pointer-events-none z-20"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation controls */}
<div className="flex items-center justify-center space-x-6 mt-3 md:mt-6 relative z-30">
               <button className="custom-prev flex items-center group cursor-pointer">
                  <span className="text-white/30 group-hover:text-yellow-500 transition-colors text-sm uppercase tracking-tighter">Prev</span>
               </button>
               <div className="custom-pagination !static !w-auto"></div>
               <button className="custom-next flex items-center group cursor-pointer">
                  <span className="text-white/30 group-hover:text-yellow-500 transition-colors text-sm uppercase tracking-tighter">Next</span>
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GREEN PARAGRAPH */}

      {/* 2. GREEN TEXT LEFT + IMAGE RIGHT */}

      <section className="bg-white py-16 md:py-24 w-full">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* LEFT – GREEN TEXT */}

            <div className="relative bg-green-50/60 border-l-4 border-green-600 rounded-xl p-6 md:p-8 shadow-sm">

              <p className="text-green-800 text-lg md:text-xl leading-relaxed font-semibold">

                Windsmit Air is a trusted air conditioning solutions provider in

                <span className="text-green-700 font-bold"> Nagpur</span>, offering a wide

                range of High Wall Split, Cassette, Window, Tower and Ductable air

                conditioners.

              </p>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">

                We design and deliver customized cooling solutions based on site-specific

                parameters such as room size, ceiling height, north orientation, solar heat

                gain, and usage patterns. Our focus is on energy efficiency, long-term

                performance, and reliable comfort.

              </p>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">

                From residential homes to commercial offices and industrial spaces, our

                experienced team in Nagpur ensures precise installation, seamless service,

                and dependable after-sales support.

              </p>

              {/* Accent line */}

              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-yellow-500 mt-6"></div>

            </div>

            {/* RIGHT – IMAGE */}

            <div className="flex justify-center md:justify-end">

              <img

                src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769592342/Untitled_1080_x_1080_px_blzpqc.png"

                alt="Air Conditioning Types"

                className="w-full max-w-md object-contain"

              />

            </div>

          </div>

        </div>

      </section>

      

<section className="bg-gray-50 py-20">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-16">

      Room <span className="text-yellow-500">Air Conditioning</span>

    </h2>

    <div className="space-y-20">

      {acMainImages.map((item, index) => (

        <div

          key={index}

          className={`

            group

            bg-white

            rounded-3xl

            border-2 border-yellow-400/40

            hover:border-yellow-500

            shadow-xl

            hover:shadow-2xl

            transition-all duration-500

            overflow-hidden

            flex flex-col md:flex-row

            ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}

          `}

        >

          {/* IMAGE SIDE – SAME SIZE FOR ALL */}

          <div className="w-full md:w-1/2 flex justify-center items-center p-8">

            <div className="w-full h-[280px] md:h-[340px] flex items-center justify-center">

              <img

                src={item.url}

                alt={item.title}

                className="

                  max-h-full

                  max-w-full

                  object-contain

                  transform

                  group-hover:scale-110

                  transition-transform duration-500

                "

              />

            </div>

          </div>

          {/* CONTENT – PERFECTLY CENTERED VERTICALLY */}

          <div className="w-full md:w-1/2 flex items-center p-10 md:p-14">

            <div className="text-center md:text-left">

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 relative inline-block">

                {item.title}

                <span className="absolute left-0 -bottom-2 w-16 h-1 bg-yellow-500"></span>

              </h3>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg mt-6">

                {item.content}

              </p>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* 3. ALTERNATING PRODUCT DETAILS */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER ROW */}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">

            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">

              AC <span className="text-green-600 font-medium">Repair & Maintenance</span>

            </h2>

            <div className="flex gap-3">

              <button className="px-6 py-2.5 rounded-full border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-900 hover:text-white transition">

                Enquiry Now

              </button>

              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="px-6 py-2.5 rounded-full border border-green-600 text-green-700 text-sm font-medium hover:bg-green-600 hover:text-white transition" >

                WhatsApp

              </a>

            </div>

          </div>

          {/* SERVICE LIST GRID */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {allServices.slice(0, visibleCount).map((item, i) => (

              <div key={i} className="bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition flex flex-col min-h-[400px]">

                {/* 1. TITLE - Left Aligned with Fixed Height for Alignment */}

                <div className="h-[35px] flex items-start">

                  <h3 className="text-lg font-semibold text-gray-900 text-left leading-tight">

                    {item.title}

                  </h3>

                </div>

                {/* 2. PRICE - Centered with Fixed Height for Alignment */}

                <div className="h-[90px] flex items-center justify-center my-2">

                  <p className="text-5xl font-bold text-gray-900">{item.price}</p>

                </div>

                {/* 3. FEATURES/DESCRIPTION - Starts at same point in every card */}

                <div className="flex-grow">

                  <div className="space-y-2 mb-4">

                    {item.details.slice(0, 4).map((point, idx) => (

                      <div key={idx} className="flex items-start gap-2">

                        <svg className="w-5 h-5 text-green-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" >

                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.414a1 1 0 011.414-1.414l3.222 3.222 6.657-6.657a1 1 0 011.414 0z" clipRule="evenodd" />

                        </svg>

                        <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">

                          {point}

                        </p>

                      </div>

                    ))}

                  </div>

                </div>

                {/* VIEW DETAILS BUTTON (Optional placement at bottom) */}

              </div>

            ))}

          </div>

          {/* VIEW ALL BUTTON */}

          {allServices.length > 4 && (

            <div className="mt-16 text-center">

              <button onClick={() => setVisibleCount(visibleCount === 4 ? allServices.length : 4)} className="px-10 py-3 rounded-full border border-green-600 text-green-700 font-medium hover:bg-green-600 hover:text-white transition" >

                {visibleCount === 4 ? "View All Services" : "Show Less"}

              </button>

            </div>

          )}

        </div>

      </section>

      {activeService && (

        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4" onClick={() => setActiveService(null)}>

          <div className="bg-white rounded-3xl max-w-3xl w-full p-8" onClick={(e) => e.stopPropagation()}>

            <h3 className="text-2xl font-bold text-gray-900">{activeService.title}</h3>

            <p className="text-green-600 font-semibold mt-1">{activeService.price}</p>

            <ul className="mt-6 space-y-2 text-gray-700">

              {activeService.details.map((d, i) => (

                <li key={i}>• {d}</li>

              ))}

            </ul>

            <div className="mt-6">

              <p className="font-semibold text-gray-900">AC Types Covered:</p>

              <div className="flex flex-wrap gap-2 mt-2">

                {activeService.types.map((t, i) => (

                  <span key={i} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">{t}</span>

                ))}

              </div>

            </div>

            <button onClick={() => setActiveService(null)} className="mt-8 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">

              Close

            </button>

          </div>

        </div>

      )}

    

     
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-slide { opacity: 0; transition: all 0.6s ease; }
        .swiper-slide-active { opacity: 1 !important; transform: scale(1.05); }
        .swiper-slide-prev, .swiper-slide-next { opacity: 0.8 !important; transform: scale(0.85); }
        .swiper-slide-prev .side-overlay, .swiper-slide-next .side-overlay { opacity: 1; }
        .custom-pagination .swiper-pagination-bullet { width: 6px; height: 6px; background: #fff; opacity: 0.2; margin: 0 4px !important; }
        .custom-pagination .swiper-pagination-bullet-active { opacity: 1; background: #eab308 !important; }
      `}} />
   

    </div>

  );

}

export default Services;