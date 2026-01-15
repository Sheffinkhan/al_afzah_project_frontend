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

              {/* Instagram */}
              <a
                href="https://www.instagram.com/alafzahgroup.qa?igsh=MWp3cHM4OGhvdG45bw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5C5.82 3.5 4.5 4.82 4.5 6.75v10.5c0 1.93 1.32 3.25 3.25 3.25h10.5c1.93 0 3.25-1.32 3.25-3.25V6.75c0-1.93-1.32-3.25-3.25-3.25H7.75zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.88a1.13 1.13 0 100 2.26 1.13 1.13 0 000-2.26z" />
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
                  href="tel:+974 3080 6490"
                  className="flex items-start gap-3 text-gray-400 transition-colors duration-300 hover:text-primary group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 mb-0.5">Phone</span>
                    <span className="text-white">+974 3080 6490</span>
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
