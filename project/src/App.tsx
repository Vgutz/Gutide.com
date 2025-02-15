import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Industrial from './pages/Industrial';
import EnergyActors from './pages/EnergyActors';
import Blog from './pages/Blog';
import IndusTrip from './pages/IndusTrip';
import BlogPost from './pages/BlogPost';
import CaseStudy from './pages/CaseStudy';
import StrategieEnergie from './pages/StrategieEnergie';
import PerformanceIndustrielle from './pages/PerformanceIndustrielle';
import Reglementations from './pages/Reglementations';
import Produits from './pages/Produits';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/industriels" element={<Industrial />} />
            <Route path="/acteurs-energie" element={<EnergyActors />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/indus-trip" element={<IndusTrip />} />
            <Route path="/case-study/:id" element={<CaseStudy />} />
            <Route path="/strategie-energie" element={<StrategieEnergie />} />
            <Route path="/performance-industrielle" element={<PerformanceIndustrielle />} />
            <Route path="/reglementations" element={<Reglementations />} />
            <Route path="/produits" element={<Produits />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;