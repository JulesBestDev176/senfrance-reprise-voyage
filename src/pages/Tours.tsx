
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Star, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Tours data
const tours = [
  {
    id: 1,
    name: "Découverte de Dakar et ses environs",
    duration: "3 jours / 2 nuits",
    groupSize: "2 à 8 personnes",
    price: "À partir de 350€ / personne",
    rating: 4.8,
    reviewCount: 24,
    image: "https://images.unsplash.com/photo-1597435877853-7d70704f5563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    description: "Un circuit idéal pour découvrir la capitale sénégalaise et ses environs, incluant l'île de Gorée et le Lac Rose.",
    destinations: ["Dakar", "Île de Gorée", "Lac Rose"]
  },
  {
    id: 2,
    name: "Safari au cœur du Sénégal",
    duration: "7 jours / 6 nuits",
    groupSize: "4 à 10 personnes",
    price: "À partir de 890€ / personne",
    rating: 4.9,
    reviewCount: 16,
    image: "https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Partez à la découverte de la faune africaine dans les réserves naturelles du Sénégal avec des guides expérimentés.",
    destinations: ["Réserve de Bandia", "Parc National du Niokolo-Koba", "Sine Saloum"]
  },
  {
    id: 3,
    name: "Le Grand Tour du Sénégal",
    duration: "12 jours / 11 nuits",
    groupSize: "2 à 12 personnes",
    price: "À partir de 1590€ / personne",
    rating: 4.7,
    reviewCount: 32,
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
    description: "Un circuit complet pour découvrir les principales richesses du Sénégal, du nord au sud, de la côte à l'intérieur des terres.",
    destinations: ["Dakar", "Saint-Louis", "Lac Rose", "Sine Saloum", "Casamance"]
  },
  {
    id: 4,
    name: "Escapade balnéaire en Casamance",
    duration: "5 jours / 4 nuits",
    groupSize: "2 à 8 personnes",
    price: "À partir de 690€ / personne",
    rating: 4.6,
    reviewCount: 19,
    image: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "Détente et découverte dans la région la plus verdoyante du Sénégal, avec ses plages paradisiaques et sa culture unique.",
    destinations: ["Ziguinchor", "Cap Skirring", "Îles de Carabane"]
  },
  {
    id: 5,
    name: "Sur les traces de l'histoire coloniale",
    duration: "4 jours / 3 nuits",
    groupSize: "2 à 6 personnes",
    price: "À partir de 450€ / personne",
    rating: 4.5,
    reviewCount: 11,
    image: "https://images.unsplash.com/photo-1591461712364-3022bfcd7931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80",
    description: "Un voyage à travers l'histoire du Sénégal, de l'époque coloniale à l'indépendance, avec visite de sites historiques importants.",
    destinations: ["Saint-Louis", "Île de Gorée", "Dakar"]
  },
  {
    id: 6,
    name: "Immersion culturelle au cœur du Sénégal",
    duration: "6 jours / 5 nuits",
    groupSize: "4 à 10 personnes",
    price: "À partir de 780€ / personne",
    rating: 4.9,
    reviewCount: 14,
    image: "https://images.unsplash.com/photo-1583244532610-2a234e7c3eca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Découvrez la richesse culturelle du Sénégal à travers ses villages traditionnels, son artisanat et ses festivités locales.",
    destinations: ["Villages Sérères", "Sine Saloum", "Pays Bassari"]
  }
];

const Tours = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-senfrance-orange">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos Circuits Touristiques
            </h1>
            <p className="text-xl text-white/80">
              Des voyages organisés pour découvrir le Sénégal dans les meilleures conditions
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-xl font-semibold mb-2">{tour.name}</h2>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(tour.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {tour.rating} ({tour.reviewCount} avis)
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Clock size={16} className="mr-2 flex-shrink-0" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users size={16} className="mr-2 flex-shrink-0" />
                      <span>{tour.groupSize}</span>
                    </div>
                    <div className="flex items-start text-gray-600">
                      <MapPin size={16} className="mr-2 flex-shrink-0 mt-1" />
                      <span>{tour.destinations.join(", ")}</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="font-semibold text-lg">{tour.price}</span>
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                      <Link to={`/tours/${tour.id}`}>
                        Détails
                        <ChevronRight size={16} className="ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tour Section */}
      <section className="py-16 bg-senfrance-lightSand">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Envie d'un Circuit Sur Mesure ?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Nous créons des voyages personnalisés en fonction de vos envies, de votre budget et de la durée souhaitée. Contactez-nous pour commencer à planifier votre aventure au Sénégal.
              </p>
              <div className="inline-flex items-center justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <Link to="/contact">
                    Demander un devis personnalisé
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

export default Tours;
