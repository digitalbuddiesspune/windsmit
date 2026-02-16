import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

// Line-art style icons for solution categories (match reference: icon + heading, no cards)
const SOLUTION_ICONS = [
  (props) => (/* Residential - house */ <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>),
  (props) => (/* Commercial - office */ <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>),
  (props) => (/* Educational - school */ <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>),
  (props) => (/* Hospital */ <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 0v4m0-4h4m-4 0H8" /></svg>),
  (props) => (/* Banquet - building/venue */ <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>),
  (props) => (/* Showroom - storefront */ <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>),
  (props) => (/* Restaurant - dining */ <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>),
  (props) => (/* Industrial - factory */ <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h4m-4 0V9m0 12v-4m0 0h4m-4 0H7m4 0h4m-4 0V9m0 12v-4m0 0h4m-4 0h-4" /></svg>)
]

function SolutionCategoryIcon({ index, className }) {
  const Icon = SOLUTION_ICONS[index % SOLUTION_ICONS.length]
  return Icon ? <Icon className={className} /> : null
}

// 8 circles: scenarios/spaces for air quality solutions (hospital, hotel, mall, classroom, office, airport, industrial, transport)
const HERO_IMAGES = [
  'https://res.cloudinary.com/dfsvuupuv/image/upload/v1771228709/__yfjxxc.jpg', // Residential Homes
  'https://res.cloudinary.com/dfsvuupuv/image/upload/v1770200974/Untitled_1600_x_900_px_2_pmntrc_gapa1a.svg', // Commercial offices
  'https://res.cloudinary.com/dfsvuupuv/image/upload/v1771237501/a7e09f9c-4b6c-4bb5-8090-6fbfa00eeeb4.png',  // Educational Institutions
  'https://res.cloudinary.com/dfsvuupuv/image/upload/v1770200713/471c95b173.jpg_qjexgv_zxplj3.jpg', // hospital
  'https://res.cloudinary.com/dfsvuupuv/image/upload/v1771238003/c0caa763-6375-48b5-ae9c-18ce4b91e27d.png', // Banquet Halls
  'https://res.cloudinary.com/dfsvuupuv/image/upload/v1771238343/Coventry-Mazda-5_mvjfjx.jpg', // Showrooms
  'https://res.cloudinary.com/dfsvuupuv/image/upload/v1770200938/Restaurants_and_cafe.jpg_f3d51m_enwosr.png', // Restaurants and Cafes
  'https://res.cloudinary.com/dfsvuupuv/image/upload/v1771240154/13e19676-0c4f-42c0-8cda-841d18b5896c.png'   // Industrial Warehouses
]

/**
 * Reusable solution page layout. Hero varies by heroVariant and heroBackgroundImage:
 * - 'all-solutions': full hero with "AIR QUALITY SOLUTION" + 8 circles (All Solutions page only)
 * - default: hero with page title + subtitle; optional heroBackgroundImage for custom background
 * @param {string} title - Main heading (e.g. "Residential Homes")
 * @param {string} subtitle - Short tagline under the title
 * @param {string} intro - Optional intro paragraph above sections
 * @param {Array<{ heading: string, content: string | React.ReactNode }>} sections - Content blocks
 * @param {'all-solutions'|undefined} heroVariant - 'all-solutions' for All Solutions page hero; omit for page-specific hero
 * @param {string} heroBackgroundImage - Optional image URL for hero background (solution pages only)
 * @param {Array<{ label: string, description: string, imageUrl: string, to: string }>} solutionCategories - Optional list for All Solutions page grid (image + label + short info per solution)
 */
function SolutionPage({ title, subtitle, intro, sections = [], heroVariant, heroBackgroundImage, solutionCategories = [] }) {
  const isAllSolutionsHero = heroVariant === 'all-solutions'
  const hasHeroImage = !isAllSolutionsHero && heroBackgroundImage && heroBackgroundImage.trim() !== ''

  const heroStyle = hasHeroImage
    ? {
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url(${heroBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : { backgroundColor: '#1f344a' }

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section - full screen, fixed so content scrolls over it */}
      <section
        className="fixed inset-0 h-screen w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 z-0"
        style={heroStyle}
        aria-label="Hero"
      >
        <div className={`max-w-7xl w-full flex flex-col ${isAllSolutionsHero ? 'lg:flex-row items-center justify-between' : 'items-center justify-center text-center'} gap-10 lg:gap-12`}>
          {/* Left / center: text with vertical accent */}
          <div className={`flex flex-1 max-w-xl w-full ${!isAllSolutionsHero ? 'justify-center' : ''}`}>
            <div className={`flex gap-4 md:gap-6 items-start ${!isAllSolutionsHero ? 'justify-center w-full' : ''}`}>
              <span className="w-0.5 md:w-1 flex-shrink-0 h-full min-h-[80px] bg-white rounded-full" aria-hidden="true" />
              <div className={!isAllSolutionsHero ? 'text-center' : ''}>
                {isAllSolutionsHero ? (
                  <>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
                      AIR QUALITY<br />
                      SOLUTION
                    </h1>
                    <p className="mt-4 text-sm sm:text-base md:text-lg font-medium text-white uppercase tracking-widest">
                      FOR VARIOUS SCENARIOS AND SPACES
                    </p>
                  </>
                ) : (
                  <>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
                      {title}
                    </h1>
                    <p className="mt-4 text-sm sm:text-base md:text-lg font-medium text-white/90">
                      {subtitle}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* Right: 8 circles only for All Solutions */}
          {isAllSolutionsHero && (
            <div className="grid grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full max-w-xl lg:max-w-2xl xl:max-w-3xl">
              {HERO_IMAGES.map((src, i) => (
                <div key={i} className="aspect-square rounded-full overflow-hidden border-2 border-white/20 shadow-xl">
                  <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Spacer: reserves full viewport height so content starts below hero */}
      <div className="relative z-10 h-screen w-full" aria-hidden="true" />

      {/* Content Section - scrolls over the fixed hero */}
      <section className="relative z-20 bg-white py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-4xl mx-auto">
          {intro && (
            <p className="text-slate-600 leading-relaxed mb-10 text-center">
              {intro}
            </p>
          )}
        </div>

        {/* Full-width: Solution for various scenarios and spaces (no cards, icon + heading only) */}
        {solutionCategories.length > 0 && (
          <div className="w-full mt-14 mb-14">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 text-center uppercase tracking-wide mb-10 md:mb-12">
              Solution for various scenarios and spaces
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
              {solutionCategories.map((item, i) => (
                <Link
                  key={i}
                  to={item.to}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center text-slate-800 group-hover:text-[#00b050] transition-colors">
                    {item.imageUrl && item.imageUrl.trim() !== '' ? (
                      <img
                        src={item.imageUrl}
                        alt=""
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <SolutionCategoryIcon index={i} className="w-full h-full" />
                    )}
                  </div>
                  <h3 className="mt-4 font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide group-hover:text-[#00b050] transition-colors">
                    {item.label}
                  </h3>
                  {item.description && (
                    <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[240px] sm:max-w-[260px] mx-auto">
                      {item.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <div className="space-y-10 text-slate-600">
            {sections.map((section, i) => (
              <div key={i}>
                {section.heading ? (
                  <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[#00b050] rounded-full"></span>
                    {section.heading}
                  </h2>
                ) : null}
                <div className={section.heading ? 'leading-relaxed' : ''}>
                  {typeof section.content === 'string' ? <p>{section.content}</p> : section.content}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <p className="text-slate-700 mb-6 font-medium">
              From homes to hospitals, every space deserves the right design.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-[#00b050] hover:bg-[#009040] text-white font-semibold rounded-lg transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 border-2 border-slate-700 hover:bg-slate-700 hover:text-white text-slate-700 font-semibold rounded-lg transition-colors"
              >
                Looking for an Expert?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer scrolls over hero with content */}
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  )
}

export default SolutionPage
