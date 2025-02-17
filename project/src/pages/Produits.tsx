import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Code, Rocket } from 'lucide-react';

const Produits = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Nos Produits Low-Code / No-Code</h1>
            <p className="text-xl mb-8">
              <strong>L’efficacité industrielle et énergétique passe par des outils concrets.</strong>  
              Nous déployons des solutions <strong>Low-Code / No-Code</strong> pour <strong>automatiser, optimiser et créer de la valeur</strong> sans complexité technique.
            </p>
            <a 
            href="https://calendly.com/v-gutierrez-gutide/30min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-orange-700 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors"
            >
            <strong>Découvrir nos outils</strong>
          </a>
          </div>
        </div>
      </section>

      {/* NOS OFFRES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <Settings className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Optimisation Opérationnelle</h3>
              <p className="text-gray-600">
                <strong>Automatisez</strong> vos processus industriels et énergétiques avec des outils <strong>Low-Code</strong> adaptés à <strong>vos enjeux métier</strong>.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <Code className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Outils Métier Sur-Mesure</h3>
              <p className="text-gray-600">
                Déploiement rapide de solutions <strong>No-Code personnalisées</strong> pour optimiser <strong>flux d’énergie, reporting et analyses financières</strong>.
              </p>
            </div>

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
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2"><strong>Optimisation de l'Ajustement Énergétique</strong></h3>
                <p className="text-gray-600 mb-4">
                  <strong>Problème :</strong> Un acteur majeur de l’énergie devait optimiser ses offres d’ajustement tout en garantissant leur fiabilité.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Solution :</strong> Développement et déploiement d’un outil No-Code pour automatiser et améliorer la prise de décision.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Résultat :</strong> Optimisation des offres et amélioration de la rentabilité des ajustements énergétiques.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2"><strong>Automatisation du Reporting RSE</strong></h3>
                <p className="text-gray-600 mb-4">
                  <strong>Problème :</strong> Difficulté à structurer et suivre les indicateurs RSE pour répondre aux obligations réglementaires.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Solution :</strong> Déploiement d’un tableau de bord No-Code pour centraliser et automatiser le suivi des données RSE.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Résultat :</strong> Meilleure conformité réglementaire et valorisation des engagements environnementaux auprès des parties prenantes.
                </p>
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
          <a 
            href="https://calendly.com/v-gutierrez-gutide/30min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
            >
            <strong>Discutons de votre besoin</strong>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Produits;
