import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Code, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const Produits = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">
              Nos Produits Low-Code / No-Code
            </h1>
            <p className="text-xl mb-8">
              <strong>L’efficacité industrielle et énergétique passe par des outils concrets.</strong>  
              Nous déployons des solutions <strong>Low-Code / No-Code</strong> pour <strong>automatiser, optimiser et créer de la valeur</strong> sans complexité technique.
            </p>
            <button className="bg-white text-orange-700 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors">
              <strong>Découvrir nos outils</strong>
            </button>
          </div>
        </div>
      </section>

      {/* NOS OFFRES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* OPTIMISATION OPÉRATIONNELLE */}
            <div className="p-6 border rounded-lg">
              <Settings className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Optimisation Opérationnelle</h3>
              <p className="text-gray-600">
                <strong>Automatisez</strong> vos processus industriels et énergétiques avec des outils <strong>Low-Code</strong> adaptés à <strong>vos enjeux métier</strong>.
              </p>
            </div>

            {/* OUTILS MÉTIER SUR-MESURE */}
            <div className="p-6 border rounded-lg">
              <Code className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Outils Métier Sur-Mesure</h3>
              <p className="text-gray-600">
                Déploiement rapide de solutions <strong>No-Code personnalisées</strong> pour optimiser <strong>flux d’énergie, reporting et analyses financières</strong>.
              </p>
            </div>

            {/* AUTOMATISATION DE LA DONNÉE */}
            <div className="p-6 border rounded-lg">
              <Rocket className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automatisation de la Donnée</h3>
              <p className="text-gray-600">
                <strong>Éliminez les tâches manuelles</strong> avec des workflows intelligents et <strong>intégrez nos solutions à vos outils existants (ERP, CRM...)</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXEMPLES DE RÉALISATIONS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Exemples d'applications déployées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* OPTIMISATION DE L’AJUSTEMENT ÉNERGÉTIQUE */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556911073-52527ac43777?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Optimisation Ajustement Énergétique"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2"><strong>Optimisation de l'Ajustement Énergétique</strong></h3>
                <p className="text-gray-600 mb-4">
                  Déploiement d’un outil <strong>No-Code</strong> permettant <strong>d'optimiser les offres d’ajustement</strong> pour un acteur majeur de l'énergie.
                </p>
                <Link to="/case-study/ajustement" className="inline-flex items-center text-orange-600 hover:text-orange-700">
                  Voir le projet <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* AUTOMATISATION DU REPORTING RSE */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556767576-5c5c43c7ad06?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Reporting RSE"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2"><strong>Automatisation du Reporting RSE</strong></h3>
                <p className="text-gray-600 mb-4">
                  <strong>Tableaux de bord No-Code</strong> pour un suivi <strong>automatisé des indicateurs RSE</strong> et conformité réglementaire.
                </p>
                <Link to="/case-study/reporting" className="inline-flex items-center text-orange-600 hover:text-orange-700">
                  Voir le projet <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CALL-TO-ACTION FINAL */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Passez à l'action</h2>
          <p className="text-xl text-gray-600 mb-6">
            Nos solutions sont conçues pour <strong>améliorer votre ROI immédiatement</strong> avec des outils <strong>simples, performants et intégrés</strong>.
          </p>
          <Link
            to="/contact"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
          >
            <strong>Discutons de votre besoin</strong>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Produits;
