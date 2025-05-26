import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, MapPin, Home, Check, Info, ArrowRight, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  // State for which plan is being hovered
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  // Enhanced pricing cards data
  const pricingPlans = [
    {
      id: "avi",
      icon: <Wallet className="h-8 w-8" />,
      title: "AVI + carte de débit",
      price: "450 €",
      description: "Caution pour études",
      subtext: "Document édité en 48h pour demande de visa",
      features: [
        "Carte Visa internationale",
        "Justificatif de ressources",
        "Assistance visa",
        "Support prioritaire"
      ],
      color: "indigo",
      mostPopular: false
    },
    {
      id: "reservation",
      icon: <MapPin className="h-8 w-8" />,
      title: "Réservation de logement",
      price: "149 €",
      description: "Attestation d'hébergement",
      subtext: "Document édité en 2h pour demande de visa",
      features: [
        "Attestation conforme",
        "Traitement prioritaire",
        "Support consulat",
        "Garantie de conformité"
      ],
      color: "purple",
      mostPopular: true
    },
    {
      id: "logement",
      icon: <Home className="h-8 w-8" />,
      title: "Logement étudiant",
      price: "359 €",
      description: "Bail renouvelable",
      subtext: "Studio meublé dans une résidence moderne",
      features: [
        "Résidences sécurisées",
        "Espace de travail",
        "Wifi haut débit",
        "Support technique 24/7"
      ],
      color: "rose",
      mostPopular: false
    }
  ];

  // Pricing card color variations
  const colorStyles = {
    indigo: {
      light: "bg-indigo-50",
      medium: "bg-indigo-500",
      dark: "bg-indigo-600",
      text: "text-indigo-600",
      border: "border-indigo-100",
      hover: "group-hover:border-indigo-200 group-hover:shadow-indigo-100/30",
      button: "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700"
    },
    purple: {
      light: "bg-purple-50",
      medium: "bg-purple-500",
      dark: "bg-purple-600",
      text: "text-purple-600", 
      border: "border-purple-100",
      hover: "group-hover:border-purple-200 group-hover:shadow-purple-100/30",
      button: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
    },
    rose: {
      light: "bg-[#FFC3BC]/10",
      medium: "bg-[#FFC3BC]",
      dark: "bg-[#ff9d94]", 
      text: "text-[#FFC3BC]",
      border: "border-[#FFC3BC]/20",
      hover: "group-hover:border-[#FFC3BC]/30 group-hover:shadow-[#FFC3BC]/20",
      button: "from-[#FFC3BC] to-[#ff9d94] hover:from-[#ff9d94] hover:to-[#FFC3BC]"
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#FFC3BC]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#18133E]/5 rounded-full blur-3xl"></div>
        
        {/* Animated background elements */}
        <motion.div 
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/4 w-6 h-6 bg-[#FFC3BC]/20 rounded-full"
        />
        <motion.div 
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-[#18133E]/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-3"
          >
            <span className="bg-[#FFC3BC]/10 text-[#18133E] text-sm font-medium py-1 px-3 rounded-full border border-[#FFC3BC]/20 shadow-sm">
              Services et tarifs
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-[#18133E]"
          >
            Nos offres pour ton projet
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
            Solutions adaptées et pensées pour les étudiants internationaux
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {pricingPlans.map((plan, index) => {
            const style = colorStyles[plan.color] || colorStyles.indigo;
            const isHovered = hoveredPlan === plan.id;
            
            return (
              <motion.div 
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.1 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                onHoverStart={() => setHoveredPlan(plan.id)}
                onHoverEnd={() => setHoveredPlan(null)}
                onClick={() => setSelectedPlan(plan.id)}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col relative border ${style.border} ${style.hover} ${
                  selectedPlan === plan.id ? "scale-[1.02] shadow-xl" : "hover:shadow-xl"
                }`}
              >
                {plan.mostPopular && (
                  <div className="absolute top-0 inset-x-0">
                    <div className={`${style.medium} text-white text-xs font-bold uppercase tracking-wider py-1 text-center shadow-sm`}>
                      Le plus populaire
                    </div>
                  </div>
                )}
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className={`w-16 h-16 ${style.light} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
                    <div className={style.text}>
                      {plan.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-[#18133E]">{plan.title}</h3>
                  
                  <div className="flex items-baseline mb-6">
                    <div className="text-3xl font-bold text-[#18133E]">{plan.price}</div>
                    {plan.id === "logement" && (
                      <span className="text-gray-500 text-sm ml-2">/mois</span>
                    )}
                  </div>
                  
                  <div className={`${style.light} rounded-lg p-3 mb-6`}>
                    <p className={`${style.text} font-medium`}>{plan.description}</p>
                    <p className="text-gray-600 text-sm mt-1">{plan.subtext}</p>
                  </div>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className={`${style.light} p-1 rounded-full`}>
                          <Check className={`h-3.5 w-3.5 ${style.text}`} />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <ButtonEffect color={plan.color} isHovered={isHovered}>
                    <Button className={`w-full bg-gradient-to-r ${style.button} rounded-xl py-6 font-medium border-0 shadow-sm hover:shadow transition-all duration-300`}>
                      <span className="flex items-center gap-2">
                        Faire une demande
                        <motion.div
                          animate={{ x: isHovered ? 5 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight size={18} />
                        </motion.div>
                      </span>
                    </Button>
                  </ButtonEffect>
                </div>
                
                {/* Border accent at bottom */}
                <motion.div 
                  className={`h-1 ${style.medium}`}
                  initial={{ width: "0%" }}
                  animate={{ width: isHovered ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
        
        {/* Additional info callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center bg-[#18133E]/5 p-6 rounded-2xl border border-[#18133E]/10 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-[#18133E]" />
            <h3 className="text-lg font-medium text-[#18133E]">Garantie de satisfaction</h3>
          </div>
          <p className="text-gray-600">Tous nos services sont accompagnés d'un suivi personnalisé et d'une écoute attentive pendant une période stressante pour les étudiants.</p>
          
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-[#FFC3BC] fill-[#FFC3BC]" />
              <span className="text-sm text-gray-600">Service 5 étoiles</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-[#FFC3BC]" />
              <span className="text-sm text-gray-600">Paiement sécurisé</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Info className="h-4 w-4 text-[#FFC3BC]" />
              <span className="text-sm text-gray-600">Support 7j/7</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Button effect component for glow on hover
const ButtonEffect = ({ children, color, isHovered }) => {
  // Color mappings for glow effects
  const glowColors = {
    indigo: "from-indigo-500/30 to-indigo-600/20",
    purple: "from-purple-500/30 to-purple-600/20",
    rose: "from-[#FFC3BC]/30 to-[#ff9d94]/20"
  };
  
  const glowStyle = glowColors[color] || glowColors.indigo;
  
  return (
    <div className="relative">
      <motion.div 
        className={`absolute -inset-1 bg-gradient-to-r ${glowStyle} rounded-xl blur-md opacity-0`}
        animate={isHovered ? { opacity: 0.8, scale: 1.05 } : { opacity: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      {children}
      
      {/* Particle effects on hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
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
                  x: [0, (Math.random() - 0.5) * 20],
                  y: [0, (Math.random() - 0.5) * 20 - 10]
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: i * 0.1,
                }}
                className="absolute top-1/2 right-4 w-1.5 h-1.5 rounded-full bg-white"
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Pricing;