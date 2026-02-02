import SolutionPage from '../SolutionPage'
import { solutionHeroImages } from './heroImages'

// Card layout matching other solution pages "Problems" section
const problemCards = [
  { number: 1, title: 'Uneven cooling', description: 'Temperature differences between display zones and walkways—some areas too warm, others too cold.' },
  { number: 2, title: 'Hot spots near glass and entry', description: 'Heat gain from glass façades and entry areas creating uncomfortable hot spots.' },
  { number: 3, title: 'Overcooling and discomfort', description: 'Overcooling in some sections and discomfort in others, with no balanced feel.' },
  { number: 4, title: 'Poor air circulation', description: 'Spaces feeling stuffy, especially in clothing stores, due to inadequate air movement.' }
]

const sections = [
  {
    heading: '',
    content: (
      <div className="w-screen relative left-1/2 -translate-x-1/2 -mt-16 md:-mt-20 mb-2 py-10 md:py-14 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24" style={{ backgroundColor: '#fafaf0' }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 text-center mb-2">
          When HVAC Affects Customer Decisions
        </h2>
        <p className="text-slate-600 text-center mb-8 md:mb-10 max-w-2xl mx-auto">
          In a showroom, comfort directly influences how long customers stay—and how likely they are to buy. Common HVAC issues include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {problemCards.map((card) => (
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
        <p className="text-slate-800 font-medium text-center mt-8 max-w-2xl mx-auto">
          The real issue isn&apos;t footfall—it&apos;s HVAC systems not designed around customer movement and display layouts.
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
              <span>Our Solution: HVAC Designed to</span>
              <span className="text-emerald-600">Support Sales</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We design HVAC systems that enhance comfort, protect merchandise, and reduce operational costs, creating an inviting atmosphere that encourages longer visits and more sales.
            </p>
            <p className="font-medium text-slate-800 mb-4">Our showroom HVAC solutions:</p>
            <ul className="space-y-4 mb-6">
              {[
                { icon: 'thermometer', text: 'Maintain consistent, inviting temperatures for shoppers.' },
                { icon: 'shield', text: 'Safeguard sensitive merchandise from heat, humidity, and dust.' },
                { icon: 'muted', text: 'Ensure quiet operation, allowing product features and sales pitches to shine.' },
                { icon: 'air', text: 'Provide fresh, clean air to keep customers comfortable and alert.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-10 h-10 rounded-lg bg-emerald-500 flex-shrink-0 flex items-center justify-center text-white">
                    {item.icon === 'thermometer' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                        <line x1="12" y1="20" x2="12" y2="14" />
                      </svg>
                    )}
                    {item.icon === 'shield' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    )}
                    {item.icon === 'muted' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <line x1="23" y1="9" x2="17" y2="15" />
                        <line x1="17" y1="9" x2="23" y2="15" />
                      </svg>
                    )}
                    {item.icon === 'air' && (
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
                  </span>
                  <span className="text-slate-600 leading-relaxed pt-1.5">{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-700 font-medium">
              Result: Enhanced customer experience, preserved merchandise, and improved business performance.
            </p>
          </div>
          {/* Right column - image */}
          <div className="order-first lg:order-none">
            <img
              src={solutionHeroImages.showrooms}
              alt="Showroom interior with display and customer zones"
              className="w-full rounded-xl shadow-lg object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    )
  }
]

function Showrooms() {
  return (
    <SolutionPage
      title="Showrooms"
      subtitle="Retail & display spaces—cooling that stays in the background."
      intro={null}
      sections={sections}
      heroBackgroundImage={solutionHeroImages.showrooms}
    />
  )
}

export default Showrooms
