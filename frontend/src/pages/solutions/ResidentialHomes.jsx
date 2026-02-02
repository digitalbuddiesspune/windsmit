import SolutionPage from '../SolutionPage'
import { solutionHeroImages } from './heroImages'

// Sticky-note style cards with torn-paper top (match reference screenshot)
const problemCards = [
  { number: 1, title: 'Hot and cold spots', description: 'Uneven temperatures between rooms make some areas too warm and others too cold, reducing comfort.' },
  { number: 2, title: 'ACs that never feel right', description: 'Units run continuously but the space never feels comfortable, wasting energy and causing wear.' },
  { number: 3, title: 'Sudden electricity spikes', description: 'Bills jump unexpectedly due to oversized or inefficient systems running at full load.' },
  { number: 4, title: 'Loud indoor units', description: 'Noisy operation disturbs sleep and work, especially in bedrooms and home offices.' },
  { number: 5, title: 'Short equipment life', description: 'Overworked or wrongly sized systems fail sooner, leading to costly replacements.' }
]

const sections = [
  {
    heading: '',
    content: (
      <div className="w-screen relative left-1/2 -translate-x-1/2 -mt-16 md:-mt-20 mb-2 py-10 md:py-14 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24" style={{ backgroundColor: '#fafaf0' }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 text-center mb-2">
          The Real Problem in Most Homes
        </h2>
        <p className="text-slate-600 text-center mb-8 md:mb-10 max-w-2xl mx-auto">
          Many residential AC installations look fine on paper—but feel uncomfortable in daily life. Homeowners often face:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {problemCards.slice(0, 4).map((card) => (
            <div
              key={card.number}
              className="relative bg-[#fefefe] rounded-b-lg shadow-md overflow-hidden pt-3"
              style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.08)' }}
            >
              {/* Torn / scalloped top edge (notebook-punch style) */}
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
        {/* Fifth card centered below */}
        <div className="flex justify-center mt-6 md:mt-8 max-w-7xl mx-auto">
          <div
            className="relative w-full sm:max-w-[calc(50%-12px)] bg-[#fefefe] rounded-b-lg shadow-md overflow-hidden pt-3"
            style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.08)' }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-3 bg-[#fefefe]"
              style={{
                backgroundImage: 'repeating-radial-gradient(circle at 12px 12px, #fefefe 10px, transparent 10px)',
                backgroundSize: '24px 12px',
                backgroundPosition: '0 0'
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
          The root cause isn&apos;t the brand of AC—it&apos;s incorrect design, wrong capacity, and poor air planning.
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
              <span>Our Solution:</span>
              <span className="text-emerald-600">Designed Cooling,</span>
              <span>Not Guesswork</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We treat your home like a comfort system, not a product sale—designed around your space, usage, and lifestyle.
            </p>
            <p className="font-medium text-slate-800 mb-4">We design HVAC solutions that:</p>
            <ul className="space-y-4 mb-6">
              {[
                { icon: 'capacity', text: 'Match cooling capacity exactly to your home\'s heat load.' },
                { icon: 'airflow', text: 'Distribute air evenly so every room feels the same.' },
                { icon: 'quiet', text: 'Run quieter, smoother, and more efficiently.' },
                { icon: 'energy', text: 'Reduce power consumption without sacrificing comfort.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-10 h-10 rounded-lg bg-emerald-500 flex-shrink-0 flex items-center justify-center text-white">
                    {item.icon === 'capacity' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
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
                    {item.icon === 'quiet' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <line x1="23" y1="9" x2="17" y2="15" />
                        <line x1="17" y1="9" x2="23" y2="15" />
                      </svg>
                    )}
                    {item.icon === 'energy' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )}
                  </span>
                  <span className="text-slate-600 leading-relaxed pt-1.5">{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-700 font-medium">
              Result: Balanced comfort, lower bills, and silent operation.
            </p>
          </div>
          {/* Right column - image */}
          <div className="order-first lg:order-none">
            <img
              src={solutionHeroImages.residentialHomes}
              alt="Modern residential home interior with comfortable living space"
              className="w-full rounded-xl shadow-lg object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    )
  }
]

function ResidentialHomes() {
  return (
    <SolutionPage
      title="Residential Homes"
      subtitle="Homes & apartments—comfort you can rely on."
      intro={null}
      sections={sections}
      heroBackgroundImage={solutionHeroImages.residentialHomes}
    />
  )
}

export default ResidentialHomes
