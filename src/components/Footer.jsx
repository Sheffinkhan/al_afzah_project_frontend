import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Clock
} from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Projects', page: 'projects' },
    { name: 'Clients', page: 'clients' },
    { name: 'Contact', page: 'contact' },
  ];

  const services = [
    'Electrical Works',
    'Plumbing & Drainage',
    'HVAC Systems',
    'Fire Fighting',
    'Civil & Fitout',
    'Maintenance',
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Doha, Qatar', href: '#' },
    { icon: Phone, text: '+974 XXXX XXXX', href: 'tel:+974XXXXXXXX' },
    { icon: Mail, text: 'info@al-afzahgroup.com', href: 'mailto:info@al-afzahgroup.com' },
    { icon: Clock, text: 'Sun - Thu: 8AM - 6PM', href: null },
  ];

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Al-Afzah
              </h2>
              <p className="text-xs text-gray-500 tracking-widest uppercase">
                Group WLL
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Leading construction and MEP services company in Qatar, committed to 
              delivering exceptional quality and innovative solutions since 2009.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg text-gray-400 transition-all duration-300 hover:bg-red-600 hover:text-white hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-red-600" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => setCurrentPage(link.page)}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-red-600" />
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => setCurrentPage('services')}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-red-600" />
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div className="flex-1 pt-2">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-400">{item.text}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Al-Afzah Group WLL. All rights reserved.
            </p>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm">
              <button className="text-gray-500 hover:text-red-500 transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-gray-500 hover:text-red-500 transition-colors duration-300">
                Terms of Service
              </button>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors duration-300"
            >
              <span className="text-sm hidden md:inline">Back to top</span>
              <div className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-lg transition-all duration-300 group-hover:border-red-500 group-hover:-translate-y-1">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
