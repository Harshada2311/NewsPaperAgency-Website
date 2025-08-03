import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar';
import Dashboard from '../Pages/Dashboard'
import About from '../components/About';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Papers from '../Pages/Papers.jsx';
import PaperDetails from './PaperDetails.jsx';


function Routing() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Navbar />
        <main className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Papers" element={<Papers />} />
            <Route path="/Papers/:id" element={<PaperDetails />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default Routing