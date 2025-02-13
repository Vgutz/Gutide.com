import React from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const IndusTrip = () => {
  const upcomingVisits = [
    {
      id: 1,
      title: "Usine de production d'énergie solaire",
      date: "15 Mars 2024",
      location: "Marseille, France",
      duration: "4 heures",
      spots: 12,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Centre de valorisation des déchets",
      date: "22 Mars 2024",
      location: "Lyon, France",
      duration: "3 heures",
      spots: 8,
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Parc éolien offshore",
      date: "5 Avril 2024",
      location: "Saint-Nazaire, France",
      duration: "5 heures",
      spots: 15,
      image: "https://images.unsplash.com/photo-1532601291760-c88ced91ecec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">
              Indus'Trip
            </h1>
            <p className="text-xl mb-8">
              Découvrez les meilleures pratiques industrielles à travers des visites guidées de sites exemplaires.
            </p>
            <button className="bg-white text-teal-700 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors">
              Réserver une visite
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Visits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Prochaines visites</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingVisits.map(visit => (
              <div key={visit.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={visit.image}
                  alt={visit.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{visit.title}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-teal-600" />
                      {visit.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-teal-600" />
                      {visit.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-teal-600" />
                      {visit.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-teal-600" />
                      {visit.spots} places disponibles
                    </div>
                  </div>
                  <button className="mt-6 w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                    Réserver
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">À propos d'Indus'Trip</h3>
              <p className="text-gray-600 mb-4">
                Indus'Trip vous permet de découvrir les sites industriels les plus innovants en matière de transition énergétique. Nos visites sont guidées par des experts qui partagent leur expérience et leurs bonnes pratiques.
              </p>
              <p className="text-gray-600">
                Chaque visite est une opportunité unique d'échanger avec des professionnels et de s'inspirer des meilleures pratiques du secteur.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Informations pratiques</h3>
              <ul className="space-y-4 text-gray-600">
                <li>• Les visites sont limitées à un petit groupe pour garantir une expérience de qualité</li>
                <li>• Le transport depuis un point de rendez-vous central est inclus</li>
                <li>• Un équipement de sécurité est fourni sur place</li>
                <li>• Un certificat de participation est délivré à la fin de la visite</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndusTrip;