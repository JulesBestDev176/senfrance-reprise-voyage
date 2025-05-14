
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: "Les premières démarches en arrivant en France",
    excerpt: "À votre arrivée en France, vous avez encore des étapes à franchir... Source : Campus France Maroc #arrivéeétudiantenfrance...",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
    date: "8 avr. 2021",
    readTime: "1 min de lecture"
  },
  {
    id: 2,
    title: "Se loger pendant ses études, tant de possibilités !",
    excerpt: "Cette première étape est la plus cruciale pour l'étudiant étranger qui souhaite s'installer en France. Source : Campus France Maroc...",
    image: "https://images.unsplash.com/photo-1548946621-31653ef7bcef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "22 mars 2021",
    readTime: "1 min de lecture"
  },
  {
    id: 3,
    title: "Vidéo : le job étudiant devient essentiel pour les jeunes",
    excerpt: "Pour financer leurs études ou leur logement, les jeunes se mobilisent pour trouver un emploi à côté de leurs cours. Réalisation :...",
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "3 sept. 2020",
    readTime: "1 min de lecture"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-[#18133E]"
        >
          Derniers Articles
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#18133E]">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
