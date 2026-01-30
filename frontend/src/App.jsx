import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
import Home from './components/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import BlogPostDetail from './pages/BlogPostDetail'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import Admin from './pages/Admin'
import HvacServices from './pages/HvacServices'
import Bms from './pages/Bms'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPostDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/Acservices" element={<HvacServices />} />
              <Route path="/bms" element={<Bms />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
            </Routes>
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
