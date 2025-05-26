import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  CheckCircle, 
  Shield, 
  Home, 
  Briefcase, 
  Users, 
  Star,
  Sparkles,
  ArrowRight,
  Award,
  Clock,
  Heart,
  Target,
  Zap,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Team members data - updated for new business areas
const team = [
  {
    name: "Sophie Martin",
    role: "Fondatrice & Directrice",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    bio: "Visionnaire passionnée, Sophie a créé SenFrance en 2021 pour révolutionner les services aux étudiants et voyageurs.",
    color: "purple"
  },
  {
    name: "Moussa Diop",
    role: "Responsable Hébergement",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    bio: "Expert en solutions d'hébergement, Moussa coordonne notre réseau de logements de qualité pour étudiants.",
    color: "rose"
  },
  {
    name: "Claire Dubois",
    role: "Conseillère Assurance",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80",
    bio: "Spécialiste en assurance voyage et étudiante, Claire vous accompagne dans le choix des meilleures couvertures.",
    color: "indigo"
  },
  {
    name: "Mamadou Ndiaye",
    role: "Coordinateur Jobs Étudiants",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    bio: "Passionné par l'insertion professionnelle, Mamadou connecte les étudiants avec les meilleures opportunités.",
    color: "amber"
  }
];

// Updated timeline for new business model
const timeline = [
  {
    year: "2021",
    title: "Création de SenFrance",
    description: "Fondation de l'entreprise avec une vision moderne des services aux étudiants et voyageurs.",
    icon: "🚀",
    color: "rose"
  },
  {
    year: "2022",
    title: "Lancement AVI & Assurances",
    description: "Développement de notre gamme complète d'assurances voyage internationales et étudiantes.",
    icon: "🛡️",
    color: "purple"
  },
  {
    year: "2023",
    title: "Réseau Hébergement",
    description: "Création d'un réseau de logements de qualité adaptés aux besoins des étudiants et jeunes professionnels.",
    icon: "🏠",
    color: "indigo"
  },
  {
    year: "2024",
    title: "Plateforme Jobs Étudiants",
    description: "Lancement de notre service de mise en relation pour jobs étudiants et stages.",
    icon: "💼",
    color: "amber"
  },
  {
    year: "2025",
    title: "Expansion & Innovation",
    description: "Diversification de nos services et expansion vers de nouveaux marchés.",
    icon: "⭐",
    color: "rose"
  }
];

// Color mappings
const colorStyles = {
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
  amber: {
    light: "bg-amber-50",
    medium: "bg-amber-500",
    dark: "bg-amber-600",
    text: "text-amber-600",
    border: "border-amber-100",
    hover: "group-hover:border-amber-200 group-hover:shadow-amber-100/40",
    icon: "from-amber-500 to-amber-600",
    shadow: "shadow-amber-500/20"
  }
};

