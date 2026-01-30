import { useState } from 'react'

import Footer from '../components/Footer'

function Contact() {

  const [formData, setFormData] = useState({

    name: '',

    email: '',

    phone: '',

    subject: '',

    message: ''

  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    })

  }

const handleSubmit = async (e) => {

  e.preventDefault()

  setIsSubmitting(true)

  setSubmitStatus(null)

  try {

    const response = await fetch("https://formspree.io/f/mojwnnbb", {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

        "Accept": "application/json"

      },

      body: JSON.stringify(formData)

    })

    if (response.ok) {

      setSubmitStatus("success")

      setFormData({

        name: "",

        email: "",

        phone: "",

        subject: "",

        message: ""

      })

      setTimeout(() => setSubmitStatus(null), 5000)

    } else {

      throw new Error("Form submission failed")

    }

  } catch (error) {

    setSubmitStatus("error")

  } finally {

    setIsSubmitting(false)

  }

}

  return (

    <div className="w-full min-h-screen bg-slate-950 text-slate-100">

      {/* Hero Section */}

     <section className="relative overflow-hidden px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 min-h-[90vh] flex flex-col justify-center border-b border-slate-900">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(16,185,129,0.18),transparent_55%)]"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.10),transparent_45%)]"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_65%,rgba(255,242,18,0.10),transparent_55%)]"></div>

        <div className="max-w-7xl mx-auto relative w-full">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-200">

            Contact Us

          </div>

          <div className="mt-6 flex flex-col gap-4 sm:gap-6">

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1]">

              Let’s talk about your <br className="hidden md:block" />

              <span className="text-[#fff212]">HVAC</span> needs

            </h1>

            <p className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">

              Questions, site visits, estimates, or AMC support — share a few details and we’ll respond quickly.

            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">

              <a href="tel:+919021097544" className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-5 py-3 text-sm text-slate-100 hover:border-[#fff212]/35 transition-colors">

                <span className="h-2 w-2 rounded-full bg-[#fff212]"></span>

                Call: +91 90210 97544

              </a>

              <a href="mailto:windsmit.air@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-5 py-3 text-sm text-slate-100 hover:border-emerald-500/40 transition-colors">

                Email Us

              </a>

            </div>

          </div>

        </div>

      </section>

      {/* Contact Section */}

      <section className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 pb-14 sm:pb-16 pt-15">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            

            {/* Contact Information */}

            <div className="lg:col-span-5 space-y-5">

              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7">

                <h2 className="text-xl sm:text-2xl font-bold text-white">Contact information</h2>

                <p className="mt-2 text-sm text-slate-300 leading-relaxed">

                  Prefer a direct channel? Call, email, or visit us in Nagpur.

                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">

                  {/* Phone */}

                  <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 hover:border-emerald-500/30 transition-colors">

                    <div className="flex items-start gap-3">

                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">

                        <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />

                        </svg>

                      </div>

                      <div className="min-w-0">

                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Phone</p>

                        <a href="tel:+919021097544" className="mt-1 block text-sm font-semibold text-white hover:text-emerald-300 transition-colors">

                          +91 90210 97544

                        </a>

                      </div>

                    </div>

                  </div>

                  {/* Email */}

                  <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 hover:border-emerald-500/30 transition-colors">

                    <div className="flex items-start gap-3">

                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">

                        <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />

                        </svg>

                      </div>

                      <div className="min-w-0">

                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</p>

                        <a href="mailto:windsmit.air@gmail.com" className="mt-1 block text-sm font-semibold text-white hover:text-emerald-300 transition-colors break-all">

                          windsmit.air@gmail.com

                        </a>

                      </div>

                    </div>

                  </div>

                </div>

                {/* Address */}

                <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 hover:border-emerald-500/30 transition-colors">

                  <div className="flex items-start gap-3">

                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">

                      <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />

                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />

                      </svg>

                    </div>

                    <div className="min-w-0">

                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Address</p>

                      <p className="mt-1 text-sm text-slate-200 leading-relaxed">

                        Shri Sant Nagaji Maharaj Sanskrutik Bhavan<br />

                        <span className="text-slate-300">संत नगाजीमहाराज सांस्कृतिक भवन</span><br />

                        CA Road, Nagpur <span className="text-slate-400">(Near Gandhi Statue)</span>

                      </p>

                    </div>

                  </div>

                </div>

                {/* Business Hours */}

                <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 hover:border-emerald-500/30 transition-colors">

                  <div className="flex items-start gap-3">

                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">

                      <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />

                      </svg>

                    </div>

                    <div className="min-w-0">

                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Business hours</p>

                      <p className="mt-1 text-sm text-slate-200">

                        Mon–Fri: 9:00 AM – 6:00 PM<br />

                        Sat: 10:00 AM – 4:00 PM<br />

                        Sun: Closed

                      </p>

                    </div>

                  </div>

                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2.5">

                  <a

                    href="https://www.google.com/maps/search/Shri+Sant+Nagaji+Maharaj+Sanskrutik+Bhavan,+CA+Road,+Nagpur,+Near+Gandhi+Statue"

                    target="_blank"

                    rel="noopener noreferrer"

                    className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/20 px-4 py-2 text-sm text-slate-200 hover:border-[#fff212]/35 hover:text-[#fff212] transition-colors"

                  >

                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />

                    </svg>

                    Open in Google Maps

                  </a>

                </div>

              </div>

            </div>

            {/* Contact Form */}

            <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">

              <div className="flex items-start justify-between gap-4">

                <div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white">Send a message</h2>

                  <p className="mt-2 text-sm text-slate-300">

                    We usually reply within 24 hours.

                  </p>

                </div>

                <div className="hidden sm:flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/30 px-3 py-2 text-xs text-slate-300">

                  <span className="h-2 w-2 rounded-full bg-[#fff212]"></span>

                  Support available

                </div>

              </div>

              

              {submitStatus === 'success' && (

                <div className="mt-5 mb-2 rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4">

                  <p className="text-emerald-200 text-sm font-medium">Thanks! Your message has been sent successfully.</p>

                </div>

              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div>

                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-2">

                      Name <span className="text-emerald-500">*</span>

                    </label>

                    <input

                      type="text"

                      id="name"

                      name="name"

                      required

                      value={formData.name}

                      onChange={handleChange}

                      className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/30 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#fff212]/25 focus:border-[#fff212]/35 transition-all"

                      placeholder="full name"

                    />

                  </div>

                  <div>

                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-2">

                      Email <span className="text-emerald-500">*</span>

                    </label>

                    <input

                      type="email"

                      id="email"

                      name="email"

                      required

                      value={formData.email}

                      onChange={handleChange}

                      className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/30 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#fff212]/25 focus:border-[#fff212]/35 transition-all"

                      placeholder="your.email@example.com"

                    />

                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div>

                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-2">

                      Phone

                    </label>

                    <input

                      type="tel"

                      id="phone"

                      name="phone"

                      value={formData.phone}

                      onChange={handleChange}

                      className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/30 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#fff212]/25 focus:border-[#fff212]/35 transition-all"

                      placeholder="enter number"

                    />

                  </div>

                  <div>

                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-2">

                      Subject <span className="text-emerald-500">*</span>

                    </label>

                    <input

                      type="text"

                      id="subject"

                      name="subject"

                      required

                      value={formData.subject}

                      onChange={handleChange}

                      className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/30 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#fff212]/25 focus:border-[#fff212]/35 transition-all"

                      placeholder="subject"

                    />

                  </div>

                </div>

                <div>

                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-2">

                    Message <span className="text-emerald-500">*</span>

                  </label>

                  <textarea

                    id="message"

                    name="message"

                    required

                    rows="6"

                    value={formData.message}

                    onChange={handleChange}

                    className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/30 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#fff212]/25 focus:border-[#fff212]/35 transition-all resize-none"

                    placeholder="Tell us how we can help you..."

                  ></textarea>

                </div>

               

               <button

  type="submit"

  disabled={isSubmitting}

  // Changed: py-3.5 -> py-2.5, rounded-xl -> rounded-lg, text-sm added

  className="w-full relative overflow-hidden px-6 py-2 rounded-lg text-sm font-extrabold tracking-wide transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-gradient-to-r from-[#fff212] via-[#fff212] to-emerald-400 text-slate-950 active:scale-[0.99]"

>

  <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_55%)]"></span>

  

  {isSubmitting ? (

    <>

      {/* Changed: h-5 w-5 -> h-4 w-4 to fit the lower height */}

      <svg className="animate-spin h-4 w-4 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">

        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>

        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>

      </svg>

      Sending...

    </>

  ) : (

    <>

      <span className="relative z-10">Send Message</span>

      {/* Changed: w-8 h-8 -> w-6 h-6 to reduce button height stretch */}

      <span className="relative z-10 inline-flex items-center justify-center w-6 h-6 rounded-full bg-black/10">

        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">

          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />

        </svg>

      </span>

    </>

  )}

</button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* Map Section */}

      <section className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 pb-14 sm:pb-16">

        <div className="max-w-7xl mx-auto">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden">

            <div className="flex flex-col md:flex-row md:items-stretch">

              <div className="md:w-2/5 p-6 sm:p-7">

                <h2 className="text-lg sm:text-xl font-bold text-white">Find us</h2>

                <p className="mt-2 text-sm text-slate-300 leading-relaxed">

                  Shri Sant Nagaji Maharaj Sanskrutik Bhavan, CA Road, Nagpur <span className="text-slate-400">(Near Gandhi Statue)</span>

                </p>

                <div className="mt-4 space-y-2 text-sm text-slate-300">

                  <p className="flex items-center gap-2">

                    <span className="h-2 w-2 rounded-full bg-[#fff212]"></span>

                    Landmark: Gandhi Statue

                  </p>

                  <p className="flex items-center gap-2">

                    <span className="h-2 w-2 rounded-full bg-[#fff212]"></span>

                    City: Nagpur, Maharashtra

                  </p>

                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2.5">

                  <a

                    href="https://www.google.com/maps/search/Shri+Sant+Nagaji+Maharaj+Sanskrutik+Bhavan,+CA+Road,+Nagpur,+Near+Gandhi+Statue"

                    target="_blank"

                    rel="noopener noreferrer"

                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-[#fff212] transition-colors"

                  >

                    Open in Maps

                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />

                    </svg>

                  </a>

                </div>

              </div>

              <div className="md:w-3/5 h-72 sm:h-80 md:h-auto bg-slate-950/30 border-t md:border-t-0 md:border-l border-slate-800">

                <iframe

                  src="https://www.google.com/maps?q=Shri+Sant+Nagaji+Maharaj+Sanskrutik+Bhavan,+CA+Road,+Nagpur,+Maharashtra,+India&output=embed"

                  width="100%"

                  height="100%"

                  style={{ border: 0 }}

                  allowFullScreen=""

                  loading="lazy"

                  referrerPolicy="no-referrer-when-downgrade"

                  title="Windsmit Air Location - Shri Sant Nagaji Maharaj Sanskrutik Bhavan, CA Road, Nagpur"

                  className="w-full h-full"

                ></iframe>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>

  )

}

export default Contact