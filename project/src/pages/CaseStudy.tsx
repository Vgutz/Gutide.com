import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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

const CaseStudy = () => {
  const { id } = useParams();
  const study = caseStudies.find(s => s.id === parseInt(id || "0"));

  if (!study) {
    return <div className="text-center text-red-600 py-20">Étude de cas non trouvée.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link to="/industriels" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Retour aux études de cas
      </Link>

      <img src={study.image} alt={study.title} className="w-full h-96 object-cover rounded-lg mb-8" />

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
  );
};

export default CaseStudy;
