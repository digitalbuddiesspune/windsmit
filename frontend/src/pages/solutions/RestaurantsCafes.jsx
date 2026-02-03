import SolutionPage from '../SolutionPage'
import { solutionHeroImages } from './heroImages'

// Card layout matching other solution pages "Problems" section
const problemCards = [
  { number: 1, title: 'Heat build-up from kitchens', description: 'Kitchen heat affecting dining areas and making guest zones uncomfortable.' },
  { number: 2, title: 'Uneven cooling', description: 'Temperature differences between seating zones and entrances—some areas too warm, others too cold.' },
  { number: 3, title: 'Odours and smoke drifting', description: 'Cooking odours and smoke drifting into customer spaces, affecting comfort and ambience.' },
  { number: 4, title: 'Excessive AC noise', description: 'Noisy AC units spoiling the dining atmosphere and conversation.' },
  { number: 5, title: 'Humidity discomfort', description: 'Humidity making the space feel sticky and uncomfortable, especially in summers.' }
]

const sections = [
  {
    heading: '',
    content: (
      <div className="w-screen relative left-1/2 -translate-x-1/2 -mt-16 md:-mt-20 mb-2 py-10 md:py-14 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 text-center mb-2">
          When Comfort Impacts Taste & Time Spent
        </h2>
        <p className="text-slate-600 text-center mb-8 md:mb-10 max-w-2xl mx-auto">
          In food spaces, even great cuisine can feel disappointing if the environment isn&apos;t right. Common HVAC challenges include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {problemCards.slice(0, 4).map((card) => (
            <div
              key={card.number}
              className="relative bg-white border border-slate-200 rounded-b-lg shadow-md overflow-hidden pt-3"
              style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.08)' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-3 bg-white"
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
            className="relative w-full sm:max-w-[calc(50%-12px)] bg-white border border-slate-200 rounded-b-lg shadow-md overflow-hidden pt-3"
            style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.08)' }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-3 bg-white"
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
          The real issue isn&apos;t food volume—it&apos;s HVAC systems not designed to separate kitchen loads from dining comfort.
        </p>
      </div>
    )
  },
  {
    heading: '',
    content: (
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-slate-900 py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left column - text */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 flex flex-wrap items-center gap-2">
              <span className="w-1 h-10 sm:h-12 bg-emerald-500 rounded-full flex-shrink-0" aria-hidden />
              <span>Our Solution:</span>
              <span className="text-emerald-400">HVAC Designed</span>
              <span>for Dining Experiences</span>
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              We design HVAC systems that balance kitchen exhaust, dining comfort, and ambience—without compromise.
            </p>
            <p className="font-medium text-slate-200 mb-4">Our restaurant HVAC solutions:</p>
            <ul className="space-y-4 mb-6">
              {[
                { icon: 'hood', text: 'Isolate kitchen heat and odours from dining areas.' },
                { icon: 'thermometer', text: 'Maintain consistent, comfortable temperatures for guests.' },
                { icon: 'muted', text: 'Ensure silent operation to protect the dining atmosphere.' },
                { icon: 'humidity', text: 'Control humidity for a fresh, pleasant feel.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-10 h-10 rounded-lg bg-emerald-500 flex-shrink-0 flex items-center justify-center text-white">
                    {item.icon === 'hood' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 18h16v-6H4v6z" />
                        <path d="M6 12h2v4H6v-4z" />
                        <path d="M10 12h2v4h-2v-4z" />
                        <path d="M14 12h2v4h-2v-4z" />
                        <path d="M18 12h2v4h-2v-4z" />
                        <path d="M8 8L12 4l4 4" />
                        <circle cx="12" cy="2" r="1" fill="currentColor" />
                        <circle cx="9" cy="2" r="1" fill="currentColor" />
                        <circle cx="15" cy="2" r="1" fill="currentColor" />
                      </svg>
                    )}
                    {item.icon === 'thermometer' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                        <line x1="12" y1="20" x2="12" y2="14" />
                      </svg>
                    )}
                    {item.icon === 'muted' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <line x1="23" y1="9" x2="17" y2="15" />
                        <line x1="17" y1="9" x2="23" y2="15" />
                      </svg>
                    )}
                    {item.icon === 'humidity' && (
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3c-2 3-6 7-6 11a6 6 0 0 0 12 0c0-4-4-8-6-11z" />
                        <text x="12" y="13" textAnchor="middle" fill="currentColor" style={{ fontSize: 5, fontWeight: 'bold' }}>50%</text>
                      </svg>
                    )}
                  </span>
                  <span className="text-slate-300 leading-relaxed pt-1.5">{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-200 font-medium">
              Result: Comfortable guests, better dining experiences, and repeat visits.
            </p>
          </div>
          {/* Right column - image */}
          <div className="order-first lg:order-none">
            <img
              src={solutionHeroImages.restaurantsCafes}
              alt="Restaurant interior with dining area and open kitchen"
              className="w-full rounded-xl shadow-lg object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    )
  }
]

function RestaurantsCafes() {
  return (
    <SolutionPage
      title="Restaurants & Cafés"
      subtitle="Food & beverage—comfort and ventilation that work together."
      intro={null}
      sections={sections}
      heroBackgroundImage={solutionHeroImages.restaurantsCafes}
    />
  )
}

export default RestaurantsCafes
