import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  
  // Simulated blog post data - in a real app, this would come from an API
  const post = {
    id: 1,
    title: "L'avenir de l'industrie verte",
    content: `
      <h2>Introduction</h2>
      <p>L'industrie verte représente l'avenir de notre économie. Dans cet article, nous explorons les dernières innovations en matière d'efficacité énergétique industrielle et leur impact sur l'environnement.</p>
      
      <h2>Les nouvelles technologies</h2>
      <p>Les avancées technologiques permettent aujourd'hui d'optimiser la consommation d'énergie comme jamais auparavant. L'intelligence artificielle et l'Internet des objets jouent un rôle crucial dans cette transformation.</p>
      
      <h2>Impact sur l'environnement</h2>
      <p>La réduction de l'empreinte carbone est devenue une priorité pour de nombreuses entreprises. Les solutions d'efficacité énergétique contribuent significativement à cet objectif.</p>
    `,
    date: "2024-02-15",
    author: "Marie Laurent",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour aux articles
        </Link>

        <article>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div className="flex items-center space-x-6 text-gray-500 mb-8">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              {new Date(post.date).toLocaleDateString('fr-FR')}
            </div>
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              {post.author}
            </div>
            <button className="flex items-center hover:text-green-600">
              <Share2 className="h-5 w-5 mr-2" />
              Partager
            </button>
          </div>

          <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">Articles similaires</h2>
          {/* Add similar articles here */}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;