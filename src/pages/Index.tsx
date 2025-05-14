
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/home/Hero';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Destinations */}
      <FeaturedDestinations />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80" 
                alt="À propos de SenFrance" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bienvenue chez SenFrance
              </h2>
              <p className="text-lg mb-4 text-gray-700">
                Spécialiste du voyage au Sénégal depuis plus de 15 ans, SenFrance vous propose des séjours authentiques et des circuits sur mesure pour découvrir les merveilles du pays de la Teranga.
              </p>
              <p className="mb-6 text-gray-700">
                Notre équipe franco-sénégalaise met à votre service sa parfaite connaissance du pays pour vous offrir une expérience de voyage inoubliable, alliant confort, découverte et authenticité.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Des circuits touristiques sur mesure et adaptés à vos envies</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Une sélection d'hébergements de qualité testés par notre équipe</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Des guides locaux francophones passionnés par leur pays</span>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link to="/about">
                    En savoir plus
                    <ArrowRight size={16} className="ml-2" />
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

      {/* CTA Section */}
      <section className="py-16 bg-senfrance-lightSand">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prêt à découvrir le Sénégal ?
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Contactez-nous dès maintenant pour planifier votre prochain voyage et vivez une expérience authentique au cœur du Sénégal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <Link to="/tours">
                    Découvrir nos circuits
                  </Link>
                </Button>
                <Button asChild variant="outline" className="bg-white">
                  <Link to="/contact">
                    Nous contacter
                  </Link>
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
