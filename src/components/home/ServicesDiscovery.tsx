
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesDiscovery = () => {
  return (
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
  );
};

export default ServicesDiscovery;
