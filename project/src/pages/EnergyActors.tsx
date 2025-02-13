import React from 'react';
import { Zap, Network, BarChart3, Shield } from 'lucide-react';

const EnergyActors = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">
              Solutions pour les acteurs de l'énergie
            </h1>
            <p className="text-xl mb-8">
              Accompagnement stratégique pour les fournisseurs, intégrateurs et parties prenantes du secteur énergétique.
            </p>
            <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors">
              Découvrir nos solutions
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg">
              <Zap className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Optimisation du réseau</h3>
              <p className="text-gray-600">
                Solutions avancées pour l'optimisation et la gestion intelligente des réseaux énergétiques.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Network className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Intégration des ENR</h3>
              <p className="text-gray-600">
                Expertise dans l'intégration des énergies renouvelables au réseau existant.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <BarChart3 className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Analyse prédictive</h3>
              <p className="text-gray-600">
                Outils d'analyse avancée pour optimiser la distribution et la consommation d'énergie.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Shield className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sécurité énergétique</h3>
              <p className="text-gray-600">
                Solutions pour garantir la stabilité et la sécurité de l'approvisionnement énergétique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos partenaires</h2>
            <p className="text-gray-600">
              Nous collaborons avec les principaux acteurs du secteur énergétique
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Partner 1"
              className="h-20 object-contain mx-auto"
            />
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Partner 2"
              className="h-20 object-contain mx-auto"
            />
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Partner 3"
              className="h-20 object-contain mx-auto"
            />
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Partner 4"
              className="h-20 object-contain mx-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergyActors;