import React from 'react';
import { Eye, Target, ChevronRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">About Al Afzah</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Overview */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Al Afzah is a leading construction and contracting company committed to delivering 
            exceptional quality and innovative solutions. With years of experience in the industry, 
            we have established ourselves as a trusted partner for diverse construction projects.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-lg">
            <Eye className="text-blue-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be the most trusted and innovative construction company, setting industry 
              standards for quality, safety, and customer satisfaction while contributing 
              to sustainable development.
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg">
            <Target className="text-blue-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To deliver exceptional construction solutions through innovation, expertise, 
              and unwavering commitment to quality. We strive to exceed client expectations 
              while maintaining the highest standards of safety and sustainability.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Comprehensive Project Management',
              'Quality Construction Services',
              'Innovative Design Solutions',
              'Expert Consultation',
              'Timely Project Delivery',
              'Post-Construction Support'
            ].map((offer, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-3 p-4 border rounded-lg hover:shadow-md transition"
              >
                <ChevronRight className="text-blue-600 flex-shrink-0" size={24} />
                <span className="text-gray-700">{offer}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Integrity', 'Excellence', 'Innovation', 'Commitment'].map((value, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition transform hover:-translate-y-1"
              >
                <h4 className="text-xl font-semibold text-blue-600">{value}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
