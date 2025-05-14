
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

// Enhanced testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sophie Dupont",
    location: "Paris, France",
    comment: "Notre séjour au Sénégal avec SenFrance a dépassé toutes nos attentes. L'organisation était impeccable, les guides passionnés et les hébergements de grande qualité. Nous avons découvert le pays en profondeur, loin des sentiers touristiques habituels. Merci pour ces moments magiques !",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    profession: "Enseignante"
  },
  {
    id: 2,
    name: "Pierre Martin",
    location: "Lyon, France",
    comment: "Un voyage extraordinaire, orchestré à la perfection! Notre guide Amadou était une mine d'informations sur la culture sénégalaise. Les expériences uniques comme la nuit dans le désert de Lompoul et la rencontre avec les communautés locales resteront à jamais gravées dans ma mémoire.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    profession: "Architecte"
  },
  {
    id: 3,
    name: "Marie Leclerc",
    location: "Bordeaux, France",
    comment: "SenFrance a su créer pour nous un itinéraire parfait, mêlant découvertes culturelles, rencontres authentiques et moments de détente. La diversité des paysages sénégalais est incroyable, et grâce à l'équipe, nous avons pu en apprécier toute la beauté sans le moindre souci logistique.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    profession: "Médecin"
  },
  {
    id: 4,
    name: "Jean Dubois",
    location: "Nantes, France",
    comment: "Voyageur expérimenté, je peux dire que ce circuit au Sénégal compte parmi mes meilleures expériences. L'équipe de SenFrance a fait preuve d'un professionnalisme remarquable et d'une attention constante à nos besoins. Chaque jour apportait son lot de découvertes fascinantes!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    profession: "Consultant"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let timer;
    if (autoplay) {
      timer = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 8000);
    }
    return () => clearTimeout(timer);
  }, [current, autoplay]);

  const nextTestimonial = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-senfrance-darkBlue via-senfrance-blue to-primary text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-white/5"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-white/5"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ce que nos voyageurs <span className="text-gradient">adorent</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Découvrez les expériences authentiques vécues par nos clients au Sénégal
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="max-w-5xl mx-auto">
          <div className="relative min-h-[450px] md:min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-4">
                    <div className="h-24 w-24 rounded-xl overflow-hidden mb-4 border-4 border-white/20">
                      <img 
                        src={testimonials[current].image} 
                        alt={testimonials[current].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{testimonials[current].name}</h3>
                    <p className="text-white/70 text-sm mb-2">{testimonials[current].profession}</p>
                    <p className="text-white/70 text-sm">{testimonials[current].location}</p>
                    
                    <div className="flex mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="text-yellow-500 fill-yellow-500 mr-1"
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:col-span-8 relative">
                    <Quote size={48} className="absolute -top-2 -left-2 text-white/20" />
                    <p className="text-lg md:text-xl text-white/90 italic relative z-10 mt-6">
                      {testimonials[current].comment}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Controls */}
          <div className="flex justify-center md:justify-end mt-8 space-x-4">
            <button 
              onClick={prevTestimonial} 
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
            >
              <ArrowLeft size={20} className="text-white" />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
            >
              <ArrowRight size={20} className="text-white" />
            </button>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${index === current ? 'bg-white' : 'bg-white/30'}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
