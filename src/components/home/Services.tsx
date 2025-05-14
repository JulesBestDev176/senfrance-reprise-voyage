
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Map,
  Calendar,
  Hotel,
  Car,
  Users,
  Shield 
} from 'lucide-react';

// Services data with enhanced descriptions
const services = [
  {
    id: 1,
    title: "Circuits Exclusifs",
    description: "Des voyages uniques conçus par des experts locaux pour vous faire découvrir le vrai Sénégal",
    icon: Map,
    color: "bg-gradient-to-br from-senfrance-blue to-primary"
  },
  {
    id: 2,
    title: "Voyages Sur Mesure",
    description: "Des itinéraires entièrement personnalisés selon vos envies, votre budget et votre rythme",
    icon: Calendar,
    color: "bg-gradient-to-br from-senfrance-purple to-senfrance-blue"
  },
  {
    id: 3,
    title: "Hébergements Premium",
    description: "Sélection rigoureuse d'hôtels, lodges et hébergements authentiques pour un confort optimal",
    icon: Hotel,
    color: "bg-gradient-to-br from-senfrance-pink to-senfrance-purple"
  },
  {
    id: 4,
    title: "Transport de Luxe",
    description: "Véhicules climatisés récents avec chauffeurs-guides expérimentés et francophones",
    icon: Car,
    color: "bg-gradient-to-br from-senfrance-orange to-senfrance-pink"
  },
  {
    id: 5,
    title: "Guides Locaux Experts",
    description: "Accompagnement par des guides passionnés qui partagent leur culture et leurs connaissances",
    icon: Users,
    color: "bg-gradient-to-br from-senfrance-gold to-senfrance-orange"
  },
  {
    id: 6,
    title: "Assistance 24/7",
    description: "Support permanent pendant votre séjour pour une tranquillité d'esprit absolue",
    icon: Shield,
    color: "bg-gradient-to-br from-senfrance-teal to-senfrance-blue"
  }
];

const Services = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };

  const cardVariants = {
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
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-senfrance-blue/5"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-senfrance-purple/5"></div>
        <div className="absolute top-1/4 right-10 w-48 h-48 rounded-full bg-senfrance-pink/5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-senfrance-lightBlue text-senfrance-blue text-sm font-medium mb-4">
            Services Exclusifs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-senfrance-blue to-senfrance-purple bg-clip-text text-transparent">
            Une expérience de voyage exceptionnelle
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous vous offrons un service complet et personnalisé pour un voyage inoubliable au Sénégal
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full"
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <service.icon size={28} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <motion.span 
                  className="flex items-center text-sm font-medium text-senfrance-blue cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  En savoir plus
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
