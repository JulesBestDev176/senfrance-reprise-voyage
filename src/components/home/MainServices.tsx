
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MainServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Housing Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="bg-[#FFC3BC]/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <Home className="h-6 w-6 text-[#18133E]" />
              </div>
              <h3 className="text-2xl font-bold text-[#18133E]">Commençons par vous trouver un logement</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Nos services ont identifié trois axes essentiels à la réussite des étudiants : un logement décent, une autonomie financière et le choix d'une formation qui te correspond.
            </p>
            <Button asChild className="bg-[#18133E] hover:bg-[#18133E]/90 rounded-full">
              <Link to="/visa/hebergement">
                SE LOGER <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* AVI Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="bg-[#FFC3BC]/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <Wallet className="h-6 w-6 text-[#18133E]" />
              </div>
              <h3 className="text-2xl font-bold text-[#18133E]">Obtenez votre AVI pour justifier de vos ressources</h3>
            </div>
            <p className="text-gray-600 mb-6">
              L'attestation de virement irrévocable est l'une des méthodes agréées par les services consulaires pour prouver que tu as les moyens de financer ton projet.
            </p>
            <Button asChild className="bg-[#18133E] hover:bg-[#18133E]/90 rounded-full">
              <Link to="/visa/avi">
                AVI <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MainServices;
