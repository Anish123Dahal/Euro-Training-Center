import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
      {/* Top Banner - Sleek Dark Palette */}
      <div className="hidden sm:block bg-[#2B2D31] text-white border-b border-[#3F4147] py-2.5 text-xs font-medium relative z-50">
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
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3 sm:top-0' : 'bg-white py-3 sm:top-8 border-b border-neutral-200/70'
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="w-10 h-10 bg-white border border-neutral-200 rounded-xl flex items-center justify-center shadow-xs overflow-hidden">
                <img src={logoImg} alt="Euro Training Center Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg leading-none text-[#2B2D31] tracking-tight">Euro Training Center</span>
                <span className="text-[9px] text-primary font-bold tracking-widest uppercase mt-0.5">NEPAL | Career Institute</span>
              </div>
            </Link>

            {/* Desktop Navigation - Compact & Balanced */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
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

            {/* Mobile / Tablet menu button */}
            <div className="lg:hidden flex items-center gap-2">
              <Link 
                to="/quiz" 
                className="bg-primary text-white px-3 py-1.5 rounded-full text-[11px] font-bold shadow-xs"
              >
                Career Quiz
              </Link>
              <Link 
                to="/verify" 
                className="bg-[#2B2D31] text-white px-3 py-1.5 rounded-full text-[11px] font-bold shadow-xs"
              >
                Verify ID
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#2B2D31] hover:text-primary focus:outline-none p-1.5 rounded-lg bg-neutral-100 border border-neutral-200"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200 absolute top-full w-full shadow-2xl animate-slide-up">
            <div className="px-4 pt-3 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
              <div className="p-3 rounded-xl bg-neutral-100 border border-neutral-200 mb-3">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">Updated 2026 Curriculum</span>
                <p className="text-xs text-[#2B2D31] font-medium">Explore AI for Office, Teachers, Educators & Global Freelancing.</p>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    location.pathname === link.path ? 'text-primary bg-green-50 border border-green-200 shadow-xs' : 'text-[#2B2D31] hover:text-primary hover:bg-neutral-50'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                      link.badge === 'AI' ? 'bg-primary text-white' : 'bg-[#2B2D31] text-white'
                    }`}>
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
              <div className="pt-2 border-t border-neutral-200 flex flex-col gap-2">
                <Link 
                  to="/programs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-primary text-white px-6 py-3.5 rounded-xl font-bold shadow-md text-sm"
                >
                  Explore All Programs & Enroll
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
