import React from 'react';
import { Building2, Briefcase, Award, Users, CheckCircle } from 'lucide-react';

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
    <div className="pt-16">
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">Our Services</h1>
          <p className="text-center mt-4 text-xl">Comprehensive solutions for all your construction needs</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="border rounded-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
                <Icon className="text-blue-600 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;