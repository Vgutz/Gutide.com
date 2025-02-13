import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Lightbulb, Users, Calendar } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accélérez votre transition énergétique
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Solutions innovantes pour optimiser votre consommation d'énergie
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/industriels"
                className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors"
              >
                Pour les industriels
              </Link>
              <Link
                to="/acteurs-energie"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-green-700 transition-colors"
              >
                Pour les acteurs de l'énergie
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Factory className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Audit Énergétique</h3>
              <p className="text-gray-600">
                Analyse complète de votre consommation énergétique et identification des opportunités d'optimisation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Lightbulb className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Solutions Innovantes</h3>
              <p className="text-gray-600">
                Implémentation de technologies vertes et solutions d'efficacité énergétique sur mesure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Accompagnement</h3>
              <p className="text-gray-600">
                Support continu et formation pour optimiser vos processus énergétiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">L'équipe</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Notre équipe"
              className="rounded-lg shadow-lg max-w-md"
            />
            <div className="max-w-md">
              <p className="text-lg text-gray-700 mb-6">
                Notre équipe d'experts passionnés combine des années d'expérience dans l'industrie et l'énergie pour vous accompagner dans votre transition énergétique.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-green-600 hover:text-green-700"
              >
                En savoir plus <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Indus'Trip Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Indus'Trip</h2>
              <p className="text-lg text-gray-700 mb-6">
                Découvrez les meilleures pratiques industrielles à travers des visites guidées de sites exemplaires en matière de transition énergétique.
              </p>
              <div className="flex items-center space-x-4">
                <Calendar className="h-6 w-6 text-green-600" />
                <span className="text-gray-600">Prochaine visite : 15 Mars 2024</span>
              </div>
              <Link
                to="/indus-trip"
                className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Réserver une visite
              </Link>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Visite industrielle"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;