import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  FileText, 
  Scale, 
  Globe, 
  Shield, 
  Clock, 
  Building, 
  User, 
  Lock,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Info,
  ExternalLink,
  Settings,
  Gavel,
  Eye,
  Server,
  Cookie,
  Link as LinkIcon,
  Edit,
  MapPin,
  Mail,
  Phone,
  Smartphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TermsConditionsPage = () => {
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

  // Sections des conditions générales
  const termsSection = [
    {
      id: 'presentation',
      title: 'Présentation du site',
      icon: <Building className="w-6 h-6" />,
      content: `Le site internet www.senfrance.fr est édité par SENFRANCE, société par actions simplifiée (SAS) dont le siège social est situé au 15 quai des Chartrons, 33000 Bordeaux, France. 

SENFRANCE est spécialisée dans l'accompagnement des étudiants internationaux en mobilité vers la France.

**Informations légales :**
- Dénomination sociale : SENFRANCE SAS
- Siège social : 15 quai des Chartrons, 33000 Bordeaux
- SIRET : 894 664 572 00027
- Email : contact@senfrance.com`,
      color: 'indigo'
    },
    {
      id: 'acceptation',
      title: 'Acceptation des conditions',
      icon: <CheckCircle className="w-6 h-6" />,
      content: `L'accès et l'utilisation du site impliquent l'acceptation pleine et entière des présentes conditions générales.

**Important :** Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le site.

En naviguant sur le site, vous reconnaissez avoir lu, compris et accepté l'ensemble des dispositions des présentes conditions générales.`,
      color: 'green'
    },
    {
      id: 'services',
      title: 'Services proposés',
      icon: <Globe className="w-6 h-6" />,
      content: `Le site SENFRANCE propose les services suivants :

- Informations sur les démarches de mobilité internationale
- Formulaires de demande de services (accompagnement, préinscription, logement, caution pour études)
- Espace de contact et de suivi administratif
- Ressources pédagogiques et guides pratiques
- Accompagnement personnalisé pour les étudiants internationaux

Ces services sont destinés à faciliter le parcours des étudiants souhaitant poursuivre leurs études en France.`,
      color: 'purple'
    },
    {
      id: 'acces',
      title: 'Accès au site',
      icon: <Server className="w-6 h-6" />,
      content: `Le site est accessible 24h/24 et 7j/7, sauf interruption pour maintenance technique.

**Disponibilité du service :**
- Accès gratuit aux informations générales
- Maintenance programmée communiquée à l'avance
- Interruptions possibles pour des raisons techniques

SENFRANCE s'efforce de maintenir le site accessible en permanence mais ne peut garantir une disponibilité absolue.`,
      color: 'blue'
    },
    {
      id: 'propriete',
      title: 'Propriété intellectuelle',
      icon: <Shield className="w-6 h-6" />,
      content: `Tous les éléments du site (textes, images, graphismes, logos, vidéos, documents) sont protégés par les droits de propriété intellectuelle et sont la propriété exclusive de SENFRANCE, sauf mention contraire.

**Éléments protégés :**
- Contenus rédactionnels
- Images et photographies
- Logo et identité visuelle
- Structure et design du site
- Bases de données

Toute reproduction, même partielle, est interdite sans autorisation expresse.`,
      color: 'rose'
    },
    {
      id: 'utilisation',
      title: 'Utilisation du site',
      icon: <User className="w-6 h-6" />,
      content: `L'utilisateur s'engage à utiliser le site de façon licite, respectueuse, et à ne pas compromettre sa sécurité ou son bon fonctionnement.

**Engagements de l'utilisateur :**
- Respecter les lois en vigueur
- Ne pas porter atteinte au fonctionnement du site
- Ne pas tenter d'accéder aux données d'autres utilisateurs
- Fournir des informations exactes

**Sanctions :** Tout usage frauduleux peut entraîner des poursuites judiciaires.`,
      color: 'amber'
    },
    {
      id: 'donnees',
      title: 'Protection des données personnelles',
      icon: <Lock className="w-6 h-6" />,
      content: `Les données personnelles collectées sur le site sont traitées conformément à notre politique de confidentialité.

**Principes appliqués :**
- Collecte minimale des données
- Finalités déterminées et légitimes
- Durée de conservation limitée
- Sécurisation des données

Pour plus de détails, consultez notre politique de confidentialité complète.`,
      color: 'indigo'
    },
    {
      id: 'cookies',
      title: 'Cookies',
      icon: <CookieIcon className="w-6 h-6" />,
      content: `Le site utilise des cookies pour améliorer la navigation et analyser l'audience.

**Types de cookies utilisés :**
- Cookies strictement nécessaires au fonctionnement
- Cookies d'analyse d'audience
- Cookies de préférences utilisateur

L'utilisateur peut configurer ses préférences en matière de cookies dès son arrivée sur le site via le bandeau de gestion des cookies.`,
      color: 'orange'
    },
    {
      id: 'responsabilite',
      title: 'Responsabilité',
      icon: <AlertTriangle className="w-6 h-6" />,
      content: `SENFRANCE ne peut être tenue responsable des erreurs ou omissions présentes sur le site ni des dommages directs ou indirects résultant de l'usage du site.

**Limitations de responsabilité :**
- Exactitude des informations fournies
- Disponibilité permanente du site
- Conséquences de l'utilisation des informations
- Dommages liés à des virus informatiques

L'utilisateur navigue sous sa propre responsabilité.`,
      color: 'red'
    },
    {
      id: 'liens',
      title: 'Liens externes',
      icon: <ExternalLink className="w-6 h-6" />,
      content: `Le site peut contenir des liens vers d'autres sites sur lesquels SENFRANCE n'a aucun contrôle.

**Avertissement :**
- SENFRANCE décline toute responsabilité quant au contenu des sites tiers
- L'accès aux sites externes se fait sous la responsabilité de l'utilisateur
- Vérifiez les conditions d'utilisation des sites tiers

Ces liens sont fournis à titre informatif uniquement.`,
      color: 'purple'
    },
    {
      id: 'modification',
      title: 'Modification des CGU',
      icon: <Edit className="w-6 h-6" />,
      content: `SENFRANCE se réserve le droit de modifier les présentes conditions générales à tout moment.

**Modalités de modification :**
- Publication des nouvelles versions sur le site
- Mention de la date de mise à jour
- Prise d'effet immédiate des modifications

Les utilisateurs sont invités à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.`,
      color: 'blue'
    },
    {
      id: 'droit',
      title: 'Droit applicable et juridiction compétente',
      icon: <Gavel className="w-6 h-6" />,
      content: `Les présentes conditions sont régies par le droit français.

**En cas de litige :**
- Tentative de résolution amiable privilégiée
- Tribunaux compétents : ceux du siège social de SENFRANCE (Bordeaux)
- Droit applicable : droit français

Les parties s'efforcent de résoudre tout différend par la voie de la négociation avant tout recours judiciaire.`,
      color: 'slate'
    }
  ];

  // Services proposés avec icônes
  const services = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Mobilité internationale',
      description: 'Informations et conseils sur les démarches'
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: 'Formulaires en ligne',
      description: 'Demandes de services simplifiées'
    },
    {
      icon: <User className="w-5 h-5" />,
      title: 'Suivi personnalisé',
      description: 'Accompagnement dédié à chaque étudiant'
    },
    {
      icon: <Building className="w-5 h-5" />,
      title: 'Solutions logement',
      description: 'Aide à la recherche de logement étudiant'
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
    },
    orange: {
      light: "bg-orange-50",
      medium: "bg-orange-500",
      dark: "bg-orange-600",
      text: "text-orange-600",
      border: "border-orange-100",
      hover: "group-hover:border-orange-200 group-hover:shadow-orange-100/40",
      icon: "from-orange-500 to-orange-600",
      button: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
      shadow: "shadow-orange-500/20"
    },
    red: {
      light: "bg-red-50",
      medium: "bg-red-500",
      dark: "bg-red-600",
      text: "text-red-600",
      border: "border-red-100",
      hover: "group-hover:border-red-200 group-hover:shadow-red-100/40",
      icon: "from-red-500 to-red-600",
      button: "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
      shadow: "shadow-red-500/20"
    },
    slate: {
      light: "bg-slate-50",
      medium: "bg-slate-500",
      dark: "bg-slate-600",
      text: "text-slate-600",
      border: "border-slate-100",
      hover: "group-hover:border-slate-200 group-hover:shadow-slate-100/40",
      icon: "from-slate-500 to-slate-600",
      button: "from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700",
      shadow: "shadow-slate-500/20"
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
              <Scale className="h-10 w-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Conditions Générales d'Utilisation
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
              Ces conditions générales régissent l'utilisation du site SENFRANCE et définissent les droits et obligations 
              de chaque partie dans le cadre de l'utilisation de nos services.
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
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex items-start gap-4">
              <Info className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-amber-900 font-semibold mb-2">Acceptation des conditions</h3>
                <p className="text-amber-800">
                  En utilisant le site SENFRANCE, vous acceptez automatiquement l'ensemble de ces conditions générales d'utilisation. 
                  Si vous n'acceptez pas ces conditions, nous vous invitons à ne pas utiliser notre site.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Terms Sections */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {termsSection.map((section, index) => {
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
                        Article {index + 1} des conditions générales d'utilisation
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
                                <h4 key={pIndex} className="font-semibold text-gray-900 mb-3 text-lg">
                                  {paragraph.replace(/\*\*/g, '')}
                                </h4>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Questions sur les conditions d'utilisation ?</h3>
                <p className="text-gray-600">
                  Notre équipe juridique est à votre disposition pour répondre à toutes vos questions concernant ces conditions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
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
                <Button className="bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white rounded-full px-8 py-3">
                  <Link to="/contact">
                    Nous contacter
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Legal Notice */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Gavel className="h-6 w-6 text-gray-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mentions légales</h4>
                  <div className="text-gray-700 space-y-2">
                    <p><strong>SENFRANCE SAS</strong></p>
                    <p>SIRET : 894 664 572 00027</p>
                    <p>Siège social : 15 quai des Chartrons, 33000 Bordeaux, France</p>
                    <p>Directeur de la publication : [Nom du directeur]</p>
                    <p>Hébergement : [Nom de l'hébergeur]</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </section>

      
    </div>
  );
};

// Missing components - Adding them here
const CookieIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="8" cy="8" r="1"/>
    <circle cx="16" cy="8" r="1"/>
    <circle cx="10" cy="16" r="1"/>
    <circle cx="16" cy="16" r="1"/>
    <circle cx="12" cy="14" r="1"/>
  </svg>
);

const ChevronDown = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default TermsConditionsPage;