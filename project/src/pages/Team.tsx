import React from 'react';
import { Mail, Linkedin, Heart, Shield, Users, Target } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: "Marie Laurent",
      role: "Directrice & Experte en Transition Énergétique",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "15 ans d'expérience dans l'optimisation énergétique industrielle",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Thomas Dubois",
      role: "Expert Technique & Innovation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Spécialiste des solutions d'efficacité énergétique",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Sophie Martin",
      role: "Responsable Indus'Trip",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Coordinatrice des visites industrielles et diagnostics",
      linkedin: "https://linkedin.com"
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Engagement",
      description: "Nous nous engageons pleinement dans chaque projet pour garantir des résultats concrets."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chacune de nos interventions et recommandations."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Collaboration",
      description: "Nous croyons en la force du collectif et du partage d'expérience."
    }
  ];

  const convictions = [
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "La transition énergétique est une opportunité",
      description: "Nous sommes convaincus que la transition énergétique est un levier de performance pour les entreprises."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "L'humain au cœur du changement",
      description: "La réussite de la transition énergétique repose sur l'engagement de tous les acteurs."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "L'innovation au service de l'environnement",
      description: "Les nouvelles technologies sont essentielles pour accélérer la transition énergétique."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Notre Équipe</h1>
            <p className="text-xl text-gray-600">
              Des experts passionnés par la transition énergétique à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-green-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@gutide.fr`}
                      className="text-gray-600 hover:text-green-600"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Convictions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos Convictions</h2>
            <p className="text-xl text-gray-600">
              Ce qui guide nos actions au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {convictions.map((conviction, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  {conviction.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{conviction.title}</h3>
                <p className="text-gray-600">{conviction.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600">
              Les principes qui nous animent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-8">Rejoignez notre équipe</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Nous sommes toujours à la recherche de talents passionnés par la transition énergétique et l'innovation industrielle.
        </p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
          Voir nos offres d'emploi
        </button>
      </div>
    </div>
  );
};

export default Team;