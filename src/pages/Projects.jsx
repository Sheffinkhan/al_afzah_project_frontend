import React, { useEffect, useRef, useState } from 'react';
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
          <AnimatedSection>
            <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full text-red-400 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4 inline mr-2" />
              Our Portfolio
            </span>
          </AnimatedSection>

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
              <p className="text-center text-gray-400">Loading projects...</p>
            </AnimatedSection>
          ) : projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => {
                const image =
                  project.images?.[0]?.imageUrl || null;

                return (
                  <AnimatedSection key={project.id} delay={i * 100}>
                    <div className="group relative h-[450px] rounded-2xl overflow-hidden">

                      {image ? (
                        <img
                          src={image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                          <Building2 className="w-12 h-12 text-gray-500" />
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />

                      <div className="absolute bottom-0 p-8">

                        <h3 className="text-2xl font-bold mt-2 mb-3">
                          {project.title}
                        </h3>

                        <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
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
