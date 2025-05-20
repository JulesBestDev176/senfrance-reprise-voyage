import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight, Quote, ChevronRight, Heart, ThumbsUp, MessageCircle } from 'lucide-react';

// Enhanced testimonials data with themes
const testimonials = [
  {
    id: 1,
    name: "Sophie Dupont",
    location: "Paris, France",
    comment: "Notre séjour au Sénégal avec SenFrance a dépassé toutes nos attentes. L'organisation était impeccable, les guides passionnés et les hébergements de grande qualité. Nous avons découvert le pays en profondeur, loin des sentiers touristiques habituels. Merci pour ces moments magiques !",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    profession: "Enseignante",
    color: "indigo",
    highlight: "Organisation impeccable"
  },
  {
    id: 2,
    name: "Pierre Martin",
    location: "Lyon, France",
    comment: "Un voyage extraordinaire, orchestré à la perfection! Notre guide Amadou était une mine d'informations sur la culture sénégalaise. Les expériences uniques comme la nuit dans le désert de Lompoul et la rencontre avec les communautés locales resteront à jamais gravées dans ma mémoire.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    profession: "Architecte",
    color: "purple",
    highlight: "Expériences uniques"
  },
  {
    id: 3,
    name: "Marie Leclerc",
    location: "Bordeaux, France",
    comment: "SenFrance a su créer pour nous un itinéraire parfait, mêlant découvertes culturelles, rencontres authentiques et moments de détente. La diversité des paysages sénégalais est incroyable, et grâce à l'équipe, nous avons pu en apprécier toute la beauté sans le moindre souci logistique.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    profession: "Médecin",
    color: "rose",
    highlight: "Itinéraire parfait"
  },
  {
    id: 4,
    name: "Jean Dubois",
    location: "Nantes, France",
    comment: "Voyageur expérimenté, je peux dire que ce circuit au Sénégal compte parmi mes meilleures expériences. L'équipe de SenFrance a fait preuve d'un professionnalisme remarquable et d'une attention constante à nos besoins. Chaque jour apportait son lot de découvertes fascinantes!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    profession: "Consultant",
    color: "blue",
    highlight: "Professionnalisme remarquable"
  }
];

// Color mappings for testimonials
const colorStyles = {
  indigo: {
    accent: "from-indigo-500 to-indigo-600",
    light: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-200"
  },
  purple: {
    accent: "from-purple-500 to-purple-600",
    light: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-200"
  },
  rose: {
    accent: "from-[#FFC3BC] to-[#ff9d94]",
    light: "bg-[#FFC3BC]/10",
    text: "text-[#FFC3BC]",
    border: "border-[#FFC3BC]/30"
  },
  blue: {
    accent: "from-blue-500 to-blue-600",
    light: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200"
  }
};

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isHovered, setIsHovered] = useState(false);
  
  // Refs for intersection observer
  const sectionRef = useRef(null);

  // Progress animation for timer
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    let timer;
    let progressTimer;
    
    // Reset progress on slide change
    setProgress(0);
    
    if (autoplay && !isHovered) {
      // Progress animation
      const duration = 8000; // 8 seconds
      const interval = 50; // update every 50ms
      const increment = (interval / duration) * 100;
      
      progressTimer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 100;
          return prev + increment;
        });
      }, interval);
      
      // Slide change timer
      timer = setTimeout(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, duration);
    }
    
    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, [current, autoplay, isHovered]);

  const nextTestimonial = () => {
    setAutoplay(false);
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setAutoplay(false);
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  // Get color style for current testimonial
  const currentStyle = colorStyles[testimonials[current].color] || colorStyles.indigo;
  
  // Parallax effect for background elements
  const { scrollYProgress } = useViewportScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.8, 0.9], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#18133E] via-[#271D5B] to-[#18133E] -z-10"></div>
      
      {/* Background decorations with parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-gradient-to-br from-[#FFC3BC]/20 to-pink-500/10 blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/10 blur-3xl"
        />
        
        {/* Moving particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${10 + Math.random() * 80}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium mb-4 border border-white/20">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Ce que nos voyageurs <span className="text-[#FFC3BC]">adorent</span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="h-1 w-20 bg-gradient-to-r from-[#FFC3BC] to-[#FFC3BC]/30 rounded-full mx-auto mb-6"
          />
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Découvrez les expériences authentiques vécues par nos clients au Sénégal
          </p>
        </motion.div>

        {/* Enhanced Testimonials Slider */}
        <div className="max-w-5xl mx-auto">
          <div className="relative min-h-[450px] md:min-h-[350px]">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 lg:p-10 border border-white/20 shadow-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Profile Section */}
                  <div className="md:col-span-4">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                      {/* Profile image with animated border */}
                      <div className="relative mb-4 group">
                        <motion.div 
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${currentStyle.accent} blur-sm opacity-70`}
                          animate={{ 
                            scale: [1, 1.05, 1],
                            opacity: [0.7, 0.9, 0.7]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <div className="h-24 w-24 rounded-2xl overflow-hidden border-2 border-white/20 relative">
                          <img 
                            src={testimonials[current].image} 
                            alt={testimonials[current].name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white">{testimonials[current].name}</h3>
                      <p className="text-white/70 text-sm mb-1">{testimonials[current].profession}</p>
                      <p className="text-white/70 text-sm">{testimonials[current].location}</p>
                      
                      {/* Enhanced rating */}
                      <div className="flex mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className="text-yellow-400 fill-yellow-400 mr-1"
                          />
                        ))}
                      </div>
                      
                      {/* Engagement metrics */}
                      <div className="flex gap-4 mt-6 text-white/60">
                        <div className="flex items-center gap-1">
                          <Heart size={14} className="fill-[#FFC3BC] text-[#FFC3BC]" />
                          <span className="text-xs">24</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle size={14} />
                          <span className="text-xs">7</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp size={14} />
                          <span className="text-xs">18</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="md:col-span-8 relative">
                    <Quote size={48} className="absolute -top-2 -left-2 text-white/20" />
                    
                    {/* Highlighted text badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full ${currentStyle.light} ${currentStyle.text} text-sm font-medium`}>
                        {testimonials[current].highlight}
                      </span>
                    </div>
                    
                    <p className="text-lg md:text-xl text-white/90 italic relative z-10 leading-relaxed">
                      "{testimonials[current].comment}"
                    </p>
                    
                    {/* Read more link */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-6 flex justify-end"
                    >
                      <motion.a 
                        href="#" 
                        className="flex items-center text-sm text-[#FFC3BC] hover:text-[#ff9d94] transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span className="mr-1">Lire l'avis complet</span>
                        <ChevronRight size={16} />
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Progress bar */}
          <div className="mt-8 relative max-w-xs mx-auto">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                className={`h-full bg-gradient-to-r ${currentStyle.accent} rounded-full`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          
          {/* Enhanced Controls */}
          <div className="flex justify-between mt-8">
            <div className="flex gap-1">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setDirection(index < current ? -1 : 1);
                    setCurrent(index);
                  }}
                  className={`w-10 h-1.5 rounded-full transition-colors ${
                    index === current ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <div className="flex space-x-3">
              <motion.button 
                onClick={prevTestimonial} 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft size={18} className="text-white" />
              </motion.button>
              <motion.button 
                onClick={nextTestimonial} 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight size={18} className="text-white" />
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white text-sm">Plus de 2000 avis vérifiés | Note moyenne: 4.9/5</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;