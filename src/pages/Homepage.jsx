import React, { useEffect, useRef, useState } from 'react';
import { 
  Award, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  ArrowDown,
  Zap,
  Droplets,
  Wind,
  Flame,
  Building2,
  Wrench,
  Eye,
  Target,
  ChevronRight,
  Quote,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

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
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

const Homepage = ({ setCurrentPage }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Data
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Team Members' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  const services = [
    { icon: Zap, title: 'Electrical Works', description: 'Complete electrical installations and systems' },
    { icon: Droplets, title: 'Plumbing & Drainage', description: 'Expert plumbing and drainage solutions' },
    { icon: Wind, title: 'HVAC Systems', description: 'Heating, ventilation, and air conditioning' },
    { icon: Flame, title: 'Fire Fighting', description: 'Fire alarm and fire fighting systems' },
    { icon: Building2, title: 'Civil & Fitout', description: 'Construction and interior fitout works' },
    { icon: Wrench, title: 'Maintenance', description: 'Preventive and corrective maintenance' },
  ];

  const projects = [
    { id: 1, title: 'Commercial Tower MEP', category: 'Commercial', status: 'Completed' },
    { id: 2, title: 'Luxury Villa Complex', category: 'Residential', status: 'Completed' },
    { id: 3, title: 'Office Fitout Project', category: 'Interior', status: 'In Progress' },
  ];

  const clients = [
    'Qatar Petroleum', 'Ashghal', 'Kahramaa', 
    'Qatar Rail', 'Msheireb Properties', 'Qatar Foundation'
  ];

  const offerings = [
    'Comprehensive Project Management',
    'Quality Construction Services',
    'Innovative Design Solutions',
    'Expert Consultation',
    'Timely Project Delivery',
    'Post-Construction Support'
  ];

  return (
    <div className="overflow-hidden">
      {/* ============================================= */}
      {/* HERO SECTION */}
      {/* ============================================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.7), rgba(20, 20, 20, 0.9)), 
              url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-red-600/20" />
        
        {/* Decorative Elements */}
        <div className="absolute right-0 top-1/4 w-px h-32 bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-50" />
        <div className="absolute right-10 top-1/3 w-px h-48 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        <div className="absolute left-10 bottom-1/4 w-20 h-20 border border-red-500/30 rounded-full" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Tagline */}
          <div 
            className="mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="inline-block px-6 py-2 bg-red-600/20 backdrop-blur-sm border border-red-500/30 text-white text-sm font-medium tracking-widest uppercase rounded-full">
              Building Trust With Quality Work
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="block">Construction</span>
            <span className="block">
              <span className="text-red-500">&amp;</span> MEP
            </span>
            <span className="block">Excellence</span>
          </h1>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            Leading construction and MEP services company in Qatar. 
            Delivering exceptional quality and innovative solutions for over a decade.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <button
              onClick={() => setCurrentPage('projects')}
              className="group inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-red-700 hover:shadow-2xl hover:shadow-red-500/25 hover:-translate-y-1"
            >
              <span>View Our Projects</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-gray-900"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* ABOUT PREVIEW SECTION */}
      {/* ============================================= */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <AnimatedSection>
              <span className="inline-block text-red-600 font-semibold tracking-wider uppercase text-sm mb-4">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Building Qatar's Future{' '}
                <span className="text-red-600">Since 2009</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Al-Afzah Group WLL is a leading construction and MEP services company 
                committed to delivering exceptional quality and innovative solutions. 
                With years of experience in the industry, we have established ourselves 
                as a trusted partner for diverse construction projects across Qatar.
              </p>

              {/* Values Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Eye, label: 'Vision', desc: 'Industry leaders' },
                  { icon: Target, label: 'Mission', desc: 'Excellence first' },
                  { icon: Award, label: 'Values', desc: 'Integrity always' },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="p-4 bg-gray-50 rounded-xl group hover:bg-red-50 transition-all duration-300"
                  >
                    <item.icon className="w-6 h-6 text-red-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">{item.label}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage('about')}
                className="group inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all duration-300"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </AnimatedSection>

            {/* Right Column - Stats */}
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                      i === 0 ? 'bg-red-600 text-white' : 'bg-gray-100'
                    }`}
                  >
                    <span className={`block text-4xl md:text-5xl font-bold mb-2 ${
                      i === 0 ? 'text-white' : 'text-gray-900'
                    }`}>
                      {stat.number}
                    </span>
                    <span className={`text-sm md:text-base ${
                      i === 0 ? 'text-red-100' : 'text-gray-500'
                    }`}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SERVICES PREVIEW SECTION */}
      {/* ============================================= */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-red-500 font-semibold tracking-wider uppercase text-sm mb-4">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive MEP <span className="text-red-500">&amp;</span> Construction Services
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From design to commissioning, we provide end-to-end solutions for all your 
              construction and MEP requirements.
            </p>
          </AnimatedSection>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 100}>
                <div className="group relative p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl transition-all duration-500 hover:bg-red-600/10 hover:border-red-500/50 hover:-translate-y-2">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                      <service.icon className="w-7 h-7 text-red-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="absolute top-6 right-6 w-5 h-5 text-gray-600 transition-all duration-300 group-hover:text-red-500 group-hover:translate-x-1" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection delay={600} className="text-center">
            <button
              onClick={() => setCurrentPage('services')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-red-700 hover:shadow-2xl hover:shadow-red-500/25 hover:-translate-y-1"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================= */}
      {/* PROJECTS PREVIEW SECTION */}
      {/* ============================================= */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="inline-block text-red-600 font-semibold tracking-wider uppercase text-sm mb-4">
                Our Projects
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Featured <span className="text-red-600">Work</span>
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('projects')}
              className="group inline-flex items-center gap-2 text-red-600 font-semibold"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 150}>
                <div className="group cursor-pointer" onClick={() => setCurrentPage('projects')}>
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-gray-200">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-${
                          i === 0 ? '1486406146926-c627a92ad1ab' : 
                          i === 1 ? '1503387762-592deb58ef4e' : 
                          '1497366216548-37526070297c'
                        }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    
                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                      {project.category}
                    </span>

                    {/* Status Badge */}
                    <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-gray-900'
                    }`}>
                      {project.status}
                    </span>

                    {/* Hover Arrow */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      <ArrowRight className="w-5 h-5 text-white -rotate-45" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-500">
                    Complete MEP and civil works for premium development
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* WHAT WE OFFER SECTION */}
      {/* ============================================= */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-red-600 font-semibold tracking-wider uppercase text-sm mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We <span className="text-red-600">Offer</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {offerings.map((offer, index) => (
              <AnimatedSection key={offer} delay={index * 100}>
                <div className="flex items-center gap-3 p-5 bg-white rounded-xl border border-gray-200 hover:border-red-500/50 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="text-gray-900 font-medium">{offer}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* CLIENTS PREVIEW SECTION */}
      {/* ============================================= */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-red-600 font-semibold tracking-wider uppercase text-sm mb-4">
              Our Clients
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by <span className="text-red-600">Industry Leaders</span>
            </h2>
          </AnimatedSection>

          {/* Clients Grid */}
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
              {clients.map((client, i) => (
                <div
                  key={client}
                  className="group flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-red-500/30 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mb-3 group-hover:bg-red-100 transition-colors duration-300">
                    <Building2 className="w-7 h-7 text-gray-400 group-hover:text-red-600 transition-colors duration-300" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 text-center">
                    {client}
                  </h4>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Testimonial */}
          <AnimatedSection delay={400} className="max-w-3xl mx-auto text-center">
            <Quote className="w-12 h-12 text-red-200 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed mb-6">
              "Al-Afzah Group has consistently delivered exceptional quality in all our projects. 
              Their professionalism and attention to detail make them a trusted partner."
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900">Senior Project Manager</p>
              <p className="text-sm text-gray-500">Major Construction Firm</p>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={500} className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('clients')}
              className="group inline-flex items-center gap-2 text-red-600 font-semibold"
            >
              <span>View All Clients</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================= */}
      {/* CTA SECTION */}
      {/* ============================================= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-lg md:text-xl text-red-100 mb-8 max-w-lg">
                Let's discuss how we can bring your vision to life with quality 
                construction and MEP solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-600 font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="tel:+97444444444"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us Now</span>
                </a>
              </div>
            </AnimatedSection>

            {/* Right Content - Contact Cards */}
            <AnimatedSection delay={200} className="space-y-4">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-red-100 mb-1">Call us</p>
                    <p className="text-lg font-semibold text-white">+974 XXXX XXXX</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-red-100 mb-1">Email us</p>
                    <p className="text-lg font-semibold text-white">info@al-afzahgroup.com</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-red-100 mb-1">Visit us</p>
                    <p className="text-lg font-semibold text-white">Doha, Qatar</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Homepage;
