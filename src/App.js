import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
       <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/projects"
          element={
            <Projects
            />
          }
        />
        <Route
          path="/clients"
          element={
            <Clients
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
