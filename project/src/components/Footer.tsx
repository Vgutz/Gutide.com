import React from "react";
import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  // Fonction pour remonter en haut de la page au clic
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GRID SUR UNE SEULE LIGNE */}
        <div className="grid grid-cols-6 gap-6 text-sm">
          {/* 1️⃣ DESCRIPTION */}
          <div className="col-span-1 max-w-xs">
            <div className="flex items-center mb-3">
              <Zap className="h-6 w-6 text-green-500" />
              <span className="ml-2 text-lg font-bold">Gutide</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre partenaire dans la transition énergétique et l'optimisation industrielle.
            </p>
          </div>

          {/* 2️⃣ NOS SOLUTIONS */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Nos solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/strategie-energie" className="text-gray-400 hover:text-white" onClick={handleScrollTop}>Stratégie énergie</Link></li>
              <li><Link to="/performance-industrielle" className="text-gray-400 hover:text-white" onClick={handleScrollTop}>Performance industrielle</Link></li>
              <li><Link to="/reglementations" className="text-gray-400 hover:text-white" onClick={handleScrollTop}>Réglementations environnementales</Link></li>
            </ul>
          </div>

          {/* 3️⃣ NOS CLIENTS */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Nos clients</h3>
            <ul className="space-y-2">
              <li><Link to="/industriels" className="text-gray-400 hover:text-white" onClick={handleScrollTop}>Industriels</Link></li>
              <li><Link to="/acteurs-energie" className="text-gray-400 hover:text-white" onClick={handleScrollTop}>Acteurs de l'énergie</Link></li>
            </ul>
          </div>

          {/* 4️⃣ NOS PRODUITS */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Nos produits No-Code</h3>
            <ul className="space-y-2">
              <li><Link to="/produits" className="text-gray-400 hover:text-white" onClick={handleScrollTop}>Découvrir</Link></li>
            </ul>
          </div>

          {/* 5️⃣ RESSOURCES */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Ressources</h3>
            <ul className="space-y-2">
              <li><Link to="/equipe" className="text-gray-400 hover:text-white" onClick={handleScrollTop}>L'équipe</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white" onClick={handleScrollTop}>Blog</Link></li>
              <li><Link to="/indus-trip" className="text-green-400 font-semibold hover:text-green-300" onClick={handleScrollTop}>Indus'Trip</Link></li>
            </ul>
          </div>

          {/* 6️⃣ CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-500" />
                <span className="text-gray-400">contact@gutide.fr</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-500" />
                <span className="text-gray-400">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-green-500" />
                <span className="text-gray-400">Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gutide. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
