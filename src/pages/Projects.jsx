import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';
import './Projects.css';

const Projects = ({ projects, setProjects, isAdmin }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    status: 'Completed'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleDateString()
    };
    setProjects([...projects, newProject]);
    setFormData({ title: '', description: '', category: '', status: 'Completed' });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  return (
    <div className="projects-page">
      <div className="page-header">
        <div className="page-header-container">
          <h1 className="page-title">Our Projects</h1>
          <p className="page-subtitle">Showcasing our commitment to excellence</p>
        </div>
      </div>

      <div className="projects-container">
        {isAdmin && (
          <div className="admin-controls">
            <button
              onClick={() => setShowForm(!showForm)}
              className="add-btn"
            >
              {showForm ? 'Cancel' : '+ Add New Project'}
            </button>
          </div>
        )}

        {showForm && (
          <div className="project-form-card">
            <h3 className="form-title">Add New Project</h3>
            <form onSubmit={handleSubmit} className="project-form">
              <div className="form-group">
                <label className="form-label">Project Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="form-input form-textarea"
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Category</label>
                <input
                  type="text"
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="form-input"
                  placeholder="e.g., Residential, Commercial"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="form-input"
                >
                  <option>Completed</option>
                  <option>In Progress</option>
                  <option>Upcoming</option>
                </select>
              </div>
              <button type="submit" className="submit-btn">
                Add Project
              </button>
            </form>
          </div>
        )}

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <Camera size={64} className="camera-icon" />
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {isAdmin && (
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="delete-btn"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
                <span className="project-category">{project.category}</span>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <span className="project-status">{project.status}</span>
                  <span className="project-date">{project.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="empty-state">
            <p>No projects added yet. {isAdmin && 'Click "Add New Project" to get started.'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;