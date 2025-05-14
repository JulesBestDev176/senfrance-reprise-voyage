
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/home/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Briefcase, BookOpen, Users, Wallet, MapPin } from 'lucide-react';

const Index = () => {
  // Trigger animations on first render with scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1993&q=80" 
                alt="Nous facilitons la vie de l'étudiant" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-500 rounded-full w-3 h-3 animate-pulse"></div>
                  <span className="font-semibold text-gray-800">Accompagnement personnalisé</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <span className="inline-block py-1 px-3 rounded-full bg-[#FFC3BC]/20 text-[#18133E] text-sm font-medium mb-4">
                Notre Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#18133E]">
                Nous facilitons la vie <br />de l'étudiant
              </h2>
              <p className="text-gray-700 mb-6">
                Vous souhaitez poursuivre vos études loin de chez vous. Vous avez commencé les démarches nécessaires, mais vous ne savez pas ce qui vous attend une fois arrivé(e) en France ? Nous vous aidons à y voir plus clair. Pour mener à bien votre projet d'études, vous avez besoin de visibilité. Et si nous commencions par vous trouver un logement avant votre départ...
              </p>
              
              <Button asChild className="bg-[#18133E] hover:bg-[#18133E]/90 text-white rounded-full">
                <Link to="/about">
                  QUI SOMMES-NOUS ? 
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6 text-[#18133E]">
              Nos Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-3xl mx-auto">
              Nous proposons un accompagnement global aux jeunes qui nous confient leur projet d'études. Notre offre est basée sur vos besoins et ne cesse de s'enrichir pour répondre à vos préoccupations.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="bg-[#FFC3BC]/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-[#18133E]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#18133E]">Orientation & coaching</h3>
                <p className="text-gray-600 mb-6">Inscription dans nos établissements partenaires</p>
                <a href="#" className="text-[#18133E] font-medium inline-flex items-center">
                  En savoir plus <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="bg-[#FFC3BC]/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Home className="h-8 w-8 text-[#18133E]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#18133E]">Se loger</h3>
                <p className="text-gray-600 mb-6">Bail, réservation & attestation d'hébergement</p>
                <a href="#" className="text-[#18133E] font-medium inline-flex items-center">
                  En savoir plus <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="bg-[#FFC3BC]/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Wallet className="h-8 w-8 text-[#18133E]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#18133E]">AVI</h3>
                <p className="text-gray-600 mb-6">Justificatif de ressources financières pour vos études à l'étranger</p>
                <a href="#" className="text-[#18133E] font-medium inline-flex items-center">
                  En savoir plus <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>

            {/* Service 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="bg-[#FFC3BC]/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Briefcase className="h-8 w-8 text-[#18133E]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#18133E]">Travailler</h3>
                <p className="text-gray-600 mb-6">Job étudiant, stage, alternance & premier emploi post formation</p>
                <a href="#" className="text-[#18133E] font-medium inline-flex items-center">
                  En savoir plus <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Partnership Section */}
      <section className="py-16 bg-[#18133E] text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              NOUVEAU PARTENARIAT AVEC LUKO
            </h3>
            <p className="text-xl mb-8 text-[#FFC3BC]">
              néo-assurance habitation n°1 en France
            </p>
            <Button className="bg-[#FFC3BC] hover:bg-[#FFC3BC]/90 text-[#18133E] font-bold rounded-full px-8 py-6">
              En savoir plus
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Housing and AVI Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Housing Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#18133E]">Commençons par vous trouver un logement</h3>
              <p className="text-gray-600 mb-6">
                Nos services ont identifié trois axes essentiels à la réussite des étudiants : un logement décent, une autonomie financière et le choix d'une formation qui te correspond.
              </p>
              <Button asChild className="bg-[#18133E] hover:bg-[#18133E]/90 rounded-full">
                <Link to="/housing">
                  SE LOGER <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </motion.div>

            {/* AVI Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#18133E]">Obtenez votre AVI pour justifier de vos ressources</h3>
              <p className="text-gray-600 mb-6">
                L'attestation de virement irrévocable est l'une des méthodes agréées par les services consulaires pour prouver que tu as les moyens de financer ton projet.
              </p>
              <Button asChild className="bg-[#18133E] hover:bg-[#18133E]/90 rounded-full">
                <Link to="/avi">
                  AVI <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Housing Options Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Reservation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#18133E]">Hébergement</h3>
                <h4 className="text-lg font-semibold mb-6 text-[#FFC3BC]">Réservation</h4>
                <p className="text-gray-600 mb-6">
                  Tu as été accepté dans une école française, mais tu es ressortissant étranger et tu dois passer par une demande de visa... Pour faciliter tes démarches, obtiens d'ores et déjà une réservation de logement SenFrance et une attestation d'hébergement. Complète les étapes pour la signature du bail quand tu seras en France.
                </p>
              </div>
            </motion.div>

            {/* Lease */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#18133E]">Bail</h3>
                <p className="text-gray-600 mb-6">
                  Si tu veux signer ton bail à distance avant même ton arrivée en France, tu en as la possibilité. Le bail te servira d'attestation d'hébergement et sera suffisant pour toutes tes démarches, y compris la demande de visa. Cette solution est plus coûteuse. Mais si tu es déjà en France pour tes études, pouvoir signer un bail avec nos partenaires est une vraie opportunité.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#18133E]">Nos Partenaires</h3>
            <p className="text-gray-600">400 résidences étudiantes dans 120 villes</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-24"
              >
                <div className="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantor Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Rental Guarantee */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#18133E]">Garantie locative</h3>
                <div className="h-20 w-40 bg-gray-200 rounded mb-6 animate-pulse"></div>
                <p className="text-gray-600 mb-6">
                  Avec notre partenaire privilégié, remplis ton dossier et charge tes pièces justificatives en seulement 5 minutes. Si tu ne les as pas toutes, aucun problème, tu peux les charger plus tard !
                </p>
                <a href="#" className="text-[#18133E] font-medium inline-flex items-center">
                  En savoir plus <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>

            {/* Housing Insurance */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#18133E]">Assurance habitation</h3>
                <div className="h-20 w-40 bg-gray-200 rounded mb-6 animate-pulse"></div>
                <p className="text-gray-600 mb-6">
                  Profite d'une expérience client unique et d'une alternative crédible aux assureurs traditionnels avec une offre simple, transparente et éthique qui génère la meilleure satisfaction client du marché.
                </p>
                <a href="#" className="text-[#18133E] font-medium inline-flex items-center">
                  En savoir plus <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Job Section */}
      <section className="py-20 bg-[#18133E] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Postulez pour un <span className="text-[#FFC3BC]">job étudiant</span>
              </h2>
              <p className="text-white/80 mb-8">
                Travailler pendant ses études, c'est possible. Vous pouvez prendre un emploi à temps partiel sans compromettre votre formation et vos chances de réussite.
              </p>
              <Button asChild className="bg-[#FFC3BC] hover:bg-[#FFC3BC]/90 text-[#18133E] font-bold rounded-full">
                <Link to="/jobs">
                  TRAVAILLER <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Job étudiant" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Discovery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#18133E]">
              Découvrez nos autres services
            </h2>
            <p className="text-gray-600 mb-8">
              Nous proposons un accompagnement global aux jeunes qui nous confient leur projet d'études. Notre offre est basée sur vos besoins et ne cesse de s'enrichir pour répondre à vos préoccupations.
            </p>
            <Button asChild className="bg-[#18133E] hover:bg-[#18133E]/90 rounded-full px-8 py-6">
              <Link to="/services">
                CENTRE DE SERVICES <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Office in Dakar Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#18133E]">
                SENFRANCE arrive à Dakar
              </h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#18133E]">Adresse</h3>
                  <p className="text-gray-600">
                    Liberté 6 Extension,<br />
                    route du Camp Leclerc
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#18133E]">Contact</h3>
                  <p className="text-gray-600">
                    +221 33 856 52 94<br />
                    +221 78 738 62 21
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#18133E]">Heures d'ouverture</h3>
                  <p className="text-gray-600">
                    Lun - Sam<br />
                    9 h - 12h | 14h - 18 h
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-96 bg-gray-200 rounded-xl overflow-hidden"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123859.04446766463!2d-17.54438661810553!3d14.716663795128974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0xb17c17d92d5db21f!2sDakar%2C%20Senegal!5e0!3m2!1sen!2sus!4v1621371735810!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="SenFrance Dakar location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-[#18133E]"
          >
            Derniers Articles
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 relative">
                <img
                  src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80"
                  alt="Les premières démarches en arrivant en France"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#18133E]">Les premières démarches en arrivant en France</h3>
                <p className="text-gray-600 mb-4">À votre arrivée en France, vous avez encore des étapes à franchir... Source : Campus France Maroc #arrivéeétudiantenfrance...</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>8 avr. 2021</span>
                  <span>1 min de lecture</span>
                </div>
              </div>
            </motion.div>
            
            {/* Article 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 relative">
                <img
                  src="https://images.unsplash.com/photo-1548946621-31653ef7bcef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Se loger pendant ses études"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#18133E]">Se loger pendant ses études, tant de possibilités !</h3>
                <p className="text-gray-600 mb-4">Cette première étape est la plus cruciale pour l'étudiant étranger qui souhaite s'installer en France. Source : Campus France Maroc...</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>22 mars 2021</span>
                  <span>1 min de lecture</span>
                </div>
              </div>
            </motion.div>
            
            {/* Article 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 relative">
                <img
                  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Vidéo : le job étudiant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#18133E]">Vidéo : le job étudiant devient essentiel pour les jeunes</h3>
                <p className="text-gray-600 mb-4">Pour financer leurs études ou leur logement, les jeunes se mobilisent pour trouver un emploi à côté de leurs cours. Réalisation :...</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>3 sept. 2020</span>
                  <span>1 min de lecture</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-[#18133E]"
          >
            Nos Offres
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pricing 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-[#FFC3BC]/20 rounded-full flex items-center justify-center mb-6">
                  <Wallet className="h-8 w-8 text-[#18133E]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#18133E]">AVI + carte de débit</h3>
                <div className="text-3xl font-bold mb-6 text-[#18133E]">450 €</div>
                <p className="text-gray-600 mb-4">Caution pour études</p>
                <p className="text-gray-600 mb-8">Document édité en 48h pour demande de visa</p>
                <Button className="w-full bg-[#18133E] hover:bg-[#18133E]/90 rounded-full">
                  Faire une demande
                </Button>
              </div>
            </motion.div>
            
            {/* Pricing 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-[#FFC3BC]/20 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="h-8 w-8 text-[#18133E]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#18133E]">Réservation de logement</h3>
                <div className="text-3xl font-bold mb-6 text-[#18133E]">149 €</div>
                <p className="text-gray-600 mb-4">Attestation d'hébergement</p>
                <p className="text-gray-600 mb-8">Document édité en 2h pour demande de visa</p>
                <Button className="w-full bg-[#18133E] hover:bg-[#18133E]/90 rounded-full">
                  Faire une demande
                </Button>
              </div>
            </motion.div>
            
            {/* Pricing 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-[#FFC3BC]/20 rounded-full flex items-center justify-center mb-6">
                  <Home className="h-8 w-8 text-[#18133E]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#18133E]">Logement étudiant</h3>
                <div className="text-3xl font-bold mb-6 text-[#18133E]">359 €</div>
                <p className="text-gray-600 mb-4">Bail renouvelable</p>
                <p className="text-gray-600 mb-8">Studio meublé dans une résidence moderne</p>
                <Button className="w-full bg-[#18133E] hover:bg-[#18133E]/90 rounded-full">
                  Faire une demande
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
