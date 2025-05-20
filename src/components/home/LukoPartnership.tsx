import React, { useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Award, Sparkles } from 'lucide-react';

const LukoPartnership = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  // Animation pour le badge "Nouveau"
  const badgeVariants = {
    initial: { scale: 1 },
    pulse: { 
      scale: [1, 1.1, 1],
      transition: { 
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  // Animation pour les particules
  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: [0, 0.7, 0],
      scale: [0, 1, 0],
      x: [0, Math.random() * 40 - 20],
      y: [0, Math.random() * -40 - 10],
      transition: {
        delay: i * 0.1,
        duration: 1.5,
        repeat: isHovered ? Infinity : 0,
        repeatDelay: Math.random() * 0.5,
      }
    })
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Arrière-plan stylisé */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#18133E] via-[#231a54] to-[#2a1e69] z-0">
        {/* Éléments décoratifs d'arrière-plan */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20">
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[url('/pattern-dots.svg')] bg-repeat opacity-5"></div>
        </div>
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.12, 0.08, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-10 md:p-14 border border-white/10 shadow-xl overflow-hidden"
        >
          {/* Badge "Nouveau" animé */}
          <motion.div 
            className="absolute -top-3 -right-3 md:top-6 md:right-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-semibold py-1.5 px-4 rounded-full shadow-lg z-20 flex items-center gap-1"
            variants={badgeVariants}
            initial="initial"
            animate="pulse"
          >
            <Sparkles className="h-4 w-4" />
            <span>NOUVEAU</span>
          </motion.div>

          {/* Effet de halo */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-[#FFC3BC]/30 to-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-tr from-indigo-500/20 to-purple-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Contenu principal */}
            <div className="text-center md:text-left max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-2"
              >
                <span className="inline-block text-xs font-semibold text-[#FFC3BC] tracking-wider uppercase bg-[#FFC3BC]/10 py-1 px-3 rounded-full mb-4">
                  Partenariat Exclusif
                </span>
              </motion.div>

              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                PARTENARIAT AVEC LUKO
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative mb-8"
              >
                <div className="h-0.5 w-20 bg-gradient-to-r from-[#FFC3BC] to-transparent mb-4 md:mx-0 mx-auto"></div>
                <p className="text-xl text-[#FFC3BC] font-medium">
                  néo-assurance habitation n°1 en France
                </p>
              </motion.div>

              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap justify-center md:justify-start gap-4 mb-8 text-white/80"
              >
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#FFC3BC]" />
                  <span>Protection complète</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-[#FFC3BC]" />
                  <span>Service 5 étoiles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-[#FFC3BC]" />
                  <span>Tarifs préférentiels</span>
                </li>
              </motion.ul>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                onHoverStart={() => {
                  setIsHovered(true);
                  controls.start("visible");
                }}
                onHoverEnd={() => {
                  setIsHovered(false);
                  controls.stop();
                }}
                className="relative inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFC3BC] to-pink-500 rounded-full blur opacity-70"></div>
                <Button asChild className="relative bg-gradient-to-r from-[#FFC3BC] to-pink-500 hover:from-pink-500 hover:to-[#FFC3BC] text-[#18133E] font-bold rounded-full px-8 py-6 border-none shadow-lg">
                  <Link to="/vivre-en-france/assurances" className="flex items-center gap-2">
                    <span>Découvrir les avantages</span>
                    <motion.div
                      animate={{ x: isHovered ? 5 : 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </Link>
                </Button>

                {/* Particules animées au survol */}
                <AnimatePresence>
                  {isHovered && (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          custom={i}
                          variants={particleVariants}
                          initial="hidden"
                          animate={controls}
                          exit={{ opacity: 0, scale: 0 }}
                          className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-white"
                          style={{
                            originX: "50%",
                            originY: "50%"
                          }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Logo/Image de Luko */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
              className="relative flex-shrink-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC3BC]/20 to-transparent rounded-full blur-md"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 w-56 h-56 rounded-full flex items-center justify-center overflow-hidden group">
                {/* Ici, vous pourriez insérer un vrai logo */}
                <div className="bg-white/90 backdrop-blur-md rounded-full w-48 h-48 flex items-center justify-center shadow-inner">
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-black text-[#18133E] tracking-tight"
                  >
                    LUKO
                  </motion.div>
                </div>
                
                {/* Effet de brillance au survol */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1500"
                  style={{ 
                    transform: "skewX(45deg) translateX(-150%)",
                  }}
                  animate={{ 
                    translateX: ["0%", "250%"] 
                  }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LukoPartnership;