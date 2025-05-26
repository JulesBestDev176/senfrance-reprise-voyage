import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { ArrowRight, Shield, Home, Check, Star, TrendingUp, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const GuarantorSection = () => {
  // Animation controls
  const controls = useAnimation();

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-white -z-10">
        <motion.div 
          className="absolute top-0 right-0 w-full h-full opacity-10"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse',
            ease: "linear"
          }}
          style={{
            backgroundImage: 'url(/pattern-grid.svg)',
            backgroundSize: '40px'
          }}
        />
        <motion.div 
          className="absolute -top-10 -right-10 w-80 h-80 rounded-full bg-indigo-100 blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-pink-100 blur-3xl opacity-30"
          animate={{
            scale: [1.1, 0.9, 1.1],
            rotate: [0, -5, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-indigo-600 tracking-wider uppercase bg-indigo-50 py-1 px-3 rounded-full mb-3">
            Protection & Tranquillité
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Solutions de garantie pour ton logement
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sécurise ta location et protège ton habitat avec nos solutions d’assurance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Rental Guarantee Card */}
          <GuarantorCard 
            title="Garantie locative"
            icon={<Shield />}
            description="Avec notre partenaire privilégié, remplis ton dossier et charge tes pièces justificatives en seulement 5 minutes. Si tu ne les as pas toutes, aucun problème, tu peux les charger plus tard !"
            benefits={[
              "Demande en 5 minutes chrono",
              "Acceptation par tous les propriétaires",
              "Suivi en temps réel de ton dossier"
            ]}
            ctaText="Obtenir une garantie"
            logoText="Garantme"
            link="/vivre-en-france/assurances"
            color="indigo"
            direction="left"
            delay={0.1}
          />

          {/* Housing Insurance Card */}
          <GuarantorCard 
            title="Assurance habitation"
            icon={<Home />}
            description="Profite d'une expérience client unique et d'une alternative crédible aux assureurs traditionnels avec une offre simple, transparente et éthique qui génère la meilleure satisfaction client du marché."
            benefits={[
              "Souscription 100% en ligne",
              "Offre transparente et sans surprise",
              "Meilleure satisfaction client du marché"
            ]}
            ctaText="Souscrire une assurance"
            logoText="Luko"
            link="/vivre-en-france/assurances"
            color="pink"
            direction="right"
            delay={0.3}
          />
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 flex flex-col items-center"
        >
          {/* <div className="bg-white/80 backdrop-blur-sm py-3 px-5 rounded-full shadow-md flex items-center gap-2 text-sm font-medium text-gray-600">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span>Plus de 10 000 étudiants nous font confiance</span>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

// Dynamic, interactive card component with advanced Framer Motion animations
const GuarantorCard = ({ title, icon, description, benefits, ctaText, logoText, link, color, direction, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  
  // For advanced parallax effect on card content
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse movement to rotate card slightly
  const rotateX = useTransform(mouseY, [-100, 100], [2, -2]);
  const rotateY = useTransform(mouseX, [-100, 100], [-2, 2]);
  
  // Animation for the logo spotlight effect
  const logoControls = useAnimation();

  // Handle mouse move for parallax effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  // Dynamic colors based on the color prop
  const colorStyles = {
    indigo: {
      primary: "text-indigo-600",
      secondary: "text-indigo-500",
      bg: "bg-indigo-50",
      bgHover: "group-hover:bg-indigo-100",
      border: "border-indigo-100",
      borderHover: "group-hover:border-indigo-200",
      gradient: "from-indigo-500 to-indigo-600",
      gradientHover: "hover:from-indigo-600 hover:to-indigo-700",
      shadow: "group-hover:shadow-indigo-200/40",
      icon: "bg-indigo-100 text-indigo-600"
    },
    pink: {
      primary: "text-pink-600",
      secondary: "text-pink-500",
      bg: "bg-pink-50",
      bgHover: "group-hover:bg-pink-100",
      border: "border-pink-100",
      borderHover: "group-hover:border-pink-200",
      gradient: "from-pink-500 to-pink-600",
      gradientHover: "hover:from-pink-600 hover:to-pink-700",
      shadow: "group-hover:shadow-pink-200/40",
      icon: "bg-pink-100 text-pink-600"
    }
  };

  const styles = colorStyles[color] || colorStyles.indigo;

  return (
    <motion.div 
      initial={{ opacity: 0, x: direction === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ 
        perspective: 1000,
      }}
      className="relative group"
    >
      {/* Card glow effect on hover */}
      <motion.div 
        className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 bg-gradient-to-r ${styles.gradient} blur-lg`}
        animate={{
          scale: isHovered ? 1 : 0.95,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Main card */}
      <motion.div 
        className={`bg-white border ${styles.border} ${styles.borderHover} rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl ${styles.shadow} relative z-10 h-full`}
        style={{ 
          transformStyle: "preserve-3d",
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 15 
        }}
      >
        <div className="p-8 md:p-10 flex flex-col h-full relative overflow-hidden">
          {/* Icon and title section */}
          <div className="flex items-start mb-6">
            <motion.div 
              className={`rounded-2xl p-4 ${styles.icon} transition-all duration-300 relative z-10`}
              whileHover={{ rotate: [0, -10, 10, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              {React.cloneElement(icon, { className: "h-6 w-6" })}
            </motion.div>
            <div className="ml-4 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
              <div className={`h-1 w-16 ${styles.bg} rounded-full transition-all duration-300 group-hover:w-24`}></div>
            </div>
          </div>
          
          {/* Logo section */}
          <motion.div 
            className="mb-6 relative"
            onHoverStart={() => {
              setIsLogoHovered(true);
              logoControls.start({
                opacity: [0.2, 1, 0.2],
                translateX: ["0%", "100%"],
                transition: { duration: 1.5, ease: "easeInOut" }
              });
            }}
            onHoverEnd={() => setIsLogoHovered(false)}
          >
            <div className={`h-16 w-40 rounded-xl bg-gradient-to-r ${styles.gradient} flex items-center justify-center text-white font-bold text-xl relative overflow-hidden`}>
              {logoText}
              
              {/* Logo spotlight effect */}
              <motion.div 
                className="absolute inset-0 w-full h-full"
                animate={logoControls}
                initial={{ opacity: 0 }}
              >
                <div 
                  className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                  style={{ transform: "skewX(-30deg)" }}
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Description */}
          <p className="text-gray-600 mb-6">
            {description}
          </p>
          
          {/* Benefits list with animated checkmarks */}
          <div className="space-y-3 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + index * 0.1 + 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: [0, 15, 0] }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-full ${styles.bg} p-1`}
                >
                  <Check className={`h-3.5 w-3.5 ${styles.primary}`} />
                </motion.div>
                <span className="text-gray-700 text-sm">{benefit}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Call to action button with animation */}
          <div className="mt-auto">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                to={link} 
                className={`inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-gradient-to-r ${styles.gradient} ${styles.gradientHover} text-white font-medium text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow relative overflow-hidden`}
              >
                <span>{ctaText}</span>
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="ml-2"
                >
                  <ArrowRight size={18} />
                </motion.div>
                
                {/* Button particle effect */}
                <AnimatePresence>
                  {isHovered && (
                    <>
                      {[...Array(5)].map((_, i) => (
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
                            x: [0, (i - 2) * 15],
                            y: [0, (Math.random() - 0.5) * 20 - 10]
                          }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ 
                            duration: 0.8,
                            delay: i * 0.1,
                            repeat: 1,
                            repeatDelay: 0.2
                          }}
                          className="absolute right-8 w-2 h-2 rounded-full bg-white"
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GuarantorSection;