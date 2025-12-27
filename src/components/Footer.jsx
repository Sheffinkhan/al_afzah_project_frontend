import React from 'react';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <Building2 size={28} />
              <span className="footer-logo-text">Al Afza</span>
            </div>
            <p className="footer-description">
              Building excellence through quality construction and innovative design solutions.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>About Us</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <Phone size={16} />
                <span>+971 XX XXX XXXX</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@alafza.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Al Afzah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;