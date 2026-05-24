import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../App.css'

import Projects from '../components/project-section'
import Contact from '../components/contact'
import About from '../components/about'
import Skills from '../components/skills'
import Footer from '../components/footer'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location])

return (
  <>

    {/* HOME */}
    <section id="home" className="min-h-screen flex items-center px-[8%] relative z-10">
      {/* Orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none float"
        style={{ background: "radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 100%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full pointer-events-none float-r"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 100%)" }}
      />

      <div className="max-w-3xl">
        {/* Label */}
        <div className="anim-0 flex items-center gap-3 mb-5">
          <span className="inline-block w-10 h-px bg-blue-500" />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", letterSpacing: "3px" }} className="text-blue-500 uppercase">
            Epitech Student · Developer
          </span>
        </div>

        {/* Big heading */}
        <h1
          className="anim-1 leading-none mb-7"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(4rem,10vw,8rem)", letterSpacing: "2px" }}
        >
          <span className="block text-slate-50">ANTOINE</span>
          <span className="block" style={{ color: "transparent", WebkitTextStroke: "1px rgba(255, 255, 255, 0.76)" }}>GRABER</span>
          <span
            className="block"
            style={{ background: "linear-gradient(135deg,#3b82f6,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            PORTFOLIO
          </span>
        </h1>

        <p className="anim-2 text-slate-500 text-lg leading-relaxed max-w-xl mb-10">
          Building things for the web and beyond. Passionate about cybersecurity, and crafting experiences that matter.
        </p>

        {/* Button */}
        <div className="anim-3 flex gap-4 flex-wrap mt-6">
        <a 
            href="/projects" 
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition-all font-semibold text-sm tracking-wide text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
        >
            View Projects
        </a>
        <a 
            href="/cv-antoine-graber.pdf"
            download
            className="px-6 py-3 rounded-full border border-white/10 hover:border-white/30 transition-all text-slate-300 text-sm font-semibold tracking-wide flex items-center gap-2"
        >
            <span>Download CV</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4M7 10l5 5 5-5M12 15V3"/>
            </svg>
        </a>
        </div>

      </div>

    </section>
      
    <About />
    <Projects />
    <Skills />

    <div id="contact">
      <Contact />
    </div>

    <Footer />
  </>
)
}

export default Home
