
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const DakarOffice = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-[#18133E]">
              SENFRANCE arrive à Dakar
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#FFC3BC] mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#18133E]">Adresse</h3>
                  <p className="text-gray-600">
                    Liberté 6 Extension,<br />
                    route du Camp Leclerc
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#FFC3BC] mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#18133E]">Contact</h3>
                  <p className="text-gray-600">
                    +221 33 856 52 94<br />
                    +221 78 738 62 21
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-[#FFC3BC] mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#18133E]">Heures d'ouverture</h3>
                  <p className="text-gray-600">
                    Lun - Sam<br />
                    9 h - 12h | 14h - 18 h
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-96 bg-gray-200 rounded-xl overflow-hidden shadow-lg"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123859.04446766463!2d-17.54438661810553!3d14.716663795128974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0xb17c17d92d5db21f!2sDakar%2C%20Senegal!5e0!3m2!1sen!2sus!4v1621371735810!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="SenFrance Dakar location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DakarOffice;
