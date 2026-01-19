import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  Quote,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Lightbulb,
  Settings,
  HeartHandshake,
  Headphones
} from 'lucide-react';

// Import hero images
import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.jpg';
import hero3 from '../assets/hero-3.jpg';
import hero4 from '../assets/hero-4.jpg';
import hero5 from '../assets/hero-5.jpg';

// Import logo
import logo from '../assets/logo-AlAfzah.png';

// Import about images
import aboutQuality from '../assets/about-quality.jpg';
import aboutTeam from '../assets/about-team.jpg';
import aboutPlanning from '../assets/about-planning.jpg';

// Import service images
import serviceElectrical from '../assets/service-electrical.jpg';
import servicePlumbing from '../assets/service-plumbing.jpg';
import serviceHvac from '../assets/service-hvac.jpg';
import serviceFire from '../assets/service-fire.jpg';
import serviceCivil from '../assets/service-civil.jpg';
import serviceMaintenance from '../assets/service-maintenance.jpg';

// Import project images
import projectVilla from '../assets/project-villa.jpg';
import projectMep from '../assets/project-mep.jpg';
import projectOffice from '../assets/project-office.jpg';
import { getClients } from "../services/clientService";

// Hero images array
const heroImages = [hero1, hero2, hero3, hero4, hero5];

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
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

