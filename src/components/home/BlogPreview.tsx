import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, ArrowUpRight, ChevronRight, Bookmark, Eye, Heart } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "Les premières démarches en arrivant en France",
    excerpt: "À votre arrivée en France, vous avez encore des étapes à franchir... Source : Campus France Maroc #arrivéeétudiantenfrance...",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
    date: "8 avr. 2021",
    readTime: "1 min de lecture",
    category: "Guide pratique",
    color: "indigo"
  },
  {
    id: 2,
    title: "Se loger pendant ses études, tant de possibilités !",
    excerpt: "Cette première étape est la plus cruciale pour l'étudiant étranger qui souhaite s'installer en France. Source : Campus France Maroc...",
    image: "https://images.unsplash.com/photo-1548946621-31653ef7bcef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "22 mars 2021",
    readTime: "1 min de lecture",
    category: "Logement",
    color: "purple"
  },
  {
    id: 3,
    title: "Vidéo : le job étudiant devient essentiel pour les jeunes",
    excerpt: "Pour financer leurs études ou leur logement, les jeunes se mobilisent pour trouver un emploi à côté de leurs cours. Réalisation :...",
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "3 sept. 2020",
    readTime: "1 min de lecture",
    category: "Emploi",
    color: "rose"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FFC3BC]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#18133E]/5 rounded-full blur-3xl"></div>
        
        {/* Animated decorative elements */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-6 h-6 bg-[#FFC3BC]/10 rounded-full"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-[#18133E]/10 rounded-full"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-3"
          >
            <span className="bg-[#FFC3BC]/10 text-[#18133E] text-sm font-medium py-1 px-3 rounded-full border border-[#FFC3BC]/20 shadow-sm">
              Notre Blog
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-[#18133E]"
          >
            Articles & Conseils
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="h-1 w-20 bg-gradient-to-r from-[#FFC3BC] to-[#FFC3BC]/30 rounded-full mx-auto mb-6"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Suis les dernières actualités pour réussir ton projet d'études en France
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article, index) => (
            <ArticleCard 
              key={article.id}
              article={article}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <Link to="/blog" className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#18133E] to-[#271D5B] py-3 px-6 rounded-full text-white font-medium shadow-md hover:shadow-lg transition-all duration-300">
            <span>Voir tous nos articles</span>
            <motion.div
              className="bg-white/20 p-1 rounded-full"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight className="h-4 w-4 text-white" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced article card component
const ArticleCard = ({ article, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Color mappings for different card styles
  const colorStyles = {
    indigo: {
      bg: "bg-indigo-50",
      light: "bg-indigo-500/80",
      text: "text-indigo-600",
      border: "border-indigo-100",
      icon: "bg-indigo-100",
      hover: "group-hover:border-indigo-200 group-hover:shadow-indigo-100/30",
    },
    purple: {
      bg: "bg-purple-50",
      light: "bg-purple-500/80",
      text: "text-purple-600",
      border: "border-purple-100",
      icon: "bg-purple-100",
      hover: "group-hover:border-purple-200 group-hover:shadow-purple-100/30",
    },
    rose: {
      bg: "bg-[#FFC3BC]/10",
      light: "bg-[#FFC3BC]/80",
      text: "text-[#FFC3BC]",
      border: "border-[#FFC3BC]/20",
      icon: "bg-[#FFC3BC]/20",
      hover: "group-hover:border-[#FFC3BC]/30 group-hover:shadow-[#FFC3BC]/20",
    }
  };
  
  const style = colorStyles[article.color] || colorStyles.indigo;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.7, 
        delay: 0.3 + index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border ${style.border} ${style.hover}`}
    >
      {/* Category badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className={`${style.light} backdrop-blur-sm text-white text-xs font-medium py-1 px-3 rounded-full shadow-sm`}>
          {article.category}
        </span>
      </div>
      
      {/* Enhanced engagement icons */}
      <div className="absolute top-4 right-4 z-20 flex space-x-2">
        <motion.button 
          className="bg-white/80 backdrop-blur-sm text-[#18133E] p-2 rounded-full shadow-sm hover:bg-white transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart className="h-4 w-4" />
        </motion.button>
        <motion.button 
          className="bg-white/80 backdrop-blur-sm text-[#18133E] p-2 rounded-full shadow-sm hover:bg-white transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Bookmark className="h-4 w-4" />
        </motion.button>
      </div>
      
      {/* Image container with enhanced overlay and animation */}
      <div className="relative h-56 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#18133E]/70 to-transparent z-10"
          animate={{
            opacity: isHovered ? 0.8 : 0.4
          }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          animate={{
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.7 }}
        />
        
        {/* View count overlay */}
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm text-white text-xs py-1 px-2 rounded-full">
          <Eye className="h-3 w-3" />
          <span>{Math.floor(Math.random() * 900) + 100}</span>
        </div>
      </div>
      
      {/* Content with enhanced styling */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-[#18133E] line-clamp-2 group-hover:text-[#18133E]/90 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-gray-600 mb-4 text-sm line-clamp-3 flex-grow">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <Calendar className={`h-4 w-4 mr-1 ${style.text}`} />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className={`h-4 w-4 mr-1 ${style.text}`} />
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>
      
      {/* Enhanced read more button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white to-transparent">
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="flex justify-center"
            >
              <Link 
                to={`/blog/${article.id}`} 
                className={`inline-flex items-center ${style.text} font-medium text-sm ${style.icon} py-1.5 px-4 rounded-full`}
              >
                Lire l'article complet
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  className="ml-2"
                >
                  <ChevronRight className="h-4 w-4" />
                </motion.div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Enhanced corner decoration */}
      <motion.div
        className={`absolute -top-12 -right-12 w-24 h-24 ${style.bg} rounded-full`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.6 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default BlogPreview;