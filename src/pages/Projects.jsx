import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Building2, Home, Briefcase, Filter } from 'lucide-react';

// Import project images
import projectVilla from '../assets/project-villa.jpg';
import projectMep from '../assets/project-mep.jpg';
import projectOffice from '../assets/project-office.jpg';

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

// Animated Section Component
const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

const CATEGORY_FILTERS = [
  { id: 'All', label: 'All Projects', icon: Filter },
  { id: 'Residential', label: 'Residential', icon: Home },
  { id: 'Commercial', label: 'Commercial', icon: Building2 },
  { id: 'Interior', label: 'Interior', icon: Briefcase },
];

const defaultProjects = [
  { 
    id: 1, 
    title: 'Commercial Tower MEP', 
    category: 'Commercial', 
    status: 'Completed',
    description: 'Complete MEP installation for a 25-story commercial tower including HVAC, electrical, and plumbing systems.',
    image: projectMep,
    date: '2023'
  },
  { 
    id: 2, 
    title: 'Luxury Villa Complex', 
    category: 'Residential', 
    status: 'Completed',
    description: 'Full construction and MEP services for premium residential villas with modern amenities.',
    image: projectVilla,
    date: '2024'
  },
  { 
    id: 3, 
    title: 'Corporate Office Fitout', 
    category: 'Interior', 
    status: 'In Progress',
    description: 'High-end office fitout with smart building systems and contemporary design.',
    image: projectOffice,
    date: '2024'
  },
];

const Projects = ({ projects = defaultProjects, isAdmin }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.1),transparent_50%)]" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 py-20">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full text-red-400 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4 inline mr-2" />
              Our Portfolio
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Showcasing our commitment to precision, quality craftsmanship, and innovative solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 px-6 md:px-12 lg:px-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {CATEGORY_FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                      : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-red-600/50 hover:text-white'
                  }`}
                >
                  <filter.icon className="w-4 h-4" />
                  {filter.label}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, i) => (
                <AnimatedSection key={project.id} delay={i * 100}>
                  <div className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer">
                    {/* Background Image */}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
                    <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-colors duration-500" />
                    
                    {/* Badges */}
                    <div className="absolute top-6 left-6 flex gap-2">
                      <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full text-xs font-medium text-gray-300">
                        {project.category}
                      </span>
                      <span className={`px-3 py-1 backdrop-blur-sm rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-600/80 text-green-100' 
                          : 'bg-yellow-600/80 text-yellow-100'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-8">
                      {/* Year */}
                      <span className="text-red-400 text-sm font-medium mb-2 block">
                        {project.date}
                      </span>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors">
                        {project.title}
                      </h3>
                      
                      {/* Description - Revealed on Hover */}
                      <p className="text-gray-400 text-sm leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 mb-4">
                        {project.description}
                      </p>
                      
                      {/* View Details Link */}
                      <div className="flex items-center gap-2 text-red-400 font-medium text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    
                    {/* Arrow Icon */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:bg-red-600">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection>
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-gray-600" />
                </div>
                <p className="text-gray-400 text-lg">
                  No projects available in this category.
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '500+', label: 'Projects Completed' },
                { number: '15+', label: 'Years Experience' },
                { number: '200+', label: 'Team Members' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-8 bg-gray-900 border border-gray-800 rounded-2xl">
                  <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative p-10 md:p-16 bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden text-center">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600/5 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Have a Project in Mind?
                </h3>
                <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                  Let's discuss how we can bring your vision to life with our expertise 
                  in construction and MEP solutions.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-red-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-600/25"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Projects;
