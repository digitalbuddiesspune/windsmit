import SolutionPage from '../SolutionPage'
import { solutionHeroImages } from './heroImages'

// Card layout matching other solution pages "Problems" section
const problemCards = [
  { number: 1, title: 'Excessive heat from machinery', description: 'Process heat and machinery load creating extreme temperatures that standard HVAC cannot handle.' },
  { number: 2, title: 'Poor air circulation', description: 'Hot zones and worker fatigue due to inadequate air movement in large spaces.' },
  { number: 3, title: 'Dust, fumes, and stale air', description: 'Dust, fumes, and stale air affecting health, safety, and productivity.' },
  { number: 4, title: 'Inadequate ventilation', description: 'High-ceiling and large-span spaces with insufficient ventilation and mixing.' },
  { number: 5, title: 'High energy use and summer failures', description: 'High energy consumption with little comfort gain, and cooling systems failing during peak summer loads.' }
]

const sections = [
  {
    heading: '',
    content: (
      <div className="w-screen relative left-1/2 -translate-x-1/2 -mt-16 md:-mt-20 mb-2 py-10 md:py-14 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24" style={{ backgroundColor: '#fafaf0' }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 text-center mb-2">
          The Real Cooling & Ventilation Challenges in Industrial Spaces
        </h2>
        <p className="text-slate-600 text-center mb-8 md:mb-10 max-w-2xl mx-auto">
          Industrial facilities face extreme operating conditions that normal HVAC solutions are not designed to handle. Common issues include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {problemCards.slice(0, 4).map((card) => (
            <div
              key={card.number}
              className="relative bg-[#fefefe] rounded-b-lg shadow-md overflow-hidden pt-3"
              style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.08)' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-3 bg-[#fefefe]"
                style={{
                  maskImage: 'repeating-radial-gradient(circle at 12px 12px, black 10px, transparent 10px)',
                  maskSize: '24px 12px',
                  WebkitMaskImage: 'repeating-radial-gradient(circle at 12px 12px, black 10px, transparent 10px)',
                  WebkitMaskSize: '24px 12px'
                }}
                aria-hidden
              />
              <div className="px-5 py-4 pb-5 relative">
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {card.number}. {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 md:mt-8 max-w-7xl mx-auto">
          <div
            className="relative w-full sm:max-w-[calc(50%-12px)] bg-[#fefefe] rounded-b-lg shadow-md overflow-hidden pt-3"
            style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.08)' }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-3 bg-[#fefefe]"
              style={{
                maskImage: 'repeating-radial-gradient(circle at 12px 12px, black 10px, transparent 10px)',
                maskSize: '24px 12px',
                WebkitMaskImage: 'repeating-radial-gradient(circle at 12px 12px, black 10px, transparent 10px)',
                WebkitMaskSize: '24px 12px'
              }}
              aria-hidden
            />
            <div className="px-5 py-4 pb-5 relative">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {problemCards[4].number}. {problemCards[4].title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {problemCards[4].description}
              </p>
            </div>
          </div>
        </div>
        <p className="text-slate-800 font-medium text-center mt-8 max-w-2xl mx-auto">
          The real issue isn&apos;t floor area—it&apos;s applying comfort HVAC concepts to industrial environments.
        </p>
      </div>
    )
  },
  {
    heading: '',
    content: (
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-white py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left column - text */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 flex flex-wrap items-center gap-2">
              <span className="w-1 h-10 sm:h-12 bg-emerald-500 rounded-full flex-shrink-0" aria-hidden />
              <span className="text-emerald-600">Our Solution:</span>
              <span>HVAC Engineered for Industrial Performance</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We design cooling and ventilation systems around process heat, air movement, and workforce comfort—not residential assumptions.
            </p>
            <p className="font-medium text-slate-800 mb-4">Our industrial HVAC solutions:</p>
            <ul className="space-y-4 mb-6">
              {[
                { icon: 'heat', text: 'Manage high internal heat loads from equipment and operations.' },
                { icon: 'airflow', text: 'Improve air circulation in large, high-volume spaces.' },
                { icon: 'filter', text: 'Remove dust, fumes, and excess heat effectively.' },
                { icon: 'comfort', text: 'Enhance worker comfort without overcooling the entire facility.' },
                { icon: 'energy', text: 'Optimize energy use for long operating hours.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-10 h-10 rounded-lg bg-emerald-500 flex-shrink-0 flex items-center justify-center text-white">
                    {item.icon === 'heat' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                        <line x1="12" y1="20" x2="12" y2="14" />
                      </svg>
                    )}
                    {item.icon === 'airflow' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3v18" />
                        <path d="M8 8l4-4 4 4" />
                        <path d="M8 16l4 4 4-4" />
                        <path d="M4 12h2" />
                        <path d="M18 12h2" />
                        <path d="M12 4v2" />
                        <path d="M12 18v2" />
                      </svg>
                    )}
                    {item.icon === 'filter' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                      </svg>
                    )}
                    {item.icon === 'comfort' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    )}
                    {item.icon === 'energy' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    )}
                  </span>
                  <span className="text-slate-600 leading-relaxed pt-1.5">{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-700 font-medium">
              Result: Safer working conditions, higher productivity, and controlled operating costs.
            </p>
          </div>
          {/* Right column - image */}
          <div className="order-first lg:order-none">
            <img
              src={solutionHeroImages.industrialWarehouses}
              alt="Industrial facility with ventilation and equipment"
              className="w-full rounded-xl shadow-lg object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    )
  }
]

function IndustrialWarehouses() {
  return (
    <SolutionPage
      title="Industrial & Warehouses"
      subtitle="Factories & storage—ventilation and comfort where it matters."
      intro={null}
      sections={sections}
      heroBackgroundImage={solutionHeroImages.industrialWarehouses}
    />
  )
}

export default IndustrialWarehouses
