import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  let timeoutId: NodeJS.Timeout;

  // Ferme les menus au changement de page
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (menu: string) => {
    clearTimeout(timeoutId);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // Petit délai pour éviter des fermetures intempestives
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Zap className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Gutide</span>
          </Link>

          {/* Menu principal */}
          <div className="flex items-center space-x-6">
            {/* Nos solutions - Menu déroulant */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("strategie")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium min-w-max">
                Nos solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "strategie" && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                  <Link to="/strategie-energie" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Stratégie énergie</Link>
                  <Link to="/performance-industrielle" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Performance industrielle</Link>
                  <Link to="/reglementations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Réglementations environnementales</Link>
                </div>
              )}
            </div>

            {/* Nos clients - Menu déroulant */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("clients")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium min-w-max">
                Nos clients <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "clients" && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                  <Link to="/industriels" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Industriels</Link>
                  <Link to="/acteurs-energie" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Acteurs de l’énergie</Link>
                </div>
              )}
            </div>

            {/* Nos produits no-code */}
            <Link to="/produits" className={`${location.pathname === '/produits' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'} px-3 py-2 text-sm font-medium min-w-max`}>
              Nos produits No-Code
            </Link>

            {/* Autres liens */}
            <Link to="/equipe" className={`${location.pathname === '/equipe' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'} px-3 py-2 text-sm font-medium min-w-max`}>
              L'équipe
            </Link>
            <Link to="/blog" className={`${location.pathname === '/blog' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'} px-3 py-2 text-sm font-medium min-w-max`}>
              Blog
            </Link>
          </div>

          {/* Bouton Indus'Trip */}
          <Link to="/indus-trip" className="ml-4 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
            Indus'Trip
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
