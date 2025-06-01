import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  CreditCard, 
  FileText, 
  ChevronRight,
  Info,
  Clock,
  CheckCircle,
  AlertCircle,
  Shield,
  CreditCard as CardIcon,
  ArrowDown, 
  BanknoteIcon, 
  CalendarClock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

// Custom icon component
const CustomBanknoteIcon = (props) => (
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
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M6 12h.01M18 12h.01" />
  </svg>
);

const CustomCalendarClock = (props) => (
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
    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
    <path d="M16 2v4" />
    <path d="M8 2v4" />
    <path d="M3 10h5" />
    <path d="M17.5 17.5 16 16.25V14" />
    <path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
  </svg>
);

const AVIPage = () => {
  useScrollToTop();
  // Reference for the scroll progress and parallax effects
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Parallax effect values for backgrounds
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Refs for step sections
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const whyRef = useRef(null);
  
  const isStep1InView = useInView(step1Ref, { amount: 0.6, once: false });
  const isStep2InView = useInView(step2Ref, { amount: 0.6, once: false });
  const isStep3InView = useInView(step3Ref, { amount: 0.6, once: false });
  const isWhyInView = useInView(whyRef, { amount: 0.3, once: false });
  
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
              <span className="text-sm font-medium text-white">Service AVI</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Obtiens ton AVI
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              <span className="font-semibold text-[#FFC3BC]">L'Attestation de Virement Irrévocable</span> (AVI) permet aux services consulaires de ton pays d'origine de constater que tu as <span className="font-semibold text-[#FFC3BC]">les ressources nécessaires</span> pour financer ton séjour d'études en France.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8"
            >
              <Button asChild className="bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] text-[#18133E] hover:from-[#ff9d94] hover:to-[#FFC3BC] rounded-full px-8 py-6 text-lg font-medium border-0 shadow-xl">
                <a href="#souscrire" className="flex items-center gap-2">
                  <span>SOUSCRIRE</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex justify-center mt-10"
            >
              <a 
                href="#details" 
                className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
              >
                <span className="mb-2 text-white/90">En savoir plus</span>
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

      {/* Introduction Section */}
      <section id="details" className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#FFC3BC]/5 to-[#FFC3BC]/10 p-8 rounded-2xl border border-[#FFC3BC]/20 mb-8"
            >
              <p className="text-gray-700 text-lg">
                Dans le cadre de l'accompagnement global proposé par SenFrance à l'étudiant, il est vite apparu que ce service est essentiel à notre approche. Nous fournissons l'AVI, plus communément appelée <span className="font-semibold text-[#18133E]">« caution bancaire »</span>, à l'étudiant qui en fait la demande. 
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#18133E] mb-8 text-center">Comment ça marche?</h2>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Steps Section */}
      <section className="pb-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Step 1 */}
            <motion.div
              ref={step1Ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isStep1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col md:flex-row gap-6 md:gap-12 mb-12 md:mb-24"
            >
              {/* Step number */}
              <div className="flex-shrink-0 w-full md:w-auto flex md:block items-center mb-4 md:mb-0">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#18133E] to-[#231A54] text-white rounded-full text-xl md:text-2xl font-bold shadow-lg md:mx-auto">
                  1
                </div>
                <div className="hidden md:block h-full w-0.5 bg-gray-200 mx-auto mt-4"></div>
              </div>
              
              {/* Step content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#18133E] mb-4">Dépôt de la caution & paiement des frais</h3>
                <p className="text-gray-700 mb-6">Tu as deux options.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-[#FFC3BC]/10 rounded-full flex items-center justify-center mr-3">
                        <CustomBanknoteIcon className="h-5 w-5 text-[#FFC3BC]" />
                      </div>
                      <h4 className="font-semibold text-[#18133E]">Option 1</h4>
                    </div>
                    <p className="text-gray-600">Tu peux déposer le montant de ta caution bancaire sur un compte SenFrance local.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-[#FFC3BC]/10 rounded-full flex items-center justify-center mr-3">
                        <CreditCard className="h-5 w-5 text-[#FFC3BC]" />
                      </div>
                      <h4 className="font-semibold text-[#18133E]">Option 2</h4>
                    </div>
                    <p className="text-gray-600">Tu peux faire un dépôt directement sur ton "compte bloqué" en Europe.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div
              ref={step2Ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isStep2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col md:flex-row gap-6 md:gap-12 mb-12 md:mb-24"
            >
              {/* Step number */}
              <div className="flex-shrink-0 w-full md:w-auto flex md:block items-center mb-4 md:mb-0">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#18133E] to-[#231A54] text-white rounded-full text-xl md:text-2xl font-bold shadow-lg md:mx-auto">
                  2
                </div>
                <div className="hidden md:block h-full w-0.5 bg-gray-200 mx-auto mt-4"></div>
              </div>
              
              {/* Step content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#18133E] mb-4">Fonds bloqués et délivrance de l'AVI</h3>
                <p className="text-gray-700 mb-6">Une fois les fonds reçus et cantonnés en sécurité par nos services, l'Attestation de Virement Irrévocable t'est délivrée. C'est le document qu'il te faut pour tes démarches.</p>
                <div className="bg-[#18133E]/5 p-6 rounded-xl">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#18133E]/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-[#18133E]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#18133E] mb-2">Document officiel</h4>
                      <p className="text-gray-600">L'AVI est un document officiel reconnu par les services consulaires français. Il certifie que tu disposes des ressources financières nécessaires pour ton séjour d'études en France.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div
              ref={step3Ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isStep3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col md:flex-row gap-6 md:gap-12"
            >
              {/* Step number */}
              <div className="flex-shrink-0 w-full md:w-auto flex md:block items-center mb-4 md:mb-0">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#18133E] to-[#231A54] text-white rounded-full text-xl md:text-2xl font-bold shadow-lg md:mx-auto">
                  3
                </div>
              </div>
              
              {/* Step content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#18133E] mb-4">Fonds débloqués ou caution remboursée*</h3>
                <p className="text-gray-700 mb-6">Tes virements mensuels sont programmés après ton arrivée en France. Si ta demande de visa est rejetée, peu importe le motif, nous te remboursons la caution.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-[#FFC3BC]/10 rounded-full flex items-center justify-center mr-3">
                        <CustomCalendarClock className="h-5 w-5 text-[#FFC3BC]" />
                      </div>
                      <h4 className="font-semibold text-[#18133E]">Virements mensuels</h4>
                    </div>
                    <p className="text-gray-600">Après obtention du visa, réception de 615€ par mois pendant 12 mois.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-[#FFC3BC]/10 rounded-full flex items-center justify-center mr-3">
                        <Check className="h-5 w-5 text-[#FFC3BC]" />
                      </div>
                      <h4 className="font-semibold text-[#18133E]">Remboursement</h4>
                    </div>
                    <p className="text-gray-600">En cas de refus de visa, remboursement de la caution déposée.</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">*remboursement hors frais de cautionnement</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Why Section */}
      <section className="py-16 bg-gradient-to-br from-[#18133E] to-[#231A54] text-white relative">
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
            ref={whyRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi ai-je besoin d'une AVI?</h2>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl mb-10">
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                <strong>En tant qu'étudiant étranger ayant obtenu une préinscription dans un établissement d'enseignement supérieur français, tu dois prouver que tu possèdes les ressources nécessaires pour l'année universitaire à venir.</strong>
              </p>
              
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                <strong>Le montant minimum exigé par l'administration est de 615 € par mois sur 12 mois, soit 7380 €.</strong>
              </p>
              
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                <strong>Pour obtenir ton visa d'études, il t'est nécessaire de satisfaire à cette exigence.</strong>
              </p>
              
              <p className="text-white/90 text-lg leading-relaxed">
                <strong>Que tes ressources proviennent de l'étranger (votre pays d'origine) ou qu'elles proviennent d'un proche vivant en Europe, tu as la possibilité de souscrire le service.</strong>
              </p>
            </div>
            
            <div className="bg-[#FFC3BC]/10 backdrop-blur-sm p-8 rounded-2xl border border-[#FFC3BC]/20 text-white">
              <div className="flex items-start mb-6">
                <div className="w-10 h-10 bg-[#FFC3BC]/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Shield className="h-5 w-5 text-[#FFC3BC]" />
                </div>
                <p className="text-lg">
                  <strong>Attestation d'un établissement financier en France (ou en Europe) certifiant que l'étudiant possède bien la somme de 7 380 €, minimum exigé pour une année, et qu'il recevra 615 € par mois une fois arrivé en France. C'est une solution qui convient aux services consulaires qui sont assurés que l'étudiant est en mesure de financer ses études.</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="souscrire" className="py-16 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-[#FFC3BC]/10 text-[#18133E] text-sm font-medium mb-4 border border-[#FFC3BC]/20">
                  Service AVI
                </span>
                <h2 className="text-3xl font-bold mb-4 text-[#18133E]">
                  AVI + carte de débit
                </h2>
                <p className="text-gray-600 mb-6">
                  Document édité en 48h pour demande de visa. Obtiens ton Attestation de Virement Irrévocable avec SenFrance et simplifie tes démarches.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Attestation validée par notre établissement partenaire",
                    "Carte bancaire internationale incluse",
                    "Assistance pour la constitution du dossier",
                    "Suivi de votre demande de visa",
                    "Durée de validité de 12 mois"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="p-0.5 rounded-full bg-gradient-to-br from-[#FFC3BC] to-[#ff9d94] text-white mr-2 mt-0.5 flex-shrink-0">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="p-6 bg-gray-50 rounded-xl mb-6 border border-gray-100">
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-[#18133E] to-[#271D5B] bg-clip-text text-transparent">450 €</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-6">Prix tout compris, sans frais cachés</p>
                  
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mb-4"
                  >
                    <Button className="w-full bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-md">
                      <span>SOUSCRIRE MAINTENANT</span>
                    </Button>
                  </motion.div>
                  
                  <p className="text-center text-gray-500 text-xs">
                    Remboursement de la caution en cas de refus de visa*
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#18133E]/10 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <Info className="h-4 w-4 text-[#18133E]" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Besoin d'aide pour choisir ? Notre équipe est disponible pour vous accompagner dans votre demande d'AVI. <Link to="/contact" className="text-[#18133E] underline">Contactez-nous</Link>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
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
              Questions fréquentes
            </span>
            <h2 className="text-3xl font-bold mb-4 text-[#18133E]">
              Encore des questions ?
            </h2>
            <p className="text-gray-600">
              Voici les questions les plus fréquentes à propos de l’AVI
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Combien de temps faut-il pour obtenir mon AVI ?",
                  answer: "Une fois les fonds reçus, votre AVI est délivrée sous 48h ouvrées. En cas d'urgence, nous proposons également un service express (24h) avec un supplément."
                },
                {
                  question: "Le montant de 7380€ est-il obligatoire ?",
                  answer: "Oui, ce montant correspond au minimum exigé par l'administration française pour prouver que tu disposes de ressources suffisantes pour une année d'études (615€ par mois pendant 12 mois)."
                },
                {
                  question: "Comment fonctionne le déblocage mensuel des fonds ?",
                  answer: "Après l’obtention de ton visa, tu recevras automatiquement 615€ chaque mois pendant 12 mois. Ces virements programmés commencent après ton arrivée en France."
                },
                {
                  question: "Que se passe-t-il en cas de refus de visa ?",
                  answer: "En cas de refus de visa, nous te remboursons la caution déposée (7380€), déduction faite des frais de cautionnement. Les frais de dossier sont remboursables en cas de refus pour motif 2 : Vous n’avez pas fourni la preuve que vous disposez de ressources suffisantes pour couvrir les frais de toute nature, durant le séjour en France, ou vous n’êtes pas en mesure d’acquérir légalement ces moyens."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
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
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 text-center"
            >
              <p className="text-gray-600 mb-4">
                Vous avez d'autres questions ? Notre équipe est à votre disposition.
              </p>
              <Button asChild className="bg-[#18133E] hover:bg-[#231A54] text-white">
                <Link to="/contact">
                  Contacter un conseiller
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AVIPage;