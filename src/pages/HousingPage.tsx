import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  Home, 
  Building, 
  MapPin, 
  Calendar, 
  Star, 
  Shield,
  FileText,
  ArrowDown,
  CheckCircle,
  Clock,
  Key,
  Plane,
  X,
  AlertCircle,
  Info,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Custom icon
const GlobeIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const HousingPage = () => {
  const [activeTab, setActiveTab] = useState('abroad');
  
  // Reference for the scroll progress and parallax effects
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Parallax effect values for backgrounds
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        damping: 15
      }
    }
  };
  
  // Abroad section benefits
  const abroadBenefits = [
    {
      title: "Attestation express",
      description: "Document édité en 2h pour ta demande de visa",
      icon: <FileText />,
      color: "rose"
    },
    {
      title: "Réservation sécurisée",
      description: "Prise en compte de la distance entre l’école et la résidence",
      icon: <Shield />,
      color: "indigo"
    },
    {
      title: "Logements variés",
      description: "Studios meublé, colocation ou chambre chez l’habitant",
      icon: <Building />,
      color: "amber"
    }
  ];
  
  // In France benefits
  const inFranceBenefits = [
    {
      title: "Dossier simplifié",
      description: "Constitution rapide de ton dossier locatif",
      icon: <FileText />,
      color: "indigo"
    },
    {
      title: "Garantie SenFrance",
      description: "Nous nous portons garant pour ton logement",
      icon: <Shield />,
      color: "rose"
    },
    {
      title: "Accompagnement complet",
      description: "De la visite à la signature du bail",
      icon: <Key />,
      color: "amber"
    }
  ];
  
  // Housing options
  const housingOptions = [
    {
      title: "Studio meublé",
      price: "À partir de 450€/mois",
      features: [
        "Superficie de 15 à 25m²",
        "Meublé et équipé",
        "Quartiers étudiants",
        "Proche des transports"
      ],
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      color: "rose"
    },
    {
      title: "Chambre chez l’habitant ",
      price: "À partir de 350€/mois",
      features: [
        "Chambre individuelle",
        "Espaces communs",
        "Sécurisé 24/7",
        "Services inclus"
      ],
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      color: "indigo"
    },
    {
      title: "Colocation",
      price: "À partir de 300€/mois",
      features: [
        "Chambre privée",
        "Espaces partagés",
        "Ambiance internationale",
        "Charges incluses"
      ],
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      color: "amber"
    }
  ];
  
  // Steps for abroad students
  const abroadSteps = [
    {
      title: "Souscription",
      description: "Choisis ton type de logement et paie les frais de réservation"
    },
    {
      title: "Attestation",
      description: "Reçois ton document sous 2h pour ta demande de visa"
    },
    {
      title: "Sélection",
      description: "Une fois ton visa obtenu, nous finalisons les démarches"
    },
    {
      title: "Installation",
      description: "Nous t'accompagnons pour la signature du bail et l'état des lieux"
    }
  ];
  
  // Steps for in-France students
  const inFranceSteps = [
    {
      title: "Consultation",
      description: "Un conseiller évalue tes besoins et ton budget"
    },
    {
      title: "Sélection",
      description: "Nous te proposons des logements correspondant à tes critères"
    },
    {
      title: "Visite",
      description: "Visite les logements sélectionnés, physiquement ou virtuellement"
    },
    {
      title: "Signature",
      description: "Nous t'accompagnons pour la signature du bail et les démarches administratives"
    }
  ];
  
  // Color mappings
  const colorStyles = {
    indigo: {
      light: "bg-indigo-50",
      text: "text-indigo-600",
      border: "border-indigo-100",
      hover: "hover:bg-indigo-100",
      active: "bg-indigo-100",
      button: "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700",
      shadow: "shadow-indigo-500/20",
      icon: "from-indigo-500 to-indigo-600"
    },
    rose: {
      light: "bg-[#FFC3BC]/10",
      text: "text-[#FFC3BC]",
      border: "border-[#FFC3BC]/20",
      hover: "hover:bg-[#FFC3BC]/20",
      active: "bg-[#FFC3BC]/20",
      button: "from-[#FFC3BC] to-[#ff9d94] hover:from-[#ff9d94] hover:to-[#FFC3BC]",
      shadow: "shadow-[#FFC3BC]/20",
      icon: "from-[#FFC3BC] to-[#ff9d94]"
    },
    amber: {
      light: "bg-amber-50",
      text: "text-amber-600",
      border: "border-amber-100",
      hover: "hover:bg-amber-100",
      active: "bg-amber-100",
      button: "from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700",
      shadow: "shadow-amber-500/20",
      icon: "from-amber-500 to-amber-600"
    }
  };
  
  // References for sections
  const benefitsRef = useRef(null);
  const isBenefitsInView = useInView(benefitsRef, { amount: 0.2, once: false });
  
  const optionsRef = useRef(null);
  const isOptionsInView = useInView(optionsRef, { amount: 0.2, once: false });

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background with parallax effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#18133E] via-[#231A54] to-[#18133E] overflow-hidden"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          
          {/* Animated decorative elements */}
          <motion.div 
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#FFC3BC]/20 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="text-sm font-medium text-white">Service logement</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Welcome h<span className="text-[#FFC3BC]">•</span>me
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Le logement est devenu un enjeu majeur de la vie des étudiants en mobilité. SenFrance te propose de réserver ton appartement avant ton arrivée en France. N'engage plus des frais exorbitants avant l'obtention de ton visa d'études sans savoir si tu pourras les récupérer en cas de refus.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex justify-center mt-10"
            >
              <a 
                href="#options" 
                className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
              >
                <span className="mb-2 text-white/90">Découvrir nos solutions</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown className="h-6 w-6" />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Options Tabs Section */}
      <section id="options" className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center mb-12"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-[#FFC3BC]/10 text-[#18133E] text-sm font-medium mb-4 border border-[#FFC3BC]/20">
                Ton statut
              </span>
              <h2 className="text-3xl font-bold mb-8 text-[#18133E] text-center">
                Une solution adaptée à ta situation
              </h2>
              <div className="bg-gray-100 p-1.5 rounded-xl shadow-sm mb-6">
                <div className="flex space-x-1">
                  <button
                    onClick={() => setActiveTab('abroad')} 
                    className={`py-3 px-6 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      activeTab === 'abroad' 
                        ? "bg-white text-[#18133E] shadow-lg" 
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <Plane className={`h-4 w-4 ${activeTab === 'abroad' ? 'text-[#FFC3BC]' : 'text-gray-500'}`} />
                    <span>Tu es à l'étranger</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('inFrance')} 
                    className={`py-3 px-6 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      activeTab === 'inFrance' 
                        ? "bg-white text-[#18133E] shadow-lg" 
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <MapPin className={`h-4 w-4 ${activeTab === 'inFrance' ? 'text-[#FFC3BC]' : 'text-gray-500'}`} />
                    <span>Tu es en France</span>
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Abroad Panel */}
            {activeTab === 'abroad' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
              >
                <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-[#18133E]/5 to-[#18133E]/10">
                  <h3 className="text-2xl font-bold text-[#18133E] mb-4">
                    Réserve un logement et obtiens ton attestation d'hébergement
                  </h3>
                  <p className="text-gray-600">
                    Notre service spécial pré-arrivée te permet de sécuriser ton logement et d'obtenir les documents nécessaires pour ta demande de visa, le tout avec une garantie de proximité avec ton université.
                  </p>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {abroadBenefits.map((benefit, index) => {
                      const style = colorStyles[benefit.color];
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          className={`${style.light} rounded-xl p-6 border ${style.border}`}
                          whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        >
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${style.icon} flex items-center justify-center text-white mb-4 shadow-md`}>
                            {React.cloneElement(benefit.icon, { className: "h-6 w-6" })}
                          </div>
                          <h4 className="text-lg font-semibold text-[#18133E] mb-2">{benefit.title}</h4>
                          <p className="text-gray-600 text-sm">{benefit.description}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  <h4 className="text-xl font-bold text-[#18133E] mb-6">Comment ça marche?</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {abroadSteps.map((step, index) => (
                      <div key={index} className="relative">
                        <div className="flex md:block items-center">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#18133E] text-white text-lg font-bold shadow-md md:mx-auto mb-4">
                            {index + 1}
                          </div>
                          {index < abroadSteps.length - 1 && (
                            <div className="hidden md:block h-1 w-full bg-gray-200 absolute top-5 left-1/2 z-0"></div>
                          )}
                        </div>
                        <div className="ml-4 md:ml-0 md:text-center">
                          <h5 className="font-semibold text-[#18133E] mb-1">{step.title}</h5>
                          <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button asChild className="bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white rounded-xl px-6 py-3 font-medium shadow-md">
                        <Link to="/logement/reservation" className="flex items-center gap-2">
                          <span>Réserver mon logement</span>
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* In France Panel */}
            {activeTab === 'inFrance' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
              >
                <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-[#18133E]/5 to-[#18133E]/10">
                  <h3 className="text-2xl font-bold text-[#18133E] mb-4">
                    Loue ton appartement meublé et signe rapidement ton bail
                  </h3>
                  <p className="text-gray-600">
                    Tu es déjà en France et tu cherches un logement ? Notre équipe t'accompagne dans ta recherche et simplifie toutes tes démarches administratives.
                  </p>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {inFranceBenefits.map((benefit, index) => {
                      const style = colorStyles[benefit.color];
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          className={`${style.light} rounded-xl p-6 border ${style.border}`}
                          whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        >
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${style.icon} flex items-center justify-center text-white mb-4 shadow-md`}>
                            {React.cloneElement(benefit.icon, { className: "h-6 w-6" })}
                          </div>
                          <h4 className="text-lg font-semibold text-[#18133E] mb-2">{benefit.title}</h4>
                          <p className="text-gray-600 text-sm">{benefit.description}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  <h4 className="text-xl font-bold text-[#18133E] mb-6">Comment ça marche?</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {inFranceSteps.map((step, index) => (
                      <div key={index} className="relative">
                        <div className="flex md:block items-center">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#18133E] text-white text-lg font-bold shadow-md md:mx-auto mb-4">
                            {index + 1}
                          </div>
                          {index < inFranceSteps.length - 1 && (
                            <div className="hidden md:block h-1 w-full bg-gray-200 absolute top-5 left-1/2 z-0"></div>
                          )}
                        </div>
                        <div className="ml-4 md:ml-0 md:text-center">
                          <h5 className="font-semibold text-[#18133E] mb-1">{step.title}</h5>
                          <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button asChild className="bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white rounded-xl px-6 py-3 font-medium shadow-md">
                        <Link to="/logement/recherche" className="flex items-center gap-2">
                          <span>Trouver mon logement</span>
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      {/* Housing Options Section */}
      <section className="py-16 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#18133E]/10 text-[#18133E] text-sm font-medium mb-4 border border-[#18133E]/20">
              Nos options
            </span>
            <h2 className="text-3xl font-bold mb-4 text-[#18133E]">
              Un logement adapté à tes besoins
            </h2>
            <p className="text-gray-600">
              Découvre nos différentes options de logement et trouve celle qui te correspond.
            </p>
          </motion.div>
          
          <div ref={optionsRef} className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {housingOptions.map((option, index) => {
                const style = colorStyles[option.color];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isOptionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: index * 0.2, duration: 0.7 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#18133E]/70 to-transparent z-10"></div>
                      <img 
                        src={option.image} 
                        alt={option.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-6 z-20">
                        <h3 className="text-xl font-bold text-white">
                          {option.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className={`inline-block ${style.light} px-4 py-1 rounded-full ${style.text} text-sm font-medium mb-4`}>
                        {option.price}
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className={`p-0.5 rounded-full bg-gradient-to-br ${style.icon} text-white mr-2 mt-0.5 flex-shrink-0`}>
                              <Check className="h-3.5 w-3.5" />
                            </div>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Button 
                          asChild 
                          variant="outline" 
                          className={`w-full border-${option.color === 'rose' ? '[#FFC3BC]/20' : `${option.color}-100`} text-[#18133E] ${style.hover} rounded-lg`}
                        >
                          <Link to={`/logement/options/${option.title.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center justify-center gap-2">
                            <span>En savoir plus</span>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* Advantages Section */}
      <section ref={benefitsRef} className="py-16 bg-gradient-to-br from-[#18133E] to-[#231A54] text-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <motion.div 
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#FFC3BC]/10 blur-3xl"
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium mb-4 border border-white/20">
              Pourquoi nous choisir
            </span>
            <h2 className="text-3xl font-bold mb-4">
              Les avantages SenFrance
            </h2>
            <p className="text-white/80">
              Notre service de logement se distingue par son approche centrée sur l'étudiant international.
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Prestations de qualité",
                  description: "Toutes nos résidences sont modernes, sécurisées et équipées, avec tout le confort nécessaire.",
                  icon: <Shield className="h-6 w-6 text-[#FFC3BC]" />,
                  delay: 0.1
                },
                {
                  title: "Zéro frais cachés",
                  description: "Nous pratiquons une tarification transparente, sans mauvaises surprises ni commissions dissimulées.",
                  icon: <Check className="h-6 w-6 text-[#FFC3BC]" />,
                  delay: 0.2
                },
                {
                  title: "Service de garantie",
                  description: "Nous nous portons garant pour ton logement, ce qui facilite grandement ton accès à la location.",
                  icon: <FileText className="h-6 w-6 text-[#FFC3BC]" />,
                  delay: 0.3
                },
                {
                  title: "Accompagnement complet",
                  description: "De la recherche à l'état des lieux, nous sommes présents à chaque étape importante.",
                  icon: <CheckCircle className="h-6 w-6 text-[#FFC3BC]" />,
                  delay: 0.4
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: benefit.delay, duration: 0.7 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FFC3BC]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-white/70">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-12 flex justify-center"
            >
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 flex items-center gap-2">
                <Star className="h-5 w-5 text-[#FFC3BC] fill-[#FFC3BC]" />
                <span className="text-white font-medium">100% de logements éligibles aux APL</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#FFC3BC]/10 text-[#18133E] text-sm font-medium mb-4 border border-[#FFC3BC]/20">
              Questions fréquentes
            </span>
            <h2 className="text-3xl font-bold mb-4 text-[#18133E]">
              On répond à tes questions
            </h2>
            <p className="text-gray-600">
              Voici les questions les plus fréquentes à propos du logement
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Quels documents dois-je fournir pour réserver un logement ?",
                  answer: "Pour réserver, tu as besoin d'une pièce d'identité et de ta préinscription dans un établissement français. Pour la signature du bail, des documents supplémentaires peuvent être demandés."
                },
                {
                  question: "Combien de temps faut-il pour obtenir une attestation d'hébergement ?",
                  answer: "Notre service express te permet d'obtenir ton attestation d'hébergement en 2 heures ouvrées après la validation de ton dossier et le paiement des frais."
                },
                {
                  question: "Quelles sont les démarches complémentaires pour signer mon bail ? ",
                  answer: "Tu as déjà obtenu ton visa d’études pour la France. Contacte-nous rapidement pour finaliser le processus d’obtention de ton logement. Il faudra payer le 1er mois de loyer et le dépôt de garantie (caution). Des frais de dossier supplémentaires sont à prévoir dans certaines résidences."
                },
                {
                  question: "Puis-je visiter le logement avant de signer le bail ?",
                  answer: "Si tu es déjà en France, absolument ! Si tu es encore à l'étranger, nous proposons des visites virtuelles et te fournissons des photos détaillées et un plan précis du logement."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#18133E] flex items-center justify-center flex-shrink-0 mt-1">
                      <AlertCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#18133E] text-lg mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-[#18133E] to-[#271D5B] rounded-2xl p-8 md:p-12 shadow-xl text-center text-white overflow-hidden relative"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <motion.div 
                className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#FFC3BC]/10 blur-3xl"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20 shadow-xl"
              >
                <Home className="h-10 w-10 text-white" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nous avons le logement idéal pour toi
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                Que tu sois déjà en France ou encore à l'étranger, notre équipe est prête à t'accompagner dans ta recherche de logement étudiant. Contacte-nous dès maintenant.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild className="bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] text-[#18133E] hover:from-[#ff9d94] hover:to-[#FFC3BC] rounded-full px-8 py-6 text-lg font-medium border-0 shadow-xl">
                    <Link to="/logement/contact" className="flex items-center gap-2">
                      <span>Démarrer mon projet</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild variant="outline" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/20 rounded-full px-8 py-6 text-lg font-medium shadow-lg">
                    <Link to="/logement/options">
                      <span>Voir tous nos logements</span>
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HousingPage;