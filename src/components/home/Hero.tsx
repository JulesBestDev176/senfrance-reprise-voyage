
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Home, Briefcase, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Fixed variants for blobs with correct type
  const blobVariants = {
    initial: {
      opacity: 0.7,
      scale: 0.8,
    },
    animate: {
      opacity: [0.7, 0.9, 0.7],
      scale: [0.8, 1.1, 0.8],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "mirror" as const,
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-r from-[#18133E] to-[#18133E]/90">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[10%] right-[15%] w-72 h-72 bg-[#FFC3BC] rounded-full filter blur-3xl opacity-40"
          variants={blobVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-[20%] left-[20%] w-96 h-96 bg-[#FFC3BC] rounded-full filter blur-3xl opacity-30"
          variants={blobVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div 
          className="absolute top-[40%] left-[10%] w-64 h-64 bg-secondary rounded-full filter blur-3xl opacity-20"
          variants={blobVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 4 }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-center text-white pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-[#FFC3BC] to-white bg-clip-text text-transparent">
              Nous facilitons la vie de l'étudiant
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto">
            avec un accompagnement sur mesure
          </motion.p>

          <motion.p variants={itemVariants} className="text-base md:text-lg opacity-80 mb-12 max-w-3xl mx-auto">
            Vous souhaitez poursuivre vos études loin de chez vous. Vous avez commencé les démarches nécessaires, mais vous ne savez pas ce qui vous attend une fois arrivé(e) en France ? Nous vous aidons à y voir plus clair. Pour mener à bien votre projet d'études, vous avez besoin de visibilité. Et si nous commencions par vous trouver un logement avant votre départ...
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button asChild className="bg-[#FFC3BC] hover:bg-[#FFC3BC]/90 text-[#18133E] rounded-full px-8 py-6 text-lg">
              <Link to="/about">
                QUI SOMMES-NOUS ? 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M5 7l5 5-5 5" />
                </svg>
              </Link>
            </Button>
          </motion.div>

          {/* Services Panel */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
          >
            {/* Service 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="bg-[#FFC3BC]/20 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="h-6 w-6 text-[#FFC3BC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Orientation & coaching</h3>
              <p className="text-white/80 text-sm">Inscription dans nos établissements partenaires</p>
              <Link to="/services/orientation" className="inline-flex items-center text-[#FFC3BC] mt-4 text-sm">
                En savoir plus
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="bg-[#FFC3BC]/20 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                <Home className="h-6 w-6 text-[#FFC3BC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Se loger</h3>
              <p className="text-white/80 text-sm">Bail, réservation & attestation d'hébergement</p>
              <Link to="/visa/hebergement" className="inline-flex items-center text-[#FFC3BC] mt-4 text-sm">
                En savoir plus
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="bg-[#FFC3BC]/20 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                <Wallet className="h-6 w-6 text-[#FFC3BC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">AVI</h3>
              <p className="text-white/80 text-sm">Justificatif de ressources financières pour vos études à l'étranger</p>
              <Link to="/visa/avi" className="inline-flex items-center text-[#FFC3BC] mt-4 text-sm">
                En savoir plus
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="bg-[#FFC3BC]/20 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                <Briefcase className="h-6 w-6 text-[#FFC3BC]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Travailler</h3>
              <p className="text-white/80 text-sm">Job étudiant, stage, alternance & premier emploi post formation</p>
              <Link to="/vivre-en-france/job-etudiant" className="inline-flex items-center text-[#FFC3BC] mt-4 text-sm">
                En savoir plus
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#ffffff">
          <path fillOpacity="1" d="M0,192L48,170.7C96,149,192,107,288,112C384,117,480,171,576,176C672,181,768,139,864,122.7C960,107,1056,117,1152,128C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
