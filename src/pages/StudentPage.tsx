import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  MessageCircle, 
  GraduationCap, 
  Home, 
  Briefcase, 
  User, 
  ArrowDownCircle,
  Coffee,
  MapPin,
  BookOpen,
  Users,
  Calendar,
  Star,
  Target,
  Heart,
  CheckCircle,
  Clock,
  Shield,
  Check,
  Sparkles,
  CreditCard,
  FileText,
  Building,
  Key
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const StudentPage = () => {
  useScrollToTop();
  const [activeSection, setActiveSection] = useState(null);
  const [activePricing, setActivePricing] = useState(null);
  
  // Reference for the scroll progress and parallax effects
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Parallax effect values for backgrounds
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Sections data with animation configs
  const sections = [
    {
      id: "profile",
      title: "Mon profil",
      icon: <User className="w-6 h-6 text-white" />,
      description: "Parlons ensemble",
      content: "Il est primordial pour nous de travailler en étroite collaboration avec ceux qui nous confient leur destin. C'est une responsabilité que nous ne prenons pas à la légère. La première étape du voyage consiste à définir le parcours et préparer sa monture. Un projet clair et personnel est indispensable pour réussir ses études supérieures. Parlons ensemble pour trouver un plan qui te corresponde.",
      cta: "PRENDRE RENDEZ-VOUS",
      ctaLink: "/contact",
      color: "indigo",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "formation",
      title: "Choisir ma formation",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      description: "Progresser et prospérer",
      content: "L'une des premières raisons de l'échec, c'est la perte de motivation. Quand on se sent bien dans sa formation, on progresse plus vite. Un grand nombre d'étudiants ambitieux et déterminés au départ ont connu l'obstacle de l'orientation et n'ont jamais su le surmonter. \"Bien choisir\" est synonyme de \"bien commencer\" et rime avec \"bien finir\". Nous t'apportons notre expérience et nos conseils.",
      cta: "PERFECTIBLE.APP",
      ctaLink: "https://www.perfectible.app/register",
      color: "purple",
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "logement",
      title: "Trouver mon logement",
      icon: <Home className="w-6 h-6 text-white" />,
      description: "Avoir l'esprit tranquille",
      content: "Première tracasserie, le logement est aussi le premier poste de dépenses pour un étudiant. Autant dire qu'il faut prendre le problème à bras le corps pour s'éviter toute mauvaise surprise. Entre un budget parfois serré et la méconnaissance du secteur, la recherche d'un appartement peut vite devenir une traversée du désert. Nous t'aidons à trouver l'oasis et ton havre de paix.",
      cta: "SE LOGER",
      ctaLink: "/visa/hebergement",
      color: "rose",
      image: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "job",
      title: "Mon job étudiant",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      description: "Sécuriser mon projet",
      content: "Un étudiant sur deux travaille au moins une fois au cours de son année universitaire. Un travail rémunéré qui prend plusieurs formes. Le soutien de la famille ou les bourses d'études ne suffisent pas dans tous les cas. L'activité salariée permet souvent de financer ses études et de vivre décemment. Pour beaucoup d'étudiants, il est impossible de faire autrement. Nos opportunités seront les tiennes.",
      cta: "TRAVAILLER",
      ctaLink: "/vivre-en-france/job-etudiant",
      color: "amber",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    }
  ];
  
  // Pricing data
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
        "Suivi de votre demande de visa"
      ],
      cta: "Souscrire",
      ctaLink: "/services/avi",
      color: "indigo"
    },
    {
      id: "caution",
      title: "Caution pour études",
      price: "299 €",
      icon: <FileText />,
      description: "Document édité en 48h pour demande de visa",
      features: [
        "Garantie financière pour votre logement",
        "Document reconnu par les services consulaires",
        "Édité en français et en anglais",
        "Vérification de conformité incluse"
      ],
      cta: "Souscrire",
      ctaLink: "/services/caution",
      color: "purple"
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
        "Livraison express par email",
        "Service de modification inclus"
      ],
      cta: "Souscrire",
      ctaLink: "/services/attestation",
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
        "Assistance à l'état des lieux"
      ],
      cta: "Souscrire",
      ctaLink: "/services/logement",
      color: "amber"
    }
  ];
  
  // Values section
  const values = [
    {
      icon: <Target />,
      title: "Personnalisation",
      description: "Notre approche est adaptée à chaque étudiant et à ses objectifs"
    },
    {
      icon: <Clock />,
      title: "Efficacité",
      description: "Nous accélérons vos démarches pour que vous puissiez vous concentrer sur l'essentiel"
    },
    {
      icon: <Heart />,
      title: "Passion",
      description: "Nous aimons ce que nous faisons et nous nous engageons pleinement"
    },
    {
      icon: <CheckCircle />,
      title: "Excellence",
      description: "Nous visons toujours la meilleure qualité dans tous nos services"
    }
  ];
  
  // Testimonials
  const testimonials = [
    {
      quote: "SenFrance a transformé mon rêve d'étudier en France en réalité. Ils m'ont guidé à chaque étape, de la candidature jusqu'à mon installation.",
      author: "Abdou K., étudiant en Master Finance",
      color: "indigo"
    },
    {
      quote: "Grâce à leur aide, j'ai trouvé une formation parfaitement adaptée à mon projet professionnel et un logement idéalement situé.",
      author: "Fatou D., étudiante en licence de Droit",
      color: "rose"
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
      button: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
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
      button: "from-[#FFC3BC] to-[#ff9d94] hover:from-[#ff9d94] hover:to-[#FFC3BC]",
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
      button: "from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700",
      shadow: "shadow-amber-500/20"
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
  
  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    show: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        damping: 15
      }
    }
  };
  
  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    show: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        damping: 15
      }
    }
  };

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
                <span className="text-sm font-medium">Étudiants internationaux</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Votre succès académique commence ici
              </h1>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                Nous vous <span className="font-semibold text-[#FFC3BC]">accompagnons</span> à chaque étape de votre parcours d'études en France, 
                du <span className="font-semibold text-[#FFC3BC]">choix de votre formation</span> jusqu'à votre <span className="font-semibold text-[#FFC3BC]">intégration professionnelle</span>.
              </p>
              <p className="text-lg text-white/80 mb-10 leading-relaxed">
                Notre équipe d'experts vous guide dans toutes vos démarches administratives, vous aide à trouver le logement idéal et vous offre les meilleures opportunités pour réussir vos études en France.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild className="bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] text-[#18133E] hover:from-[#ff9d94] hover:to-[#FFC3BC] rounded-full px-8 py-6 text-lg font-medium border-0">
                    <Link to="/contact" className="flex items-center gap-2">
                      <span>Commencer mon projet</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild variant="outline" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/20 rounded-full px-8 py-6 text-lg font-medium">
                    <a href="#services">
                      <span>Explorer nos services</span>
                    </a>
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
                  <span>Service Premium</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-xl mb-6 border border-white/10"
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#FFC3BC]">
                    Accompagnement Personnalisé
                  </h3>
                  <p className="text-white/80 mb-4">
                    Un conseiller dédié vous accompagne tout au long de votre projet:
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Choix d'une formation adaptée",
                      "Constitution du dossier de visa",
                      "Recherche de logement",
                      "Démarches administratives",
                      "Intégration en France"
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
                    Rencontrer un conseiller
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <div className="w-12 h-12 bg-[#FFC3BC]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-[#FFC3BC]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Satisfaction étudiants</p>
                    <p className="text-white font-medium">98% de recommandation</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
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
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#FFC3BC]/10 text-[#18133E] text-sm font-medium mb-4 border border-[#FFC3BC]/20">
              Services étudiants
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18133E]">
              Notre accompagnement sur mesure
            </h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-[#FFC3BC] to-[#FFC3BC]/30 rounded-full mx-auto mb-6"
            />
            <p className="text-gray-600">
              Nous vous proposons un ensemble de services adaptés à vos besoins pour faciliter votre parcours d'études en France.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-12"
          >
            {sections.map((section, index) => {
              const style = colorStyles[section.color];
              const sectionRef = useRef(null);
              const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
              const isActive = activeSection === section.id;
              
              return (
                <motion.div
                  ref={sectionRef}
                  key={section.id}
                  variants={fadeInUp}
                  onMouseEnter={() => setActiveSection(section.id)}
                  onMouseLeave={() => setActiveSection(null)}
                  className={`group bg-white rounded-2xl overflow-hidden shadow-lg ${style.shadow} border ${style.border} ${style.hover} transition-all duration-300 flex flex-col h-full relative`}
                >
                  {/* Background image with overlay */}
                  <div className="h-48 overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#18133E]/70 to-transparent z-10`}></div>
                    <motion.img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                      animate={isInView ? { 
                        scale: isActive ? 1.05 : 1
                      } : {}}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute bottom-4 left-6 z-20 flex items-center">
                      <motion.div 
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${style.icon} flex items-center justify-center mr-3`}
                        animate={isInView ? {
                          scale: isActive ? 1.1 : 1,
                        } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        {section.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-4">
                      <h4 className={`text-lg font-semibold ${style.text}`}>
                        {section.description}
                      </h4>
                    </div>
                    
                    <p className="text-gray-600 mb-6 flex-grow">
                      {section.content}
                    </p>
                    
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="mt-auto"
                    >
                      <Link 
                        to={section.ctaLink} 
                        className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${style.button} text-white font-medium py-3 px-6 rounded-xl transition-all duration-300`}
                      >
                        <span>{section.cta}</span>
                        <motion.div
                          animate={isActive ? { x: 5 } : { x: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          className="ml-2"
                        >
                          <ArrowRight size={18} />
                        </motion.div>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium mb-4 border border-white/20">
              Témoignages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ce que disent nos étudiants
            </h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-[#FFC3BC] to-transparent rounded-full mx-auto mb-6"
            />
            <p className="text-white/80">
              Découvrez les expériences de nos étudiants qui ont réussi leur projet d'études en France grâce à notre accompagnement.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => {
              const style = colorStyles[testimonial.color];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-xl"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${style.icon} flex items-center justify-center`}>
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div className="h-1 flex-grow bg-white/20 rounded-full"></div>
                  </div>
                  <p className="text-white/90 text-lg mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-right text-white/70">
                    — {testimonial.author}
                  </p>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Link to="/temoignages" className="inline-flex items-center gap-2 text-[#FFC3BC] hover:text-[#ff9d94] transition-colors">
              <span>Voir tous les témoignages</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      
      {/* Values Section */}
      <section className="py-24 bg-gradient-to-r from-[#18133E] to-[#271D5B] text-white relative">
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium mb-4 border border-white/20">
              Nos valeurs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ce qui nous définit
            </h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-[#FFC3BC] to-transparent rounded-full mx-auto mb-6"
            />
            <p className="text-white/80">
              Notre engagement est d'offrir un accompagnement d'excellence à chaque étudiant, guidé par des valeurs fortes.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 flex flex-col items-center text-center hover:bg-white/15 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-full bg-[#FFC3BC]/20 flex items-center justify-center mb-4"
                  whileHover={{ 
                    rotate: [0, -10, 10, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {React.cloneElement(value.icon, { className: "h-6 w-6 text-[#FFC3BC]" })}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-[#FFC3BC]/10 px-4 py-2 rounded-full">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-[#FFC3BC] fill-[#FFC3BC]" />
                <span className="text-white font-medium">Plus de 2000 étudiants accompagnés avec succès</span>
              </div>
            </div>
          </motion.div>
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
              <MessageCircle className="h-8 w-8 text-white" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18133E]">
              Prêt à commencer votre aventure étudiante?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour un premier entretien sans engagement. 
              Nous sommes impatients de vous accompagner dans votre projet d'études en France.
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
                  <Link to="/etudiants/faq">
                    <span>Questions fréquentes</span>
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

export default StudentPage;