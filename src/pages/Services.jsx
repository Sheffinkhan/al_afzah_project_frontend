import React, { useEffect, useRef, useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp, Zap, Droplets, Wind, Flame, Building2, Wrench, ArrowRight, Sparkles } from "lucide-react";

// Import service images
import serviceElectrical from '../assets/service-electrical.jpg';
import servicePlumbing from '../assets/service-plumbing.jpg';
import serviceHvac from '../assets/service-hvac.jpg';
import serviceFire from '../assets/service-fire.jpg';
import serviceCivil from '../assets/service-civil.jpg';
import serviceMaintenance from '../assets/service-maintenance.jpg';

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
          observer.unobserve(entry.target); // optional: animate once
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
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
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

const services = [
  { 
    icon: Zap, 
    title: 'Electrical Works', 
    description: 'Complete electrical installations, LV systems, UPS, transformers, and ELV solutions',
    image: serviceElectrical
  },
  { 
    icon: Droplets, 
    title: 'Plumbing & Drainage', 
    description: 'Expert plumbing, drainage systems, water treatment, and sanitary installations',
    image: servicePlumbing
  },
  { 
    icon: Wind, 
    title: 'HVAC Systems', 
    description: 'Heating, ventilation, air conditioning, and building management systems',
    image: serviceHvac
  },
  { 
    icon: Flame, 
    title: 'Fire Fighting', 
    description: 'Fire alarm systems, sprinklers, FM200, and emergency response solutions',
    image: serviceFire
  },
  { 
    icon: Building2, 
    title: 'Civil & Fitout', 
    description: 'Construction, interior fitout, flooring, partitions, and finishing works',
    image: serviceCivil
  },
  { 
    icon: Wrench, 
    title: 'Maintenance', 
    description: 'Preventive and corrective maintenance for all building systems',
    image: serviceMaintenance
  },
];

const serviceDetails = [
  {
    title: "Design & Engineering",
    description: "AL AFZAH TRADING, CONTRACTING & CLEANING W.L.L has a separate team for providing drafting, designing, preparing shop drawings, as-built drawings etc.",
    items: [
      "Heat Load Calculation",
      "ESP Calculation",
      "Pump Head Calculation",
      "Pipe Size Calculation",
      "Duct Size Calculation",
      "Lux Calculation",
      "Electrical Load Calculation",
      "Equipment Selection",
    ],
  },
  {
    title: "Electrical System",
    description: "We perform specialized construction and industrial electrical work related to design, installation and maintenance of Electrical systems.",
    items: [
      "LV: Small Power - Switch/Socket/Isolator",
      "Electrical Panel - LV/CUTOUT/MSB/SMSB/BD/MCC/ATS Panel",
      "UPS & Transformers",
      "Cabling & Containments",
      "Internal & External Lighting",
      "ELV: CCTV & Security Systems",
      "Fire Alarm System & FO Cabling",
      "Building Management Systems (BMS)",
    ],
  },
  {
    title: "Fire Alarm & Fire Fighting",
    description: "Supply, Installation, Testing and Commissioning of Fire Sprinklers, fire hose reels, landing valves, pump sets, FM200, Deluge systems.",
    items: [
      "Fire Sprinklers & Hose Reels",
      "Landing Valves & Pump Sets",
      "FM200 & Deluge Systems",
      "Fire Alarm Systems",
      "Central Emergency & Exit Systems",
      "Preventive Maintenance",
      "Sensitivity Testing",
    ],
  },
  {
    title: "HVAC System",
    description: "Heat Load Calculation, selection of equipment, Design and Energy Conservation including AC systems from 100-3500 TR central plants.",
    items: [
      "Chilled Water System",
      "Piping Network",
      "Equipment: AHU, Package Unit, FCU",
      "Ventilation Systems",
      "Staircase Pressurization",
      "Ducting & Accessories",
      "Smoke Management Systems",
      "Air & Water Balancing",
    ],
  },
  {
    title: "Plumbing & Drainage",
    description: "Complete plumbing works including Underground/Aboveground Drainage Systems, pipes, fittings, floor drains, and water systems.",
    items: [
      "Underground/Aboveground Drainage",
      "Sewage & Storm Water Lifting",
      "Domestic Cold & Hot Water",
      "Water Transfer & Booster Pumps",
      "Water Heaters",
      "Water Filtration & Treatment",
      "Sanitary Fixtures Installation",
    ],
  },
  {
    title: "Civil & Fit-out Works",
    description: "Outdoor civil & structural maintenance services, road maintenance, landscaping, and interior finishing works.",
    items: [
      "Block Work & Plaster Work",
      "Concrete Work & Foundations",
      "Gypsum Board & Partitions",
      "Stainless Steel & Glass Works",
      "Wood & Parquet Flooring",
      "Marble & All Flooring Works",
      "Paint & Finishes",
    ],
  },
  {
    title: "Cleaning & Soft Services",
    description: "Science-based cleaning services aimed at keeping employees safe and protected against infectious diseases.",
    items: [
      "Housekeeping & Cleaning",
      "Hygiene & Janitorial Services",
      "Post Construction Cleaning",
      "Deep Cleaning",
      "Premises Management",
      "Materials & Stores",
      "Disinfection Services",
    ],
  },
];

const ServiceCard = ({ service, isExpanded, onToggle }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 hover:border-red-600/50 rounded-2xl transition-all duration-300 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between gap-4 group"
      >
        <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-red-400 transition-colors">{service.title}</h3>
        <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
          {isExpanded ? (
            <ChevronUp className="text-red-500" size={20} />
          ) : (
            <ChevronDown className="text-red-500" size={20} />
          )}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <p className="text-gray-400 leading-relaxed mb-6">
            {service.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
                <CheckCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent_50%)]" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        
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
              <Sparkles className="w-4 h-4 inline mr-2" />
              What We Do
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Being one of the leading companies in Qatar, we offer comprehensive
              MEP & Fit-out services with experienced technical teams delivering
              complete solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full text-red-400 text-sm font-medium mb-4">
                Core Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Comprehensive <span className="text-red-500">Solutions</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                  {/* Background Image */}
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
                  <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-colors duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-red-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-all duration-500">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-100 transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Description - Revealed on Hover */}
                    <p className="text-gray-400 text-sm leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {service.description}
                    </p>
                    
                    {/* Arrow */}
                    <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:bg-red-600">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full text-red-400 text-sm font-medium mb-4">
                Explore In Detail
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Our <span className="text-red-500">Expertise</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Click on any service below to learn more about our capabilities and offerings.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {serviceDetails.map((service, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <ServiceCard 
                  service={service} 
                  isExpanded={expandedIndex === index}
                  onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative p-10 md:p-16 bg-gradient-to-br from-red-600 to-red-700 rounded-3xl overflow-hidden text-center">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
                  Let's discuss how we can bring your vision to life with quality 
                  construction and MEP solutions.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  Get In Touch
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

export default Services;