const Homepage = () => {
  const navigate = useNavigate();

  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-change background images
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Data
  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '20+', label: 'Team Members' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  const services = [
    { icon: Zap, title: 'Electrical Works', description: 'Complete electrical installations, power distribution, and smart systems', image: serviceElectrical },
    { icon: Droplets, title: 'Plumbing & Drainage', description: 'Expert plumbing systems, water supply, and drainage networks', image: servicePlumbing },
    { icon: Wind, title: 'HVAC Systems', description: 'Heating, ventilation, and air conditioning design & installation', image: serviceHvac },
    { icon: Flame, title: 'Fire Fighting', description: 'Fire alarms, sprinklers, and comprehensive safety solutions', image: serviceFire },
    { icon: Building2, title: 'Civil & Fitout', description: 'Construction, renovation, and premium interior fitout works', image: serviceCivil },
    { icon: Wrench, title: 'Maintenance', description: 'Preventive and corrective maintenance for all MEP systems', image: serviceMaintenance },
  ];

  const projects = [
    { id: 1, title: 'Industrial MEP Complex', category: 'Commercial', status: 'Completed', image: projectMep, description: 'Complete HVAC and mechanical systems installation' },
    { id: 2, title: 'Luxury Villa Estate', category: 'Residential', status: 'Completed', image: projectVilla, description: 'Premium waterfront villa with full MEP services' },
    { id: 3, title: 'Modern Office Fitout', category: 'Interior', status: 'In Progress', image: projectOffice, description: 'Contemporary workspace design and fitout' },
  ];

  const [clients, setClients] = useState([]);
  const [clientsLoading, setClientsLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await getClients();
        setClients(data.slice(0, 10)); // show only first 10
      } catch (error) {
        console.error("Failed to fetch clients:", error);
      } finally {
        setClientsLoading(false);
      }
    };

    fetchClients();
  }, []);




  const offerings = [
    { icon: Settings, title: 'Project Management', description: 'End-to-end project coordination and delivery' },
    { icon: Shield, title: 'Quality Assurance', description: 'Qatar construction standards and rigorous testing' },
    { icon: Lightbulb, title: 'Innovative Solutions', description: 'Cutting-edge technology and modern approaches' },
    { icon: HeartHandshake, title: 'Expert Consultation', description: 'Professional guidance from industry specialists' },
    { icon: Clock, title: 'Timely Delivery', description: 'On-schedule completion without compromise' },
    { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock assistance and maintenance' },
  ];

  return (
    <div className="overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
              style={{
                opacity: currentImageIndex === index ? 1 : 0,
                zIndex: currentImageIndex === index ? 1 : 0,
              }}
            >
              <img
                src={img}
                alt={`Hero background ${index + 1}`}
                className="w-full h-full object-cover"
                style={{
                  transform: `translateY(${scrollY * 0.15}px) scale(${1 + scrollY * 0.0002})`,
                }}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/90 z-10" />
          <div
            className="absolute inset-0 z-10 transition-opacity duration-1000"
            style={{
              background: 'radial-gradient(ellipse at 30% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 60%)',
              opacity: isTransitioning ? 0.5 : 1,
            }}
          />
        </div>

        <div className="absolute right-0 top-1/4 w-px h-32 bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-50 z-20" />
        <div className="absolute right-10 top-1/3 w-px h-48 bg-gradient-to-b from-transparent via-white/30 to-transparent z-20" />
        <div className="absolute left-10 bottom-1/4 w-20 h-20 border border-red-500/30 rounded-full z-20 animate-pulse" />
        <div className="absolute right-20 bottom-1/3 w-32 h-32 border border-white/10 rounded-full z-20" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 md:pt-36">
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <img
              src={logo}
              alt="Al-Afzah Group Logo"
              className="w-40 h-40 md:w-52 md:h-52 object-contain mx-auto drop-shadow-2xl"
            />
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="block">Construction</span>
            <span className="block">
              <span className="text-red-500">&amp;</span> MEP
            </span>
            <span className="block">Excellence</span>
          </h1>

          <p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            Leading construction and MEP services company in Qatar.
            Delivering exceptional quality and innovative solutions for over a decade.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in"
            style={{ animationDelay: '0.7s' }}
          >
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-red-700 hover:shadow-2xl hover:shadow-red-500/25 hover:-translate-y-1"
            >
              <span>View Our Projects</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-gray-900"
            >
              Get In Touch
            </Link>
          </div>

          <div className="flex gap-2 justify-center mb-12">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${currentImageIndex === index
                  ? 'w-8 bg-red-500'
                  : 'bg-white/40 hover:bg-white/60'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="animate-bounce">
            <div className="flex flex-col items-center gap-2 text-white/60">
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <ArrowDown className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* ABOUT PREVIEW SECTION - Bento Grid with Images */}
      {/* ============================================= */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-red-600 font-semibold tracking-wider uppercase text-sm mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Building Qatar's Future{' '}
              <span className="text-red-600">Since 2022</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Al-Afzah Group WLL is a leading construction and MEP services company
              committed to delivering exceptional quality and innovative solutions.
            </p>
          </AnimatedSection>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Image Card - Left */}
            <AnimatedSection delay={100} className="md:col-span-5 md:row-span-2">
              <div className="group relative h-full min-h-[400px] rounded-3xl overflow-hidden">
                <img src={aboutQuality} alt="Quality construction" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-semibold">Quality First</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Committed to Excellence
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Every project reflects our dedication to superior craftsmanship and attention to detail.
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 rounded-3xl transition-all duration-500" />
              </div>
            </AnimatedSection>

            {/* Stats Cards - Top Right */}
            <AnimatedSection delay={200} className="md:col-span-7">
              <div className="grid grid-cols-2 gap-4 h-full">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden ${i === 0 ? 'bg-red-600 text-white' : 'bg-gray-100'
                      }`}
                  >
                    <div className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl ${i === 0 ? 'bg-white/20' : 'bg-red-500/10'}`} />
                    <span className={`block text-4xl font-bold mb-1 ${i === 0 ? 'text-white' : 'text-gray-900'}`}>
                      {stat.number}
                    </span>
                    <span className={`text-sm ${i === 0 ? 'text-red-100' : 'text-gray-500'}`}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Values & Team Image - Bottom Right */}
            <AnimatedSection delay={300} className="md:col-span-3">
              <div className="group relative h-full min-h-[200px] rounded-2xl overflow-hidden">
                <img src={aboutTeam} alt="Our team" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Users className="w-6 h-6 text-red-400 mb-2" />
                  <h4 className="text-white font-semibold">Expert Team</h4>
                  <p className="text-gray-300 text-xs">20+ skilled professionals</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Vision/Mission Card */}
            <AnimatedSection delay={400} className="md:col-span-4">
              <div className="relative h-full p-6 bg-gray-900 rounded-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex gap-3 mb-4">
                    {[
                      { icon: Eye, label: 'Vision' },
                      { icon: Target, label: 'Mission' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full">
                        <item.icon className="w-4 h-4 text-red-400" />
                        <span className="text-white text-sm">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Shaping Tomorrow's Skyline
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Our vision is to be Qatar's most trusted construction partner, delivering projects that define the nation's future.
                  </p>
                </div>
                <button
                  onClick={() => navigate('/about')}
                  className="group relative z-10 mt-6 inline-flex items-center gap-2 text-red-500 font-semibold text-sm hover:text-red-400 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </AnimatedSection>
          </div>

          {/* Bottom Row - Planning Image + Values */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
            <AnimatedSection delay={500} className="md:col-span-4">
              <div className="group relative h-full min-h-[250px] rounded-2xl overflow-hidden">
                <img src={aboutPlanning} alt="Project planning" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Target className="w-6 h-6 text-red-400 mb-2" />
                  <h4 className="text-white font-semibold">Precise Planning</h4>
                  <p className="text-gray-300 text-xs">Meticulous attention to every detail</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={600} className="md:col-span-8">
              <div className="relative h-full p-8 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                  <div className="w-full h-full border-[20px] border-white rounded-full" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Al-Afzah?</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      'QCS-Aligned Quality Standards',
                      'On-Time Delivery',
                      'Experienced Engineers',
                      '24/7 Support',
                      'Competitive Pricing',
                      'Full Warranty'
                    ].map((item, i) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate('/about')}
                    className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-white text-red-600 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span>Discover Our Story</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SERVICES PREVIEW SECTION - With Image Cards */}
      {/* ============================================= */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-red-500 font-semibold tracking-wider uppercase text-sm mb-4">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive MEP <span className="text-red-500">&</span> Construction
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From design to commissioning, we provide end-to-end solutions for all your
              construction and MEP requirements.
            </p>
          </AnimatedSection>

          {/* Services Grid - Bento Style with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 100}>
                <div className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer">
                  <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 group-hover:from-red-900/90 group-hover:via-red-900/40" />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-12 h-12 bg-red-600/80 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-red-600 group-hover:scale-110">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      {service.description}
                    </p>
                    <div className="absolute bottom-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center opacity-0 translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      <ArrowRight className="w-5 h-5 text-white -rotate-45" />
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/30 rounded-2xl transition-all duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection delay={600} className="text-center">
            <button
              onClick={() => navigate('/services')}
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
              onClick={() => navigate('projects')}
              className="group inline-flex items-center gap-2 text-red-600 font-semibold"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </AnimatedSection>

          {/* Projects Grid - Bento Style with Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 150}>
                <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer" onClick={() => navigate('/projects')}>
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-all duration-500 group-hover:via-gray-900/60" />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-gray-900'
                      }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 mt-4 opacity-0 transform translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                      <span className="text-white font-semibold text-sm">View Project</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <ArrowRight className="w-5 h-5 text-white -rotate-45" />
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/30 rounded-2xl transition-all duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* WHAT WE OFFER SECTION - ENHANCED */}
      {/* ============================================= */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-red-600 font-semibold tracking-wider uppercase text-sm mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We <span className="text-red-600">Offer</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions backed by years of experience and industry expertise
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offer, index) => (
              <AnimatedSection key={offer.title} delay={index * 100}>
                <div className="group relative p-8 bg-white rounded-2xl border border-gray-200 transition-all duration-500 hover:border-red-500/30 hover:shadow-2xl hover:-translate-y-2">
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-red-600 group-hover:scale-110 group-hover:rotate-3">
                    <offer.icon className="w-8 h-8 text-red-600 transition-colors duration-500 group-hover:text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {offer.description}
                  </p>

                  {/* Arrow */}
                  <div className="absolute top-8 right-8 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center opacity-0 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-red-100">
                    <ArrowRight className="w-5 h-5 text-red-600" />
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-8 right-8 h-1 bg-red-600 rounded-full transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* CLIENTS SECTION - WITH ACTUAL LOGOS */}
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to partner with leading organizations across Qatar and the region
            </p>
          </AnimatedSection>

          {/* Clients Logo Grid */}
          {/* Clients Logo Grid */}
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">

              {clientsLoading ? (
                <div className="col-span-full text-center text-gray-400">
                  Loading clients...
                </div>
              ) : clients.length === 0 ? (
                <div className="col-span-full text-center text-gray-400">
                  No clients available
                </div>
              ) : (
                clients.map((client) => (
                  <div
                    key={client.id}
                    className="group relative bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-center h-32 transition-all duration-500 hover:shadow-xl hover:border-red-500/30 hover:-translate-y-2"
                  >
                    {client.logoUrl ? (
                      <img
                        src={client.logoUrl}
                        alt={client.name}
                        className="max-h-20 max-w-full object-contain filter grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                      />
                    ) : (
                      <span className="text-gray-500 font-semibold text-center">
                        {client.name}
                      </span>
                    )}
                  </div>
                ))
              )}


            </div>
          </AnimatedSection>


          {/* Testimonial */}
          <AnimatedSection delay={400} className="max-w-4xl mx-auto">
            <div className="relative bg-gray-50 rounded-3xl p-8 md:p-12">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed mb-8 mt-4">
                "Al-Afzah Group has consistently delivered exceptional quality in all our projects.
                Their professionalism, attention to detail, and commitment to timelines make them
                a trusted partner for any construction or MEP project."
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7 text-red-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Senior Project Manager</p>
                  <p className="text-gray-500">Major Construction Firm, Qatar</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={500} className="text-center mt-12">
            <button
              onClick={() => navigate('/clients')}
              className="group inline-flex items-center gap-2 text-red-600 font-semibold"
            >
              <span>View All Clients & Partners</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================= */}
      {/* CTA SECTION - ENHANCED */}
      {/* ============================================= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Red Accent */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-red-500 to-red-600" />

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-red-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 text-red-400 text-sm font-semibold tracking-wider uppercase rounded-full mb-6">
                Let's Build Together
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Ready to Start Your{' '}
                <span className="text-red-500">Next Project?</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
                Let's discuss how we can bring your vision to life with quality
                construction and MEP solutions tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-red-700 hover:shadow-2xl hover:shadow-red-500/25 hover:-translate-y-1"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <a
                  href="tel:+974 3080 6490"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us Now</span>
                </a>
              </div>
            </AnimatedSection>

            {/* Right Content - Contact Cards */}
            <AnimatedSection delay={200}>
              <div className="space-y-4">
                {/* Phone Card */}
                <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-red-500/30 hover:-translate-x-2">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Call us anytime</p>
                      <p className="text-2xl font-bold text-white">+974 3080 6490</p>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-red-500/30 hover:-translate-x-2">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Email us</p>
                      <p className="text-xl font-bold text-white">info@al-afzahgroup.com</p>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-red-500/30 hover:-translate-x-2">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Visit our office</p>
                      <p className="text-xl font-bold text-white">Office-04, Floor-01, Building-65</p>
                      <p className="text-xl font-bold text-white">Al Tawba Street, Muaither</p>
                    </div>
                  </div>
                </div>

                {/* Working Hours Card */}
                <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-red-500/30 hover:-translate-x-2">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Working Hours</p>
                      <p className="text-xl font-bold text-white">Sun - Thu: 8AM - 6PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style>{`
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