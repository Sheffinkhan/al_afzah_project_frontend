import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Navlogo.png';

const menuItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'clients', label: 'Clients', path: '/clients' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-gradient-to-b from-black/60 to-transparent py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group z-50">
            <img 
              src={logo} 
              alt="Al-Afzah Group" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform duration-300 group-hover:scale-105 translate-x-5 translate-y-1"
            />
            <div className="flex flex-col justify-center">
              <span className={`text-xl md:text-2xl  font-serif tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                AL-AFZAH
              </span>
              <span className={`hidden md:block text-xs font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/70'
              }`}>
                GROUP WLL
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`relative px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg group ${
                  location.pathname === item.path
                    ? isScrolled 
                      ? 'text-red-600 bg-red-50' 
                      : 'text-white bg-white/10'
                    : isScrolled 
                      ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            to="/contact"
            className={`hidden lg:inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
              isScrolled
                ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/25'
                : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-gray-900'
            }`}
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50 relative"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen 
                ? 'rotate-45 translate-y-2 bg-white' 
                : isScrolled ? 'bg-gray-900' : 'bg-white'
            }`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen 
                ? 'opacity-0' 
                : isScrolled ? 'bg-gray-900' : 'bg-white'
            }`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen 
                ? '-rotate-45 -translate-y-2 bg-white' 
                : isScrolled ? 'bg-gray-900' : 'bg-white'
            }`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Background with gradient - matching homepage theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900">
          {/* Decorative elements matching homepage style */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-px h-24 bg-gradient-to-b from-transparent via-red-500/50 to-transparent" />
          <div className="absolute top-1/3 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
          {/* Logo at top */}
          <div 
            className="mb-12"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'all 0.5s ease-out',
              transitionDelay: '0ms'
            }}
          >
            <img 
              src={logo} 
              alt="Al-Afzah Group" 
              className="w-20 h-20 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col items-center gap-6 mb-10">
            {menuItems.map((item, index) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl font-bold transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-red-500'
                    : 'text-white hover:text-red-400'
                }`}
                style={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease-out',
                  transitionDelay: `${(index + 1) * 50}ms`,
                }}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="block w-12 h-1 bg-red-500 rounded-full mx-auto mt-2" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA Button */}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-10 py-4 bg-red-600 text-white font-bold rounded-lg transition-all duration-300 hover:bg-red-700 hover:shadow-2xl hover:shadow-red-600/50 hover:-translate-y-1"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s ease-out',
              transitionDelay: '350ms',
            }}
          >
            Get a Quote
          </Link>

          {/* Contact Info */}
          <div
            className="mt-12 text-center"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s ease-out',
              transitionDelay: '400ms',
            }}
          >
            <div className="space-y-2">
              <p className="text-white/90 text-sm font-medium">info@al-afzahgroup.com</p>
              <p className="text-white/70 text-sm">Office-04, Floor-01, Building-65</p>
              <p className="text-white/70 text-sm">Al Tawba Street, Muaither, Qatar</p>
            </div>
            
            {/* Decorative line */}
            <div className="mt-6 w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto" />
          </div>

          {/* Bottom tagline */}
          <div
            className="absolute bottom-8 left-0 right-0 text-center"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transition: 'all 0.5s ease-out',
              transitionDelay: '450ms',
            }}
          >
            <p className="text-white/50 text-xs tracking-widest uppercase">
              Building Qatar's Future
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;