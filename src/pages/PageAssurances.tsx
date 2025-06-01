import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Shield, 
  Home, 
  CheckCircle, 
  InfoIcon, 
  AlertCircle,
  Umbrella,
  Key,
  ExternalLink,
  Download,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const PageAssurances = () => {
  useScrollToTop();
  // États pour les formulaires
  const [formGarantmeSubmitted, setFormGarantmeSubmitted] = useState(false);
  const [formLukoSubmitted, setFormLukoSubmitted] = useState(false);
  
  // Reference pour les effets de parallaxe
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Valeurs pour les effets de parallaxe
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Fonction de soumission pour Garantme
  const soumettreFormGarantme = () => {
    setFormGarantmeSubmitted(true);
    
    // Réinitialiser le message après 5 secondes
    setTimeout(() => {
      setFormGarantmeSubmitted(false);
    }, 5000);
  };
  
  // Fonction de soumission pour Luko
  const soumettreFormLuko = () => {
    setFormLukoSubmitted(true);
    
    // Réinitialiser le message après 5 secondes
    setTimeout(() => {
      setFormLukoSubmitted(false);
    }, 5000);
  };
  
  // Références pour l'animation au défilement
  const garantmeRef = useRef(null);
  const lukoRef = useRef(null);
  const isGarantmeInView = useInView(garantmeRef, { amount: 0.3, once: false });
  const isLukoInView = useInView(lukoRef, { amount: 0.3, once: false });

  // Variantes d'animation
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
      {/* Section héro */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Arrière-plan avec effet de parallaxe */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#18133E] via-[#231A54] to-[#18133E] overflow-hidden"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          
          {/* Éléments décoratifs animés */}
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
              <span className="text-sm font-medium text-white">Services essentiels</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Assurances
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white/90">
              Garant & MRH
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              <span className="font-semibold text-[#FFC3BC]">Le garant</span> rassure le propriétaire et renforce votre ton dossier de demande de logement. <span className="font-semibold text-[#FFC3BC]">L'assurance habitation</span> (MRH) est obligatoire pour tous les locataires.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Garantme */}
      <section ref={garantmeRef} className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isGarantmeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#FFC3BC]/10 rounded-full flex items-center justify-center mr-4">
                    <Key className="h-8 w-8 text-[#FFC3BC]" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#18133E]">
                    Besoin d'un garant?
                  </h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Accompagnement, gain de temps et tranquillité d'esprit : partenaire de confiance, <strong>Garantme</strong> nous donne les moyens de nous libérer des tâches à faible valeur ajoutée pour nous concentrer sur le cœur de notre métier : libérer l'accès au logement, tout simplement.
                </p>
                
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {["Processus 100% en ligne", "Garant fiable reconnu par les propriétaires", "Décision rapide sous 24h", "Tarifs préférentiels pour nos étudiants"].map((point, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FFC3BC] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
                
                {formGarantmeSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 mb-6 flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Demande envoyée avec succès !</p>
                      <p className="text-sm">Tu recevras un E-mail avec les instructions pour compléter ta souscription.</p>
                    </div>
                  </motion.div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1"
                  >
                    <a
                      href='https://app.garantme.fr/fr/senfrance'
                      className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white rounded-xl px-6 py-3 font-medium shadow-md transition-all duration-300"
                    >
                      Postuler
                    </a>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1"
                  >
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#18133E]/20 text-[#18133E] hover:bg-[#18133E]/5 rounded-xl px-6 py-3 font-medium"
                    >
                      <Link to="/garantie/en-savoir-plus" className="flex items-center justify-center gap-2">
                        <span>En savoir plus</span>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isGarantmeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-md">
                  <h3 className="text-xl font-semibold text-[#18133E] mb-4">Comment ça fonctionne ?</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#18133E] text-white text-sm font-bold mr-2 mt-0.5 flex-shrink-0">
                        1
                      </div>
                      <p className="text-gray-600">
                        Remplis le formulaire en quelques minutes et transmets les documents demandés
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#18133E] text-white text-sm font-bold mr-2 mt-0.5 flex-shrink-0">
                        2
                      </div>
                      <p className="text-gray-600">
                        Reçois une réponse sous 24h avec le montant de la caution
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#18133E] text-white text-sm font-bold mr-2 mt-0.5 flex-shrink-0">
                        3
                      </div>
                      <p className="text-gray-600">
                        Paie en ligne et obtiens ton certificat de garantie à présenter au propriétaire
                      </p>
                    </li>
                  </ol>
                </div>
                
                <div className="bg-[#FFC3BC]/10 p-6 rounded-xl border border-[#FFC3BC]/20">
                  <div className="flex items-start">
                    <InfoIcon className="h-5 w-5 text-[#FFC3BC] mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#18133E] mb-2">Pourquoi avoir un garant ?</h3>
                      <p className="text-gray-600 text-sm">
                        En France, la plupart des propriétaires exigent un garant qui s'engage à payer le loyer en cas de défaut de paiement du locataire. Garantme te permet d'obtenir cette garantie même si tu n'as pas de proche qui peut se porter garant pour toi.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Luko */}
      <section ref={lukoRef} className="py-16 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isLukoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1 space-y-6"
              >
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md">
                  <h3 className="text-xl font-semibold text-[#18133E] mb-4">Ce qui est couvert</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Dégâts des eaux", icon: <Umbrella className="h-5 w-5 text-[#FFC3BC]" /> },
                      { title: "Incendie", icon: <AlertCircle className="h-5 w-5 text-[#FFC3BC]" /> },
                      { title: "Vol et cambriolage", icon: <Shield className="h-5 w-5 text-[#FFC3BC]" /> },
                      { title: "Responsabilité civile", icon: <User className="h-5 w-5 text-[#FFC3BC]" /> }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-[#FFC3BC]/10 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                          {item.icon}
                        </div>
                        <span className="text-gray-700 mt-1">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md">
                  <h3 className="text-xl font-semibold text-[#18133E] mb-4">Les avantages Luko</h3>
                  <ul className="space-y-3">
                    {[
                      "Souscription 100% en ligne en moins de 2 minutes",
                      "Application mobile intuitive pour déclarer un sinistre",
                      "Assurance responsable avec une partie des cotisations reversée à des associations",
                      "Tarifs adaptés aux étudiants à partir de 5€/mois"
                    ].map((avantage, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#FFC3BC] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{avantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isLukoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#FFC3BC]/10 rounded-full flex items-center justify-center mr-4">
                    <Home className="h-8 w-8 text-[#FFC3BC]" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#18133E]">
                    Assurance habitation
                  </h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Néo-assurance habitation n°1 en Europe et allié de qualité, <strong>Luko</strong> a pensé la maison comme un écosystème. Nos clients ont besoin de plus qu'une assurance habitation. Ils veulent un compagnon de confiance qui prenne soin de leur foyer pour se concentrer sur leur vie.
                </p>
                
                <div className="bg-[#18133E]/5 p-4 rounded-xl mb-6">
                  <div className="flex items-start">
                    <InfoIcon className="h-5 w-5 text-[#18133E] mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#18133E] mb-1">Obligatoire en France</h3>
                      <p className="text-gray-600 text-sm">
                        L'assurance habitation est obligatoire pour tous les locataires en France. Elle doit être souscrite avant la signature du bail et une attestation doit être fournie au propriétaire chaque année.
                      </p>
                    </div>
                  </div>
                </div>
                
                {formLukoSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 mb-6 flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Demande envoyée avec succès !</p>
                      <p className="text-sm">Tu recevras un E-mail avec les instructions pour compléter ta souscription.</p>
                    </div>
                  </motion.div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1"
                  >
                    <a
                      href='https://app.garantme.fr/fr/senfrance'
                      className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white rounded-xl px-6 py-3 font-medium shadow-md transition-all duration-300"
                    >
                      Postuler
                    </a>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1"
                  >
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#18133E]/20 text-[#18133E] hover:bg-[#18133E]/5 rounded-xl px-6 py-3 font-medium"
                    >
                      <Link to="/garantie/en-savoir-plus" className="flex items-center justify-center gap-2">
                        <span>En savoir plus</span>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section FAQ */}
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
              Tout savoir sur les assurances
            </h2>
            <p className="text-gray-600">
              Nous répondons à vos questions les plus fréquentes sur le garant et l'assurance habitation.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Quelle est la différence entre un garant et une assurance habitation ?",
                  answer: "Le garant est une personne physique ou morale qui s'engage à payer ton loyer en cas de défaillance. L'assurance habitation, quant à elle, couvre les dommages que tu pourrais causer à ton logement ou à des tiers (dégâts des eaux, incendie, etc.)."
                },
                {
                  question: "Puis-je souscrire à ces services même si je n'ai pas encore de logement ?",
                  answer: "Pour Garantme, tu peux faire une demande de garantie avant même d'avoir trouvé un logement. Cela te permettra de connaître le montant maximal de loyer pour lequel tu pourras obtenir une garantie. Pour l'assurance habitation Luko, il te faudra connaître l'adresse du logement pour finaliser la souscription."
                },
                {
                  question: "Quel est le délai pour obtenir mon attestation d'assurance ?",
                  answer: "Avec Luko, tu reçois ton attestation d'assurance habitation immédiatement après la souscription en ligne. Pour Garantme, le certificat de garantie est généralement délivré sous 24 à 48h après validation de ton dossier."
                },
                {
                  question: "Est-ce que ces services sont accessibles aux étudiants internationaux ?",
                  answer: "Oui, Garantme et Luko sont accessibles aux étudiants internationaux. Garantme a spécifiquement développé des offres adaptées aux profils internationaux, et Luko propose des contrats d'assurance habitation sans condition de nationalité."
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
      
      {/* Section CTA */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-[#18133E] to-[#271D5B] rounded-2xl p-8 md:p-12 shadow-xl text-center text-white overflow-hidden relative"
          >
            {/* Éléments décoratifs */}
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
                <Shield className="h-10 w-10 text-white" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Besoin de conseils personnalisés ?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                Notre équipe est disponible pour t'aider à choisir la solution la plus adaptée à ta situation. N'hésite pas à nous contacter pour un accompagnement sur mesure.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild className="bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] text-[#18133E] hover:from-[#ff9d94] hover:to-[#FFC3BC] rounded-full px-8 py-6 text-lg font-medium border-0 shadow-xl">
                    <Link to="/contact" className="flex items-center gap-2">
                      <span>Contacter un conseiller</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild variant="outline" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/20 rounded-full px-8 py-6 text-lg font-medium shadow-lg">
                    <Link to="/ressources/guides-assurances">
                      <span>Télécharger notre guide</span>
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

export default PageAssurances;