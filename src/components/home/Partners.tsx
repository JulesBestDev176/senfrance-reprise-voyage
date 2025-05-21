import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Building, MapPin, Award, ExternalLink } from 'lucide-react';

const Partners = () => {
  // Animation pour le défilement automatique des logos
  const [currentBatch, setCurrentBatch] = useState(0);
  const totalBatches = 2; // Nombre de groupes pour le carrousel
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBatch((prev) => (prev + 1) % totalBatches);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Fond stylisé avec motifs et formes */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Grille de fond */}
          <div className="absolute inset-0 bg-[url('/grid-dot.svg')] bg-repeat opacity-5"></div>
          
          {/* Formes décoratives */}
          <motion.div 
            className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-indigo-100 opacity-30 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-[10%] w-80 h-80 rounded-full bg-pink-100 opacity-20 blur-3xl"
            animate={{
              scale: [1.1, 0.9, 1.1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-indigo-600 tracking-wider uppercase bg-indigo-50 py-1 px-3 rounded-full mb-3">
            Réseau d'Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nos Partenaires de Confiance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un réseau étendu de résidences étudiantes à travers toute la France pour vous offrir les meilleures opportunités
          </p>
        </motion.div>

        {/* Statistiques en surbrillance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-14"
        >
          <StatItem 
            icon={<Building />}
            value="400+"
            label="Résidences étudiantes"
            color="indigo"
            delay={0.1}
          />
          <StatItem 
            icon={<MapPin />}
            value="120"
            label="Villes en France"
            color="pink"
            delay={0.2}
          />
          <StatItem 
            icon={<Award />}
            value="50+"
            label="Années d'expertise"
            color="purple"
            delay={0.3}
          />
        </motion.div>

        {/* Logo showcase avec animation carrousel */}
        <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-gray-100 p-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-indigo-50/50 to-transparent opacity-60"
          />

          {/* Titre de la section */}
          <div className="relative mb-8 flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Partenaires résidentiels</h3>
            <div className="flex space-x-1">
              {[...Array(totalBatches)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentBatch(i)}
                  className={`h-2 w-8 rounded-full transition-all duration-300 ${
                    i === currentBatch ? 'bg-indigo-500' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Logos des partenaires */}
          <motion.div
            animate={{ x: -currentBatch * 100 + '%' }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full flex-shrink-0">
              {[1, 2, 3, 4, 5, 6, 7, 8].slice(0, 8).map((index) => (
                <PartnerLogo key={index} index={index} delay={index * 0.05} />
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full flex-shrink-0">
              {[9, 10, 11, 12, 13, 14, 15, 16].slice(0, 8).map((index) => (
                <PartnerLogo key={index} index={index} delay={index * 0.05} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Lien vers tous les partenaires */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <a 
            href="#"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium group transition-colors"
          >
            <span>Découvrir tous nos partenaires</span>
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              className="ml-2 group-hover:text-indigo-800"
            >
              <ExternalLink size={16} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Composant pour les statistiques
const StatItem = ({ icon, value, label, color, delay }) => {
  const colors = {
    indigo: "text-indigo-600 bg-indigo-50",
    pink: "text-pink-600 bg-pink-50",
    purple: "text-purple-600 bg-purple-50"
  };
  
  const bgColor = colors[color] || colors.indigo;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <div className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center mb-3`}>
        {React.cloneElement(icon, { className: "h-6 w-6" })}
      </div>
      <span className="text-3xl font-bold text-gray-900 mb-1">{value}</span>
      <span className="text-gray-500 text-sm">{label}</span>
    </motion.div>
  );
};

// Composant pour les logos des partenaires
const PartnerLogo = ({ index, delay }) => {
  // Animation subtile pour simuler un logo
  const logoAnimation = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  
  // Changer l'animation au survol
  useEffect(() => {
    if (isHovered) {
      logoAnimation.start({ 
        scale: 1.05,
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)"
      });
    } else {
      logoAnimation.start({ 
        scale: 1,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
      });
    }
  }, [isHovered, logoAnimation]);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay + 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={logoAnimation}
      className="overflow-hidden relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      <div className="bg-white border border-gray-100 p-6 rounded-xl flex items-center justify-center h-24 relative transition-all duration-300 group-hover:border-indigo-100">
        {/* Logo simulé avec une mise en page élégante */}
        <div className="relative flex flex-col items-center justify-center w-full">
          <div className={`h-5 w-${10 + (index % 5) * 2} rounded-md bg-gradient-to-r ${
            index % 3 === 0 ? 'from-indigo-300 to-indigo-200' : 
            index % 3 === 1 ? 'from-pink-300 to-pink-200' : 
            'from-purple-300 to-purple-200'
          } mb-2 relative z-10`}></div>
          <div className={`h-3 w-${16 - (index % 4) * 2} rounded-md bg-gray-200 relative z-10`}></div>
          
          {/* Effet de brillance au survol */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-70"
            style={{ 
              transform: "skewX(45deg) translateX(-150%)",
            }}
            animate={{ 
              translateX: isHovered ? ["0%", "250%"] : "0%"
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Partners;