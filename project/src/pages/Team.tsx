import React from 'react';
import { Mail, Linkedin, Briefcase, Target, ShieldCheck } from 'lucide-react';
import VGMPhoto from '../assets/VGM.jpg'; // Import de l'image locale

const Team = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">À propos</h1>
          <p className="text-xl">
            Une expertise pointue en <strong>énergie</strong>, <strong>industrie</strong> et <strong>environnement</strong> pour accompagner la transition énergétique des entreprises.
          </p>
        </div>
      </section>

      {/* Profil Vincent */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start">
          {/* Photo */}
          <div className="w-48 h-48 mb-6 md:mb-0 md:mr-8">
            <img
              src={VGMPhoto} 
              alt="Vincent Gutierrez-Mougin"
              className="rounded-full shadow-lg w-32 h-32 object-cover mx-auto"
            />
          </div>

          {/* Texte */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">Vincent Gutierrez-Mougin</h2>
            <p className="text-green-600 text-lg font-semibold">Expert énergie & industrie</p>
            <p className="text-gray-600 mt-4">
              <strong>Ingénieur IMT Atlantique</strong>, j’ai évolué pendant <strong>5 ans en conseil stratégique</strong> avant de fonder mon entreprise dédiée à la transition énergétique.  
              Mon expertise couvre les <strong>stratégies énergétiques</strong>, la <strong>décarbonation industrielle</strong> et l’<strong>efficacité énergétique</strong>.
            </p>

            {/* Contact */}
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <a href="mailto:contact@gutide.fr" className="text-gray-600 hover:text-green-600">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/vincent--gutierrez/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Convictions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Nos convictions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">L’énergie comme levier stratégique</h3>
              <p className="text-gray-600 mt-2">Une gestion énergétique optimisée booste la performance et la compétitivité des entreprises.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Briefcase className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Action & impact</h3>
              <p className="text-gray-600 mt-2">Notre approche est pragmatique : moins de slides, plus de résultats concrets.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ShieldCheck className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Innovation au service de la transition</h3>
              <p className="text-gray-600 mt-2">Les nouvelles technologies sont des accélérateurs majeurs pour la décarbonation et l’industrie 4.0.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-8">Travaillons ensemble</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Vous souhaitez structurer votre stratégie énergétique ou optimiser votre performance industrielle ? Parlons-en.
        </p>
        <a href="mailto:contact@gutide.fr" className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
          Contactez-moi
        </a>
      </div>
    </div>
  );
};

export default Team;
