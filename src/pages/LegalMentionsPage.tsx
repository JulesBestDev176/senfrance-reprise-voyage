import React, { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Building,
  User,
  Server,
  Shield,
  ArrowLeft,
  Info,
  Mail,
  Phone,
  MapPin,
  FileText,
  Lock,
  Eye,
  Globe,
  Scale,
  Crown,
  Database,
  Gavel,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LegalMentionsPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  // Reference for the scroll progress and parallax effects
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
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
        damping: 15,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Sections des mentions légales
  const legalSections = [
    {
      id: "editeur",
      title: "Éditeur du site",
      icon: <Building className="w-6 h-6" />,
      content: `Le présent site internet www.senfrance.fr est édité par la société SENFRANCE, SAS au capital de 1000 €, immatriculée au Registre du Commerce et des Sociétés de Bordeaux sous le numéro 894 664 572.

**Informations société :**
- Dénomination sociale : SENFRANCE SAS
- Capital social : 1000 €
- RCS Bordeaux : 894 664 572
- Siège social : 15 quai des Chartrons, 33000 Bordeaux, France
- Téléphone : +33 9 72 14 66 97
- E-mail : contact@senfrance.com
- Directeur de la publication : Monsieur M. NDIAYE`,
      color: "indigo",
    },
    {
      id: "hebergement",
      title: "Hébergement",
      icon: <Server className="w-6 h-6" />,
      content: `Le site est hébergé par :

**Informations hébergeur :**
- Nom de l'hébergeur : [Nom de l'hébergeur]
- Adresse : [Adresse de l'hébergeur]
- Téléphone : [numéro de l'hébergeur]

L'hébergeur assure la continuité de service et la sécurité des données conformément aux standards de l'industrie.`,
      color: "blue",
    },
    {
      id: "propriete",
      title: "Propriété intellectuelle",
      icon: <Crown className="w-6 h-6" />,
      content: `L'ensemble du contenu présent sur le site www.senfrance.fr (textes, images, graphismes, logos, icônes, etc.) est la propriété exclusive de SENFRANCE ou de ses partenaires.

**Éléments protégés :**
- Contenus éditoriaux et textes
- Images et photographies
- Graphismes et design
- Logos et identité visuelle
- Icônes et éléments graphiques
- Structure et architecture du site

**Utilisation interdite :** Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de SENFRANCE.`,
      color: "purple",
    },
    {
      id: "donnees",
      title: "Données personnelles",
      icon: <Shield className="w-6 h-6" />,
      content: `SENFRANCE s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site www.senfrance.fr, soient conformes au Règlement Général sur la Protection des Données (RGPD).

**Engagement RGPD :**
- Collecte minimale et transparente
- Finalités déterminées et légitimes
- Durée de conservation limitée
- Sécurisation des données personnelles
- Respect des droits des utilisateurs

**Contact DPO :** Pour toute information ou exercice de vos droits « Informatique et Libertés » sur les traitements de données personnelles, vous pouvez contacter : contact@senfrance.com

Consultez notre politique de confidentialité complète pour plus de détails.`,
      color: "green",
    },
  ];

  // Informations de contact
  const contactInfo = [
    {
      icon: <Building className="w-5 h-5" />,
      title: "Société",
      description: "SENFRANCE SAS",
      details: ["Capital : 1000 €", "RCS Bordeaux : 894 664 572"],
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Adresse",
      description: "15 quai des Chartrons",
      details: ["33000 Bordeaux", "France"],
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Téléphone",
      description: "+33 9 72 14 66 97",
      details: ["Horaires : 9h-18h", "Lundi au Vendredi"],
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      description: "contact@senfrance.com",
      details: ["Réponse sous 24h", "Support technique"],
    },
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
      button:
        "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700",
      shadow: "shadow-indigo-500/20",
    },
    purple: {
      light: "bg-purple-50",
      medium: "bg-purple-500",
      dark: "bg-purple-600",
      text: "text-purple-600",
      border: "border-purple-100",
      hover: "group-hover:border-purple-200 group-hover:shadow-purple-100/40",
      icon: "from-purple-500 to-purple-600",
      button:
        "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      shadow: "shadow-purple-500/20",
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
      shadow: "shadow-blue-500/20",
    },
    green: {
      light: "bg-green-50",
      medium: "bg-green-500",
      dark: "bg-green-600",
      text: "text-green-600",
      border: "border-green-100",
      hover: "group-hover:border-green-200 group-hover:shadow-green-100/40",
      icon: "from-green-500 to-green-600",
      button:
        "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      shadow: "shadow-green-500/20",
    },
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
              ease: "easeInOut",
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
              delay: 1,
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
              Mentions Légales
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-2 mb-8"
            >
              <Clock className="h-5 w-5 text-[#FFC3BC]" />
              <span className="text-white/80">
                Informations légales et réglementaires
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              Retrouvez toutes les informations légales concernant SENFRANCE,
              l'éditeur du site, l'hébergement et la propriété intellectuelle
              conformément à la législation française.
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
                <h3 className="text-blue-900 font-semibold mb-2">
                  Conformité légale
                </h3>
                <p className="text-blue-800">
                  Ces mentions légales respectent les obligations de la loi
                  française pour la confiance dans l'économie numérique (LCEN)
                  et fournissent toutes les informations requises sur l'identité
                  de l'éditeur du site.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Legal Sections */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {legalSections.map((section, index) => {
              const style = colorStyles[section.color];
              const isExpanded = expandedSection === section.id;

              return (
                <motion.div
                  key={section.id}
                  variants={fadeInUp}
                  className={`bg-white rounded-xl border ${style.border} ${style.shadow} overflow-hidden transition-all duration-300`}
                >
                  <button
                    onClick={() =>
                      setExpandedSection(isExpanded ? null : section.id)
                    }
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center gap-4"
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${style.icon} flex items-center justify-center text-white flex-shrink-0`}
                    >
                      {section.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Section {index + 1} des mentions légales
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
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className={`${style.light} rounded-lg p-6`}>
                        <div className="prose prose-gray max-w-none">
                          {section.content
                            .split("\n")
                            .map((paragraph, pIndex) => {
                              if (paragraph.trim() === "") return null;

                              if (
                                paragraph.startsWith("**") &&
                                paragraph.endsWith("**")
                              ) {
                                return (
                                  <h4
                                    key={pIndex}
                                    className="font-semibold text-gray-900 mb-3 text-lg"
                                  >
                                    {paragraph.replace(/\*\*/g, "")}
                                  </h4>
                                );
                              }

                              if (paragraph.startsWith("- ")) {
                                return (
                                  <div
                                    key={pIndex}
                                    className="flex items-start gap-2 mb-2"
                                  >
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">
                                      {paragraph.substring(2)}
                                    </span>
                                  </div>
                                );
                              }

                              return (
                                <p
                                  key={pIndex}
                                  className="text-gray-700 mb-3 leading-relaxed"
                                >
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Questions juridiques ?
                </h3>
                <p className="text-gray-600">
                  Pour toute question relative aux mentions légales ou à
                  l'utilisation du site, contactez notre équipe.
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
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Téléphone
                  </h4>
                  <p className="text-gray-600">+33 9 72 14 66 97</p>
                  <p className="text-gray-600">+33 7 44 51 82 96</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                  <p className="text-gray-600">
                    15 quai des Chartrons
                    <br />
                    33000 Bordeaux
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white rounded-full px-8 py-3">
                  <Link to="/contact">Nous contacter</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Documents */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <motion.div
            className="absolute top-0 left-0 w-1/3 h-1/3 rounded-full bg-indigo-100/50 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Documents associés
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-900 text-lg">
                  Conditions Générales d'Utilisation
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Consultez les conditions qui régissent l'utilisation de notre
                  site et de nos services
                </p>
                <Link
                  to="/terms"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                >
                  <span>Consulter</span>
                  <Eye className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-900 text-lg">
                  Politique de Confidentialité
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Découvrez notre engagement en matière de protection des
                  données personnelles
                </p>
                <Link
                  to="/privacy"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                >
                  <span>Consulter</span>
                  <Lock className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Missing components
const ChevronDown = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default LegalMentionsPage;
