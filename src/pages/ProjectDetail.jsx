import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, X, ZoomIn, MapPin, Users, Calendar } from 'lucide-react';
import { getProjectById } from '../hooks/projects/projectApi';

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
   Project Detail Component
============================ */
const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProjectById(id);
        setProject(data);
      } catch (err) {
        console.error("Failed to fetch project:", err);
        setError("Failed to load project details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const images = project?.images || [];
  const currentImage = images[selectedImageIndex]?.imageUrl;

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    if (lightboxOpen) {
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'Escape') setLightboxOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading project...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-xl mb-4">{error || "Project not found"}</p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section with Main Image */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        {currentImage ? (
          <img
            src={currentImage}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
        )}
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-gray-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/40 to-transparent" />

        {/* Image Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Title Overlay */}
        <div className="relative z-10 w-full p-8 md:p-12 lg:p-20">
          {/* Red accent line */}
          <AnimatedSection>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mb-6 rounded-full"></div>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>
          </AnimatedSection>
          
          {/* Image Counter with enhanced styling */}
          {images.length > 1 && (
            <AnimatedSection delay={200}>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-white/80 font-medium">{selectedImageIndex + 1}</span>
                <span className="text-white/40">/</span>
                <span className="text-white/60">{images.length} images</span>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <section className="py-6 px-6 md:px-12 lg:px-20 bg-gray-900/50">
          <AnimatedSection>
            <div className="max-w-7xl mx-auto">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
                {images.map((img, index) => (
                  <button
                    key={img.id || index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border-2 transition-all ${
                      index === selectedImageIndex
                        ? 'border-red-500 ring-2 ring-red-500/30'
                        : 'border-gray-700 hover:border-gray-500'
                    }`}
                  >
                    <img
                      src={img.imageUrl}
                      alt={`${project.title} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>
      )}

      {/* Project Details Cards */}
      {(project.location || project.client || project.completionDate) && (
        <section className="py-8 px-6 md:px-12 lg:px-20 -mt-8 relative z-20">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="grid md:grid-cols-3 gap-4">
                {project.location && (
                  <div className="flex items-center gap-4 p-5 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-red-500/30 transition-all group">
                    <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                      <MapPin className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Location</h3>
                      <p className="text-gray-100 font-medium">{project.location}</p>
                    </div>
                  </div>
                )}
                {project.client && (
                  <div className="flex items-center gap-4 p-5 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-red-500/30 transition-all group">
                    <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                      <Users className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Client</h3>
                      <p className="text-gray-100 font-medium">{project.client}</p>
                    </div>
                  </div>
                )}
                {project.completionDate && (
                  <div className="flex items-center gap-4 p-5 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-red-500/30 transition-all group">
                    <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                      <Calendar className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Completed</h3>
                      <p className="text-gray-100 font-medium">{project.completionDate}</p>
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Project Description */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                About This Project
              </h2>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-10">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed whitespace-pre-line">
                {project.description || "No description available for this project."}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* All Images Grid */}
      {images.length > 1 && (
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Project Gallery
              </h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img, index) => (
                <AnimatedSection key={img.id || index} delay={index * 50}>
                  <button
                    onClick={() => {
                      setSelectedImageIndex(index);
                      setLightboxOpen(true);
                    }}
                    className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden"
                  >
                    <img
                      src={img.imageUrl}
                      alt={`${project.title} - ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gray-950/0 group-hover:bg-gray-950/40 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Projects CTA */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-red-600/20 hover:shadow-red-600/30"
            >
              <ArrowLeft className="w-5 h-5" />
              View All Projects
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && currentImage && (
        <div
          className="fixed inset-0 z-50 bg-gray-950/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 bg-gray-800/80 rounded-full hover:bg-gray-700 transition"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-gray-800/80 rounded-full hover:bg-gray-700 transition"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-gray-800/80 rounded-full hover:bg-gray-700 transition"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}

          <img
            src={currentImage}
            alt={project.title}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Image counter in lightbox */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-800/80 rounded-full text-sm">
              {selectedImageIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
