import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Building, MapPin, Award, ExternalLink } from 'lucide-react';

// Liste des logos des partenaires
const partnerLogos = [
  { name: 'Partner 1', image: '/assets/images/partners/vivawallet.jpg' },
  { name: 'Partner 2', image: '/assets/images/partners/luko.jpg' },
  { name: 'Partner 3', image: '/assets/images/partners/garantme.jpg' },
  { name: 'Partner 4', image: '/assets/images/partners/bellesannees.jpg' },
  { name: 'Partner 5', image: '/assets/images/partners/studelites.jpg' },
  { name: 'Partner 6', image: '/assets/images/partners/studently.jpg' },
  { name: 'Partner 7', image: '/assets/images/partners/studyo.jpg' },
  { name: 'Partner 8', image: '/assets/images/partners/sweetly.jpg' },
  { name: 'Partner 9', image: '/assets/images/partners/yourfist.jpg' },
  { name: 'Partner 10', image: '/assets/images/partners/studea.jpg' },
  { name: 'Partner 11', image: '/assets/images/partners/estudines.jpg' },
];

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
            label="Écoles de qualité"
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
              {partnerLogos.slice(0, 8).map((partner, index) => (
                <PartnerLogo 
                  key={index} 
                  index={index} 
                  delay={index * 0.05}
                  image={partner.image}
                  name={partner.name}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full flex-shrink-0">
              {partnerLogos.slice(8).map((partner, index) => (
                <PartnerLogo 
                  key={index + 8} 
                  index={index + 8} 
                  delay={(index + 8) * 0.05}
                  image={partner.image}
                  name={partner.name}
                />
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
const PartnerLogo = ({ index, delay, image, name }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 aspect-[3/2] flex items-center justify-center"
    >
      <img
        src={image}
        alt={name}
        className="max-w-full max-h-full object-contain"
      />
    </motion.div>
  );
};

export default Partners;