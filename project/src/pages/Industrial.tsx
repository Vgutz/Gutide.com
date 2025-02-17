import React from 'react';
import { Factory, TrendingUp, Award, Truck } from 'lucide-react';
import { Link } from "react-router-dom";
// Import des images locales si disponibles
import IndustrialOptimizationImage from '../assets/IndustrialOptimization.webp';
import RenewableEnergyPPAImage from '../assets/RenewableEnergyPPA.webp';

const Industrial = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Optimisation des procédés industriels",
      description: "Réduction de 20% des coûts de production grâce à l'efficacité énergétique et l'automatisation.",
      image: IndustrialOptimizationImage,
      results: [
        "20% d’économies sur les coûts de production",
        "Amélioration de 15% de la productivité",
        "Mise en conformité réglementaire facilitée"
      ],
      fullDescription: (
        <>
          <p>Nous avons accompagné une entreprise industrielle dans la refonte de ses processus énergétiques et opérationnels :</p>
          <ul className="list-disc pl-5">
            <li><strong>Identification</strong> et élimination des pertes énergétiques</li>
            <li><strong>Automatisation</strong> des systèmes de régulation de production</li>
            <li><strong>Mise en conformité</strong> avec la norme ISO 50001</li>
            <li><strong>Optimisation</strong> des flux logistiques internes</li>
          </ul>
          <p><strong>Résultat :</strong> 20% de réduction des coûts et un retour sur investissement en moins de 18 mois.</p>
        </>
      )
    },
    {
      id: 2,
      title: "Stratégie d'approvisionnement en énergies renouvelables",
      description: "Mise en place d'un contrat PPA pour sécuriser 100% d'énergie verte à prix fixe.",
      image: RenewableEnergyPPAImage,
      results: [
        "Sécurisation de 100% d'énergie renouvelable",
        "Réduction des coûts énergétiques sur 10 ans",
        "Valorisation RSE et engagement climat renforcé"
      ],
      fullDescription: (
        <>
          <p>Une industrie agroalimentaire a sécurisé son approvisionnement en énergie verte à travers un <strong>contrat PPA (Power Purchase Agreement)</strong> :</p>
          <ul className="list-disc pl-5">
            <li><strong>Analyse</strong> des besoins et consommation énergétique</li>
            <li><strong>Sélection</strong> et négociation avec les fournisseurs d’énergie</li>
            <li><strong>Mise en place</strong> d’un modèle de financement optimisé</li>
            <li><strong>Suivi</strong> des KPI et impact CO₂ via un dashboard personnalisé</li>
          </ul>
          <p><strong>Impact business :</strong> Des économies sur 10 ans et un positionnement différenciant sur le marché.</p>
        </>
      )
    }
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">
              Accélérez la transformation industrielle
            </h1>
            <p className="text-xl mb-8">
              Nous aidons les industriels à <strong>réduire leurs coûts, optimiser leur énergie et sécuriser leur production</strong> face aux nouvelles exigences du marché.
            </p>

            <a 
              href="https://calendly.com/v-gutierrez-gutide/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
              <strong>Demander un audit</strong>
            </a>
          </div>
        </div>
      </section>

      {/* OFFRES STRUCTURÉES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos solutions pour les industriels</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <Factory className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Optimisation des processus</h3>
              <p className="text-gray-600">
                <strong>Améliorez l'efficacité de votre production</strong> en identifiant les goulots d'étranglement et en réduisant les gaspillages énergétiques.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Réduction des coûts énergétiques</h3>
              <p className="text-gray-600">
                <strong>Optimisez votre facture d’électricité</strong> en renégociant vos contrats et en adoptant des solutions de consommation intelligente.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sécurisation des approvisionnements</h3>
              <p className="text-gray-600">
                <strong>Assurez votre stabilité énergétique</strong> avec des contrats long-terme et des solutions d’énergie renouvelable adaptées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos résultats concrets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map(study => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-3/4 h-32 object-cover mx-auto"
                />
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

      {/* INDUS'TRIP */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Truck className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-6">Indus'Trip : On vient chez vous !</h2>
          <p className="text-lg mb-6">
            Profitez d’une <strong>évaluation rapide et terrain</strong> de vos performances énergétiques et de votre conformité.  
            Nos experts se déplacent directement sur votre site pour identifier les leviers d'amélioration immédiats.
          </p>
          <Link 
            to="/indus-trip"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-block text-center"
          >
          En savoir plus sur Indus'Trip
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industrial;
