import React from 'react';
import { Eye, Target, ChevronRight } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="page-header">
        <div className="page-header-container">
          <h1 className="page-title">About Al Afza</h1>
        </div>
      </div>

      <div className="aboutus-container">
        {/* Company Overview */}
        <div className="company-overview">
          <h2 className="section-title">Who We Are</h2>
          <p className="overview-text">
            Al Afzah is a leading construction and contracting company committed to delivering 
            exceptional quality and innovative solutions. With years of experience in the industry, 
            we have established ourselves as a trusted partner for diverse construction projects.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="vision-mission-grid">
          <div className="vision-card">
            <Eye className="vm-icon" size={40} />
            <h3 className="vm-title">Our Vision</h3>
            <p className="vm-text">
              To be the most trusted and innovative construction company, setting industry 
              standards for quality, safety, and customer satisfaction while contributing 
              to sustainable development.
            </p>
          </div>
          
          <div className="mission-card">
            <Target className="vm-icon" size={40} />
            <h3 className="vm-title">Our Mission</h3>
            <p className="vm-text">
              To deliver exceptional construction solutions through innovation, expertise, 
              and unwavering commitment to quality. We strive to exceed client expectations 
              while maintaining the highest standards of safety and sustainability.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="what-we-offer">
          <h2 className="section-title">What We Offer</h2>
          <div className="offers-grid">
            {[
              'Comprehensive Project Management',
              'Quality Construction Services',
              'Innovative Design Solutions',
              'Expert Consultation',
              'Timely Project Delivery',
              'Post-Construction Support'
            ].map((offer, index) => (
              <div key={index} className="offer-item">
                <ChevronRight className="offer-icon" size={24} />
                <span className="offer-text">{offer}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="core-values">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {['Integrity', 'Excellence', 'Innovation', 'Commitment'].map((value, index) => (
              <div key={index} className="value-card">
                <h4 className="value-name">{value}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;