import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Training & AI Courses', path: '/programs', badge: 'AI' },
    { name: 'Job Opportunities', path: '/jobs', badge: 'NEW' },
    { name: 'Career Quiz', path: '/quiz', badge: 'QUIZ' },
    { name: 'Verify Certificate', path: '/verify' },
    { name: 'Portal', path: '/portal' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admin', path: '/admin', badge: 'ADMIN' },
  ];

  return (
    <>
      {/* Top Banner - Sleek Dark Palette (desktop only, hidden below 768px) */}
      <div className="hidden md:block bg-[#2B2D31] text-white border-b border-[#3F4147] py-2.5 text-xs font-medium relative z-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center">
          <div className="flex items-center gap-4 text-[#C1C2C5]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"/>
              Admission Open for August-September 2026 Batches
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-neutral-400">Est. 2075 B.S.</span>
            <a href="tel:+9779768808890" className="hover:text-primary transition-colors font-mono font-bold text-white">+977-9768808890</a>
          </div>
        </div>
      </div>

      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3 top-0 md:top-0' : 'bg-white py-3 top-0 md:top-8 border-b border-neutral-200/70'
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center gap-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group flex-shrink-0 min-w-0">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-white border border-neutral-200 rounded-xl flex items-center justify-center shadow-xs overflow-hidden flex-shrink-0">
                <img src={logoImg} alt="Euro Training Center Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-heading font-extrabold text-base md:text-lg leading-none text-[#2B2D31] tracking-tight truncate">Euro Training Center</span>
                <span className="text-[8px] md:text-[9px] text-primary font-bold tracking-widest uppercase mt-0.5">NEPAL | Career Institute</span>
              </div>
            </Link>

            {/* Desktop Navigation - Compact & Balanced (above 768px) */}
            <div className="hidden md:flex items-center space-x-2 xl:space-x-3">
              <div className="flex items-center space-x-1 xl:space-x-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-xs xl:text-sm font-semibold transition-all hover:text-primary px-2.5 py-1.5 rounded-lg ${
                      location.pathname === link.path ? 'text-primary font-extrabold bg-green-50/70' : 'text-[#2B2D31] hover:bg-neutral-100/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className={`ml-1 px-1.5 py-0.2 rounded-full text-[8px] font-extrabold tracking-tight inline-block ${
                        link.badge === 'AI' || link.badge === 'QUIZ'
                          ? 'bg-primary text-white' 
                          : link.badge === 'ADMIN'
                          ? 'bg-violet-600 text-white'
                          : 'bg-[#2B2D31] text-white border border-[#3F4147]'
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>

              <Link 
                to="/programs" 
                className="bg-primary hover:bg-primary-hover text-white px-4 py-2.5 rounded-xl font-heading font-bold text-xs transition-all shadow-sm flex-shrink-0 text-center ml-2"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile menu button (below 768px) */}
            <div className="md:hidden flex items-center gap-2 flex-shrink-0">
              <a
                href="tel:+9779768808890"
                className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/30"
                aria-label="Call center"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="w-10 h-10 rounded-xl bg-[#2B2D31] text-white flex items-center justify-center shadow-sm active:scale-95 transition-transform"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Menu Overlay (below 768px) */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-in Panel (from right) */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Panel Header */}
          <div className="bg-[#2B2D31] bg-grid-pattern-dark text-white p-4 border-b border-[#3F4147]">
            <div className="flex items-start justify-between gap-3 mb-4">
              <Link to="/" className="flex items-center gap-2 flex-shrink-0 min-w-0" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img src={logoImg} alt="Euro Training Center Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-heading font-extrabold text-sm leading-none text-white truncate">Euro Training Center</span>
                  <span className="text-[8px] text-primary font-bold tracking-widest uppercase mt-0.5">NEPAL | Career Institute</span>
                </div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-lg bg-[#35373C] text-white flex items-center justify-center border border-[#3F4147] flex-shrink-0 active:scale-95 transition-transform"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-3 rounded-xl bg-[#35373C] border border-[#3F4147]">
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">
                Updated 2026 Curriculum
              </span>
              <p className="text-xs text-white font-medium leading-snug">
                Explore AI for Office, Teachers, Educators & Global Freelancing.
              </p>
            </div>
          </div>

          {/* Panel Links */}
          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold transition-all active:scale-[0.98] ${
                  location.pathname === link.path
                    ? 'text-primary bg-green-50 border border-green-200 shadow-xs'
                    : 'text-[#2B2D31] hover:text-primary hover:bg-neutral-50 border border-transparent'
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                    link.badge === 'AI' || link.badge === 'QUIZ'
                      ? 'bg-primary text-white'
                      : link.badge === 'ADMIN'
                      ? 'bg-violet-600 text-white'
                      : 'bg-[#2B2D31] text-white'
                  }`}>
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Panel Footer */}
          <div className="border-t border-neutral-200 p-4 space-y-3 bg-[#F7F8F8]">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-neutral-200">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-extrabold text-[#2B2D31] block">Visit Our Institute</span>
                <span className="text-neutral-600 font-medium">Samakhusi, Kathmandu, Nepal</span>
              </div>
            </div>

            <a
              href="tel:+9779768808890"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center bg-[#2B2D31] text-white px-6 py-3.5 rounded-xl font-bold shadow-sm text-sm active:scale-[0.98] transition-transform"
            >
              <Phone className="w-4 h-4" />
              <span>Call: +977-9768808890</span>
            </a>

            <Link
              to="/programs"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-primary text-white px-6 py-3.5 rounded-xl font-bold shadow-md text-sm active:scale-[0.98] transition-transform block"
            >
              Explore All Programs & Enroll
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
