import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-AlAfzah.png';

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
            ? 'bg-background/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-gradient-to-b from-black/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Al-Afzah Group" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-display font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}>
                AL-AFZAH
              </span>
              <span className={`hidden md:block text-xs font-medium transition-colors duration-300 ${
                isScrolled ? 'text-muted-foreground' : 'text-white/70'
              }`}>
                GROUP WLL
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Classic Tabs */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`relative px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg group ${
                  location.pathname === item.path
                    ? isScrolled 
                      ? 'text-primary bg-primary/10' 
                      : 'text-white bg-white/10'
                    : isScrolled 
                      ? 'text-muted-foreground hover:text-foreground hover:bg-accent' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            to="/contact"
            className={`hidden lg:inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
              isScrolled
                ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25'
                : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-gray-900'
            }`}
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen 
                ? 'rotate-45 translate-y-2 bg-foreground' 
                : isScrolled ? 'bg-foreground' : 'bg-white'
            }`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen 
                ? 'opacity-0' 
                : isScrolled ? 'bg-foreground' : 'bg-white'
            }`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen 
                ? '-rotate-45 -translate-y-2 bg-foreground' 
                : isScrolled ? 'bg-foreground' : 'bg-white'
            }`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen pt-20 pb-10 px-6">
          <nav className="flex flex-col items-center gap-4">
            {menuItems.map((item, index) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-display font-semibold transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
                style={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-10 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-primary/90"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '300ms',
            }}
          >
            Get a Quote
          </Link>

          {/* Contact Info */}
          <div
            className="mt-10 text-center text-muted-foreground"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '350ms',
            }}
          >
            <p className="text-sm">info@al-afzahgroup.com</p>
            <p className="text-sm mt-1">Doha, Qatar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
