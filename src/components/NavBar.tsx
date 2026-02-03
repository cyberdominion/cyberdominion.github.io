
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo.png";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Academy', path: '/academy' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 border-b border-cyan-500/20' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
  <img
    src={logo}
    alt="Cyber Dominion Logo"
    className="h-10 w-auto drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] group-hover:scale-110 transition-transform"
  />
  <span className="font-orbitron text-xl font-bold tracking-tight text-slate-50">
    CYBER<span className="text-cyan-400">DOMINION</span>
  </span>
</Link>


        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-cyan-400 ${
                location.pathname === link.path ? 'text-cyan-400 font-bold' : 'text-slate-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/academy"
            className="px-5 py-2 bg-cyan-500 text-slate-950 text-sm font-bold rounded hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
          >
            JOIN NOW
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass border-b border-cyan-500/20 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-orbitron font-medium tracking-wide ${
                location.pathname === link.path ? 'text-cyan-400' : 'text-slate-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/academy"
            className="w-2/3 text-center px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded-md"
          >
            Join the Academy
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
