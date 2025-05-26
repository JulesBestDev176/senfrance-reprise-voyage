import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Featured destinations data with better images
const destinations = [
  {
    id: 1,
    name: "Dakar",
    description: "La capitale vibrante du Sénégal",
    image: "https://images.unsplash.com/photo-1524360526339-9ad59a9f7f8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    category: "Ville",
    link: "/destinations/dakar"
  },
  {
    id: 2,
    name: "Saint-Louis",
    description: "L'ancienne capitale coloniale au charme historique",
    image: "https://images.unsplash.com/photo-1623666269112-d1d95f7ec95c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
    category: "Patrimoine",
    link: "/destinations/saint-louis"
  },
  {
    id: 3,
    name: "Lac Rose",
    description: "Le célèbre lac aux eaux roses",
    image: "https://images.unsplash.com/photo-1594402745330-19d51f899711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "Nature",
    link: "/destinations/lac-rose"
  },
  {
    id: 4,
    name: "Île de Gorée",
    description: "Un site historique du commerce des esclaves",
    image: "https://images.unsplash.com/photo-1592302855504-af24bce3d929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "Histoire",
    link: "/destinations/ile-de-goree"
  },
  {
    id: 5,
    name: "Réserve de Bandia",
    description: "Safari africain et faune sauvage",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    category: "Safari",
    link: "/destinations/reserve-bandia"
  },
  {
    id: 6,
    name: "Parc National du Niokolo-Koba",
    description: "Biodiversité exceptionnelle de l'Afrique de l'Ouest",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    category: "Nature",
    link: "/destinations/niokolo-koba"
  },
  {
    id: 7,
    name: "Saly",
    description: "Station balnéaire populaire",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
    category: "Plage",
    link: "/destinations/saly"
  },
  {
    id: 8,
    name: "Delta du Siné-Saloum",
    description: "Paradis écologique des mangroves",
    image: "https://images.unsplash.com/photo-1596005554384-d293674c91d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    category: "Écotourisme",
    link: "/destinations/sine-saloum"
  }
];

const FeaturedDestinations = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Explorez
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Destinations populaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des plages paradisiaques aux sites historiques, découvrez les merveilles du Sénégal
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <Link to={destination.link} className="block h-full">
                <div className="h-full flex flex-col">
                  <div className="relative">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src={destination.image}
                        alt={destination.name}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                    </AspectRatio>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-gray-800 flex items-center">
                        <MapPin size={12} className="mr-1" />
                        {destination.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {destination.name}
                      </h3>
                      <p className="text-gray-600">{destination.description}</p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-sm text-gray-500">Découvrir</span>
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link 
            to="/destinations"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors font-medium"
          >
            Voir toutes les destinations
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
