import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  FileText, 
  User, 
  Clock, 
  Database, 
  Eye, 
  Settings,
  Mail,
  Phone,
  MapPin,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Info,
  Globe,
  Users,
  Key,
  Trash2,
  Download,
  RefreshCw,
  XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const PrivacyPolicyPage = () => {
  useScrollToTop();
  const [expandedSection, setExpandedSection] = useState(null);
  
  // Reference for the scroll progress and parallax effects
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Parallax effect values for backgrounds
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);

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

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Sections de la politique de confidentialité
  const privacySections = [
    {
      id: 'presentation',
      title: 'Présentation de SENFRANCE',
      icon: <User className="w-6 h-6" />,
      content: `SENFRANCE est une société française dont l'activité principale est l'accompagnement des étudiants internationaux dans leur projet de mobilité vers la France. À ce titre, nous collectons et traitons certaines données personnelles via notre site internet www.senfrance.fr`,
      color: 'indigo'
    },
    {
      id: 'responsable',
      title: 'Responsable du traitement',
      icon: <Building className="w-6 h-6" />,
      content: `Le responsable du traitement des données est :
      
**SENFRANCE SAS**
- Siège social : 15 quai des Chartrons, 33000 Bordeaux
- E-mail : contact@senfrance.com
- SIRET : 894 664 572 00027`,
      color: 'purple'
    },
    {
      id: 'donnees',
      title: 'Données personnelles collectées',  
      icon: <Database className="w-6 h-6" />,
      content: `Nous collectons uniquement les données nécessaires à nos services :
      
- Nom, prénom
- Adresse E-mail
- Numéro de téléphone
- Nationalité
- Informations relatives au projet d'études (niveau, domaine, pays d'origine, destination, etc.)
- Données administratives (documents scannés pour préinscription, réservation de logement, etc.)`,
      color: 'rose'
    },
    {
      id: 'finalites',
      title: 'Finalités de la collecte',
      icon: <Target className="w-6 h-6" />,
      content: `Les données collectées servent à :
      
- Vous accompagner dans votre projet de mobilité (études, logement)
- Gérer les demandes de contact, devis ou inscription
- Suivre votre dossier administratif et pédagogique
- Vous envoyer des informations pertinentes sur nos services`,
      color: 'amber'
    },
    {
      id: 'base-legale',
      title: 'Base légale du traitement',
      icon: <Scale className="w-6 h-6" />,
      content: `Conformément à l'article 6 du RGPD, le traitement repose :
      
- Sur votre consentement (formulaires en ligne)
- Sur l'exécution d'un contrat (inscription à nos services)
- Sur notre intérêt légitime à vous informer et à améliorer nos services`,
      color: 'green'
    },
    {
      id: 'duree',
      title: 'Durée de conservation des données',
      icon: <Clock className="w-6 h-6" />,
      content: `Vos données sont conservées :
      
- Pendant 3 ans à compter du dernier contact sans suite
- Ou 5 ans après la fin d'un service ou contrat, à des fins administratives`,
      color: 'blue'
    },
    {
      id: 'destinataires',
      title: 'Destinataires des données',
      icon: <Users className="w-6 h-6" />,
      content: `Les données sont destinées uniquement :
      
- Aux membres de l'équipe SENFRANCE
- Aux partenaires strictement nécessaires (établissements d'accueil, prestataires de logement ou services financiers)

**Aucune donnée n'est vendue ou transmise à des tiers sans votre accord explicite.**`,
      color: 'indigo'
    },
    {
      id: 'securite',
      title: 'Sécurité des données',
      icon: <Lock className="w-6 h-6" />,
      content: `SENFRANCE met en place des mesures techniques et organisationnelles pour garantir la sécurité de vos données : hébergement sécurisé, accès restreint, cryptage des fichiers transmis, etc.`,
      color: 'purple'
    },
    {
      id: 'transfert',
      title: 'Transfert hors UE',
      icon: <Globe className="w-6 h-6" />,
      content: `Dans certains cas, les données peuvent être transférées vers des pays hors de l'Union européenne, mais uniquement avec les garanties adéquates.`,
      color: 'rose'
    },
    {
      id: 'droits',
      title: 'Vos droits',
      icon: <Key className="w-6 h-6" />,
      content: `Conformément au RGPD, vous disposez des droits suivants :
      
- Droit d'accès à vos données
- Droit de rectification
- Droit d'effacement
- Droit d'opposition et de limitation
- Droit à la portabilité
- Droit de retirer votre consentement à tout moment

**Pour exercer vos droits, contactez-nous à :** contact@senfrance.com

Vous pouvez aussi introduire une réclamation auprès de la CNIL (www.cnil.fr).`,
      color: 'amber'
    },
    {
      id: 'cookies',
      title: 'Cookies',
      icon: <Settings className="w-6 h-6" />,
      content: `Notre site utilise des cookies strictement nécessaires au fonctionnement du site, ainsi que des cookies analytiques pour améliorer votre expérience. Vous pouvez gérer vos préférences à tout moment via notre bandeau de gestion des cookies.`,
      color: 'green'
    },
    {
      id: 'modification',
      title: 'Modification de la politique',
      icon: <RefreshCw className="w-6 h-6" />,
      content: `Nous nous réservons le droit de modifier cette politique à tout moment. En cas de mise à jour, la date de dernière modification sera actualisée en haut de cette page.`,
      color: 'blue'
    }
  ];

  // Droits utilisateurs avec icônes
  const userRights = [
    {
      icon: <Eye className="w-5 h-5" />,
      title: 'Droit d\'accès',
      description: 'Connaître les données que nous détenons sur vous'
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: 'Droit de rectification',
      description: 'Corriger vos données personnelles'
    },
    {
      icon: <Trash2 className="w-5 h-5" />,
      title: 'Droit d\'effacement',
      description: 'Demander la suppression de vos données'
    },
    {
      icon: <XCircle className="w-5 h-5" />,
      title: 'Droit d\'opposition',
      description: 'Vous opposer au traitement de vos données'
    },
    {
      icon: <Download className="w-5 h-5" />,
      title: 'Droit à la portabilité',
      description: 'Récupérer vos données dans un format utilisable'
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: 'Retrait du consentement',
      description: 'Retirer votre consentement à tout moment'
    }
  ];

  // Color mappings
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
    },
    green: {
      light: "bg-green-50",
      medium: "bg-green-500",
      dark: "bg-green-600",
      text: "text-green-600",
      border: "border-green-100",
      hover: "group-hover:border-green-200 group-hover:shadow-green-100/40",
      icon: "from-green-500 to-green-600",
      button: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      shadow: "shadow-green-500/20"
    },
    blue: {
      light: "bg-blue-50",
      medium: "bg-blue-500",
      dark: "bg-blue-600",
      text: "text-blue-600",
      border: "border-blue-100",
      hover: "group-hover:border-blue-200 group-hover:shadow-blue-100/40",
      icon: "from-blue-500 to-blue-600",
      button: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      shadow: "shadow-blue-500/20"
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center text-white">
            
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-20 bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Shield className="h-10 w-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Politique de Confidentialité
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-2 mb-8"
            >
              <Clock className="h-5 w-5 text-[#FFC3BC]" />
              <span className="text-white/80">Dernière mise à jour : 29/05/2025</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              Chez SENFRANCE, nous nous engageons à protéger votre vie privée et vos données personnelles. 
              Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <motion.div 
            className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full bg-[#FFC3BC]/5 blur-3xl"
            style={{ y: foregroundY }}
          />
        </div>
        
        <div className="container mx-auto px-4">
          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex items-start gap-4">
              <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-blue-900 font-semibold mb-2">Information importante</h3>
                <p className="text-blue-800">
                  Cette politique de confidentialité s'applique à tous les services proposés par SENFRANCE. 
                  En utilisant nos services, vous acceptez les pratiques décrites dans cette politique.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Privacy Sections */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {privacySections.map((section, index) => {
              const style = colorStyles[section.color];
              const isExpanded = expandedSection === section.id;
              
              return (
                <motion.div
                  key={section.id}
                  variants={fadeInUp}
                  className={`bg-white rounded-xl border ${style.border} ${style.shadow} overflow-hidden transition-all duration-300`}
                >
                  <button
                    onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center gap-4"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${style.icon} flex items-center justify-center text-white flex-shrink-0`}>
                      {section.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Section {index + 1} de notre politique de confidentialité
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className={`${style.light} rounded-lg p-6`}>
                        <div className="prose prose-gray max-w-none">
                          {section.content.split('\n').map((paragraph, pIndex) => {
                            if (paragraph.trim() === '') return null;
                            
                            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                              return (
                                <p key={pIndex} className="font-semibold text-gray-900 mb-3">
                                  {paragraph.replace(/\*\*/g, '')}
                                </p>
                              );
                            }
                            
                            if (paragraph.startsWith('- ')) {
                              return (
                                <div key={pIndex} className="flex items-start gap-2 mb-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700">{paragraph.substring(2)}</span>
                                </div>
                              );
                            }
                            
                            return (
                              <p key={pIndex} className="text-gray-700 mb-3 leading-relaxed">
                                {paragraph}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* User Rights Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <div className="bg-gradient-to-r from-[#18133E] to-[#271D5B] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Vos droits en un coup d'œil</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userRights.map((right, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#FFC3BC]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        {right.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-white">{right.title}</h4>
                        <p className="text-white/70 text-sm">{right.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Une question sur vos données ?</h3>
                <p className="text-gray-600">
                  Notre équipe est là pour vous aider et répondre à toutes vos questions concernant vos données personnelles.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                  <p className="text-gray-600">contact@senfrance.com</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                  <p className="text-gray-600">+33 9 72 14 66 97</p>
                  <p className="text-gray-600">+33 7 44 51 82 96</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                  <p className="text-gray-600">15 quai des Chartrons<br />33000 Bordeaux</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button asChild className="bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white rounded-full px-8 py-3">
                <Link to="/contact">
                    Nous contacter
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Missing components - Adding them here
const Building = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-2 0h-4m-2 0H3m15-9V9a2 2 0 00-2-2H8a2 2 0 00-2 2v3m10 4h-4m4-8h-4" />
  </svg>
);

const Target = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const Scale = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const ChevronDown = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default PrivacyPolicyPage;