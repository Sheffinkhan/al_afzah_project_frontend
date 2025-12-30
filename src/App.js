import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Clients from './pages/Clients';
import Contact from './pages/Contact';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdmin, setIsAdmin] = useState(true);
  
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Luxury Villa Development',
      description: 'High-end residential villa project with modern amenities',
      category: 'Residential',
      status: 'Completed',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Commercial Complex',
      description: 'Multi-story commercial building in prime location',
      category: 'Commercial',
      status: 'Completed',
      date: '2024-02-20'
    },
    {
      id: 3,
      title: 'Soorath Autos',
      description: 'Vehicle Reselling',
      category: 'Vehicle',
      status: 'Completed',
      date: '2024-02-20'
    }
  ]);
  
  const [clients, setClients] = useState([
    {
      id: 1,
      name: 'Emirates Group',
      description: 'Aviation & Travel Industry'
    },
    {
      id: 2,
      name: 'Aldar Properties',
      description: 'Real Estate Development'
    },
    {
      id: 3,
      name: 'Dubai Holding',
      description: 'Diversified Investment'
    }
  ]);

  const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Homepage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutUs />;
      case 'services':
        return <Services />;
      case 'projects':
        return <Projects projects={projects} setProjects={setProjects} isAdmin={isAdmin} />;
      case 'clients':
        return <Clients clients={clients} setClients={setClients} isAdmin={isAdmin} />;
      case 'contact':
        return <Contact />;
      default:
        return <Homepage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Admin Mode Toggle */}
      <button
        onClick={toggleAdmin}
        className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg z-50 text-sm hover:bg-gray-700 transition"
      >
        {isAdmin ? '🔓 Admin Mode' : '🔒 View Mode'}
      </button>
      
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;