const About = () => {
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
                <span className="text-sm font-medium">À Propos de SenFrance</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Votre partenaire de confiance depuis{' '}
                <span className="bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] bg-clip-text text-transparent">
                  2021
                </span>
              </h1>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                SenFrance accompagne les <span className="font-semibold text-[#FFC3BC]">étudiants et voyageurs</span> dans leurs projets les plus importants avec une approche <span className="font-semibold text-[#FFC3BC]">personnalisée et innovante</span>.
              </p>
              <p className="text-lg text-white/80 mb-10 leading-relaxed">
                Nos quatre domaines d'expertise - <span className="font-semibold text-[#FFC3BC]">AVI & Assurances</span>, <span className="font-semibold text-[#FFC3BC]">Hébergement</span>, <span className="font-semibold text-[#FFC3BC]">Jobs Étudiants</span> et <span className="font-semibold text-[#FFC3BC]">Accompagnement</span> - forment un écosystème complet pour votre réussite.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild className="bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] text-[#18133E] hover:from-[#ff9d94] hover:to-[#FFC3BC] rounded-full px-8 py-6 text-lg font-medium border-0">
                    <Link to="/contact" className="flex items-center gap-2">
                      <span>Découvrir nos services</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild variant="outline" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/20 rounded-full px-8 py-6 text-lg font-medium">
                    <Link to="/temoignages">
                      <span>Témoignages clients</span>
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
                  <span>Depuis 2021</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-xl mb-6 border border-white/10"
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#FFC3BC]">
                    Notre Mission
                  </h3>
                  <p className="text-white/80 mb-4">
                    Nous révolutionnons l'accompagnement des étudiants et voyageurs avec :
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Une approche 100% personnalisée",
                      "Des services intégrés et complémentaires",
                      "Un suivi transparent en temps réel",
                      "Une équipe d'experts dédiés"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="flex items-start"
                      >
                        <CheckCircle className="h-5 w-5 text-[#FFC3BC] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                    <div className="text-2xl font-bold text-[#FFC3BC] mb-1">500+</div>
                    <div className="text-white/70 text-sm">Étudiants accompagnés</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                    <div className="text-2xl font-bold text-[#FFC3BC] mb-1">98%</div>
                    <div className="text-white/70 text-sm">Taux de satisfaction</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Nos Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18133E]">
              Quatre domaines d'expertise pour votre réussite
            </h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-[#FFC3BC] to-[#FFC3BC]/30 rounded-full mx-auto mb-6"
            />
            <p className="text-gray-600">
              Une approche intégrée qui couvre tous vos besoins, de l'assurance au logement en passant par l'emploi.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Shield,
                title: "AVI & Assurances",
                description: "Assurance Voyage Internationale et couvertures complètes pour tous vos déplacements",
                color: "purple",
                features: ["Couverture mondiale", "Assistance 24h/24", "Tarifs étudiants"]
              },
              {
                icon: Home,
                title: "Hébergement",
                description: "Solutions de logement de qualité adaptées aux étudiants et jeunes professionnels",
                color: "rose",
                features: ["Logements vérifiés", "Aide aux démarches", "Garanties locatives"]
              },
              {
                icon: Briefcase,
                title: "Jobs Étudiants",
                description: "Plateforme de mise en relation pour stages et emplois compatibles avec vos études",
                color: "indigo",
                features: ["Offres sélectionnées", "Horaires flexibles", "Accompagnement CV"]
              },
              {
                icon: Users,
                title: "Accompagnement",
                description: "Support personnalisé et conseils d'experts dans tous nos domaines d'intervention",
                color: "amber",
                features: ["Conseiller dédié", "Suivi personnalisé", "Disponibilité continue"]
              }
            ].map((service, index) => {
              const style = colorStyles[service.color as keyof typeof colorStyles];
              
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                  className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border ${style.border} ${style.hover} h-full relative overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${style.icon} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <motion.div 
                    className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${style.icon} flex items-center justify-center text-white relative z-10`}
                    animate={activeFeature === index ? { 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                    } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="h-6 w-6" />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold mb-2 text-[#18133E] relative z-10">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 relative z-10">
                    {service.description}
                  </p>
                  
                  <div className="space-y-1 relative z-10">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-500">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${style.icon} mr-2`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className={`mt-4 h-0.5 bg-gradient-to-r ${style.icon} rounded-full relative z-10`}
                    initial={{ width: 0 }}
                    animate={activeFeature === index ? { width: "100%" } : { width: "20%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Notre Équipe
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Des experts passionnés à votre service
            </h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-[#FFC3BC] to-transparent rounded-full mx-auto mb-6"
            />
            <p className="text-white/80">
              Une équipe multidisciplinaire qui met son expertise au service de votre réussite.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => {
              const style = colorStyles[member.color as keyof typeof colorStyles];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${style.icon} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-[#FFC3BC] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[#FFC3BC] font-medium mb-3 text-sm">{member.role}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <motion.div 
            className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full bg-[#FFC3BC]/5 blur-3xl"
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
              Notre Histoire
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18133E]">
              L'évolution de SenFrance depuis 2021
            </h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-[#FFC3BC] to-[#FFC3BC]/30 rounded-full mx-auto mb-6"
            />
            <p className="text-gray-600">
              Découvrez les étapes clés qui ont façonné notre entreprise et notre vision.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#FFC3BC] to-[#18133E] rounded-full"></div>
              
              {timeline.map((item, index) => {
                const style = colorStyles[item.color as keyof typeof colorStyles];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`relative flex items-center mb-16 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                      >
                        <div className="text-3xl mb-3">{item.icon}</div>
                        <h3 className="text-xl font-bold mb-3 text-[#18133E]">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </motion.div>
                    </div>
                    
                    <div className="w-2/12 flex justify-center">
                      <motion.div 
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${style.icon} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.year}
                      </motion.div>
                    </div>
                    
                    <div className="w-5/12"></div>
                  </motion.div>
                );
              })}
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
              <Star className="h-8 w-8 text-white" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18133E]">
              Prêt à commencer votre aventure avec SenFrance ?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez les centaines d'étudiants et familles qui nous font confiance pour leurs projets les plus importants.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild className="bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white rounded-full px-8 py-6 text-lg font-medium">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Nous contacter</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="outline" className="text-[#18133E] border-[#18133E]/20 hover:bg-[#18133E]/5 rounded-full px-8 py-6 text-lg font-medium">
                  <Link to="/services">
                    <span>Découvrir nos services</span>
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

export default About;