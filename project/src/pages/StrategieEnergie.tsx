import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Lightbulb, Compass, ShieldCheck, Bolt, TrendingUp, ArrowRight } from 'lucide-react';

const StrategieEnergie = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Stratégie Énergie</h1>
            <p className="text-xl mb-8">
              <strong>Optimisez vos coûts</strong>, <strong>sécurisez vos approvisionnements</strong> et <strong>renforcez votre résilience</strong> face à la volatilité des marchés.
            </p>
            <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
              <strong>Prendre rendez-vous avec un expert</strong>
            </button>
          </div>
        </div>
      </section>

      {/* Pourquoi une stratégie énergie ? */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi investir dans une stratégie énergétique ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <ShieldCheck className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Réduction des coûts</h3>
              <p className="text-gray-600">
                Jusqu'à <strong>30%</strong> d’économies sur vos factures grâce à une gestion optimisée de l’énergie.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <Bolt className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sécurisation des approvisionnements</h3>
              <p className="text-gray-600">
                <strong>Anticipez la volatilité</strong> des prix et réduisez votre dépendance aux énergies fossiles.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <TrendingUp className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Conformité & attractivité</h3>
              <p className="text-gray-600">
                <strong>Accédez aux financements</strong> et valorisez votre engagement environnemental auprès de vos parties prenantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos offres */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Offres</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Stratégie & Management de l'Énergie */}
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">🔹 <strong>Stratégie & Management de l’Énergie</strong></h3>
              <ul className="text-gray-600 space-y-2">
                <li>✅ <strong>Diagnostic</strong> et mise en place d’un plan d’optimisation</li>
                <li>✅ <strong>Déploiement</strong> d’un système de management ISO 50001</li>
                <li>✅ <strong>Digitalisation</strong> du suivi énergétique</li>
                <li>✅ <strong>Audit</strong> et optimisation des consommations</li>
              </ul>
            </div>

            {/* Renégociation des contrats d’énergie */}
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">🔹 <strong>Renégociation des contrats d’énergie</strong></h3>
              <ul className="text-gray-600 space-y-2">
                <li>✅ <strong>Audit</strong> des contrats existants et benchmarking</li>
                <li>✅ <strong>Mise en concurrence</strong> des fournisseurs</li>
                <li>✅ <strong>Stratégie de couverture</strong> et sécurisation des coûts</li>
                <li>✅ <strong>Modélisation</strong> des économies potentielles</li>
              </ul>
            </div>

            {/* Approvisionnement en énergies renouvelables */}
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">🔹 <strong>Approvisionnement en énergies renouvelables</strong></h3>
              <ul className="text-gray-600 space-y-2">
                <li>✅ <strong>Étude de faisabilité</strong> pour les contrats PPA</li>
                <li>✅ <strong>Modélisation</strong> des coûts et bénéfices environnementaux</li>
                <li>✅ <strong>Mise en place</strong> d’installations d’autoconsommation</li>
                <li>✅ <strong>Accompagnement</strong> à la contractualisation</li>
              </ul>
            </div>

            {/* Outils & Digitalisation */}
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">🔹 <strong>Outils & Digitalisation</strong></h3>
              <ul className="text-gray-600 space-y-2">
                <li>✅ <strong>Déploiement</strong> d’un tableau de bord énergétique</li>
                <li>✅ <strong>Alertes automatiques</strong> et monitoring en temps réel</li>
                <li>✅ <strong>Intégration</strong> avec vos outils de gestion existants</li>
                <li>✅ <strong>Formation</strong> des équipes et autonomisation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6"><strong>Passez à l’action dès aujourd’hui</strong></h2>
          <p className="text-lg mb-8">
            Réservez un échange avec nos experts et bénéficiez d’un <strong>premier diagnostic offert</strong>.
          </p>
          <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
            <strong>Échanger avec un expert</strong>
          </button>
        </div>
      </section>
    </div>
  );
};

export default StrategieEnergie;
