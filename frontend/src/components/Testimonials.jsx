import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

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

    // Number of cards to show at once
    const cardsToShow = 3
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
        <section className="w-full bg-slate-900 py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 block">
                        Client Testimonials
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Don't just take our word for it. Here's what our satisfied customers have to say about our services.
                    </p>        </div>{/* Carousel Container - Shows 3 cards at once */}
                <div
                    className="relative overflow-hidden px-12 md:px-16"  // Add horizontal padding
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Carousel Track */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out gap-0"
                        style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="w-full flex-shrink-0 px-3 md:px-4"
                                style={{ width: `${100 / cardsToShow}%` }}
                            >
                                <div className="bg-slate-800 rounded-xl p-6 md:p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 h-full">
                                    {/* Rating Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 text-yellow-500 fill-current"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Testimonial Content */}
                                    <p className="text-slate-300 mb-6 text-sm sm:text-base leading-relaxed">
                                        "{testimonial.content}"
                                    </p>

                                    {/* Client Info */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-sm sm:text-base">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-slate-400 text-xs sm:text-sm">
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
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-2 md:p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
                                aria-label="Previous testimonials"
                            >
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={goToNext}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-2 md:p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
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
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'w-8 bg-emerald-500'
                                    : 'w-2 bg-slate-600 hover:bg-slate-500'
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
                    <Link to="/contact" className="inline-block px-6 sm:px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25">
                        Request a site visit today!
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Testimonials