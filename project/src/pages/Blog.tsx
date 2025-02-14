import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "L'avenir de l'industrie verte",
      excerpt: "Découvrez les dernières innovations en matière d'efficacité énergétique industrielle.",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "2024-02-15",
      author: "Marie Laurent"
    },
    {
      id: 2,
      title: "Transition énergétique : les clés du succès",
      excerpt: "Analyse des facteurs clés pour réussir sa transition énergétique.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "2024-02-10",
      author: "Pierre Dubois"
    },
    {
      id: 3,
      title: "Les nouvelles technologies au service de l'énergie",
      excerpt: "Comment l'IA et l'IoT révolutionnent la gestion de l'énergie.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "2024-02-05",
      author: "Sophie Martin"
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    
    // Here you would typically send this to your backend or email service
    console.log('Email submitted:', email);
    // You can integrate with services like Mailchimp, SendGrid, etc.
    alert('Merci pour votre inscription ! Vous recevrez bientôt nos actualités.');
    form.reset();
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog & Actualités</h1>
          <p className="text-xl text-gray-600">
            Restez informé des dernières tendances et innovations en matière de transition énergétique
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Article à la une"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">
                  À la une
                </div>
                <h2 className="block mt-1 text-2xl font-semibold text-gray-900">
                  Les tendances 2024 de la transition énergétique
                </h2>
                <p className="mt-2 text-gray-600">
                  Découvrez les principales tendances qui façonneront le paysage énergétique en 2024 et au-delà.
                </p>
                <div className="mt-4">
                  <Link
                    to="/blog/featured"
                    className="inline-flex items-center text-green-600 hover:text-green-700"
                  >
                    Lire l'article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('fr-FR')}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center mt-4 text-green-600 hover:text-green-700"
                >
                  Lire plus <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Restez informé
            </h3>
            <p className="text-gray-600 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et actualités
            </p>
            <form className="max-w-md mx-auto" onSubmit={handleNewsletterSubmit}>
              <div className="flex gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  S'inscrire
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;