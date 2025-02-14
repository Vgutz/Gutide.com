import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Zap className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Gutide</span>
            </Link>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:flex space-x-8">
              <Link
                to="/equipe"
                className={`${
                  isActive('/equipe')
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700 hover:text-green-600'
                } px-3 py-2 text-sm font-medium`}
              >
                L'équipe
              </Link>
              <Link
                to="/industriels"
                className={`${
                  isActive('/industriels')
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700 hover:text-green-600'
                } px-3 py-2 text-sm font-medium`}
              >
                Industriels
              </Link>
              <Link
                to="/acteurs-energie"
                className={`${
                  isActive('/acteurs-energie')
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700 hover:text-green-600'
                } px-3 py-2 text-sm font-medium`}
              >
                Acteurs de l'énergie
              </Link>
              <Link
                to="/blog"
                className={`${
                  isActive('/blog')
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700 hover:text-green-600'
                } px-3 py-2 text-sm font-medium`}
              >
                Blog
              </Link>
              <Link
                to="/indus-trip"
                className={`${
                  isActive('/indus-trip')
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700 hover:text-green-600'
                } px-3 py-2 text-sm font-medium`}
              >
                Indus'Trip
              </Link>
            </div>
            <button className="ml-8 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;