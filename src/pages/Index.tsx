
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/home/Hero';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, MapPin, Phone } from 'lucide-react';

const Index = () => {
  // Trigger animations on first render with scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-4xl md:text-5xl font-bold text-senfrance-blue mb-2">15+</div>
              <p className="text-gray-600">Années d'expérience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-senfrance-blue mb-2">5000+</div>
              <p className="text-gray-600">Clients satisfaits</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-senfrance-blue mb-2">25+</div>
              <p className="text-gray-600">Destinations</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-senfrance-blue mb-2">100%</div>
              <p className="text-gray-600">Garantie satisfaction</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <FeaturedDestinations />

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{
              y: [0, 15, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-gradient-radial from-senfrance-lightBlue to-transparent opacity-30 rounded-full blur-3xl"
          />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80" 
                  alt="À propos de SenFrance" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="bg-green-500 rounded-full w-3 h-3 animate-pulse"></div>
                    <span className="font-semibold text-gray-800">Guides disponibles</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white p-6 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-senfrance-blue rounded-full w-12 h-12 flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Destinations</p>
                    <p className="font-semibold">25+ lieux exceptionnels</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-12 left-1/4 transform -translate-x-1/2 bg-white p-6 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-senfrance-pink rounded-full w-12 h-12 flex items-center justify-center">
                    <CalendarDays className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Départs</p>
                    <p className="font-semibold">Toute l'année</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-senfrance-lightBlue text-senfrance-blue text-sm font-medium mb-4">
                Notre Histoire
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bienvenue chez <span className="text-gradient">SenFrance</span>
              </h2>
              <p className="text-lg mb-6 text-gray-600">
                Depuis plus de 15 ans, <strong>SenFrance</strong> est le spécialiste des voyages sur mesure au Sénégal. Notre équipe franco-sénégalaise vous propose des expériences authentiques pour découvrir les merveilles de la Teranga.
              </p>
              <p className="mb-8 text-gray-600">
                Nous mettons à votre service notre connaissance approfondie du pays pour créer des séjours inoubliables qui allient confort, découverte et authenticité. Notre engagement: vous offrir un voyage exceptionnel au cœur de l'Afrique de l'Ouest.
              </p>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-senfrance-lightBlue rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-senfrance-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Expertise locale</h3>
                    <p className="text-gray-600">Notre équipe vit et travaille au Sénégal, garantissant une connaissance intime du territoire</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-senfrance-lightBlue rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-senfrance-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Voyages personnalisés</h3>
                    <p className="text-gray-600">Des circuits adaptés à vos envies, avec un accompagnement sur mesure</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-senfrance-lightBlue rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-senfrance-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Tourisme durable</h3>
                    <p className="text-gray-600">Nous privilégions les partenariats avec les communautés locales et les initiatives écologiques</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Button asChild className="bg-senfrance-blue hover:bg-senfrance-blue/90 rounded-full py-6 px-8 shadow-button">
                  <Link to="/about">
                    En savoir plus
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Instagram Feed Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-senfrance-lightBlue text-senfrance-blue text-sm font-medium mb-4">
              #VoyagezAvecSenFrance
            </span>
            <h2 className="text-4xl font-bold mb-4">
              Inspirez-vous sur Instagram
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Suivez nos aventures et découvrez les plus beaux moments de nos voyages
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              "https://images.unsplash.com/photo-1553984840-b8cbc34f5215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
              "https://images.unsplash.com/photo-1635224921851-e31fba6feb33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
              "https://images.unsplash.com/photo-1528277342758-f1d7613953a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
              "https://images.unsplash.com/photo-1548796374-5e540d6115f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1939&q=80",
              "https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1993&q=80",
              "https://images.unsplash.com/photo-1566726667785-6a73a7fb9bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg aspect-square"
              >
                <img 
                  src={image} 
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="https://instagram.com/senfrance" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-senfrance-pink to-senfrance-purple text-white hover:opacity-90 transition-opacity font-medium"
            >
              Suivez-nous sur Instagram
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-senfrance-blue to-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xMjgwIDBIMHYxNDBoMTI4MHoiLz48L2c+PC9zdmc+')] bg-center bg-no-repeat" style={{ transform: "rotateX(180deg)" }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Prêt à vivre l'aventure <span className="text-senfrance-blue">sénégalaise</span>?
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Contactez notre équipe d'experts pour planifier votre voyage sur mesure et découvrir toutes les merveilles du Sénégal.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center">
                      <div className="bg-senfrance-lightBlue rounded-full p-3 mr-4">
                        <Phone className="text-senfrance-blue" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Appelez-nous</div>
                        <div className="font-semibold">+33 (0)1 23 45 67 89</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-senfrance-lightBlue rounded-full p-3 mr-4">
                        <MapPin className="text-senfrance-blue" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Nos bureaux</div>
                        <div className="font-semibold">Paris & Dakar</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-senfrance-blue hover:bg-senfrance-blue/90 rounded-full">
                      <Link to="/contact">
                        Nous contacter
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full">
                      <Link to="/tours">
                        Voir nos circuits
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
              
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
                  alt="Contact SenFrance"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-senfrance-blue/40 to-primary/40 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-white rounded-full w-16 h-16 flex items-center justify-center cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-senfrance-blue">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
