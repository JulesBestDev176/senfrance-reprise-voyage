
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Featured destinations data
const destinations = [
  {
    id: 1,
    name: "Dakar",
    description: "La capitale vibrante du Sénégal",
    image: "https://images.unsplash.com/photo-1597435877853-7d70704f5563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    link: "/destinations/dakar"
  },
  {
    id: 2,
    name: "Saint-Louis",
    description: "L'ancienne capitale coloniale au charme historique",
    image: "https://images.unsplash.com/photo-1591461712364-3022bfcd7931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80",
    link: "/destinations/saint-louis"
  },
  {
    id: 3,
    name: "Lac Rose",
    description: "Le célèbre lac aux eaux roses",
    image: "https://images.unsplash.com/photo-1594402745330-19d51f899711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    link: "/destinations/lac-rose"
  },
  {
    id: 4,
    name: "Île de Gorée",
    description: "Un site historique du commerce des esclaves",
    image: "https://images.unsplash.com/photo-1592302855504-af24bce3d929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    link: "/destinations/ile-de-goree"
  }
];

const FeaturedDestinations = () => {
  return (
    <section className="py-16 bg-senfrance-lightSand">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Destinations Populaires
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les plus beaux endroits du Sénégal, du littoral atlantique aux villages traditionnels
            </p>
          </motion.div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={destination.link}
                className="group block relative overflow-hidden rounded-lg shadow-md h-[300px]"
              >
                {/* Destination Image */}
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" 
                  style={{ backgroundImage: `url(${destination.image})` }}>
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">{destination.name}</h3>
                  <p className="text-sm text-white/80">{destination.description}</p>
                  <div className="mt-3 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Explorer</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link 
            to="/destinations"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Voir toutes les destinations
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
