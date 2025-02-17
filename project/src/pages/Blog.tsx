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

  return (
    <div className="relative py-12">
      {/* Floutage avec texte */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-10">
        <h1 className="text-4xl font-bold text-white">Blog & Actualités à venir</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog & Actualités</h1>
          <p className="text-xl text-gray-600">
            Restez informé des dernières tendances et innovations en matière de transition énergétique
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-50 blur-sm pointer-events-none">
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
      </div>
    </div>
  );
};

export default Blog;
