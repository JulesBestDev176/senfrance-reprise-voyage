import React, { useState } from 'react';
import { motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion';
import { 
  Map,
  Calendar,
  Hotel,
  Car,
  Users,
  Shield,
  ChevronRight,
  Check,
  ArrowRight,
  Star 
} from 'lucide-react';

const Services = () => {
  // Enhanced services data with color themes
  const services = [
    {
      id: 1,
      title: "Circuits Exclusifs",
      description: "Des voyages uniques conçus par des experts locaux pour vous faire découvrir le vrai Sénégal",
      icon: Map,
      color: "indigo",
      features: ["Guides francophones", "Petits groupes", "Sites uniques"]
    },
    {
      id: 2,
      title: "Voyages Sur Mesure",
      description: "Des itinéraires entièrement personnalisés selon vos envies, votre budget et votre rythme",
      icon: Calendar,
      color: "purple",
      features: ["Sur mesure", "Flexible", "Personnalisé"]
    },
    {
      id: 3,
      title: "Hébergements Premium",
      description: "Sélection rigoureuse d'hôtels, lodges et hébergements authentiques pour un confort optimal",
      icon: Hotel,
      color: "rose",
      features: ["Confort", "Authenticité", "Qualité"]
    },
    {
      id: 4,
      title: "Transport de Luxe",
      description: "Véhicules climatisés récents avec chauffeurs-guides expérimentés et francophones",
      icon: Car,
      color: "amber",
      features: ["Climatisés", "Confortables", "Sécurisés"]
    },
    {
      id: 5,
      title: "Guides Locaux Experts",
      description: "Accompagnement par des guides passionnés qui partagent leur culture et leurs connaissances",
      icon: Users,
      color: "emerald",
      features: ["Locaux", "Experts", "Passionnés"]
    },
    {
      id: 6,
      title: "Assistance 24/7",
      description: "Support permanent pendant votre séjour pour une tranquillité d'esprit absolue",
      icon: Shield,
      color: "blue",
      features: ["24/7", "Réactif", "Efficace"]
    }
  ];

  // Color mappings for different card styles
  const colorStyles = {
    indigo: {
      light: "bg-indigo-50",
      medium: "from-indigo-500 to-indigo-600",
      text: "text-indigo-600",
      shadow: "shadow-indigo-500/20",
      border: "border-indigo-100",
      hover: "group-hover:border-indigo-200 group-hover:shadow-indigo-500/30"
    },
    purple: {
      light: "bg-purple-50",
      medium: "from-purple-500 to-purple-600",
      text: "text-purple-600",
      shadow: "shadow-purple-500/20",
      border: "border-purple-100",
      hover: "group-hover:border-purple-200 group-hover:shadow-purple-500/30"
    },
    rose: {
      light: "bg-[#FFC3BC]/10",
      medium: "from-[#FFC3BC] to-[#ff9d94]",
      text: "text-[#FFC3BC]",
      shadow: "shadow-[#FFC3BC]/20",
      border: "border-[#FFC3BC]/20",
      hover: "group-hover:border-[#FFC3BC]/30 group-hover:shadow-[#FFC3BC]/30"
    },
    amber: {
      light: "bg-amber-50",
      medium: "from-amber-500 to-amber-600",
      text: "text-amber-600",
      shadow: "shadow-amber-500/20",
      border: "border-amber-100",
      hover: "group-hover:border-amber-200 group-hover:shadow-amber-500/30"
    },
    emerald: {
      light: "bg-emerald-50",
      medium: "from-emerald-500 to-emerald-600",
      text: "text-emerald-600",
      shadow: "shadow-emerald-500/20",
      border: "border-emerald-100", 
      hover: "group-hover:border-emerald-200 group-hover:shadow-emerald-500/30"
    },
    blue: {
      light: "bg-blue-50",
      medium: "from-blue-500 to-blue-600",
      text: "text-blue-600",
      shadow: "shadow-blue-500/20",
      border: "border-blue-100",
      hover: "group-hover:border-blue-200 group-hover:shadow-blue-500/30"
    }
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // State for tracking which card is hovered
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-[#18133E]/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-[#FFC3BC]/5 blur-3xl"></div>
        <div className="absolute top-1/4 right-10 w-48 h-48 rounded-full bg-purple-500/5 blur-3xl"></div>
        
        {/* Animated decorative elements */}
        <motion.div 
          className="absolute top-1/2 left-1/4 w-6 h-6 bg-[#FFC3BC]/20 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-[#18133E]/20 rounded-full"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#FFC3BC]/10 text-[#18133E] text-sm font-medium mb-4 border border-[#FFC3BC]/20">
            Services Exclusifs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#18133E]">
            Une expérience de voyage exceptionnelle
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="h-1 w-20 bg-gradient-to-r from-[#FFC3BC] to-[#FFC3BC]/30 rounded-full mx-auto mb-6"
          />
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous vous offrons un service complet et personnalisé pour un voyage inoubliable au Sénégal
          </p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const style = colorStyles[service.color] || colorStyles.indigo;
            const isHovered = hoveredCard === service.id;
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredCard(service.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`group bg-white rounded-2xl p-8 shadow-md ${style.shadow} hover:shadow-xl transition-all duration-300 flex flex-col h-full border ${style.border} ${style.hover}`}
              >
                {/* Icon with enhanced animation */}
                <div className="mb-6 relative">
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${style.medium} shadow-lg flex items-center justify-center text-white relative z-10`}
                    animate={isHovered ? { 
                      scale: [1, 1.1, 1.05],
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    } : {}}
                  >
                    <service.icon size={28} />
                  </motion.div>
                  
                  {/* Glow effect on hover */}
                  <motion.div 
                    className={`absolute -inset-2 bg-gradient-to-br ${style.medium} opacity-0 blur-xl rounded-full -z-10`}
                    animate={{ opacity: isHovered ? 0.3 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Content with enhanced animations */}
                <h3 className="text-2xl font-bold mb-3 text-[#18133E] group-hover:text-[#271D5B] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 flex-grow mb-6">{service.description}</p>
                
                {/* Features tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.span 
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className={`text-xs px-2 py-1 rounded-full ${style.light} ${style.text} font-medium flex items-center gap-1`}
                    >
                      <Check className="h-3 w-3" />
                      {feature}
                    </motion.span>
                  ))}
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <motion.div 
                    className="flex items-center justify-between"
                    whileHover="hover"
                  >
                    <motion.span 
                      className={`flex items-center text-sm font-medium ${style.text} cursor-pointer`}
                    >
                      En savoir plus
                      <motion.div
                        variants={{
                          hover: { x: 5 }
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="ml-2"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </motion.div>
                    </motion.span>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-1"
                    >
                      <Star className={`h-3 w-3 ${style.text} fill-current`} />
                      <Star className={`h-3 w-3 ${style.text} fill-current`} />
                      <Star className={`h-3 w-3 ${style.text} fill-current`} />
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Bottom border animation */}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${style.medium} rounded-b-2xl`}
                  initial={{ width: "0%", left: "50%", right: "50%" }}
                  animate={isHovered ? { width: "100%", left: "0%", right: "0%" } : {}}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <ButtonEffect>
            <a 
              href="#contactez-nous" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#18133E] to-[#271D5B] text-white py-3 px-6 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span>Découvrir tous nos services</span>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </a>
          </ButtonEffect>
          
          <div className="flex justify-center mt-8 space-x-8">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-[#FFC3BC]" />
              <span className="text-sm text-gray-600">Garantie satisfait ou remboursé</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#FFC3BC]" />
              <span className="text-sm text-gray-600">Guides expérimentés</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Button effect component for attractive hover effects
const ButtonEffect = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative inline-block"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="absolute -inset-1 bg-gradient-to-r from-[#FFC3BC]/30 to-[#18133E]/20 rounded-full blur-md opacity-0"
        animate={isHovered ? { opacity: 0.7, scale: 1.05 } : { opacity: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {children}
      
      {/* Particle effects on hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  x: 0,
                  y: 0 
                }}
                animate={{ 
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 30],
                  y: [0, (Math.random() - 0.5) * 30 - 10]
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: i * 0.1,
                }}
                className="absolute top-1/2 right-4 w-2 h-2 rounded-full bg-white"
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Services;