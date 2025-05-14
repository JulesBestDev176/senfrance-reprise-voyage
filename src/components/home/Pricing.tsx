
import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, MapPin, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  return (
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
  );
};

export default Pricing;
