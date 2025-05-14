
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GuarantorSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Rental Guarantee */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#18133E]">Garantie locative</h3>
              <div className="h-20 w-40 bg-gray-200 rounded mb-6 animate-pulse"></div>
              <p className="text-gray-600 mb-6">
                Avec notre partenaire privilégié, remplis ton dossier et charge tes pièces justificatives en seulement 5 minutes. Si tu ne les as pas toutes, aucun problème, tu peux les charger plus tard !
              </p>
              <Link to="/vivre-en-france/assurances" className="text-[#18133E] font-medium inline-flex items-center">
                En savoir plus <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Housing Insurance */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#18133E]">Assurance habitation</h3>
              <div className="h-20 w-40 bg-gray-200 rounded mb-6 animate-pulse"></div>
              <p className="text-gray-600 mb-6">
                Profite d'une expérience client unique et d'une alternative crédible aux assureurs traditionnels avec une offre simple, transparente et éthique qui génère la meilleure satisfaction client du marché.
              </p>
              <Link to="/vivre-en-france/assurances" className="text-[#18133E] font-medium inline-flex items-center">
                En savoir plus <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuarantorSection;
