import React from 'react';
import { Award, Users, CheckCircle } from 'lucide-react';

const Homepage = ({ setCurrentPage }) => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Al Afzah</h1>
            <p className="hero-subtitle">
              Your trusted partner in construction, contracting, and project management excellence
            </p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition transform hover:-translate-y-1">
            <Award className="mx-auto text-blue-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Quality Excellence</h3>
            <p className="text-gray-600">Delivering superior quality in every project we undertake</p>
          </div>
          
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition transform hover:-translate-y-1">
            <Users className="mx-auto text-blue-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">Skilled professionals dedicated to your success</p>
          </div>
          
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition transform hover:-translate-y-1">
            <CheckCircle className="mx-auto text-blue-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
            <p className="text-gray-600">Committed to meeting deadlines without compromising quality</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's build something amazing together</p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:-translate-y-1 hover:shadow-lg"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;