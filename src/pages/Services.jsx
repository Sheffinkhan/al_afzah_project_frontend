import React from 'react';
import { Building2, Briefcase, Award, Users, CheckCircle } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'General Contracting',
      description: 'Comprehensive contracting services for residential and commercial projects',
      icon: Building2
    },
    {
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely and quality delivery',
      icon: Briefcase
    },
    {
      title: 'Design & Build',
      description: 'Integrated design and construction services for seamless project execution',
      icon: Award
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our expert renovation services',
      icon: Building2
    },
    {
      title: 'Consultation',
      description: 'Expert advice and guidance for your construction projects',
      icon: Users
    },
    {
      title: 'Maintenance Services',
      description: 'Ongoing maintenance and support for your properties',
      icon: CheckCircle
    }
  ];

  return (
    <div className="services-page">
      <div className="page-header">
        <div className="page-header-container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">Comprehensive solutions for all your construction needs</p>
        </div>
      </div>

      <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-card">
                <Icon className="service-icon" size={48} />
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;