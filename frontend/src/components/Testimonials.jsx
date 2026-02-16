import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [cardsToShow, setCardsToShow] = useState(() => {
        if (typeof window === 'undefined') return 3
        if (window.innerWidth >= 1024) return 3
        if (window.innerWidth >= 768) return 2
        return 1
    })

    // Responsive: 1 card on mobile, 2 on md, 3 on lg+
    useEffect(() => {
        const updateCardsToShow = () => {
            if (typeof window === 'undefined') return
            if (window.innerWidth >= 1024) setCardsToShow(3)
            else if (window.innerWidth >= 768) setCardsToShow(2)
            else setCardsToShow(1)
        }
        updateCardsToShow()
        window.addEventListener('resize', updateCardsToShow)
        return () => window.removeEventListener('resize', updateCardsToShow)
    }, [])

    const testimonials = [
        {
            id: 1,
            name: "Ravindra Parhate",
            position: "Responsiveness, Quality",
            services: "AC installation",
            content: "Good people, nice service, Technically strong, Honest, transparent, and ethical business they are doing. suly recommend for any type of cooling or air conditioning services.",
            rating: 5,
            image: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769587000/avatar1.jpg"
        },
        {
            id: 2,
            name: "Mohammad Shoyeb",
            position: "Facility Manager",
            services: "A/C system maintenance, HVAC duct and vent cleaning, Ductless heating and A/C services, Heating system maintenance, HVAC system maintenance, HVAC system repair, AC installation, HVAC duct and vent installation, Heating system installation, A/C system repair, HVAC duct and vent repair, Heating system repair, Thermostat repair",
            content: "I got their reference by one of my friends. They are highly passionate about their work. Truely delighted by thier honesty and service.",
            rating: 5,
            image: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769587001/avatar2.jpg"
        },
        {
            id: 3,
            name: "Gaurav Banode",
            position: "Customer",
            content: "Great service …the staff was very polite and good….they have great machine and team…",
            rating: 5,
            image: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769587002/avatar3.jpg"
        }
    ]

    const maxIndex = Math.max(0, testimonials.length - cardsToShow)

    // Auto-scroll carousel
    useEffect(() => {
        if (!isPaused && testimonials.length > cardsToShow) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
            }, 4000)

            return () => clearInterval(interval)
        }
    }, [isPaused, maxIndex, testimonials.length, cardsToShow])

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    return (
        <section className="w-full bg-slate-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <span className="text-[#00b050] font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 sm:mb-3 block">
                        Client Testimonials
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base px-0">
                        Don't just take our word for it. Here's what our satisfied customers have to say about our services.
                    </p>
                </div>
                {/* Carousel Container - 1 card on mobile, 2 on md, 3 on lg+ */}
                <div
                    className="relative overflow-hidden px-2 sm:px-8 md:px-16"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Carousel Track */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                            gap: 0
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="flex-shrink-0 px-2 sm:px-3 md:px-4 box-border"
                                style={{ width: `${100 / cardsToShow}%` }}
                            >
                                <div className="bg-slate-800 rounded-xl p-4 sm:p-6 md:p-8 border border-slate-700 hover:border-[#00b050]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00b050]/10 h-full">
                                    {/* Rating Stars */}
                                    <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Testimonial Content */}
                                    <p className="text-slate-300 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base leading-relaxed">
                                        "{testimonial.content}"
                                    </p>

                                    {/* Client Info */}
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#00b050] to-[#00b050] flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="text-white font-semibold text-sm sm:text-base truncate">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-slate-400 text-xs sm:text-sm truncate">
                                                {testimonial.position}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    {testimonials.length > cardsToShow && (
                        <>
                            <button
                                onClick={goToPrevious}
                                className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-1.5 sm:p-2 md:p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
                                aria-label="Previous testimonials"
                            >
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={goToNext}
                                className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-1.5 sm:p-2 md:p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
                                aria-label="Next testimonials"
                            >
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>

                {/* Carousel Indicators */}
                {testimonials.length > cardsToShow && (
                    <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 touch-manipulation ${index === currentIndex
                                    ? 'w-6 sm:w-8 bg-[#00b050]'
                                    : 'w-1.5 sm:w-2 bg-slate-600 hover:bg-slate-500'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Call to Action */}
                <div className="text-center mt-12 md:mt-16">
                    <p className="text-slate-400 mb-6 text-sm sm:text-base">
                        Let’s design the right air for your space.
                    </p>
                    <Link to="/contact" className="inline-block px-6 sm:px-8 py-3 bg-[#00b050] hover:bg-[#009040] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00b050]/25">
                        Request a site visit today!
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Testimonials