import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, TrendingUp, Award, Bolt, CheckCircle, ArrowRight } from 'lucide-react';

const PerformanceIndustrielle = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Performance Industrielle</h1>
            <p className="text-xl mb-8">
              <strong>Maximisez votre productivité</strong>, <strong>réduisez vos coûts</strong> et <strong>boostez votre compétitivité</strong>.
            </p>
            <a 
              href="https://calendly.com/v-gutierrez-gutide/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors"
              >
              <strong>Parler à un expert</strong>
            </a>
          </div>
        </div>
      </section>

      {/* Pourquoi optimiser la performance industrielle ? */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi améliorer votre performance industrielle ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <Bolt className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Productivité & Efficacité</h3>
              <p className="text-gray-600">
                Jusqu'à <strong>20%</strong> d'amélioration de la productivité avec nos solutions d’optimisation.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Réduction des coûts</h3>
              <p className="text-gray-600">
                Diminuez vos coûts <strong>opérationnels et énergétiques</strong> avec des actions ciblées.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fiabilité & Maintenance</h3>
              <p className="text-gray-600">
                <strong>Réduisez les pannes</strong> et optimisez la maintenance pour éviter les arrêts imprévus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos solutions pour booster votre compétitivité</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Optimisation des processus industriels */}
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">🔹 <strong>Optimisation des processus industriels</strong></h3>
              <ul className="text-gray-600 space-y-2">
                <li>✅ <strong>Cartographie</strong> des flux de production</li>
                <li>✅ <strong>Identification</strong> des goulots d’étranglement</li>
                <li>✅ <strong>Mise en place</strong> d’outils de suivi en temps réel</li>
                <li>✅ <strong>Formation</strong> des équipes sur l’optimisation continue</li>
              </ul>
            </div>

            {/* Maintenance prédictive & gestion des actifs */}
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">🔹 <strong>Maintenance prédictive & gestion des actifs</strong></h3>
              <ul className="text-gray-600 space-y-2">
                <li>✅ <strong>Diagnostic</strong> et mise en place de capteurs IoT</li>
                <li>✅ <strong>Analyse</strong> des cycles de maintenance</li>
                <li>✅ <strong>Réduction</strong> des coûts de maintenance préventive</li>
                <li>✅ <strong>Automatisation</strong> de la gestion des interventions</li>
              </ul>
            </div>

            {/* Digitalisation & automatisation industrielle */}
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">🔹 <strong>Digitalisation & automatisation industrielle</strong></h3>
              <ul className="text-gray-600 space-y-2">
                <li>✅ <strong>Déploiement</strong> d’outils de pilotage industriel</li>
                <li>✅ <strong>Intégration</strong> de solutions d’IA et de machine learning</li>
                <li>✅ <strong>Suivi</strong> des performances et des écarts en temps réel</li>
                <li>✅ <strong>Amélioration</strong> de la prise de décision data-driven</li>
              </ul>
            </div>

            {/* Efficacité énergétique & décarbonation industrielle */}
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">🔹 <strong>Efficacité énergétique & décarbonation industrielle</strong></h3>
              <ul className="text-gray-600 space-y-2">
                <li>✅ <strong>Audit</strong> des consommations énergétiques</li>
                <li>✅ <strong>Stratégie</strong> de réduction des émissions de CO₂</li>
                <li>✅ <strong>Intégration</strong> des énergies renouvelables</li>
                <li>✅ <strong>Optimisation</strong> des équipements énergivores</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-green-600 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Passez à l’action dès aujourd’hui</h2>
          <p className="text-lg mb-8">
            Échangez avec nos experts pour identifier <strong>les leviers d’optimisation</strong> les plus pertinents pour votre industrie.
          </p>
          <a 
              href="https://calendly.com/v-gutierrez-gutide/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors"
              >
              <strong>Réserver un diagnostic</strong>
            </a>
        </div>
      </section>
    </div>
  );
};

export default PerformanceIndustrielle;
