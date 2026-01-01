import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Projects', page: 'projects' },
    { name: 'Clients', page: 'clients' },
    { name: 'Contact', page: 'contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', url: '#' },
    { name: 'Facebook', url: '#' },
    { name: 'LinkedIn', url: '#' },
  ];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-gray-900/95 backdrop-blur-md py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="cursor-pointer z-50"
              onClick={() => handleNavClick('home')}
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Al-Afzah
              </h1>
              <p className="text-xs text-gray-400 tracking-widest uppercase">
                Group WLL
              </p>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="relative z-50 w-10 h-10 flex flex-col items-end justify-center gap-1.5 group"
              aria-label="Open menu"
            >
              <span className="block w-8 h-0.5 bg-white transition-all duration-300 group-hover:w-6" />
              <span className="block w-6 h-0.5 bg-white transition-all duration-300 group-hover:w-8" />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-700 ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Dark Background */}
        <div
          className={`absolute inset-0 bg-gray-950 transition-opacity duration-700 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Menu Content */}
        <div
          className={`relative z-10 h-full flex flex-col transition-all duration-700 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Header */}
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div
                className="cursor-pointer"
                onClick={() => handleNavClick('home')}
              >
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Al-Afzah
                </h1>
                <p className="text-xs text-gray-400 tracking-widest uppercase">
                  Group WLL
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-white hover:text-red-500 transition-colors duration-300"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex items-center justify-center">
            <nav className="text-center">
              {navLinks.map((link, index) => (
                <div
                  key={link.page}
                  className={`overflow-hidden transition-all duration-700 ${
                    isMenuOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 80}ms` : '0ms',
                  }}
                >
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className={`block py-3 md:py-4 text-3xl md:text-5xl font-semibold transition-all duration-300 hover:text-red-500 ${
                      currentPage === link.page
                        ? 'text-white'
                        : 'text-gray-400'
                    }`}
                    style={{
                      transform: isMenuOpen ? 'translateY(0)' : 'translateY(100%)',
                      transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 80}ms`,
                    }}
                  >
                    {link.name}
                  </button>
                </div>
              ))}
            </nav>
          </div>

          {/* Footer with Social Links */}
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-end">
              <div className="flex items-center gap-6 md:gap-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-yellow-500 hover:text-yellow-400 transition-colors duration-300 tracking-wider uppercase"
                    style={{
                      opacity: isMenuOpen ? 1 : 0,
                      transition: `opacity 0.5s ease ${(navLinks.length + index) * 80}ms`,
                    }}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;