import React from 'react';
import { Factory, TrendingUp, Award, ArrowRight } from 'lucide-react';

const Industrial = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">
              Solutions pour l'industrie
            </h1>
            <p className="text-xl mb-8">
              Optimisez votre performance énergétique et réduisez votre empreinte carbone avec nos solutions sur mesure.
            </p>
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Demander un audit
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <Factory className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Optimisation des processus</h3>
              <p className="text-gray-600">
                Améliorez l'efficacité de vos processus industriels grâce à nos solutions intelligentes.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Réduction des coûts</h3>
              <p className="text-gray-600">
                Diminuez vos dépenses énergétiques tout en maintenant votre productivité.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Conformité réglementaire</h3>
              <p className="text-gray-600">
                Respectez les normes environnementales et anticipez les futures réglementations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Études de cas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1565715101939-b1c4c5650394?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Usine métallurgique"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Usine métallurgique</h3>
              <p className="text-gray-600 mb-4">
                Réduction de 30% de la consommation énergétique grâce à l'optimisation des fours.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Lire plus <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Industrie agroalimentaire"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Industrie agroalimentaire</h3>
              <p className="text-gray-600 mb-4">
                Modernisation des systèmes de refroidissement avec 40% d'économies d'énergie.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Lire plus <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industrial;