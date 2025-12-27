import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="page-header-container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Get in touch with our team</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="section-heading">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="form-input form-textarea"
                  rows="5"
                />
              </div>
              <button type="submit" className="submit-btn-contact">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <h2 className="section-heading">Contact Information</h2>
            <div className="contact-info-list">
              <div className="info-item">
                <MapPin className="info-icon" size={24} />
                <div>
                  <h3 className="info-title">Address</h3>
                  <p className="info-text">Dubai, United Arab Emirates</p>
                </div>
              </div>
              
              <div className="info-item">
                <Phone className="info-icon" size={24} />
                <div>
                  <h3 className="info-title">Phone</h3>
                  <p className="info-text">+971 XX XXX XXXX</p>
                </div>
              </div>
              
              <div className="info-item">
                <Mail className="info-icon" size={24} />
                <div>
                  <h3 className="info-title">Email</h3>
                  <p className="info-text">info@alafza.com</p>
                </div>
              </div>
            </div>

            <div className="business-hours">
              <h3 className="info-title">Business Hours</h3>
              <p className="hours-text">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="hours-text">Saturday: 9:00 AM - 2:00 PM</p>
              <p className="hours-text">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;