import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BookOpen, Home, Briefcase, Wallet, ArrowRight, Star, Zap, Target, CheckCircle, Sparkles, Award, TrendingUp, Users } from 'lucide-react';

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

  // Heading animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
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

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    scale: [1, 1.05, 1],
  };

  return (
    <div className="relative overflow-hidden bg-gray-50 h-auto min-h-screen md:min-h-[100vh] ">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Animated geometric pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-[0.02]">
            <motion.svg 
              className="w-full h-full" 
              viewBox="0 0 100 100" 
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
              <defs>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="4" cy="4" r="0.5" fill="#18133E"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </motion.svg>
          </div>
          
          {/* Very subtle gradient blobs */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
            animate={{ 
              opacity: [0.03, 0.06, 0.03],
              scale: [0.6, 1.2, 0.6],
              rotate: [0, 180, 360],
              x: [0, 30, 0],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
            className="absolute top-10 right-[8%] w-96 h-96 rounded-full bg-gradient-to-br from-[#FFC3BC] to-[#18133E] blur-3xl"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.02, 0.05, 0.02],
              scale: [0.8, 1.3, 0.8],
              rotate: [360, 180, 0],
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute -bottom-32 left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#18133E] to-[#FFC3BC] blur-3xl"
          />

          {/* Additional colorful accent blobs */}
          <motion.div 
            animate={{ 
              opacity: [0.05, 0.1, 0.05],
              scale: [1, 1.4, 1],
              x: [0, -40, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-[20%] w-64 h-64 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-400/10 blur-2xl"
          />
          
          {/* Enhanced floating particles with colors */}
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={i}
              className={`absolute rounded-full ${i % 2 === 0 ? 'bg-[#FFC3BC]/20' : 'bg-[#18133E]/10'} blur-sm`}
              style={{
                top: `${15 + Math.random() * 70}%`,
                left: `${10 + Math.random() * 80}%`,
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
              }}
              animate={{
                y: [0, -25, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Floating icons */}
          {[
            { Icon: Star, color: "text-yellow-400", delay: 0 },
            { Icon: Sparkles, color: "text-[#FFC3BC]", delay: 1 },
            { Icon: Award, color: "text-purple-400", delay: 2 },
            { Icon: TrendingUp, color: "text-green-400", delay: 1.5 }
          ].map(({ Icon, color, delay }, i) => (
            <motion.div
              key={i}
              className={`absolute ${color} opacity-10`}
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${15 + Math.random() * 70}%`,
              }}
              animate={floatingAnimation}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
              }}
            >
              <Icon size={16 + Math.random() * 12} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container relative mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 lg:py-8 z-10 h-full md:flex md:items-center lg:flex lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 lg:gap-12 items-center w-full">
          
          {/* Text Column */}
          <div className="lg:col-span-6 text-[#18133E] mb-6 md:mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#FFC3BC]/20 to-[#FFC3BC]/10 border border-[#FFC3BC]/30 rounded-full mb-4 sm:mb-6"
            >
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-[#FFC3BC]" />
              <span className="text-xs sm:text-sm font-medium text-[#18133E]">Solution complète pour étudiants</span>
            </motion.div>

            <motion.div 
              initial="hidden"
              animate={controls}
              variants={headingVariants}
              className="mb-4 sm:mb-6"
            >
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 bg-gradient-to-r from-[#18133E] via-[#271D5B] to-[#18133E] bg-clip-text">
                Nous facilitons <span className="bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] bg-clip-text text-transparent">la vie de l'étudiant</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 max-w-2xl leading-relaxed"
            >
              Vous souhaitez poursuivre vos études loin de chez vous. Vous avez commencé les démarches nécessaires, mais vous ne savez pas ce qui vous attend une fois arrivé(e) en France ? Nous vous aidons à y voir plus clair. Pour mener à bien votre projet d'études, vous avez besoin de visibilité. Et si nous commencions par vous trouver un logement avant votre départ...
            </motion.p>

            {/* Compact buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6 mb-4 sm:mb-6 md:mb-8"
            >
              <motion.button 
                className="bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#18133E]/25 cursor-pointer flex items-center justify-center gap-2 group w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Commencer</span>
                <motion.div
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </motion.button>

              <motion.button 
                className="bg-white/80 backdrop-blur-sm text-[#18133E] hover:bg-white border-2 border-[#18133E]/20 hover:border-[#FFC3BC]/50 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer hover:shadow-lg w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Qui Sommes-Nous ?
              </motion.button>
            </motion.div>

            {/* Enhanced stats section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="mt-4 sm:mt-6 flex flex-col md:flex-row gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8"
            >
              {[
                { number: "2000+", label: "Étudiants accompagnés", icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" /> },
                { number: "98%", label: "Taux de réussite", icon: <Target className="h-4 w-4 sm:h-5 sm:w-5" /> },
                { number: "24h", label: "Support disponible", icon: <Zap className="h-4 w-4 sm:h-5 sm:w-5" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm flex-1 sm:flex-none"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-[#FFC3BC] flex-shrink-0">{stat.icon}</div>
                  <div className="min-w-0">
                    <div className="text-base sm:text-lg font-bold text-[#18133E]">{stat.number}</div>
                    <div className="text-xs text-gray-600 leading-tight">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trusted Partners with original images */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 2.2 }}
              className="mt-4 sm:mt-6"
            >
              <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4 flex items-center gap-2">
                <Award className="h-3 w-3 sm:h-4 sm:w-4 text-[#FFC3BC]" />
                Nos partenaires de confiance
              </p>
              <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
                <motion.img 
                  src="assets/images/partners/vivawallet.png" 
                  alt="VivaWallet Partner" 
                  className="h-6 md:h-7 lg:h-8 opacity-70 hover:opacity-100 transition-all duration-300 filter hover:brightness-110"
                  whileHover={{ scale: 1.1, y: -2 }}
                />
                <motion.img 
                  src="assets/images/partners/luko.png" 
                  alt="Luko Partner" 
                  className="h-6 md:h-7 lg:h-8 opacity-70 hover:opacity-100 transition-all duration-300 filter hover:brightness-110"
                  whileHover={{ scale: 1.1, y: -2 }}
                />
                <motion.img 
                  src="assets/images/partners/garantme.png" 
                  alt="GarantMe Partner" 
                  className="h-6 md:h-7 lg:h-8 opacity-70 hover:opacity-100 transition-all duration-300 filter hover:brightness-110"
                  whileHover={{ scale: 1.1, y: -2 }}
                />
                <motion.img 
                  src="assets/images/partners/smartgarant.png" 
                  alt="SmartGarant Partner" 
                  className="h-6 md:h-7 lg:h-8 opacity-70 hover:opacity-100 transition-all duration-300 filter hover:brightness-110"
                  whileHover={{ scale: 1.1, y: -2 }}
                />
              </div>
            </motion.div>
          </div>
          
          {/* Enhanced Feature Highlights Column */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, x: 50, rotateY: 10 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              {/* Decorative background elements */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#FFC3BC]/20 to-[#18133E]/10 rounded-2xl sm:rounded-3xl blur-xl opacity-60"></div>
              
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl border border-white/60 p-4 sm:p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/90">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#18133E] to-[#271D5B] bg-clip-text text-transparent">
                    Votre parcours simplifié
                  </h2>
                  <motion.div 
                    initial={{ scale: 0.8, rotate: -10, opacity: 0.8 }}
                    animate={{ 
                      scale: [0.8, 1, 0.8],
                      rotate: [0, 5, 0],
                      opacity: 1 
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="bg-gradient-to-r from-[#FFC3BC]/30 to-[#FFC3BC]/20 border border-[#FFC3BC]/40 rounded-lg sm:rounded-xl py-1.5 sm:py-2 px-2 sm:px-3 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm shadow-inner w-fit"
                  >
                    <CheckCircle className="text-green-600 h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-[#18133E] font-semibold">100% Accompagné</span>
                  </motion.div>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <FeatureItem 
                    icon={<Target />}
                    title="Orientation académique"
                    description="Conseils personnalisés pour trouver l'établissement idéal"
                    delay={0.6}
                    isInView={isInView}
                    color="from-purple-500 to-purple-600"
                    accentColor="text-purple-500"
                  />
                  
                  <FeatureItem 
                    icon={<Home />}
                    title="Hébergement garanti"
                    description="Réserve ton logement avant d'arriver en France"
                    delay={0.8}
                    isInView={isInView}
                    color="from-[#FFC3BC] to-[#ff9d94]"
                    accentColor="text-[#FFC3BC]"
                  />
                  
                  <FeatureItem 
                    icon={<Wallet />}
                    title="Financement facilité"
                    description="Assistance pour la prise en charge financière"
                    delay={1}
                    isInView={isInView}
                    color="from-green-500 to-green-600"
                    accentColor="text-green-500"
                  />
                  
                  <FeatureItem 
                    icon={<Zap />}
                    title="Intégration rapide"
                    description="Accompagnement dans tes démarches administratives"
                    delay={1.2}
                    isInView={isInView}
                    color="from-[#18133E] to-[#271D5B]"
                    accentColor="text-[#18133E]"
                  />
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="mt-4 sm:mt-6 md:mt-8 flex justify-center"
                >
                  <motion.div 
                    className="bg-gradient-to-r from-[#FFC3BC]/20 to-[#FFC3BC]/10 border border-[#FFC3BC]/30 rounded-full py-2 sm:py-3 px-3 sm:px-4 md:px-6 flex items-center gap-2 shadow-lg backdrop-blur-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    animate={{ 
                      boxShadow: [
                        "0 4px 20px rgba(255, 195, 188, 0.2)",
                        "0 8px 25px rgba(255, 195, 188, 0.3)",
                        "0 4px 20px rgba(255, 195, 188, 0.2)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Star className="text-yellow-500 h-4 w-4 sm:h-5 sm:w-5 fill-yellow-500" />
                    <span className="text-[#18133E] font-semibold text-xs sm:text-sm">Plus de 2000 étudiants conseillés</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Feature item component with more animations and colors
const FeatureItem = ({ icon, title, description, delay, isInView, color, accentColor }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, x: -10 }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ x: 8, scale: 1.02 }}
      className="flex items-start gap-3 sm:gap-4 group p-2 sm:p-3 rounded-xl hover:bg-white/50 transition-all duration-300"
    >
      <motion.div 
        className={`bg-gradient-to-br ${color} rounded-lg sm:rounded-xl p-2 sm:p-3 text-white mt-1 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex-shrink-0`}
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
      >
        {React.cloneElement(icon, { className: "h-4 w-4 sm:h-5 sm:w-5" })}
      </motion.div>
      <div className="flex-1 min-w-0">
        <motion.h3 
          className={`text-base sm:text-lg font-semibold text-[#18133E] mb-1 group-hover:${accentColor} transition-colors flex items-center gap-2`}
          whileHover={{ x: 5 }}
        >
          <span>{title}</span>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileHover={{ width: "auto", opacity: 1 }}
            className="overflow-hidden hidden sm:block"
          >
            <ArrowRight className={`h-3 w-3 sm:h-4 sm:w-4 ${accentColor}`} />
          </motion.div>
        </motion.h3>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default Hero;