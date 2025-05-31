import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  CreditCard, 
  FileText, 
  Home, 
  Building, 
  Shield, 
  Clock, 
  Star, 
  Sparkles, 
  CheckCircle,
  MessageCircle,
  Briefcase,
  Calendar,
  Info,
  AlertCircle,
  ArrowDown,
  Gift,
  ChevronRight,
  Plus,
  Tag
} from 'lucide-react';

const PricingPage = () => {
  const [activePlan, setActivePlan] = useState(null);
  const [selectedTab, setSelectedTab] = useState("individuel");
  
  // Reference for the scroll progress and parallax effects
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Parallax effect values for backgrounds
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Pricing plans data (pour À la carte)
  const pricingPlans = [
    {
      id: "avi",
      title: "AVI + carte de débit",
      price: "450 €",
      icon: <CreditCard />,
      description: "Document édité en 48h pour demande de visa",
      features: [
        "Attestation validée par notre établissement partenaire",
        "Carte bancaire internationale incluse",
        "Assistance pour la constitution du dossier",
        "Suivi de votre demande de visa",
        "Durée de validité de 3 mois"
      ],
      popular: true,
      promo: null,
      color: "indigo"
    },
    {
      id: "reservation",
      title: "Attestation d'hébergement",
      price: "149 €",
      icon: <Home />,
      description: "Document édité en 2h pour demande de visa",
      features: [
        "Attestation d'hébergement temporaire",
        "Adresse en France valide pour le consulat",
        "Livraison express par E-mail",
        "Service de modification inclus",
        "Validité garantie"
      ],
      popular: false,
      promo: null,
      color: "rose"
    },
    {
      id: "logement",
      title: "Logement étudiant",
      price: "359 €",
      icon: <Building />,
      description: "Bail renouvelable",
      features: [
        "Studio meublé dans une résidence moderne",
        "Accompagnement dans la recherche",
        "Visite virtuelle des logements disponibles",
        "Assistance à l'état des lieux",
        "Service de conciergerie pendant 1 mois"
      ],
      popular: true,
      promo: "15% de réduction sur 12 mois",
      color: "amber"
    }
  ];
  
  // Packs économiques (seulement 2)
  const economicPacks = [
    {
      id: "pack-serenite",
      title: "Pack Sérénité",
      price: "550 €",
      originalPrice: "599 €",
      description: "AVI + ADL",
      duration: "Validité 6 mois",
      items: [
        "AVI + carte de débit",
        "Attestation d'hébergement (ADL)",
        "Assistance pour la constitution du dossier",
        "Suivi de votre demande de visa"
      ],
      benefits: [
        "Délai de traitement réduit à 48h",
        "Support téléphonique dédié",
        "Garantie de validité des documents"
      ],
      color: "indigo",
      popular: false
    },
    {
      id: "pack-premium",
      title: "Pack Premium",
      price: "750 €",
      originalPrice: "829 €",
      description: "AVI + ADL + Accueil en France",
      duration: "Validité 6 mois",
      items: [
        "AVI + carte de débit",
        "Attestation d'hébergement (ADL)",
        "Accueil personnalisé à l'aéroport",
        "Assistance administrative",
        "Transfer vers votre hébergement"
      ],
      benefits: [
        "Accueil VIP à l'arrivée",
        "Support prioritaire 7j/7",
        "Guide d'intégration personnalisé"
      ],
      color: "purple",
      popular: true
    }
  ];
  
  // Services complémentaires
  const additionalServices = [
    {
      id: "airport",
      title: "Accueil à l'aéroport",
      price: "79 €",
      description: "Accueil personnalisé à l'arrivée",
      icon: <Briefcase />
    },
    {
      id: "insurance",
      title: "Assurance santé internationale",
      price: "129 €",
      description: "Couverture médicale complète",
      icon: <Shield />
    },
    {
      id: "administrative",
      title: "Accompagnement démarches",
      price: "199 €",
      description: "Assistance pour toutes tes formalités",
      icon: <FileText />
    },
    {
      id: "simcard",
      title: "SIM Card française",
      price: "29 €",
      description: "Forfait 20Go + appels illimités",
      icon: <MessageCircle />
    }
  ];
  
  // Color mappings for different card styles
  const colorStyles = {
    indigo: {
      light: "bg-indigo-50",
      medium: "bg-indigo-500",
      dark: "bg-indigo-600",
      text: "text-indigo-600",
      border: "border-indigo-100",
      hover: "group-hover:border-indigo-200 group-hover:shadow-indigo-100/40",
      icon: "from-indigo-500 to-indigo-600",
      button: "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700",
      shadow: "shadow-indigo-500/20",
      highlight: "shadow-indigo-500/30",
      gradientText: "bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent"
    },
    purple: {
      light: "bg-purple-50",
      medium: "bg-purple-500",
      dark: "bg-purple-600",
      text: "text-purple-600",
      border: "border-purple-100",
      hover: "group-hover:border-purple-200 group-hover:shadow-purple-100/40",
      icon: "from-purple-500 to-purple-600",
      button: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      shadow: "shadow-purple-500/20",
      highlight: "shadow-purple-500/30",
      gradientText: "bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"
    },
    rose: {
      light: "bg-[#FFC3BC]/10",
      medium: "bg-[#FFC3BC]",
      dark: "bg-[#ff9d94]",
      text: "text-[#FFC3BC]",
      border: "border-[#FFC3BC]/20",
      hover: "group-hover:border-[#FFC3BC]/30 group-hover:shadow-[#FFC3BC]/20",
      icon: "from-[#FFC3BC] to-[#ff9d94]",
      button: "from-[#FFC3BC] to-[#ff9d94] hover:from-[#ff9d94] hover:to-[#FFC3BC]",
      shadow: "shadow-[#FFC3BC]/20",
      highlight: "shadow-[#FFC3BC]/30",
      gradientText: "bg-gradient-to-r from-[#ff9d94] to-[#FFC3BC] bg-clip-text text-transparent"
    },
    amber: {
      light: "bg-amber-50",
      medium: "bg-amber-500",
      dark: "bg-amber-600",
      text: "text-amber-600",
      border: "border-amber-100",
      hover: "group-hover:border-amber-200 group-hover:shadow-amber-100/40",
      icon: "from-amber-500 to-amber-600",
      button: "from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700",
      shadow: "shadow-amber-500/20",
      highlight: "shadow-amber-500/30",
      gradientText: "bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent"
    }
  };
  
  // Price simulation
  const [simulatedServices, setSimulatedServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  
  const toggleService = (serviceId) => {
    if (simulatedServices.includes(serviceId)) {
      setSimulatedServices(simulatedServices.filter(id => id !== serviceId));
    } else {
      setSimulatedServices([...simulatedServices, serviceId]);
    }
  };
  
  useEffect(() => {
    // Calculate total price and discount
    let total = 0;
    let discountAmount = 0;
    
    simulatedServices.forEach((serviceId, index) => {
      const service = [...pricingPlans, ...additionalServices].find(s => s.id === serviceId);
      if (service) {
        const price = parseInt(service.price);
        total += price;
        
        // Apply 15% discount to services after the first one
        if (index > 0) {
          discountAmount += price * 0.15;
        }
      }
    });
    
    setTotalPrice(total);
    setDiscount(discountAmount);
  }, [simulatedServices]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden h-screen bg-white ">
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
              <span className="text-sm font-medium text-white">Facturation avantageuse</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Nos tarifs et services
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Des services <span className="font-semibold text-[#FFC3BC]">adaptés à ton parcours</span> d'études en France. Une tarification claire et sans surprise. 
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex justify-center mt-10"
            >
              <a 
                href="#pricing" 
                className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
              >
                <span className="mb-2 text-white/90">Découvrir nos offres</span>
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

      {/* Pricing Tabs Section */}
      <section id="pricing" className="py-12 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-16">
            <div className="bg-white p-1.5 rounded-xl shadow-md mb-8">
              <div className="flex space-x-1">
                <button
                  onClick={() => setSelectedTab("individuel")} 
                  className={`py-2.5 px-6 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedTab === "individuel" 
                      ? "bg-gradient-to-r from-[#18133E] to-[#271D5B] text-white shadow-lg" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  À la carte
                </button>
                <button
                  onClick={() => setSelectedTab("pack")} 
                  className={`py-2.5 px-6 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedTab === "pack" 
                      ? "bg-gradient-to-r from-[#18133E] to-[#271D5B] text-white shadow-lg" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Packs économiques
                </button>
              </div>
            </div>
            
            <span className="inline-block py-1 px-3 rounded-full bg-[#FFC3BC]/10 text-[#18133E] text-sm font-medium mb-3 border border-[#FFC3BC]/20">
              {selectedTab === "individuel" ? "Services à la carte" : "Offres packagées"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-3 text-center text-[#18133E]">
              {selectedTab === "individuel" 
                ? "Choisissez tes services" 
                : "Économisez avec nos packs"}
            </h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "5rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-[#FFC3BC] to-[#FFC3BC]/30 rounded-full mb-6"
            />
            <p className="text-gray-600 text-center max-w-2xl">
              {selectedTab === "individuel" 
                ? "Nous proposons une gamme complète de services pour t'accompagner dans toutes tes démarches. Souscris plusieurs services et bénéficie d'une remise de -15% sur la deuxième souscription."
                : "Économisez en optant pour nos packs de services. Nous avons regroupé les services les plus complémentaires pour t'offrir une solution complète à un tarif avantageux."}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24 pt-0 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <motion.div 
            className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full bg-[#FFC3BC]/5 blur-3xl"
            style={{ y: foregroundY }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-full bg-[#18133E]/5 blur-3xl"
            style={{ y: foregroundY }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          
          {/* Section À la carte */}
          {selectedTab === "individuel" && (
            <div>
              {/* Services principaux */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
                {pricingPlans.map((plan) => {
                  const style = colorStyles[plan.color];
                  const isActive = activePlan === plan.id;
                  
                  return (
                    <div
                      key={plan.id}
                      onMouseEnter={() => setActivePlan(plan.id)}
                      onMouseLeave={() => setActivePlan(null)}
                      className={`relative group bg-white rounded-2xl overflow-hidden ${isActive ? `shadow-xl ${style.highlight}` : `shadow-lg ${style.shadow}`} border ${style.border} ${style.hover} transition-all duration-300 flex flex-col h-full`}
                    >
                      {plan.popular && (
                        <div className="absolute -right-12 top-7 rotate-45 z-10">
                          <div className="bg-gradient-to-r from-[#18133E] to-[#271D5B] text-white px-12 py-1 text-xs font-medium shadow-lg">
                            Populaire
                          </div>
                        </div>
                      )}
                      
                      {plan.promo && (
                        <div className="absolute top-4 left-4 z-10">
                          <div className="flex items-center gap-1.5 bg-[#FFC3BC]/10 text-[#FFC3BC] px-2.5 py-1 rounded-full text-xs font-medium border border-[#FFC3BC]/20">
                            <Tag size={12} />
                            <span>{plan.promo}</span>
                          </div>
                        </div>
                      )}
                      
                      <div className={`p-4 ${style.light} border-b ${style.border}`}>
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-[#18133E]">
                              {plan.title}
                            </h3>
                            <p className={`text-xs ${style.text}`}>
                              {plan.description}
                            </p>
                          </div>
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${style.icon} flex items-center justify-center text-white shadow-lg`}>
                            {React.cloneElement(plan.icon, { className: "h-5 w-5" })}
                          </div>
                        </div>
                        <div className="mb-0">
                          <span className={`text-2xl font-bold ${style.gradientText}`}>{plan.price}</span>
                        </div>
                      </div>
                      
                      <div className="p-4 flex-grow flex flex-col">
                        <ul className="space-y-2 mb-4 flex-grow">
                          {plan.features.map((feature, idx) => (
                            <li 
                              key={idx}
                              className="flex items-start"
                            >
                              <div className={`p-0.5 rounded-full bg-gradient-to-br ${style.icon} text-white mr-2 mt-0.5 flex-shrink-0`}>
                                <Check className="h-3 w-3" />
                              </div>
                              <span className="text-gray-600 text-xs">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-auto">
                          <button
                            className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${style.button} text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md text-sm`}
                          >
                            <span>Souscrire</span>
                            <div className="ml-2">
                              <ArrowRight size={16} />
                            </div>
                          </button>
                        </div>
                        
                        <div className="mt-2 flex justify-center">
                          <button
                            onClick={() => toggleService(plan.id)}
                            className={`text-xs font-medium flex items-center gap-1.5 py-1 px-2 rounded-full transition-colors ${
                              simulatedServices.includes(plan.id)
                                ? `${style.light} ${style.text} border ${style.border}`
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                          >
                            {simulatedServices.includes(plan.id) ? (
                              <>
                                <CheckCircle className="h-3 w-3" />
                                <span>Ajouté</span>
                              </>
                            ) : (
                              <>
                                <Plus className="h-3 w-3" />
                                <span>Ajouter</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Services complémentaires */}
              <div className="mb-12">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <span className="inline-block py-1 px-3 rounded-full bg-[#18133E]/10 text-[#18133E] text-sm font-medium mb-4 border border-[#18133E]/20">
                    Services complémentaires
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#18133E]">
                    Pour aller plus loin
                  </h2>
                  <div className="h-1 bg-gradient-to-r from-[#18133E] to-[#18133E]/30 rounded-full mx-auto mb-6 w-16"></div>
                  <p className="text-gray-600">
                    Complète ton parcours avec nos services additionnels. Ces services peuvent être ajoutés à n'importe quelle offre principale.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                  {additionalServices.map((service, index) => {
                    // Diviser les titres longs en deux parties
                    let title = service.title;
                    let subTitle = null;
                    
                    if (service.title === "Assurance santé internationale") {
                      title = "Assurance santé";
                      subTitle = "internationale";
                    } else if (service.title === "Accompagnement démarches") {
                      title = "Accompagnement";
                      subTitle = "démarches";
                    } else if (service.title === "SIM Card française") {
                      title = "SIM Card";
                      subTitle = "française";
                    }
                    
                    return (
                      <div
                        key={service.id}
                        className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full"
                      >
                        <div className="p-3 flex-grow flex flex-col">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-[#FFC3BC]/10 flex items-center justify-center flex-shrink-0">
                              {React.cloneElement(service.icon, { className: "h-3 w-3 text-[#FFC3BC]" })}
                            </div>
                            <div>
                              <h3 className="font-medium text-[#18133E] text-sm leading-none">
                                {title}
                                {subTitle && (
                                  <>
                                    <br />
                                    <span>{subTitle}</span>
                                  </>
                                )}
                              </h3>
                              <p className="text-[#FFC3BC] font-medium text-xs mt-1">{service.price}</p>
                            </div>
                          </div>
                          <p className="text-gray-500 text-xs mb-3">{service.description}</p>
                          <div className="mt-auto">
                            <button
                              onClick={() => toggleService(service.id)}
                              className={`w-full text-xs flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg border transition-colors ${
                                simulatedServices.includes(service.id)
                                  ? "bg-[#FFC3BC]/10 text-[#FFC3BC] border-[#FFC3BC]/30"
                                  : "border-[#18133E]/20 text-[#18133E] hover:bg-[#18133E]/5"
                              }`}
                            >
                              {simulatedServices.includes(service.id) ? (
                                <>
                                  <CheckCircle className="h-3 w-3" />
                                  <span>Ajouté</span>
                                </>
                              ) : (
                                <span>Ajouter</span>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          
          {/* Section Packs économiques */}
          {selectedTab === "pack" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                {economicPacks.map((pack) => {
                  const style = colorStyles[pack.color];
                  
                  return (
                    <div
                      key={pack.id}
                      className={`relative bg-white rounded-2xl border ${style.border} shadow-xl overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-all duration-300`}
                    >
                      {pack.popular && (
                        <div className="absolute -right-12 top-7 rotate-45 z-10">
                          <div className="bg-gradient-to-r from-[#18133E] to-[#271D5B] text-white px-12 py-1 text-xs font-medium shadow-lg">
                            Recommandé
                          </div>
                        </div>
                      )}
                      
                      <div className={`p-4 ${style.light} border-b ${style.border}`}>
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-[#18133E]">
                              {pack.title}
                            </h3>
                            <p className={`text-xs ${style.text}`}>
                              {pack.description}
                            </p>
                          </div>
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${style.icon} flex items-center justify-center text-white shadow-lg`}>
                            <Gift className="h-5 w-5" />
                          </div>
                        </div>
                        <div className="mb-0">
                          <span className={`text-2xl font-bold ${style.gradientText}`}>{pack.price}</span>
                          <span className="text-gray-500 line-through text-sm ml-2">{pack.originalPrice}</span>
                          <div className="inline-block ml-2 bg-[#FFC3BC]/10 text-[#FFC3BC] px-2 py-0.5 rounded-full text-xs font-medium">
                            -{parseInt(pack.originalPrice) - parseInt(pack.price)} €
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 flex-grow flex flex-col">
                        <ul className="space-y-2 mb-4 flex-grow">
                          {pack.items.concat(pack.benefits).map((item, idx) => (
                            <li 
                              key={idx}
                              className="flex items-start"
                            >
                              <div className={`p-0.5 rounded-full bg-gradient-to-br ${style.icon} text-white mr-2 mt-0.5 flex-shrink-0`}>
                                {idx < pack.items.length ? <Check className="h-3 w-3" /> : <Star className="h-3 w-3 fill-current" />}
                              </div>
                              <span className="text-gray-600 text-xs">{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-auto">
                          <button
                            className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${style.button} text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md text-sm`}
                          >
                            <span>Souscrire au pack</span>
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </button>
                        </div>
                        
                        <div className="mt-2 flex justify-center">
                          <button className="inline-flex items-center text-xs text-gray-500 hover:text-[#18133E] transition-colors">
                            <span>Voir détails</span>
                            <ChevronRight className="h-3 w-3 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-16 p-8 bg-[#18133E] rounded-xl border border-[#18133E]/30 max-w-3xl mx-auto text-white shadow-xl">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                    <Gift className="h-8 w-8 text-[#FFC3BC]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
                      Un pack sur mesure pour toi
                    </h3>
                    <p className="text-white/80 mb-6 text-center md:text-left">
                      Tu ne trouves pas exactement ce dont tu as besoin ? Nous pouvons créer un pack personnalisé pour tes besoins spécifiques. Contactez notre équipe pour recevoir une proposition adaptée.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                      <button className="bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] text-[#18133E] hover:from-[#ff9d94] hover:to-[#FFC3BC] px-6 py-2 rounded-lg transition-all">
                        Demander un pack sur mesure
                      </button>
                      <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-6 py-2 rounded-lg transition-all">
                        Comparer les packs
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Quote simulation - seulement pour À la carte */}
          {selectedTab === "individuel" && simulatedServices.length > 0 && (
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#18133E] text-white w-10 h-10 rounded-full flex items-center justify-center">
                      <ShoppingCart className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">Votre simulation:</span>
                        <div className="flex items-center gap-1">
                          {simulatedServices.map((serviceId) => {
                            const service = [...pricingPlans, ...additionalServices].find(s => s.id === serviceId);
                            return (
                              <div key={serviceId} className="bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-700">
                                {service?.title}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#18133E]">Total: {totalPrice - discount} €</span>
                        {discount > 0 && (
                          <span className="text-[#FFC3BC] text-sm">Économie: {discount.toFixed(0)} €</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setSimulatedServices([])} 
                      className="border border-[#18133E]/20 text-[#18133E] hover:bg-[#18133E]/5 px-4 py-2 rounded-lg transition-colors"
                    >
                      Réinitialiser
                    </button>
                    <button className="bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white px-4 py-2 rounded-lg transition-all">
                      Obtenir un devis
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Section conseil - seulement pour À la carte */}
          {selectedTab === "individuel" && (
            <div className="mt-16 p-6 bg-gradient-to-br from-[#FFC3BC]/10 to-[#FFC3BC]/5 rounded-xl border border-[#FFC3BC]/20 max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFC3BC]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Info className="h-5 w-5 text-[#FFC3BC]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#18133E] mb-2">
                    Besoin d'aide pour choisir ?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Notre équipe est disponible pour vous guider vers les services les plus adaptés à ta situation. Prends rendez-vous pour un conseil personnalisé et gratuit.
                  </p>
                  <button className="bg-[#18133E] hover:bg-[#231A54] text-white px-6 py-2 rounded-lg transition-colors">
                    Demander conseil
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Pricing FAQ */}
      <section className="py-24 bg-[#F8F9FA] relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-[#FFC3BC]/10 text-[#18133E] text-sm font-medium mb-4 border border-[#FFC3BC]/20">
              Questions fréquentes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18133E]">
              Besoin de précisions ?
            </h2>
            <div className="h-1 bg-gradient-to-r from-[#FFC3BC] to-[#FFC3BC]/30 rounded-full mx-auto mb-6 w-20"></div>
            <p className="text-gray-600">
              Nous répondons à vos questions les plus fréquentes sur nos services et tarifs.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "Puis-je payer en plusieurs fois ?",
                  answer: "Non, nous ne proposons pas de paiement en plusieurs fois. Contactez notre équipe pour en savoir plus sur les modalités de paiement."
                },
                {
                  question: "Les frais de dossier sont-ils inclus ?",
                  answer: "Tous nos tarifs incluent les frais de dossier et de traitement. Aucun coût supplémentaire ne vous sera demandé après validation de votre commande."
                },
                {
                  question: "Comment obtenir une remise sur plusieurs services ?",
                  answer: "La remise de 15% s'applique automatiquement lors de la souscription d'un deuxième service dans un délai de 30 jours après votre première commande."
                },
                {
                  question: "Quels moyens de paiement acceptez-vous ?",
                  answer: "Nous acceptons les cartes bancaires (Visa, Mastercard), les virements bancaires et PayPal. Pour les étudiants internationaux, nous facilitons également les transferts via Western Union."
                },
                {
                  question: "Que se passe-t-il en cas de refus de visa ?",
                  answer: "En cas de refus de visa pour motif 2 seulement (ressources financières), nous vous remboursons le montant des frais payés pour l'AVI (caution pour études). Les autres services ne sont pas remboursables."
                },
                {
                  question: "Combien de temps faut-il pour recevoir les documents ?",
                  answer: "Les délais sont indiqués pour chaque service. L'attestation d'hébergement est délivrée en 2h, l'AVI et la caution en 48h. Vous pouvez opter pour la livraison express (24h) avec un supplément."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Vous avez d'autres questions ? Notre équipe est à votre disposition.
              </p>
              <button className="bg-[#18133E] hover:bg-[#231A54] text-white px-6 py-2 rounded-lg transition-colors">
                Voir toutes nos FAQ
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call-to-action Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <motion.div 
            className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full bg-[#FFC3BC]/5 blur-3xl"
            style={{ y: foregroundY }}
          />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#18133E] to-[#271D5B] rounded-2xl p-8 md:p-12 shadow-xl text-center text-white overflow-hidden relative">
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
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20 shadow-xl">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Prêt à démarrer ton projet ?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                Prends rendez-vous avec l'un de nos conseillers pour un accompagnement personnalisé. Nous t'aiderons à choisir les services les mieux adaptés à ta situation.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] text-[#18133E] hover:from-[#ff9d94] hover:to-[#FFC3BC] rounded-full px-8 py-6 text-lg font-medium border-0 shadow-xl flex items-center gap-2 hover:scale-105 transition-transform">
                  <span>Prendre rendez-vous</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:scale-105 transition-transform">
                  <span>Demander un devis</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Shopping cart icon
const ShoppingCart = (props) => {
  return (
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
};

export default PricingPage;