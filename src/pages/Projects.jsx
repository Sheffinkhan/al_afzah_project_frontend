import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import { getProjects } from '../hooks/projects/projectApi';

/* ============================
   Scroll Animation Hook
============================ */
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
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  return [ref, isVisible];
};

/* ============================
   Animated Section
============================ */
const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* ============================
   Project Card with Hover Image Cycling
============================ */
const ProjectCard = ({ project }) => {
  const images = project.images || [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  const startImageCycle = useCallback(() => {
    if (images.length <= 1) return;
    
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1500);
  }, [images.length]);

  const stopImageCycle = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCurrentImageIndex(0);
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
    startImageCycle();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    stopImageCycle();
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const currentImage = images[currentImageIndex]?.imageUrl || null;

  return (
    <Link
      to={`/projects/${project.id}`}
      className="group relative h-[450px] rounded-2xl overflow-hidden block cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Container with Fade Transition */}
      <div className="absolute inset-0">
        {currentImage ? (
          <>
            {images.map((img, index) => (
              <img
                key={img.id || index}
                src={img.imageUrl}
                alt={`${project.title} - ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                } ${isHovering ? 'scale-110' : 'scale-100'}`}
              />
            ))}
          </>
        ) : (
          <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
            <Building2 className="w-12 h-12 text-gray-500" />
          </div>
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />

      {/* Image Indicator Dots */}
      {images.length > 1 && (
        <div className={`absolute top-4 right-4 flex gap-1.5 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-red-500 w-4'
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}

      {/* Multi-image Badge */}
      {images.length > 1 && (
        <div className="absolute top-4 left-4 px-2.5 py-1 bg-gray-900/70 backdrop-blur-sm rounded-full text-xs font-medium flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {images.length}
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 p-8">
        <h3 className="text-2xl font-bold mt-2 mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition line-clamp-2">
          {project.description}
        </p>

        {/* View Project Arrow */}
        <div className="flex items-center gap-2 mt-4 text-red-400 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
          <span className="text-sm font-medium">View Project</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

/* ============================
   Projects Component
============================ */
const Projects = ({ isAdmin }) => {
  const [projects, setProjects] = useState([]);
  const [projectLoading, setProjectLoading] = useState(true);

  /* Fetch Projects */
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setProjectLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

        <div className="relative z-10 text-center px-6 py-20">
          

          <AnimatedSection delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcasing our commitment to precision, quality craftsmanship, and innovative solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {projectLoading ? (
            <AnimatedSection>
              <div className="flex items-center justify-center py-20">
                <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </AnimatedSection>
          ) : projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <AnimatedSection key={project.id} delay={i * 100}>
                  <ProjectCard project={project} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection>
              <p className="text-center text-gray-400">No projects available.</p>
            </AnimatedSection>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
