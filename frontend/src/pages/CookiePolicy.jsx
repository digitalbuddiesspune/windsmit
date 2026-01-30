import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function CookiePolicy() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="h-px w-12 bg-emerald-500"></span>
            <span className="text-emerald-500 font-semibold uppercase tracking-widest text-xs">Legal</span>
            <span className="h-px w-12 bg-emerald-500"></span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Cookie <span className="text-emerald-400">Policy</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            How we use cookies and similar technologies on the Windsmit Air website.
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
                <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                What Are Cookies
              </h2>
              <p className="leading-relaxed">
                Cookies are small text files that are stored on your device when you visit a website. They help the site remember your preferences, improve performance, and understand how visitors use the site. This Cookie Policy explains how Windsmit Air uses cookies on our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                Types of Cookies We Use
              </h2>
              <ul className="space-y-3">
                <li className="p-4 bg-slate-50 rounded-lg border-l-4 border-emerald-500">
                  <span className="font-semibold text-slate-900">Strictly necessary cookies</span> — Required for the website to function (e.g. security, load balancing). These cannot be disabled.
                </li>
                <li className="p-4 bg-slate-50 rounded-lg border-l-4 border-emerald-500">
                  <span className="font-semibold text-slate-900">Functional cookies</span> — Remember your choices (e.g. language, region) to provide a better experience.
                </li>
                <li className="p-4 bg-slate-50 rounded-lg border-l-4 border-emerald-500">
                  <span className="font-semibold text-slate-900">Analytics cookies</span> — Help us understand how visitors use our site (e.g. pages viewed, time on site) so we can improve it.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                Managing Cookies
              </h2>
              <p className="leading-relaxed">
                You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Note that blocking certain cookies may affect how the website works and your user experience. For more information, check your browser’s help section.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                Updates
              </h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. The &quot;Last updated&quot; date at the top of this page will be revised when we make changes. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have questions about our use of cookies, please contact us at <a href="mailto:windsmit.air@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-medium">windsmit.air@gmail.com</a> or via our <Link to="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium">Contact</Link> page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CookiePolicy
