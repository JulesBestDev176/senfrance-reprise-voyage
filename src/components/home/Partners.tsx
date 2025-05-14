
import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#18133E]">Nos Partenaires</h3>
          <p className="text-gray-600">400 résidences étudiantes dans 120 villes</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-24"
            >
              <div className="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
