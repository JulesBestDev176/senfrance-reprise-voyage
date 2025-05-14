
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HousingOptions = () => {
  return (
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
              <Link to="/visa/hebergement" className="inline-flex items-center text-[#18133E] font-medium">
                En savoir plus <ArrowRight size={16} className="ml-1" />
              </Link>
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
              <Link to="/visa/hebergement" className="inline-flex items-center text-[#18133E] font-medium">
                En savoir plus <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HousingOptions;
