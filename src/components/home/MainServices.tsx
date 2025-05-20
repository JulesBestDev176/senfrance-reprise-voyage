import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Wallet, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MainServices = () => {
  return (
    <section className="relative">
      
      
      {/* Main content starts below the wave */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-100 rounded-full opacity-30"></div>
          <div className="absolute bottom-10 -left-20 w-80 h-80 bg-pink-100 rounded-full opacity-30"></div>
          <motion.div 
            className="absolute top-60 left-1/3 w-4 h-4 bg-indigo-400 rounded-full"
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-40 right-1/4 w-6 h-6 bg-pink-400 rounded-full"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Nos services essentiels</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous avons identifié les éléments clés pour réussir votre projet d'études en France
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Housing Section */}
            <ServiceCard 
              icon={<Home />}
              title="Trouvez votre logement idéal"
              description="Nos services ont identifié trois axes essentiels à la réussite des étudiants : un logement décent, une autonomie financière et le choix d'une formation qui te correspond."
              buttonText="SE LOGER"
              link="/visa/hebergement"
              direction="left"
              delay={0.2}
              color="indigo"
            />

            {/* AVI Section */}
            <ServiceCard 
              icon={<Wallet />}
              title="Justifiez vos ressources avec l'AVI"
              description="L'attestation de virement irrévocable est l'une des méthodes agréées par les services consulaires pour prouver que tu as les moyens de financer ton projet."
              buttonText="AVI"
              link="/visa/avi"
              direction="right"
              delay={0.4}
              color="purple"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <Link to="/services" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors group">
              <span>Découvrir tous nos services</span>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                className="ml-2"
              >
                <ExternalLink size={18} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced service card component with advanced animations
const ServiceCard = ({ icon, title, description, buttonText, link, direction, delay, color }) => {
  // Dynamic color styles based on the color prop
  const colorStyles = {
    indigo: {
      light: 'bg-indigo-50',
      medium: 'bg-indigo-100',
      dark: 'text-indigo-900',
      button: 'from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800',
      hover: 'group-hover:text-indigo-600',
      shadow: 'group-hover:shadow-indigo-200/50',
      iconBg: 'bg-indigo-100 text-indigo-600'
    },
    purple: {
      light: 'bg-purple-50',
      medium: 'bg-purple-100',
      dark: 'text-purple-900',
      button: 'from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800',
      hover: 'group-hover:text-purple-600',
      shadow: 'group-hover:shadow-purple-200/50',
      iconBg: 'bg-purple-100 text-purple-600'
    }
  };

  const styles = colorStyles[color] || colorStyles.indigo;

  return (
    <motion.div 
      initial={{ opacity: 0, x: direction === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -5 }}
      className={`rounded-2xl p-8 border border-gray-100 bg-white shadow-lg transition-all duration-300 group hover:shadow-xl ${styles.shadow}`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start mb-5">
          <motion.div 
            className={`rounded-2xl w-14 h-14 flex items-center justify-center ${styles.iconBg} transition-transform duration-300 group-hover:scale-110`}
            whileHover={{ rotate: [0, -10, 10, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            {React.cloneElement(icon, { className: "h-7 w-7" })}
          </motion.div>
          <div className="ml-5 flex-1">
            <motion.h3 
              className={`text-2xl font-bold mb-1 transition-colors duration-300 ${styles.hover}`}
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}
            >
              {title}
            </motion.h3>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded group-hover:from-indigo-300 group-hover:to-purple-300 transition-colors duration-500"></div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-7 flex-grow">
          {description}
        </p>
        
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-auto"
        >
          <Button 
            asChild 
            className={`bg-gradient-to-r ${styles.button} text-white font-medium px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:shadow-lg flex items-center justify-center`}
          >
            <Link to={link} className="flex items-center">
              <span>{buttonText}</span>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="ml-2"
              >
                <ArrowRight size={18} />
              </motion.div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MainServices;