import React from 'react';
import { Award, Users, CheckCircle } from 'lucide-react';
import './Homepage.css';

const Homepage = ({ setCurrentPage }) => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Al Afza</h1>
            <p className="hero-subtitle">
              Your trusted partner in construction, contracting, and project management excellence
            </p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="hero-btn"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="features-container">
          <div className="features-grid">
            <div className="feature-card">
              <Award className="feature-icon" size={48} />
              <h3 className="feature-title">Quality Excellence</h3>
              <p className="feature-description">
                Delivering superior quality in every project we undertake
              </p>
            </div>
            
            <div className="feature-card">
              <Users className="feature-icon" size={48} />
              <h3 className="feature-title">Expert Team</h3>
              <p className="feature-description">
                Skilled professionals dedicated to your success
              </p>
            </div>
            
            <div className="feature-card">
              <CheckCircle className="feature-icon" size={48} />
              <h3 className="feature-title">Timely Delivery</h3>
              <p className="feature-description">
                Committed to meeting deadlines without compromising quality
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-subtitle">Let's build something amazing together</p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="cta-btn"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;