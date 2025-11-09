import React, { useState, useEffect, useRef } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote, ChevronRight, Heart, ThumbsUp, MessageCircle, X } from 'lucide-react';

// Enhanced testimonials data with themes
const testimonials = [
  {
    id: 1,
    name: "Mamadou Cissé",
    comment: "Nous Taysir Orientation Voyage avons le Plaisir de collaborer avec SENFRANCE ces deux dernières années [...] Leur professionnalisme, leur réactivité et leur expertise ont grandement contribué au succès de Taysir Orientation Voyage.",
    rating: 5,
    image: "assets/temoignages/mamadoucisse.png",
    color: "#f0f8ff",
    highlight: "Collaboration réussie"
  },
  {
    id: 2,
    name: "Mariama Diancke Drame",
    comment: "Je tiens à faire ce témoignage à l'égard de la société SENFrance pour avoir bénéficié de leur service. Je suis le PDG de Perf Consulting Group et j'ai été très satisfait de leur accompagnement.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    color: "#fff0f5",
    highlight: "Expérience inoubliable"
  },
  {
    id: 3,
    name: "Ibrahima Gassama",
    comment: "Selon mon expérience personnelle il n'y a pas meilleure agence que SenFrance.",
    rating: 5,
    image: "assets/temoignages/ibrahimagassama.png",
    color: "#f5fffa",
    highlight: "Itinéraire sur mesure"
  },
  {
    id: 4,
    name: "Arame Diagne",
    comment: "Si vous êtes étudiant et que vous avez des difficultés pour trouver un logement, je vous conseille fortement de contacter SenFrance. Ils sauront vous aider réellement dans vos démarches pour trouver un logement. Lors des premiers rendez-vous à l'agence, ils vous écoutent, et font le point de votre situation( études suivies, budget loyer max, etc). J'ai pu avoir un logement rapidement grâce à leur bonne volonté et leur perspicacité. C'est une excellente initiative, au vu des nombreuses entraves pour trouver un logement. Ils vont aussi suivre vos dossiers jusqu'à l'obtention de votre nouveau logement, c'est à dire qu'ils ne vont pas lâcher l'affaire, tant que vous n'aurez pas de logement. Ils sont accueillants et professionnels Merci encore pour tout SenFrance!",
    rating: 5,
    image: "assets/temoignages/aramediagne.png",
    color: "#e6f7ff",
    highlight: "Découvertes fascinantes"
  },
  {
    id: 5,
    name: "Anna Diop",
    comment: "SenFrance une superbe initiative pour les nouveaux étudiants qui sont souvent livrés à eux-même. Les accompagnateurs sont agréables et à l'écoute des étudiants ! Je conseille sans hésitation.",
    rating: 5,
    image: "assets/temoignages/annadiop.png",
    color: "#fffbe6",
    highlight: "Accompagnement personnalisé"
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
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const sectionRef = useRef(null);

  // Progress animation for timer
  const [progress, setProgress] = useState(0);
  
  // Function to truncate text
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

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

  return (
    <section
      ref={sectionRef}
      className="h-[90vh] py-6 relative overflow-hidden flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#271D5B]/5 via-[#18133E]/3 to-[#271D5B]/5 -z-10"></div>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-gradient-to-br from-[#FFC3BC]/15 to-pink-500/10 blur-3xl opacity-40"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-tr from-[#271D5B]/15 to-purple-500/10 blur-3xl opacity-30"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-[#FFC3BC]/10 to-[#271D5B]/10 blur-3xl opacity-30"></div>

        {/* Moving particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#271D5B]/15"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${10 + Math.random() * 80}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 -z-10" />

      <div className="container mx-auto px-4 py-4 relative z-10 w-full">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-block py-1 px-3 rounded-full bg-[#18133E]/10 text-[#18133E] text-xs font-medium mb-2 border border-[#18133E]/20">
            Témoignages
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#18133E]">
            Ce qu'en disent les <span className="text-[#FFC3BC]">étudiants</span>
          </h2>

          <div className="h-1 w-16 bg-gradient-to-r from-[#FFC3BC] to-[#FFC3BC]/30 rounded-full mx-auto mb-3" />
        </div>

        {/* Enhanced Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[280px] md:h-[260px]">
            <div
              key={current}
              className="bg-gradient-to-br from-white/80 to-[#271D5B]/5 backdrop-blur-lg rounded-xl px-4 py-3 md:px-5 md:py-4 border border-[#271D5B]/10 shadow-xl transition-opacity duration-600 h-full overflow-y-auto flex items-center"
              style={{ opacity: 1 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
                {/* Profile Section */}
                <div className="md:col-span-4">
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    {/* Profile image with animated border - NOW CIRCULAR */}
                    <div className="relative mb-2 group">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${currentStyle.accent} blur-sm opacity-70`} />
                      <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-gray-200 relative">
                        <img
                          src={testimonials[current].image}
                          alt={testimonials[current].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-[#18133E]">{testimonials[current].name}</h3>

                    {/* Enhanced rating */}
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="text-yellow-400 fill-yellow-400 mr-1"
                        />
                      ))}
                    </div>

                    {/* Engagement metrics */}
                    <div className="flex gap-2 mt-2 text-gray-600">
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
                  <Quote size={28}
                className="absolute -top-1 -left-1 text-[#18133E]/10" />

                  {/* Highlighted text badge */}
                  <div className="mb-2">
                    <span className={`inline-block px-2 py-0.5 rounded-full ${currentStyle.light} ${currentStyle.text} text-xs font-medium`}>
                      {testimonials[current].highlight}
                    </span>
                  </div>

                  <p className="text-sm md:text-base text-gray-700 italic relative z-10 leading-relaxed mb-2">
                    "{truncateText(testimonials[current].comment, 180)}"
                  </p>
                  
                  {testimonials[current].comment.length > 180 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowModal(true);
                      }}
                      className="text-[#FFC3BC] hover:text-[#ff9d94] font-medium text-xs flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      Lire plus
                      <ChevronRight size={14} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 relative max-w-xs mx-auto">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${currentStyle.accent} rounded-full transition-all duration-100`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Enhanced Controls */}
          <div className="flex justify-between mt-4">
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
                    index === current ? 'bg-[#18133E]' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 flex items-center justify-center border border-gray-300 hover:scale-105"
              >
                <ArrowLeft size={18} className="text-[#18133E]" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 flex items-center justify-center border border-gray-300 hover:scale-105"
              >
                <ArrowRight size={18} className="text-[#18133E]" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#18133E]/10 backdrop-blur-sm rounded-full border border-[#18133E]/20">
            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
            <span className="text-[#18133E] text-xs">Avis Google vérifiés  | Note moyenne: 5/5</span>
          </div>
        </div>
      </div>
      
      {/* Modal for full testimonial */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X size={20} className="text-gray-600" />
            </button>
            
            {/* Modal content */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-[#FFC3BC]">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#18133E]">{testimonials[current].name}</h3>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-yellow-400 mr-1"
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full ${currentStyle.light} ${currentStyle.text} text-sm font-medium`}>
                {testimonials[current].highlight}
              </span>
            </div>
            
            <Quote size={32} className="text-[#18133E]/10 mb-2" />
            
            <p className="text-lg text-gray-700 italic leading-relaxed">
              "{testimonials[current].comment}"
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
