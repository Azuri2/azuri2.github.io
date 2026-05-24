import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom' // Remplacement ici

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isProjectsPage = location.pathname === '/projects'
  const isJourneyPage = location.pathname === '/journey'
  const isHomePage = location.pathname === '/'

  return (
    <nav className="h-[70px] fixed top-0 left-0 w-full mt-2 bg-black/40 backdrop-blur-md px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-50 text-gray-400 border-b border-white/[0.05]">
        
        {/* Logo */}
        <Link to="/" className="font-bold tracking-wider text-white text-xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          ANTOINE <span className="text-blue-500">GRABER</span>
        </Link>

        {/* Menu PC */}
        <div className="hidden md:flex items-center gap-8 text-s font-mono tracking-wide">
            <Link to="/" className={`transition-colors ${!isHomePage ? 'text-white font-medium hover:text-blue-300' : 'text-blue-400 font-medium'}`}>
              Home
            </Link>
            <Link to="/projects" className={`transition-colors ${!isProjectsPage ? 'text-white font-medium hover:text-blue-300' : 'text-blue-400 font-medium'}`}>
              Projects & Skills
            </Link>
            <Link to="/journey" className={`transition-colors ${!isJourneyPage ? 'text-white font-medium hover:text-blue-300' : 'text-blue-400 font-medium'}`}>
              Learning Journey
            </Link>
            <a href="#/" className="transition-colors text-white font-medium hover:text-blue-300">
              Contact
            </a>
        </div>

        {/* Hamburger Menu mobile */}
        <button aria-label="menu-btn" type="button" onClick={() => setMenuOpen(!menuOpen)} className="inline-block md:hidden active:scale-90 transition z-50 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
            </svg>
        </button>

        {/* Dropdown Menu mobile */}
        <div className={`${menuOpen ? 'flex' : 'hidden'} fixed inset-0 bg-black/95 flex-col items-center justify-center gap-8 text-xl font-mono md:hidden z-40`}>
            <Link to="/" onClick={() => setMenuOpen(false)} className={`transition-colors ${!isHomePage ? 'text-white font-medium hover:text-blue-300' : 'text-blue-400 font-medium'}`}>
              Home
            </Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)} className={`transition-colors ${!isProjectsPage ? 'text-white font-medium hover:text-blue-300' : 'text-blue-400 font-medium'}`}>
              Projects & Skills
            </Link>
            <Link to="/journey" onClick={() => setMenuOpen(false)} className={`transition-colors ${!isJourneyPage ? 'text-white font-medium hover:text-blue-300' : 'text-blue-400 font-medium'}`}>
              Learning Journey
            </Link>
            <a href="#/contact" onClick={() => setMenuOpen(false)} className="transition-colors text-white font-medium hover:text-blue-300">
              Contact
            </a>
        </div>
    </nav>
  )
}