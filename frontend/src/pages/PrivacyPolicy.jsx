import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function PrivacyPolicy() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="h-px w-12 bg-[#00b050]"></span>
            <span className="text-[#00b050] font-semibold uppercase tracking-widest text-xs">Legal</span>
            <span className="h-px w-12 bg-[#00b050]"></span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Privacy <span className="text-[#00b050]">Policy</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            How we collect, use, and protect your personal information when you use our website and services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-slate-500 mb-8">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="space-y-10 text-slate-600">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#00b050] rounded-full"></span>
                Introduction
              </h2>
              <p className="leading-relaxed">
                Windsmit Air (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our HVAC and building management services. Please read this policy carefully.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#00b050] rounded-full"></span>
                Information We Collect
              </h2>
              <p className="leading-relaxed mb-3">We may collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, email address, phone number, and mailing address when you contact us or request a quote</li>
                <li>Property details and service requirements when you request site visits or consultations</li>
                <li>Payment and billing information when you engage our services</li>
                <li>Communications and correspondence with our team</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#00b050] rounded-full"></span>
                How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver HVAC installation, maintenance, and BMS services</li>
                <li>Send service reminders, estimates, and project updates</li>
                <li>Improve our website, services, and user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#00b050] rounded-full"></span>
                Data Security
              </h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. We do not sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#00b050] rounded-full"></span>
                Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your rights regarding your data, please contact us at <a href="mailto:windsmit.air@gmail.com" className="text-[#00b050] hover:text-[#009040] font-medium">windsmit.air@gmail.com</a> or visit our <Link to="/contact" className="text-[#00b050] hover:text-[#009040] font-medium">Contact</Link> page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy
