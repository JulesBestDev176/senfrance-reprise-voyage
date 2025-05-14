
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const LukoPartnership = () => {
  return (
    <section className="py-16 bg-[#18133E] text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            NOUVEAU PARTENARIAT AVEC LUKO
          </h3>
          <p className="text-xl mb-8 text-[#FFC3BC]">
            néo-assurance habitation n°1 en France
          </p>
          <Button asChild className="bg-[#FFC3BC] hover:bg-[#FFC3BC]/90 text-[#18133E] font-bold rounded-full px-8 py-6">
            <Link to="/vivre-en-france/assurances">
              En savoir plus
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LukoPartnership;
