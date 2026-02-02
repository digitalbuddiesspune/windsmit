import SolutionPage from '../SolutionPage'
import { solutionHeroImages } from './heroImages'

// Card layout matching Residential "Problems" section (same as ss provided)
const problemCards = [
  { number: 1, title: 'Thermostat conflicts', description: 'Daily conflicts over thermostat settings as employees have different comfort needs.' },
  { number: 2, title: 'Conference rooms vs workstations', description: 'Conference rooms freezing while workstations feel warm.' },
  { number: 3, title: 'ACs at full load', description: 'ACs running at full load even with partial occupancy.' },
  { number: 4, title: 'Rising costs', description: 'Rising electricity and maintenance costs.' },
  { number: 5, title: 'Stale air and complaints', description: 'Stale air causing fatigue, headaches, and reduced productivity; one fixed temperature never suits everyone.' }
]

const sections = [
  {
    heading: '',
    content: (
      <div className="w-screen relative left-1/2 -translate-x-1/2 -mt-16 md:-mt-20 mb-2 py-10 md:py-14 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24" style={{ backgroundColor: '#fafaf0' }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 text-center mb-2">
          The Hidden HVAC Problems in Most Offices
        </h2>
        <p className="text-slate-600 text-center mb-8 md:mb-10 max-w-2xl mx-auto">
          Most office HVAC systems are designed once—and then expected to work forever. Common issues we see:
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
          The real issue isn&apos;t employee behavior—it&apos;s a lack of zoning and control in HVAC design.
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
              <span className="text-emerald-600">HVAC That Works</span>
              <span>the Way Offices Do</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We design HVAC systems around zones, people, and real usage patterns—not a single temperature setting.
            </p>
            <p className="font-medium text-slate-800 mb-4">Our office HVAC solutions:</p>
            <ul className="space-y-4 mb-6">
              {[
                { icon: 'zones', text: 'Separate temperature control for different work zones.' },
                { icon: 'balance', text: 'Balanced cooling for cabins, open areas, and meeting rooms.' },
                { icon: 'airflow', text: 'Fresh air circulation for healthier, more alert teams.' },
                { icon: 'energy', text: 'Reduced energy waste during partial occupancy.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-10 h-10 rounded-lg bg-emerald-500 flex-shrink-0 flex items-center justify-center text-white">
                    {item.icon === 'zones' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                      </svg>
                    )}
                    {item.icon === 'balance' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="2" x2="12" y2="22" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
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
              Result: Fewer complaints, better focus, and smoother office operations.
            </p>
          </div>
          {/* Right column - image */}
          <div className="order-first lg:order-none">
            <img
              src={solutionHeroImages.commercialOffices}
              alt="Commercial office interior with modern workspace"
              className="w-full rounded-xl shadow-lg object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    )
  }
]

function CommercialOffices() {
  return (
    <SolutionPage
      title="Commercial Offices"
      subtitle="Offices & workplaces—consistent comfort, lower bills."
      intro={null}
      sections={sections}
      heroBackgroundImage={solutionHeroImages.commercialOffices}
    />
  )
}

export default CommercialOffices
