import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo-AlAfzah.png';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Clients', path: '/clients' },
    { label: 'Contact', path: '/contact' },
  ];

  const services = [
    'MEP Services',
    'HVAC Systems',
    'Electrical Works',
    'Plumbing & Drainage',
    'Fire Fighting',
    'Cleaning Services',
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <img
                src={logo}
                alt="Al-Afzah Group"
                className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <span className="block text-2xl font-display font-bold text-white">
                  AL-AFZAH
                </span>
                <span className="block text-xs font-medium text-white/60 tracking-wider">
                  GROUP WLL
                </span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Building Trust With Quality Work. Your trusted partner in construction, 
              MEP services, and facility management in Qatar.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110"
              >
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-gray-400 transition-colors duration-300 hover:text-primary"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+97444444444"
                  className="flex items-start gap-3 text-gray-400 transition-colors duration-300 hover:text-primary group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 mb-0.5">Phone</span>
                    <span className="text-white">+974 XXXX XXXX</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@al-afzahgroup.com"
                  className="flex items-start gap-3 text-gray-400 transition-colors duration-300 hover:text-primary group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 mb-0.5">Email</span>
                    <span className="text-white">info@al-afzahgroup.com</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 mb-0.5">Location</span>
                    <span className="block text-white whitespace-nowrap">
                      Office-04, Floor-01, Building-65
                    </span>

                    <span className="block text-white whitespace-nowrap">
                      Al Tawba Street, Muaither
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Al-Afzah Group WLL. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Building Trust With Quality Work
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
