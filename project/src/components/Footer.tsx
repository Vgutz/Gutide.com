import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold">Gutide</span>
            </div>
            <p className="mt-4 text-gray-400">
              Votre partenaire dans la transition énergétique et l'optimisation industrielle.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/industriels" className="text-gray-400 hover:text-white">Industriels</Link></li>
              <li><Link to="/acteurs-energie" className="text-gray-400 hover:text-white">Acteurs de l'énergie</Link></li>
              <li><Link to="/equipe" className="text-gray-400 hover:text-white">L'équipe</Link></li>
              <li>
                <Link 
                  to="/indus-trip" 
                  className="text-green-400 font-semibold hover:text-green-300 flex items-center"
                >
                  Indus'Trip
                  <span className="ml-2 bg-green-600 text-white text-xs px-2 py-1 rounded">Nouveau</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
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
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-white"
            >
              <Linkedin className="h-6 w-6" />
              <span className="ml-2">LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gutide. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;