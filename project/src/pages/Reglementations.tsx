import React from 'react';
import ISO50001Image from '../assets/ISO50001.webp'; // Import de l'image locale

const Reglementations = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Mise en conformité ISO 50001 en 6 mois",
      description: "Un accompagnement simple et efficace pour structurer un plan énergie et obtenir la certification.",
      image: ISO50001Image,
      results: [
        "Certification obtenue en un temps record",
        "Optimisation immédiate de la gestion énergétique",
        "Accès à des financements industriels"
      ],
      fullDescription: (
        <>
          <p>Nous avons travaillé avec une usine industrielle pour sécuriser son accès à la certification ISO 50001 :</p>
          <ul className="list-disc pl-5">
            <li><strong>Audit initial</strong> et mise en conformité des procédures</li>
            <li><strong>Déploiement</strong> d’un système de management de l’énergie</li>
            <li><strong>Réduction</strong> des risques de non-conformité</li>
            <li><strong>Certification validée</strong> sous 6 mois</li>
          </ul>
          <p><strong>Résultat :</strong> un cadre structurant qui améliore l’efficacité énergétique et ouvre la porte à des subventions.</p>
        </>
      )
    },
    {
      id: 2,
      title: "Mise en conformité CSRD & reporting extra-financier",
      description: "Mise en place rapide d'un reporting RSE structuré pour répondre aux nouvelles obligations.",
      image: "https://images.unsplash.com/photo-1564859228273-8c89f0ef0b8b?ixid=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      results: [
        "Tableaux de bord RSE opérationnels",
        "Données exploitables en cas d'audit",
        "Gain de crédibilité auprès des investisseurs"
      ],
      fullDescription: (
        <>
          <p>Un industriel a dû répondre rapidement aux exigences de la CSRD. Nous avons mis en place :</p>
          <ul className="list-disc pl-5">
            <li><strong>Un cadre simple</strong> pour collecter les données essentielles</li>
            <li><strong>Un benchmark</strong> pour structurer un reporting impactant</li>
            <li><strong>Une automatisation</strong> des reportings pour gagner en efficacité</li>
          </ul>
          <p><strong>Résultat :</strong> conformité assurée et une meilleure perception par les partenaires financiers.</p>
        </>
      )
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Réglementations Environnementales</h1>
            <p className="text-xl mb-8">
              Transformez vos obligations légales en un levier de performance et de financement.
            </p>
            <a 
              href="https://calendly.com/v-gutierrez-gutide/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
              <strong>Évaluer ma conformité</strong>
            </a>
          </div>
        </div>
      </section>

      {/* Pourquoi la conformité est essentielle */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi anticiper les réglementations ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Sécurisez votre activité</h3>
              <p className="text-gray-600">
                Évitez les <strong>amendes</strong>, <strong>contrôles</strong> et <strong>blocages</strong> liés à une mise en conformité tardive.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Anticipez l’évolution des lois</h3>
              <p className="text-gray-600">
                Protégez-vous contre les nouvelles réglementations et <strong>restez compétitif</strong>.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Ouvrez l'accès aux financements</h3>
              <p className="text-gray-600">
                Accédez aux <strong>aides</strong> et <strong>subventions</strong> disponibles grâce à une mise en conformité proactive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos solutions réglementaires */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Certification ISO 50001</h3>
              <p className="text-gray-600">
                <strong>Diagnostic</strong>, plan d’actions et certification rapide pour une gestion énergétique optimisée.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Reporting CSRD & extra-financier</h3>
              <p className="text-gray-600">
                <strong>Structuration</strong> et <strong>automatisation</strong> des obligations RSE pour répondre aux normes.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Aide à l'obtention des financements</h3>
              <p className="text-gray-600">
                Profitez des <strong>aides</strong> pour financer vos projets de transformation écologique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Études de cas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Études de cas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map(study => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={study.image} alt={study.title} className="w-1/4 h-32 object-cover mx-auto" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="text-gray-600">{study.fullDescription}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reglementations;
