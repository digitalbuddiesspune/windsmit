import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import BlogPostDetail from './pages/BlogPostDetail'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import HvacServices from './pages/HvacServices'
import './App.css'

function App() {
  return (
    <Router>
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
               <Route path="/Acservices" element={<HvacServices/>} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
