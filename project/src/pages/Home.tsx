import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Lightbulb, Users } from 'lucide-react';

// Import des images locales

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accélérez votre transition énergétique avec une approche structurée
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Nous accompagnons les industriels et les acteurs de l’énergie dans la réduction de leurs coûts, 
              l’optimisation de leur performance et l’atteinte de leurs objectifs de durabilité.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/industriels" className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors">
                Pour les industriels
              </Link>
              <Link to="/acteurs-energie" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-green-700 transition-colors">
                Pour les acteurs de l’énergie
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nos expertises */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos expertises</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stratégie énergétique */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Factory className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Stratégie énergétique</h3>
              <p className="text-gray-600">
                L’énergie est devenue un facteur clé de compétitivité. Nous vous aidons à structurer votre stratégie d’approvisionnement, 
                à sécuriser vos contrats et à intégrer les énergies renouvelables tout en optimisant les coûts.
              </p>
              <Link to="/strategie-energie" className="inline-flex items-center text-green-600 hover:text-green-700 mt-4">
                Découvrir notre approche <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Performance industrielle */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Lightbulb className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Performance industrielle</h3>
              <p className="text-gray-600">
                Une gestion intelligente des flux énergétiques permet d’optimiser la production et de réduire la consommation sans impact sur l’activité. 
                Nous mettons en place des solutions pragmatiques pour améliorer votre efficacité énergétique.
              </p>
              <Link to="/performance-industrielle" className="inline-flex items-center text-green-600 hover:text-green-700 mt-4">
                Voir nos solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Conformité réglementaire */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Conformité & Réglementation</h3>
              <p className="text-gray-600">
                Les nouvelles réglementations (ISO 50001, CSRD, taxonomie verte…) redéfinissent les standards de la performance énergétique. 
                Nous vous accompagnons pour anticiper ces enjeux et structurer vos démarches de certification et de financement.
              </p>
              <Link to="/reglementations" className="inline-flex items-center text-green-600 hover:text-green-700 mt-4">
                En savoir plus <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Produits No-Code */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos convictions sur le No-Code</h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-8">
            Les outils No-Code offrent une nouvelle approche de la digitalisation énergétique. 
            Nous croyons en leur capacité à accélérer le déploiement de solutions de suivi, de reporting et d’optimisation énergétique 
            sans nécessiter d’investissements lourds en IT.
          </p>
          <div className="text-center">
            <Link to="/Produits" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Découvrir notre vision
            </Link>
          </div>
        </div>
      </section>

      {/* Indus'Trip */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Indus'Trip : Diagnostic sur site</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Rien ne remplace l’expérience terrain. Nos experts se déplacent sur votre site pour identifier 
            les opportunités d’optimisation et proposer des solutions adaptées à votre contexte industriel.
          </p>
          <Link to="/indus-trip" className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
            En savoir plus
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
