import SolutionPage from '../SolutionPage'
import { solutionHeroImages } from './heroImages'

// Card layout matching Residential/Commercial/Educational "Problems" section (same as ss provided)
const problemCards = [
  { number: 1, title: 'Inconsistent temperature and humidity', description: 'Uneven conditions across critical areas—OTs, ICUs, patient rooms—affecting comfort and clinical protocols.' },
  { number: 2, title: 'Risk of cross-contamination', description: 'Improper airflow direction and pressure differentials can spread pathogens between zones.' },
  { number: 3, title: 'Inadequate fresh air and filtration', description: 'Patient zones not meeting required ACH or filtration standards, affecting recovery and safety.' },
  { number: 4, title: 'Noisy systems', description: 'HVAC noise disturbing patient recovery and staff focus in wards and critical care areas.' },
  { number: 5, title: 'High energy use and wrong design approach', description: '24×7 operations driving high bills, and one common HVAC approach applied to all areas despite different medical needs.' }
]

const sections = [
  {
    heading: '',
    content: (
      <div className="w-screen relative left-1/2 -translate-x-1/2 -mt-16 md:-mt-20 mb-2 py-10 md:py-14 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24" style={{ backgroundColor: '#fafaf0' }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 text-center mb-2">
          The Critical HVAC Challenges in Hospitals
        </h2>
        <p className="text-slate-600 text-center mb-8 md:mb-10 max-w-2xl mx-auto">
          In healthcare environments, HVAC is not just about comfort—it directly impacts patient safety, infection control, and clinical outcomes. Common challenges we see:
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
          The real risk isn&apos;t equipment failure—it&apos;s HVAC systems not designed as per hospital-specific norms and standards.
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
              <span className="text-emerald-600">Standards-Compliant HVAC</span>
              <span>for Healthcare</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We design hospital HVAC systems strictly in line with healthcare HVAC standards, with different strategies for different hospital zones.
            </p>
            <p className="font-medium text-slate-800 mb-4">Our hospital HVAC solutions:</p>
            <ul className="space-y-4 mb-6">
              {[
                { icon: 'medical', text: 'OT, ICU, isolation, and patient room HVAC norms.' },
                { icon: 'airflow', text: 'Required air changes per hour (ACH) for each medical space.' },
                { icon: 'pressure', text: 'Positive / negative pressure room requirements.' },
                { icon: 'filter', text: 'Temperature, humidity, and filtration standards.' },
                { icon: 'reliability', text: '24×7 reliability with energy-efficient operation.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-10 h-10 rounded-lg bg-emerald-500 flex-shrink-0 flex items-center justify-center text-white">
                    {item.icon === 'medical' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
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
                    {item.icon === 'pressure' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v12" />
                        <path d="M8 9h8" />
                        <path d="M8 15h8" />
                        <path d="M15 8l-3 4 3 4" />
                        <path d="M9 8l3 4-3 4" />
                      </svg>
                    )}
                    {item.icon === 'filter' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                      </svg>
                    )}
                    {item.icon === 'reliability' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    )}
                  </span>
                  <span className="text-slate-600 leading-relaxed pt-1.5">{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-700 font-medium">
              Result: Safer clinical environments, better patient recovery, and compliant hospital infrastructure.
            </p>
          </div>
          {/* Right column - image */}
          <div className="order-first lg:order-none">
            <img
              src={solutionHeroImages.hospitals}
              alt="Hospital or healthcare facility interior"
              className="w-full rounded-xl shadow-lg object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    )
  }
]

function Hospitals() {
  return (
    <SolutionPage
      title="Hospitals"
      subtitle="Healthcare facilities—controlled air for care."
      intro={null}
      sections={sections}
      heroBackgroundImage={solutionHeroImages.hospitals}
    />
  )
}

export default Hospitals
