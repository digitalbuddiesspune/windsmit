import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Services() {
  const acImages = [
    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769254980/ac2_rva7uq.png", title: "High Wall Split AC", desc: "Sleek cooling for modern homes." },
    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769254967/cassete_yghq3c.png", title: "Cassette AC", desc: "Uniform 360° airflow." },
    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769254954/ductable_jflnqe.png", title: "Ductable AC", desc: "Centralized solutions for large spaces." },
    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769254943/tower_eze5gy.png", title: "Tower AC", desc: "High-capacity floor standing units." },
    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769254934/windowac_o7mwhi.png", title: "Window AC", desc: "Economical cooling for compact spaces." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      
      {/* Full Width Black Section */}
      <section className="bg-black py-20 w-full overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Section Heading - Font weight decreased */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-medium text-white mt-10 mb-4">
              Air <span className="text-yellow-500">Conditioning</span>
            </h2>
            {/* Yellow/Green underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-green-500 mx-auto mb-8"></div>
          </div>

          <div className="relative py-4 max-w-5xl mx-auto">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              loopedSlides={3}
              slidesPerView={'auto'}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 2,
                slideShadows: false,
              }}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              pagination={{ clickable: true, el: '.custom-pagination' }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="w-full !overflow-visible"
            >
              {acImages.map((item, index) => (
                <SwiperSlide key={index} className="max-w-[280px] sm:max-w-[350px] py-10 px-4">
                  <div className="relative bg-[#111] border border-gray-800 rounded-3xl p-8 shadow-2xl transition-all duration-500 group overflow-hidden">
                    
                    {/* The Image Container */}
                    <div className="h-44 flex items-center justify-center mb-6 z-10 relative">
                      <img 
                        src={item.url} 
                        alt={item.title}
                        className="max-h-full object-contain"
                      />
                    </div>
                    
                    <div className="text-center border-t border-gray-800 pt-6 z-10 relative">
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-xs uppercase tracking-widest">{item.desc}</p>
                    </div>

                    {/* Transparent Black Overlay for side slides (controlled via CSS) */}
                    <div className="side-overlay absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-500 pointer-events-none z-20"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Accordion-Style Bottom Navigation - Moved up */}
            <div className="flex items-center justify-center mt-6 space-x-8">
               <button className="custom-prev flex items-center group cursor-pointer">
                  <span className="text-white/30 group-hover:text-yellow-500 transition-colors text-2xl font-light mr-3">01</span>
                  <div className="w-12 h-[1px] bg-white/20 group-hover:bg-yellow-500 transition-all"></div>
                  <span className="ml-3 text-[10px] text-white/50 uppercase tracking-widest group-hover:text-white">Prev</span>
               </button>

               <div className="custom-pagination !static !w-auto"></div>

               <button className="custom-next flex items-center group cursor-pointer">
                  <span className="mr-3 text-[10px] text-white/50 uppercase tracking-widest group-hover:text-white">Next</span>
                  <div className="w-12 h-[1px] bg-white/20 group-hover:bg-yellow-500 transition-all"></div>
                  <span className="text-white/30 group-hover:text-yellow-500 transition-colors text-2xl font-light ml-3">02</span>
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* White Background Section with Paragraph */}
      <section className="bg-white py-16 w-full">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-green-700 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            We provide a wide range of advanced room air conditioning solutions including High Wall (Split), Cassette, Window, Tower, and Ductable Air Conditioners, tailored to meet diverse residential and commercial needs.

            Our expert team carefully evaluates key factors such as room size, ceiling height, section space, north–south orientation, solar heat gain, insulation levels, and usage patterns to ensure the most energy-efficient and comfortable cooling solution.
          </p>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        /* Slide Visibility Logic */
        .swiper-slide {
          opacity: 0;
          transition: all 0.6s ease;
          pointer-events: none;
        }

        .swiper-slide-active {
          opacity: 1 !important;
          z-index: 10;
          pointer-events: auto;
          transform: scale(1.1);
        }

        /* Show neighbors clearly (no blur) with a black tint */
        .swiper-slide-prev,
        .swiper-slide-next {
          opacity: 1 !important;
          pointer-events: auto;
          transform: scale(0.9);
        }

        /* Applying the transparent black overlay to non-active slides */
        .swiper-slide-prev .side-overlay,
        .swiper-slide-next .side-overlay {
          opacity: 1;
        }

        /* Custom Pagination Styling */
        .custom-pagination .swiper-pagination-bullet {
          width: 6px; height: 6px; background: #fff; opacity: 0.2; margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1; background: #eab308 !important; transform: scale(1.4);
        }
      `}} />
    </div>
  );
}

export default Services;