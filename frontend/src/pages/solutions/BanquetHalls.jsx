import SolutionPage from '../SolutionPage'
import { solutionHeroImages } from './heroImages'

// Card layout matching Residential/Commercial/Educational/Hospitals "Problems" section
const problemCards = [
  { number: 1, title: 'Sudden temperature rise', description: 'Temperature spikes as guests gather, making the space uncomfortable soon after events begin.' },
  { number: 2, title: 'Uneven cooling', description: 'Stage area, dining, and seating zones feel different—some too warm, others too cold.' },
  { number: 3, title: 'ACs struggling with load', description: 'Systems unable to cope with high body heat and lighting load during peak events.' },
  { number: 4, title: 'Condensation and humidity', description: 'Humidity discomfort and condensation during long summer events.' },
  { number: 5, title: 'High energy wastage', description: 'Halls running at full or near-full capacity even during partial or short-duration events.' }
]

const sections = [
  {
    heading: '',
    content: (
      <div className="w-screen relative left-1/2 -translate-x-1/2 -mt-16 md:-mt-20 mb-2 py-10 md:py-14 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24" style={{ backgroundColor: '#fafaf0' }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 text-center mb-2">
          The Comfort Challenges in Banquet Halls
        </h2>
        <p className="text-slate-600 text-center mb-8 md:mb-10 max-w-2xl mx-auto">
          Banquet halls experience extreme and unpredictable conditions—quiet one moment, crowded the next. Common problems include:
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
          The real issue isn&apos;t hall size or décor—it&apos;s HVAC systems not designed for dynamic crowd loads.
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
              <span>Our Solution: HVAC Engineered for</span>
              <span className="text-emerald-600">Event Dynamics</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We design HVAC systems that respond to changing occupancy, lighting heat, and event duration—not fixed assumptions.
            </p>
            <p className="font-medium text-slate-800 mb-4">Our banquet HVAC solutions:</p>
            <ul className="space-y-4 mb-6">
              {[
                { icon: 'crowd', text: 'Handle peak crowd density without loss of comfort.' },
                { icon: 'thermometer', text: 'Deliver uniform cooling across stage area, seating, and buffet zones.' },
                { icon: 'humidity', text: 'Control humidity to avoid stuffiness and condensation.' },
                { icon: 'energy', text: 'Optimize energy use during partial or short-duration events.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-10 h-10 rounded-lg bg-emerald-500 flex-shrink-0 flex items-center justify-center text-white">
                    {item.icon === 'crowd' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        <path d="M15 12h4" />
                        <path d="M17 10v4" />
                      </svg>
                    )}
                    {item.icon === 'thermometer' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                        <line x1="12" y1="20" x2="12" y2="14" />
                      </svg>
                    )}
                    {item.icon === 'humidity' && (
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3c-2 3-6 7-6 11a6 6 0 0 0 12 0c0-4-4-8-6-11z" />
                        <text x="12" y="13" textAnchor="middle" fill="currentColor" style={{ fontSize: 5, fontWeight: 'bold' }}>50%</text>
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
              Result: Comfortable guests, flawless events, and lower operating costs.
            </p>
          </div>
          {/* Right column - image */}
          <div className="order-first lg:order-none">
            <img
              src={solutionHeroImages.banquetHalls}
              alt="Banquet hall interior with event space"
              className="w-full rounded-xl shadow-lg object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    )
  }
]

function BanquetHalls() {
  return (
    <SolutionPage
      title="Banquet Halls"
      subtitle="Events & venues—comfort at scale."
      intro={null}
      sections={sections}
      heroBackgroundImage={solutionHeroImages.banquetHalls}
    />
  )
}

export default BanquetHalls
