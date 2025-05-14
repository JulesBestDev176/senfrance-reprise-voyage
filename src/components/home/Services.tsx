
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Calendar, 
  Hotel, 
  Car, 
  MapPin, 
  Shield 
} from 'lucide-react';

// Services data
const services = [
  {
    id: 1,
    title: "Circuits Touristiques",
    description: "Des itinéraires soigneusement planifiés pour découvrir les merveilles du Sénégal",
    icon: Compass,
  },
  {
    id: 2,
    title: "Voyages Sur Mesure",
    description: "Des séjours personnalisés selon vos envies et votre budget",
    icon: Calendar,
  },
  {
    id: 3,
    title: "Hébergements de Qualité",
    description: "Une sélection d'hôtels et de lodges pour tous les budgets",
    icon: Hotel,
  },
  {
    id: 4,
    title: "Transport Privé",
    description: "Des véhicules confortables avec chauffeurs expérimentés",
    icon: Car,
  },
  {
    id: 5,
    title: "Guides Locaux",
    description: "Des guides francophones passionnés par leur pays",
    icon: MapPin,
  },
  {
    id: 6,
    title: "Assistance 24/7",
    description: "Une équipe disponible à tout moment pendant votre séjour",
    icon: Shield,
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
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
              Nos Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des prestations de qualité pour un voyage sans souci au Sénégal
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center p-3 bg-primary rounded-full mb-4">
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
