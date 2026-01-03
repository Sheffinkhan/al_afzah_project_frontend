import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

import { useState } from "react";

const App = () => {
  // const [isAdmin, setIsAdmin] = useState(true);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Luxury Villa Development",
      description: "High-end residential villa project with modern amenities",
      category: "Residential",
      status: "Completed",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Commercial Complex",
      description: "Multi-story commercial building in prime location",
      category: "Commercial",
      status: "Completed",
      date: "2024-02-20",
    },
    {
      id: 3,
      title: "Soorath Autos",
      description: "Vehicle Reselling",
      category: "Vehicle",
      status: "Completed",
      date: "2024-02-20",
    },
  ]);

  const [clients, setClients] = useState([
    { id: 1, name: "Emirates Group", description: "Aviation & Travel Industry" },
    { id: 2, name: "Aldar Properties", description: "Real Estate Development" },
    { id: 3, name: "Dubai Holding", description: "Diversified Investment" },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/projects"
          element={
            <Projects
              projects={projects}
              setProjects={setProjects}
              // isAdmin={isAdmin}
            />
          }
        />
        <Route
          path="/clients"
          element={
            <Clients
              clients={clients}
              setClients={setClients}
              // isAdmin={isAdmin}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
