import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Check, 
  Clock, 
  Shield, 
  Heart, 
  Phone, 
  Home, 
  Plane, 
  Briefcase, 
  Headphones, 
  MapPin, 
  Calendar, 
  Star,
  Sparkles,
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ParentsPage = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  // Reference for the scroll progress and parallax effects
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Parallax effect values for backgrounds
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Features data
  const features = [
    {
      id: 1,
      title: "Entretien préliminaire",
      description: "L'un de nos conseillers prend en charge votre demande. Sont pris en compte vos souhaits et vos préférences : ville d'accueil, formation envisagée...",
      icon: <MessageCircle />,
      color: "indigo"
    },
    {
      id: 2,
      title: "Tarification claire et avantageuse",
      description: "En moins de 24h, vous recevez un devis sans frais cachés. Une fois que vous avez payé pour l'un de nos services, vous avez droit automatiquement à une remise sur tous les autres.",
      icon: <Check />,
      color: "purple"
    },
    {
      id: 3,
      title: "Suivi personnalisé du dossier",
      description: "Suivez la demande de votre enfant tout au long du processus, qu'il s'agisse d'une inscription dans un établissement d'enseignement supérieur, d'une recherche de logement ou d'une caution bancaire pour études à l'étranger.",
      icon: <Clock />,
      color: "rose"
    },
    {
      id: 4,
      title: "Accompagnement avant le départ",
      description: "Planifiez le voyage avec nous. Avec notre gamme de services, le billet d'avion, l'assurance voyage et le futur logement ne seront plus source de problèmes.",
      icon: <Plane />,
      color: "amber"
    },
    {
      id: 5,
      title: "Accueil à l'arrivée en France",
      description: "Nous pouvons aller chercher l'étudiant à l'aéroport et l'emmener à son domicile. C'est un service populaire auprès des parents qui peuvent dormir l'esprit tranquille.",
      icon: <MapPin />,
      color: "emerald"
    },
    {
      id: 6,
      title: "Aide à l'installation",
      description: "SenFrance suit votre enfant pendant les deux premiers mois de son arrivée dans le pays d'accueil. Puis pendant tout son cursus, nous restons disponibles pour l'aider et l'aiguiller.",
      icon: <Home />,
      color: "blue"
    }
  ];
  
  // Color mappings for different feature styles
  const colorStyles = {
    indigo: {
      light: "bg-indigo-50",
      medium: "bg-indigo-500",
      dark: "bg-indigo-600",
      text: "text-indigo-600",
      border: "border-indigo-100",
      hover: "group-hover:border-indigo-200 group-hover:shadow-indigo-100/40",
      icon: "from-indigo-500 to-indigo-600",
      shadow: "shadow-indigo-500/20"
    },
    purple: {
      light: "bg-purple-50",
      medium: "bg-purple-500",
      dark: "bg-purple-600",
      text: "text-purple-600",
      border: "border-purple-100",
      hover: "group-hover:border-purple-200 group-hover:shadow-purple-100/40",
      icon: "from-purple-500 to-purple-600",
      shadow: "shadow-purple-500/20"
    },
    rose: {
      light: "bg-[#FFC3BC]/10",
      medium: "bg-[#FFC3BC]",
      dark: "bg-[#ff9d94]",
      text: "text-[#FFC3BC]",
      border: "border-[#FFC3BC]/20",
      hover: "group-hover:border-[#FFC3BC]/30 group-hover:shadow-[#FFC3BC]/20",
      icon: "from-[#FFC3BC] to-[#ff9d94]",
      shadow: "shadow-[#FFC3BC]/20"
    },
    amber: {
      light: "bg-amber-50",
      medium: "bg-amber-500",
      dark: "bg-amber-600",
      text: "text-amber-600",
      border: "border-amber-100",
      hover: "group-hover:border-amber-200 group-hover:shadow-amber-100/40",
      icon: "from-amber-500 to-amber-600",
      shadow: "shadow-amber-500/20"
    },
    emerald: {
      light: "bg-emerald-50",
      medium: "bg-emerald-500",
      dark: "bg-emerald-600",
      text: "text-emerald-600",
      border: "border-emerald-100",
      hover: "group-hover:border-emerald-200 group-hover:shadow-emerald-100/40",
      icon: "from-emerald-500 to-emerald-600",
      shadow: "shadow-emerald-500/20"
    },
    blue: {
      light: "bg-blue-50",
      medium: "bg-blue-500",
      dark: "bg-blue-600",
      text: "text-blue-600",
      border: "border-blue-100",
      hover: "group-hover:border-blue-200 group-hover:shadow-blue-100/40",
      icon: "from-blue-500 to-blue-600",
      shadow: "shadow-blue-500/20"
    }
  };
  
  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

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
  
  // Benefits cards
  const benefits = [
    {
      title: "Tranquillité d'esprit",
      description: "Ayez l'assurance que votre enfant est bien accompagné dans toutes ses démarches",
      icon: <Shield />,
      color: "purple",
      delay: 0.1
    },
    {
      title: "Suivi en temps réel",
      description: "Accédez à toutes les informations concernant le dossier de votre enfant à tout moment",
      icon: <Clock />,
      color: "indigo",
      delay: 0.2
    },
    {
      title: "Accompagnement complet",
      description: "Bénéficiez d'un accompagnement à chaque étape, des formalités administratives à l'installation",
      icon: <CheckCircle />,
      color: "rose",
      delay: 0.3
    },
    {
      title: "Service personnalisé",
      description: "Profitez d'un service sur mesure adapté aux besoins spécifiques de votre enfant",
      icon: <Heart />,
      color: "amber",
      delay: 0.4
    }
  ];

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
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
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-white"
            >
              <div className="inline-block mb-4 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                <span className="text-sm font-medium">Espace Parents</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Des parents rassurés pour un avenir radieux
              </h1>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                Notre <span className="font-semibold text-[#FFC3BC]">offre de services</span> s'adresse aussi bien aux étudiants qu'à <span className="font-semibold text-[#FFC3BC]">leurs parents</span>. Laissez votre enfant <span className="font-semibold text-[#FFC3BC]">entre de bonnes mains</span>.
              </p>
              <p className="text-lg text-white/80 mb-10 leading-relaxed">
                Et créez un compte parent pour suivre ses procédures en temps réel. L'accompagnement SenFrance est une proposition qui a été pensée de <span className="font-semibold text-[#FFC3BC]">manière globale</span> mais sait s'adapter à <span className="font-semibold text-[#FFC3BC]">chaque situation</span>. Optez pour <span className="font-semibold text-[#FFC3BC]">le package qui vous convient</span> et inscrivez <span className="font-semibold text-[#FFC3BC]">votre enfant</span> chez nous.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild className="bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] text-[#18133E] hover:from-[#ff9d94] hover:to-[#FFC3BC] rounded-full px-8 py-6 text-lg font-medium border-0">
                    <Link to="/contact" className="flex items-center gap-2">
                      <span>Parler à un conseiller</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild variant="outline" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/20 rounded-full px-8 py-6 text-lg font-medium">
                    <Link to="/parents/compte">
                      <span>Créer un compte parent</span>
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-xl"
            >
              <div className="relative">
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg z-10 flex items-center gap-1.5"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Accès exclusif</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-xl mb-6 border border-white/10"
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#FFC3BC]">
                    Portail Parents
                  </h3>
                  <p className="text-white/80 mb-4">
                    Restez informé à chaque étape du processus. Notre portail vous permet de:
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Suivre les démarches en temps réel",
                      "Accéder aux documents importants",
                      "Communiquer avec nos conseillers",
                      "Recevoir des notifications"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="flex items-start"
                      >
                        <Check className="h-5 w-5 text-[#FFC3BC] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Button className="w-full bg-white text-[#18133E] hover:bg-white/90 rounded-lg">
                    Se connecter au portail
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <div className="w-12 h-12 bg-[#FFC3BC]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#FFC3BC]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Besoin d'aide ?</p>
                    <p className="text-white font-medium">+33 (0)9 72 14 66 97</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Process Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#FFC3BC]/10 text-[#18133E] text-sm font-medium mb-4 border border-[#FFC3BC]/20">
              Notre processus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18133E]">
              Un accompagnement de qualité à chaque étape
            </h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-[#FFC3BC] to-[#FFC3BC]/30 rounded-full mx-auto mb-6"
            />
            <p className="text-gray-600">
              Nous vous proposons un processus clair et transparent, conçu pour vous offrir une tranquillité d'esprit totale.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const style = colorStyles[feature.color as keyof typeof colorStyles];
              const isActive = activeFeature === feature.id;
              
              return (
                <motion.div
                  key={feature.id}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => setActiveFeature(feature.id)}
                  onMouseLeave={() => setActiveFeature(null)}
                  className={`group bg-white rounded-2xl p-8 shadow-md ${style.shadow} hover:shadow-lg transition-all duration-300 border ${style.border} ${style.hover} h-full`}
                >
                  <motion.div 
                    className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${style.icon} flex items-center justify-center text-white ${isActive ? 'shadow-lg' : ''}`}
                    animate={isActive ? { 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                    } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {React.cloneElement(feature.icon, { className: "h-7 w-7" })}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3 text-[#18133E]">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                  
                  <motion.div 
                    className={`mt-6 h-1 bg-gradient-to-r ${style.icon} rounded-full`}
                    initial={{ width: 0 }}
                    animate={isActive ? { width: "100%" } : { width: "30%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-24 bg-[#18133E] text-white relative overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-xl max-w-md ml-auto"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#FFC3BC]/20 flex items-center justify-center">
                      <Star className="h-6 w-6 text-[#FFC3BC]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Expérience de qualité</h4>
                      <p className="text-white/70 text-sm">Parents satisfaits et rassurés</p>
                    </div>
                  </div>
                  <p className="text-white/80">
                    "SenFrance a transformé ce qui aurait pu être un processus stressant en une expérience sereine. Ma fille est maintenant épanouie à Paris."
                  </p>
                  <p className="text-right text-white/60 text-sm mt-2">
                    — Mariama D., parent d'étudiant
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-xl max-w-md mt-6 relative z-20"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#FFC3BC]/20 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-[#FFC3BC]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Suivi transparent</h4>
                      <p className="text-white/70 text-sm">Accès à toutes les informations</p>
                    </div>
                  </div>
                  <p className="text-white/80">
                    "Ce qui m'a le plus rassuré, c'est de pouvoir suivre chaque étape en temps réel. Le suivi est impeccable et très professionnel."
                  </p>
                  <p className="text-right text-white/60 text-sm mt-2">
                    — Paul M., parent d'étudiant
                  </p>
                </motion.div>
                
                <motion.div
                  className="absolute -top-6 -left-6 -right-6 -bottom-6 border-2 border-dashed border-white/10 rounded-2xl -z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium mb-4 border border-white/20">
                Avantages
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pourquoi nous faire confiance ?
              </h2>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "5rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-[#FFC3BC] to-transparent rounded-full mb-6"
              />
              <p className="text-white/80 mb-8">
                Nous prenons le relais tout en vous rendant compte à chaque étape. Notre approche centrée sur la famille garantit:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => {
                  const style = colorStyles[benefit.color as keyof typeof colorStyles];
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: benefit.delay, duration: 0.6 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${style.icon} flex-shrink-0`}>
                          {React.cloneElement(benefit.icon, { className: "h-5 w-5 text-white" })}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                          <p className="text-white/70 text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              
            </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-16 h-16 bg-gradient-to-r from-[#18133E] to-[#271D5B] rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Users className="h-8 w-8 text-white" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18133E]">
              Donnez à votre enfant les meilleures chances
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Commencez dès aujourd'hui l'aventure SenFrance et accompagnez sereinement votre enfant vers la réussite académique et professionnelle.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild className="bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white rounded-full px-8 py-6 text-lg font-medium">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Prendre rendez-vous</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="outline" className="text-[#18133E] border-[#18133E]/20 hover:bg-[#18133E]/5 rounded-full px-8 py-6 text-lg font-medium">
                  <Link to="/parents/temoignages">
                    <span>Lire les témoignages</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ParentsPage;