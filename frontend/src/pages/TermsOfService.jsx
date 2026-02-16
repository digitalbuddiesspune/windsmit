import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function TermsOfService() {
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
            Terms of <span className="text-[#00b050]">Service</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            The terms and conditions governing your use of our website and engagement of our HVAC and BMS services.
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
                Agreement to Terms
              </h2>
              <p className="leading-relaxed">
                By accessing or using the Windsmit Air website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our website or engage our HVAC installation, maintenance, or building management system (BMS) services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#00b050] rounded-full"></span>
                Services
              </h2>
              <p className="leading-relaxed mb-3">
                Windsmit Air provides air conditioning, HVAC systems, BMS integration, and related maintenance services. Scope of work, pricing, and timelines will be set out in separate quotations or service agreements. We reserve the right to modify or discontinue any service with reasonable notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#00b050] rounded-full"></span>
                User Responsibilities
              </h2>
              <p className="leading-relaxed mb-3">You agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate information when requesting quotes or scheduling services</li>
                <li>Ensure safe and accessible site conditions for our technicians</li>
                <li>Pay invoices as per agreed payment terms</li>
                <li>Use our website only for lawful purposes and not to transmit harmful or offensive content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#00b050] rounded-full"></span>
                Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by law, Windsmit Air shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services. Our liability for any claim related to our services shall not exceed the amount paid by you for the specific service in question.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#00b050] rounded-full"></span>
                Contact
              </h2>
              <p className="leading-relaxed">
                For questions about these Terms of Service, please contact us at <a href="mailto:windsmit.air@gmail.com" className="text-[#00b050] hover:text-[#009040] font-medium">windsmit.air@gmail.com</a> or through our <Link to="/contact" className="text-[#00b050] hover:text-[#009040] font-medium">Contact</Link> page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TermsOfService
