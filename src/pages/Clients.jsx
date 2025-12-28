import React, { useState } from 'react';
import { Building2, X } from 'lucide-react';

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
    <div className="pt-16">
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">Our Clients</h1>
          <p className="text-center mt-4 text-xl">Trusted by leading organizations</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isAdmin && (
          <div className="mb-8">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {showForm ? 'Cancel' : '+ Add New Client'}
            </button>
          </div>
        )}

        {showForm && (
          <div className="bg-white border rounded-lg p-6 mb-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Add New Client</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Client Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="2"
                  placeholder="Brief description or industry"
                />
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Add Client
              </button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div key={client.id} className="border rounded-lg p-6 text-center hover:shadow-lg transition transform hover:-translate-y-1 relative">
              {isAdmin && (
                <button
                  onClick={() => handleDelete(client.id)}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-800 transition"
                >
                  <X size={20} />
                </button>
              )}
              <div className="bg-gray-200 h-24 w-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Building2 size={40} className="text-gray-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{client.name}</h3>
              <p className="text-sm text-gray-600">{client.description}</p>
            </div>
          ))}
        </div>

        {clients.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>No clients added yet. {isAdmin && 'Click "Add New Client" to get started.'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clients;