import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const CATEGORY_FILTERS = ['All', 'Residential', 'Commercial', 'Vehicle'];

const Projects = ({ projects, setProjects, isAdmin }) => {
  // const [showForm, setShowForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  // const [formData, setFormData] = useState({
  //   title: '',
  //   description: '',
  //   category: '',
  //   status: 'Completed',
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newProject = {
  //     id: Date.now(),
  //     ...formData,
  //     date: new Date().toLocaleDateString(),
  //   };
  //   setProjects([...projects, newProject]);
  //   setFormData({ title: '', description: '', category: '', status: 'Completed' });
  //   setShowForm(false);
  // };

  // const handleDelete = (id) => {
  //   if (window.confirm('Are you sure you want to delete this project?')) {
  //     setProjects(projects.filter((p) => p.id !== id));
  //   }
  // };

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className="pt-16 bg-black min-h-screen text-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-black via-red-800 to-black py-16 border-b border-red-700/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide uppercase">
            Our <span className="text-red-500">Projects</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Showcasing our commitment to precision and craftsmanship.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Admin Actions */}
        {isAdmin && (
          <div className="mb-8 flex justify-between items-center">
            
          </div>
        )}

        

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-10 border-b border-zinc-800 pb-4">
          {CATEGORY_FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-sm uppercase tracking-wide transition-colors pb-1
                ${activeFilter === filter
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'text-gray-400 hover:text-red-400'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-zinc-900 border border-zinc-800/80 rounded-lg overflow-hidden 
                           hover:border-red-600/80 hover:shadow-2xl hover:shadow-red-900/40
                           transition transform hover:-translate-y-1"
              >
                <div className="bg-black h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                  <Camera size={56} className="text-zinc-600 relative z-10" />
                  <span className="absolute top-3 left-3 text-xs bg-red-600/90 px-3 py-1 rounded-full uppercase tracking-wide">
                    {project.status}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold uppercase tracking-wide">
                      {project.title}
                    </h3>
                    
                  </div>

                  <span className="inline-block text-xs uppercase tracking-wide bg-red-900/40 text-red-300 px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>

                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{project.date}</span>
                    {/* Placeholder for “View Details” or location, etc. */}
                    <span className="text-red-400">View details</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p>
              No projects available in this filter.
              {isAdmin && ' Add a project above to get started.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
