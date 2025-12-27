import React, { useState } from 'react';
import { Building2, X } from 'lucide-react';
import './Clients.css';

const Clients = ({ clients, setClients, isAdmin }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = {
      id: Date.now(),
      ...formData
    };
    setClients([...clients, newClient]);
    setFormData({ name: '', description: '' });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      setClients(clients.filter(c => c.id !== id));
    }
  };

  return (
    <div className="clients-page">
      <div className="page-header">
        <div className="page-header-container">
          <h1 className="page-title">Our Clients</h1>
          <p className="page-subtitle">Trusted by leading organizations</p>
        </div>
      </div>

      <div className="clients-container">
        {isAdmin && (
          <div className="admin-controls">
            <button
              onClick={() => setShowForm(!showForm)}
              className="add-btn"
            >
              {showForm ? 'Cancel' : '+ Add New Client'}
            </button>
          </div>
        )}

        {showForm && (
          <div className="client-form-card">
            <h3 className="form-title">Add New Client</h3>
            <form onSubmit={handleSubmit} className="client-form">
              <div className="form-group">
                <label className="form-label">Client Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                  rows="2"
                  placeholder="Brief description or industry"
                />
              </div>
              <button type="submit" className="submit-btn">
                Add Client
              </button>
            </form>
          </div>
        )}

        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client.id} className="client-card">
              {isAdmin && (
                <button
                  onClick={() => handleDelete(client.id)}
                  className="delete-btn-client"
                >
                  <X size={20} />
                </button>
              )}
              <div className="client-logo">
                <Building2 size={40} className="building-icon" />
              </div>
              <h3 className="client-name">{client.name}</h3>
              <p className="client-description">{client.description}</p>
            </div>
          ))}
        </div>

        {clients.length === 0 && (
          <div className="empty-state">
            <p>No clients added yet. {isAdmin && 'Click "Add New Client" to get started.'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clients;