import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Network, BarChart3, Shield, Briefcase, LineChart, Target, ArrowRight } from 'lucide-react';

const EnergyActors = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">
              Solutions sur-mesure pour les acteurs de l’énergie
            </h1>
            <p className="text-xl mb-8">
              <strong>Accompagnement stratégique et expertise de marché</strong> pour les fournisseurs, intégrateurs et entreprises du secteur énergétique.
            </p>
            <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors">
              Découvrir nos solutions
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES PRINCIPAUX */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos services pour les acteurs de l’énergie</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <Briefcase className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Stratégie & Business Model</h3>
              <p className="text-gray-600">
                <strong>Identifiez de nouveaux relais de croissance</strong> et mettez en place des modèles économiques adaptés aux évolutions du marché énergétique.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <LineChart className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Optimisation des Marchés de l'Énergie</h3>
              <p className="text-gray-600">
                <strong>Fléxibilité, ajustement et trading</strong> : développez votre expertise sur les mécanismes du marché pour améliorer vos performances.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Target className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Accompagnement sur-mesure</h3>
              <p className="text-gray-600">
                Nous adaptons notre expertise à <strong>vos besoins spécifiques</strong> : conformité réglementaire, gestion des risques, innovations technologiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 bg-purple-700 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Besoin d’un accompagnement adapté à votre business ?</h2>
          <p className="text-lg mb-6">
            Discutons ensemble de vos enjeux et trouvons la meilleure approche pour développer votre activité énergétique.
          </p>
          <Link to="/contact">
            <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors">
              Prendre contact
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EnergyActors;
