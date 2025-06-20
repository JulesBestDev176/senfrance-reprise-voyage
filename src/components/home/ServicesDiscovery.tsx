import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, Clock, Settings, Sparkles, Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesDiscovery = () => {
  // References for scroll-based animations
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  // Scroll-linked animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values based on scroll position
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.3, 1, 1, 0.3]);
  
  // Smoother animations with spring physics
  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  
  // Services cards data
  const services = [
    {
      icon: <Search className="h-5 w-5" />,
      title: "Orientation",
      description: "Conseils pour ton parcours académique",
      color: "indigo"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Accompagnement",
      description: "Suivi régulier tout au long de ton cursus",
      color: "purple"
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Démarches administratives",
      description: "Assistance pour tes formalités en France",
      color: "rose"
    }
  ];

  return (
    <section ref={containerRef} className="py-8 md:py-8 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        
        {/* Enhanced gradient shapes */}
        <motion.div 
          className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-b from-[#FFC3BC]/5 to-transparent rounded-full opacity-70 blur-3xl -z-10"
          style={{ y: springY }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-t from-[#18133E]/5 to-transparent rounded-full opacity-50 blur-3xl -z-10"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - Enhanced */}
          <motion.div
            style={{ opacity }}
            className="lg:pr-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-[#FFC3BC]/10 py-1 px-3 rounded-full text-sm text-[#18133E] font-medium border border-[#FFC3BC]/20 shadow-sm">
                Nos Services
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-[#18133E] tracking-tight"
            >
              Découvre une gamme complète
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="h-1 w-20 bg-gradient-to-r from-[#FFC3BC] to-[#FFC3BC]/30 rounded-full mb-6"
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-600 mb-10 text-lg leading-relaxed"
            >
              Nous proposons un accompagnement global aux jeunes qui nous confient leur projet d'études. Notre offre est basée sur vos besoins et ne cesse de s'enrichir pour répondre à vos préoccupations.
            </motion.p>
            
            {/* Feature bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="space-y-3 mb-10"
            >
              {[
                "Expertise en mobilité étudiante",
                "Écoute et disponibilité",
                "Documents fiables et sécurisés"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="bg-[#FFC3BC]/10 rounded-full p-1">
                    <Check className="h-3.5 w-3.5 text-[#FFC3BC]" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-block"
            >
              <ButtonAnimation>
                <Button asChild className="bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all duration-300 border-0">
                  <Link to="/services" className="flex items-center">
                    <span className="mr-2">CENTRE DE SERVICES</span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </Link>
                </Button>
              </ButtonAnimation>
            </motion.div>
          </motion.div>
          
          {/* Services Cards - Enhanced */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={0.3 + index * 0.15}
                isInView={isInView}
                color={service.color}
              />
            ))}
          </div>
        </div>
        
        {/* Bottom decoration - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex items-center gap-2 text-sm bg-[#18133E]/5 py-2 px-4 rounded-full">
            <Star className="h-4 w-4 text-[#FFC3BC] fill-[#FFC3BC]" />
            <span className="text-[#18133E]">Des solutions adaptées à tes besoins</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Component for service card with enhanced animations and colors
const ServiceCard = ({ icon, title, description, delay, isInView, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Color mappings for different card styles
  const colorStyles = {
    indigo: {
      bg: "bg-indigo-50",
      icon: "text-indigo-600",
      border: "bg-indigo-500",
      hover: "hover:border-indigo-200 hover:shadow-indigo-100"
    },
    purple: {
      bg: "bg-purple-50",
      icon: "text-purple-600",
      border: "bg-purple-500",
      hover: "hover:border-purple-200 hover:shadow-purple-100"
    },
    rose: {
      bg: "bg-[#FFC3BC]/10",
      icon: "text-[#FFC3BC]",
      border: "bg-[#FFC3BC]",
      hover: "hover:border-[#FFC3BC]/20 hover:shadow-[#FFC3BC]/10"
    }
  };
  
  const style = colorStyles[color] || colorStyles.indigo;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300 overflow-hidden ${style.hover}`}
    >
      <div className="p-6 flex items-start gap-4 relative">
        {/* Enhanced icon container */}
        <motion.div 
          className={`${style.bg} rounded-xl p-3 ${style.icon}`}
          animate={isHovered ? { scale: 1.1, rotateZ: [0, -5, 5, 0] } : { scale: 1, rotateZ: 0 }}
          transition={{ 
            scale: { type: "spring", stiffness: 300, damping: 10 },
            rotateZ: { duration: 0.5, ease: "easeInOut" }
          }}
        >
          {icon}
        </motion.div>
        <div>
          <h3 className="font-semibold text-xl text-[#18133E] mb-1">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        
        {/* Enhanced arrow animation */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="ml-auto self-center"
            >
              <div className={`${style.bg} p-2 rounded-full`}>
                <ArrowRight size={16} className={style.icon} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Enhanced bottom border animation */}
      <motion.div 
        className={`h-1 ${style.border}`}
        animate={isHovered ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

// Enhanced button animation wrapper
const ButtonAnimation = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="absolute -inset-1 bg-gradient-to-r from-[#FFC3BC]/30 to-[#18133E]/20 rounded-full blur-md opacity-0"
        animate={isHovered ? { opacity: 0.7, scale: 1.05 } : { opacity: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.div>
  );
};

export default ServicesDiscovery;