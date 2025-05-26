import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Briefcase, 
  GraduationCap, 
  User, 
  Mail, 
  Phone, 
  Users, 
  MapPin, 
  FileText,
  ArrowDown,
  Info,
  CheckCircle,
  Link as LinkIcon,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PageJobEtudiant = () => {
  // États pour le formulaire
  const [prénom, setPrénom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [téléphone, setTéléphone] = useState('');
  const [source, setSource] = useState('');
  const [typeJob, setTypeJob] = useState('');
  const [description, setDescription] = useState('');
  const [adresse, setAdresse] = useState('');
  const [lienCV, setLienCV] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  
  // Reference pour les effets de parallaxe
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Valeurs pour les effets de parallaxe
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Fonction de soumission du formulaire
  const soumettreFormulaire = (e) => {
    e.preventDefault();
    
    // Validation simple
    if (!prénom || !nom || !email || !téléphone || !typeJob) {
      setFormError(true);
      return;
    }
    
    // Simulation d'envoi réussi
    setFormError(false);
    setFormSubmitted(true);
    
    // Réinitialiser le formulaire
    setPrénom('');
    setNom('');
    setEmail('');
    setTéléphone('');
    setSource('');
    setTypeJob('');
    setDescription('');
    setAdresse('');
    setLienCV('');
    
    // Fermer le message de succès après 5 secondes
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
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
  
  // Références pour l'animation au défilement
  const bénéficesRef = useRef(null);
  const isBénéficesInView = useInView(bénéficesRef, { amount: 0.2, once: false });

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
              <span className="text-sm font-medium text-white">Jobs étudiants</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Postule avec SenFrance
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Que ce soit pour financer ta scolarité, payer ton loyer ou gérer tes dépenses quotidiennes, tu auras peut-être besoin de travailler pendant tes études. Le job étudiant est une solution idéale pour te permettre d'être indépendant et d'assumer tes frais.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex justify-center mt-10"
            >
              <a 
                href="#candidature" 
                className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
              >
                <span className="mb-2 text-white/90">Déposer ma candidature</span>
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

      {/* Section avantages */}
      <section ref={bénéficesRef} className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#FFC3BC]/10 text-[#18133E] text-sm font-medium mb-4 border border-[#FFC3BC]/20">
              Pourquoi postuler
            </span>
            <h2 className="text-3xl font-bold mb-4 text-[#18133E]">
              Les avantages d'un job étudiant avec SenFrance
            </h2>
            <p className="text-gray-600">
              Nous sélectionnons les meilleures opportunités adaptées à ton profil et à ton emploi du temps.
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Compatibilité avec tes études",
                  description: "Horaires flexibles adaptés à ton emploi du temps universitaire",
                  icon: <GraduationCap className="h-6 w-6 text-[#FFC3BC]" />,
                  delay: 0.1
                },
                {
                  title: "Rémunération attractive",
                  description: "Des jobs rémunérés au-dessus du SMIC avec des avantages supplémentaires",
                  icon: <Briefcase className="h-6 w-6 text-[#FFC3BC]" />,
                  delay: 0.2
                },
                {
                  title: "Développement de compétences",
                  description: "Acquisition d'expérience professionnelle valorisante pour ton CV",
                  icon: <Users className="h-6 w-6 text-[#FFC3BC]" />,
                  delay: 0.3
                },
              ].map((avantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isBénéficesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: avantage.delay, duration: 0.7 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 bg-[#FFC3BC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {avantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#18133E] text-center mb-2">{avantage.title}</h3>
                  <p className="text-gray-600 text-center">{avantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Section opportunités */}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium mb-4 border border-white/20">
              Nos offres
            </span>
            <h2 className="text-3xl font-bold mb-4">
              Types d'opportunités disponibles
            </h2>
            <p className="text-white/80">
              Découvre les différents types d'emplois que nous proposons pour les étudiants et jeunes diplômés.
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFC3BC]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-[#FFC3BC]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Job étudiant</h3>
                    <p className="text-white/70 mb-4">Emplois à temps partiel compatibles avec tes études. Idéal pour financer ton quotidien tout en poursuivant ta formation.</p>
                    <ul className="space-y-2">
                      {["Restauration", "Commerce", "Événementiel", "Animation", "Administratif"].map((job, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#FFC3BC] mr-2 mt-0.5 flex-shrink-0" />
                          <span>{job}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFC3BC]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-[#FFC3BC]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Job jeune diplômé(e)</h3>
                    <p className="text-white/70 mb-4">Premiers emplois et stages pour lancer ta carrière. Ces opportunités sont conçues pour t'offrir une première expérience significative.</p>
                    <ul className="space-y-2">
                      {["Marketing", "Communication", "Développement web", "Finance", "Ressources humaines"].map((job, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#FFC3BC] mr-2 mt-0.5 flex-shrink-0" />
                          <span>{job}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section formulaire de candidature */}
      {/* <section id="candidature" className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#FFC3BC]/10 text-[#18133E] text-sm font-medium mb-4 border border-[#FFC3BC]/20">
              Ta candidature
            </span>
            <h2 className="text-3xl font-bold mb-4 text-[#18133E]">
              Rejoins notre vivier de talents
            </h2>
            <p className="text-gray-600">
              Remplis le formulaire ci-dessous et nous te contacterons pour discuter des opportunités qui correspondent à ton profil.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {formSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 mb-8 flex items-start"
              >
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Candidature envoyée avec succès !</p>
                  <p className="text-sm">Notre équipe analysera ton profil et te contactera très prochainement.</p>
                </div>
              </motion.div>
            )}
            
            {formError && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 mb-8 flex items-start"
              >
                <Info className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Certains champs sont incomplets</p>
                  <p className="text-sm">Veuillez remplir tous les champs obligatoires marqués d'un astérisque (*).</p>
                </div>
              </motion.div>
            )}
            
            <form onSubmit={soumettreFormulaire} className="bg-white rounded-xl border border-gray-200 shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="prénom" className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="prénom"
                      value={prénom}
                      onChange={(e) => setPrénom(e.target.value)}
                      className="block w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-[#18133E] focus:border-[#18133E]"
                      placeholder="Ton prénom"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom de famille *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="nom"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      className="block w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-[#18133E] focus:border-[#18133E]"
                      placeholder="Ton nom de famille"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-[#18133E] focus:border-[#18133E]"
                      placeholder="Ton adresse e-mail"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="téléphone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="téléphone"
                      value={téléphone}
                      onChange={(e) => setTéléphone(e.target.value)}
                      className="block w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-[#18133E] focus:border-[#18133E]"
                      placeholder="Ton numéro de téléphone"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Comment as-tu entendu parler de nous? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['Amis', 'Réseaux sociaux', 'Autre'].map((option) => (
                    <div 
                      key={option}
                      className={`p-3 border ${source === option ? 'border-[#FFC3BC] bg-[#FFC3BC]/10' : 'border-gray-200 hover:border-gray-300 bg-white'} rounded-lg cursor-pointer transition-colors text-center`}
                      onClick={() => setSource(option)}
                    >
                      <span className={source === option ? 'text-[#FFC3BC] font-medium' : 'text-gray-700'}>
                        {option}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Qu'est-ce qui t'intéresse ? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Job étudiant', 'Job jeune diplômé(e)'].map((option) => (
                    <div 
                      key={option}
                      className={`p-3 border ${typeJob === option ? 'border-[#FFC3BC] bg-[#FFC3BC]/10' : 'border-gray-200 hover:border-gray-300 bg-white'} rounded-lg cursor-pointer transition-colors text-center`}
                      onClick={() => setTypeJob(option)}
                    >
                      <span className={typeJob === option ? 'text-[#FFC3BC] font-medium' : 'text-gray-700'}>
                        {option}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Dis-nous en plus sur toi...
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-[#18133E] focus:border-[#18133E] min-h-[100px]"
                    placeholder="Expériences, compétences, disponibilités..."
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="adresse" className="block text-sm font-medium text-gray-700 mb-1">
                    Sélectionne une adresse
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="adresse"
                      value={adresse}
                      onChange={(e) => setAdresse(e.target.value)}
                      className="block w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-[#18133E] focus:border-[#18133E]"
                      placeholder="Ton adresse en France"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="lienCV" className="block text-sm font-medium text-gray-700 mb-1">
                    Lien vers ton CV/Linkedin
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LinkIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="url"
                      id="lienCV"
                      value={lienCV}
                      onChange={(e) => setLienCV(e.target.value)}
                      className="block w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-[#18133E] focus:border-[#18133E]"
                      placeholder="https://..."
                    />
                  </div>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex justify-center"
              >
                <Button type="submit" className="bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white rounded-xl px-6 py-3 text-lg font-medium shadow-md">
                  <span>Envoie ta candidature</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </motion.div>
            </form>
          </div>
        </div>
      </section> */}
      
      {/* Section témoignages */}
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
              Témoignages
            </span>
            <h2 className="text-3xl font-bold mb-4 text-[#18133E]">
              Ils ont trouvé leur job avec SenFrance
            </h2>
            <p className="text-gray-600">
              Découvre les expériences de nos étudiants qui ont trouvé un emploi grâce à nos services.
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Grâce à SenFrance, j'ai trouvé un job dans un restaurant qui me permet de financer mes études tout en améliorant mon français. L'équipe a été à l'écoute de mes contraintes d'emploi du temps.",
                  author: "Mamadou K., étudiant en Master Finance",
                  university: "Université Paris-Dauphine"
                },
                {
                  quote: "Après l'obtention de mon diplôme, SenFrance m'a aidée à trouver un stage dans une entreprise de communication. Ce premier pas dans le monde professionnel a été déterminant pour ma carrière.",
                  author: "Fatou D., diplômée en Communication",
                  university: "CELSA Sorbonne Université"
                }
              ].map((temoignage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                >
                  <div className="mb-4">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">"{temoignage.quote}"</p>
                  <div>
                    <p className="font-medium text-[#18133E]">{temoignage.author}</p>
                    <p className="text-sm text-gray-500">{temoignage.university}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageJobEtudiant;