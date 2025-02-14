import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, TrendingUp, Award, ArrowRight, ArrowLeft } from 'lucide-react';

const Industrial = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Optimisation énergétique d'une usine métallurgique",
      description: "Réduction de 30% de la consommation énergétique grâce à l'optimisation des fours.",
      image: "https://images.unsplash.com/photo-1565715101939-b1c4c5650394?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      results: [
        "30% de réduction de la consommation énergétique",
        "ROI atteint en moins de 18 mois",
        "Réduction des émissions de CO2 de 1000 tonnes par an"
      ],
      fullDescription: `
        Notre intervention auprès de cette usine métallurgique a permis d'optimiser significativement 
        leur consommation énergétique. Le projet s'est déroulé en plusieurs phases :
        
        1. Audit initial et identification des points d'amélioration
        2. Mise en place de solutions d'optimisation des fours
        3. Installation de systèmes de récupération de chaleur
        4. Formation des équipes aux nouvelles pratiques
        
        Les résultats ont dépassé les objectifs initiaux avec une réduction de 30% de la consommation 
        énergétique et un retour sur investissement en moins de 18 mois.
      `
    },
    {
      id: 2,
      title: "Modernisation d'une industrie agroalimentaire",
      description: "Modernisation des systèmes de refroidissement avec 40% d'économies d'énergie.",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      results: [
        "40% d'économies d'énergie sur le refroidissement",
        "Amélioration de la qualité de production",
        "Maintenance préventive optimisée"
      ],
      fullDescription: `
        La modernisation des systèmes de refroidissement de cette industrie agroalimentaire 
        a permis d'atteindre des résultats exceptionnels. Le projet comprenait :
        
        1. Remplacement des anciennes installations
        2. Mise en place d'un système de gestion intelligente
        3. Optimisation des cycles de refroidissement
        4. Formation du personnel aux nouvelles technologies
        
        Les économies d'énergie réalisées ont permis un ROI rapide tout en améliorant 
        la qualité de la production.
      `
    }
  ];

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

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Études de cas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map(study => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <Link to={`/case-study/${study.id}`} className="inline-flex items-center text-blue-600 hover:text-blue-700">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Detail */}
      {caseStudies.map(study => (
        <section key={study.id} id={`case-study-${study.id}`} className="hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <Link to="/industriels" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Retour aux études de cas
            </Link>

            <img
              src={study.image}
              alt={study.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />

            <h1 className="text-4xl font-bold mb-8">{study.title}</h1>

            <div className="prose prose-lg max-w-none mb-8">
              {study.fullDescription.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Résultats clés</h2>
              <ul className="space-y-2">
                {study.results.map((result, index) => (
                  <li key={index} className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/industriels" className="inline-flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Retour aux études de cas
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Industrial;