import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Users, Clock, Star } from 'lucide-react';

const IndusTrip = () => {
  const logosRef = useRef<HTMLDivElement>(null);

  const logos = [
    {
      name: "Entreprise 1",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Entreprise 2",
      logo: "https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Entreprise 3",
      logo: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Entreprise 4",
      logo: "https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  useEffect(() => {
    const scrollLogos = () => {
      if (logosRef.current) {
        if (logosRef.current.scrollLeft >= logosRef.current.scrollWidth - logosRef.current.clientWidth) {
          logosRef.current.scrollLeft = 0;
        } else {
          logosRef.current.scrollLeft += 1;
        }
      }
    };

    const interval = setInterval(scrollLogos, 30);
    return () => clearInterval(interval);
  }, []);

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
              Partagez votre expérience, recevez un diagnostic énergétique gratuit
            </p>
            <a 
              href="https://calendly.com/v-gutierrez-gutide/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-teal-700 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors"
              >
              <strong>Réserver votre diagnostic maintenant !</strong>
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comment ça marche ?</h2>
            <p className="text-xl text-gray-600">
              Accueillez une visite de site et bénéficiez d'un diagnostic énergétique complet
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Planifiez une date</h3>
              <p className="text-gray-600">
                Choisissez une date pour accueillir une visite de votre site
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Partagez votre contexte le jour J</h3>
              <p className="text-gray-600">
                Présentez vos installations et votre organisation
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bénéficiez de recommendations</h3>
              <p className="text-gray-600">
                Recevez un diagnostic énergétique 360° gratuit de vos installations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Ils ont accueilli une visite Indus'Trip :</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                alt="Jean Dupont"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">Jean D.</h3>
                <p className="text-gray-600">Directeur Industriel</p>
              </div>
            </div>
            <blockquote className="text-gray-600 italic">
              "Grâce à la visite de Vincent dans le cadre d'Indus'Trip, nous avons non seulement pu partager notre expérience en matière d'optimisation énergétique, mais nous avons également reçu un diagnostic complet qui nous a permis d'identifier de nouvelles opportunités d'amélioration. Une expérience enrichissante pour toute notre équipe."
            </blockquote>
            <div className="flex items-center mt-6">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      {/* <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Nous les avons aidé</h2>
          <div 
            ref={logosRef}
            className="flex space-x-8 overflow-hidden"
            style={{ scrollBehavior: 'smooth' }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0"
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>*/}
    </div>
  );
};

export default IndusTrip;