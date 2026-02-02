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
import AllSolutions from './pages/solutions/AllSolutions'
import ResidentialHomes from './pages/solutions/ResidentialHomes'
import CommercialOffices from './pages/solutions/CommercialOffices'
import EducationalInstitutions from './pages/solutions/EducationalInstitutions'
import Hospitals from './pages/solutions/Hospitals'
import BanquetHalls from './pages/solutions/BanquetHalls'
import Showrooms from './pages/solutions/Showrooms'
import RestaurantsCafes from './pages/solutions/RestaurantsCafes'
import IndustrialWarehouses from './pages/solutions/IndustrialWarehouses'
import AnnualMaintenance from './pages/AnnualMaintenance'
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
              <Route path="/service" element={<Services />} />
              <Route path="/hvacservice" element={<HvacServices />} />
              <Route path="/bmsservice" element={<Bms />} />
              <Route path="/annual-maintenance" element={<AnnualMaintenance />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/solutions" element={<AllSolutions />} />
              <Route path="/solutions/residential-homes" element={<ResidentialHomes />} />
              <Route path="/solutions/commercial-offices" element={<CommercialOffices />} />
              <Route path="/solutions/educational-institutions" element={<EducationalInstitutions />} />
              <Route path="/solutions/hospitals" element={<Hospitals />} />
              <Route path="/solutions/banquet-halls" element={<BanquetHalls />} />
              <Route path="/solutions/showrooms" element={<Showrooms />} />
              <Route path="/solutions/restaurants-cafes" element={<RestaurantsCafes />} />
              <Route path="/solutions/industrial-warehouses" element={<IndustrialWarehouses />} />
            </Routes>
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
