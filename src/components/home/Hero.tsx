import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BookOpen, Home, Briefcase, Wallet, ArrowRight, Star, Zap, Target, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && !isInView) {
        setIsInView(true);
        controls.start("visible");
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger animation on initial load after a slight delay
    const timer = setTimeout(() => {
      setIsInView(true);
      controls.start("visible");
    }, 300);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [controls, isInView]);

  // Heading animation (now treating the heading as a whole)
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8,
        delay: 0.3
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Pattern overlay */}
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/hero-pattern.svg')] bg-no-repeat bg-cover opacity-10"></div>
          
          {/* Abstract gradient blobs */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-20 right-[10%] w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-3xl"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.1, 0.15, 0.1],
              scale: [0.8, 1, 0.8],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 left-[5%] w-96 h-96 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-3xl"
          />
          
          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div 
              key={i}
              className={`absolute rounded-full bg-white/50 blur-sm`}
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                width: `${3 + Math.random() * 5}px`,
                height: `${3 + Math.random() * 5}px`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container relative mx-auto px-6 py-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-6 text-white">
            <motion.div 
              initial="hidden"
              animate={controls}
              variants={headingVariants}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6">
                Nous facilitons <br/> la vie de l'étudiant
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-base text-indigo-100 mb-8 max-w-2xl leading-relaxed"
            >
              Vous souhaitez poursuivre vos études loin de chez vous. Vous avez commencé les démarches nécessaires, mais vous ne savez pas ce qui vous attend une fois arrivé(e) en France ? Nous vous aidons à y voir plus clair. Pour mener à bien votre projet d'études, vous avez besoin de visibilité. Et si nous commencions par vous trouver un logement avant votre départ...
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Button 
                asChild
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 border-none shadow-lg hover:shadow-xl hover:shadow-purple-600/20"
              >
                <Link to="/etudiants" className="flex items-center gap-2">
                  <span>Commencer</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </Button>

              <Button 
                asChild
                variant="outline"
                className="bg-transparent text-white hover:bg-white/10 border-white/30 hover:border-white/50 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 backdrop-blur-sm"
              >
                <Link to="/about">
                  Qui Sommes-Nous ?
                </Link>
              </Button>
            </motion.div>

            {/* Trusted Partners */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 2.2 }}
              className="mt-16"
            >
              <p className="text-white/60 text-sm mb-4">Nos partenaires de confiance</p>
              <div className="flex flex-wrap items-center gap-8">
                <img src="assets/images/partners/vivawallet.jpg" alt="Partner" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
                <img src="assets/images/partners/luko.jpg" alt="Partner" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
                <img src="assets/images/partners/garantme.jpg" alt="Partner" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          </div>
          
          {/* Feature Highlights Column */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white/15"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Votre parcours simplifié</h2>
                <motion.div 
                  initial={{ scale: 0.8, rotate: -10, opacity: 0.8 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/20 rounded-lg py-1 px-3 flex items-center gap-1 text-sm"
                >
                  <CheckCircle className="text-green-400 h-4 w-4" />
                  <span className="text-white">100% Accompagné</span>
                </motion.div>
              </div>
              
              <div className="space-y-6">
                <FeatureItem 
                  icon={<Target />}
                  title="Orientation académique"
                  description="Conseils personnalisés pour trouver l’établissement idéal"
                  delay={0.6}
                  isInView={isInView}
                />
                
                <FeatureItem 
                  icon={<Home />}
                  title="Hébergement garanti"
                  description="Réserve ton logement avant d'arriver en France"
                  delay={0.8}
                  isInView={isInView}
                />
                
                <FeatureItem 
                  icon={<Wallet />}
                  title="Financement facilité"
                  description="Assistance pour la prise en charge financière"
                  delay={1}
                  isInView={isInView}
                />
                
                <FeatureItem 
                  icon={<Zap />}
                  title="Intégration rapide"
                  description="Accompagnement dans tes démarches administratives"
                  delay={1.2}
                  isInView={isInView}
                />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="mt-8 flex justify-center"
              >
                <div className="bg-gradient-to-r from-white/20 to-white/10 rounded-full py-3 px-6 flex items-center gap-2 shadow-inner">
                  <Star className="text-yellow-400 h-5 w-5 fill-yellow-400" />
                  <span className="text-white font-medium">Plus de 2000 étudiants conseillés</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature item component with animation
const FeatureItem = ({ icon, title, description, delay, isInView }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ x: 5 }}
      className="flex items-start gap-4 group"
    >
      <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-full p-3 text-white mt-1 shadow-lg group-hover:shadow-pink-500/30 transition-all duration-300 group-hover:scale-110">
        {React.cloneElement(icon, { className: "h-5 w-5" })}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors flex items-center">
          <span>{title}</span>
          <motion.div
            initial={{ width: 0 }}
            whileHover={{ width: 'auto' }}
            className="overflow-hidden ml-2"
          >
            <ArrowRight className="h-4 w-4 text-purple-400" />
          </motion.div>
        </h3>
        <p className="text-indigo-200/80">{description}</p>
      </div>
    </motion.div>
  );
};

export default Hero;