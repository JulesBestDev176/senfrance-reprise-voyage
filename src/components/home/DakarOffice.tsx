import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink, Navigation, ChevronRight, Mail, Calendar, Check, Star, Zap } from 'lucide-react';

const DakarOffice = () => {
  const [hoveredInfo, setHoveredInfo] = useState(null);
  const [mapHovered, setMapHovered] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced background styling */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#FFC3BC]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#18133E]/10 rounded-full blur-3xl"></div>
          
          {/* Animated decorative elements */}
          <motion.div 
            className="absolute top-1/3 left-1/4 w-6 h-6 bg-[#FFC3BC]/20 rounded-full"
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-[#18133E]/20 rounded-full"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute -top-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#FFC3BC]/20 to-[#18133E]/5 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-[#18133E]/10 to-purple-100/20 blur-3xl -z-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500"
          >
            <div className="flex items-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#18133E] to-[#271D5B] flex items-center justify-center mr-4 shadow-md"
              >
                <MapPin className="h-7 w-7 text-[#FFC3BC]" />
              </motion.div>
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="text-sm font-medium text-[#FFC3BC] bg-[#FFC3BC]/10 py-1 px-3 rounded-full border border-[#FFC3BC]/20">
                    Bureau Afrique
                  </span>
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-3xl font-bold mt-2 text-[#18133E]"
                >
                  SENFRANCE arrive à Dakar
                </motion.h2>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="h-1 w-20 bg-gradient-to-r from-[#FFC3BC] via-pink-400 to-[#FFC3BC]/30 rounded-full mb-8"
            />
            
            <div className="space-y-8 mb-10">
              <InfoItem 
                icon={<MapPin />} 
                title="Adresse" 
                content={["Liberté 6 Extension,", "Route du Camp Leclerc"]}
                delay={0.6}
                id="address"
                hoveredInfo={hoveredInfo}
                setHoveredInfo={setHoveredInfo}
                color="rose"
              />
              
              <InfoItem 
                icon={<Phone />} 
                title="Contact" 
                content={["+221 33 856 52 94", "+221 78 738 62 21"]}
                delay={0.7}
                id="contact"
                hoveredInfo={hoveredInfo}
                setHoveredInfo={setHoveredInfo}
                color="indigo"
              />
              
              <InfoItem 
                icon={<Clock />} 
                title="Heures d'ouverture" 
                content={["Lun - Sam", "9h - 12h | 14h - 18h"]}
                delay={0.8}
                id="hours"
                hoveredInfo={hoveredInfo}
                setHoveredInfo={setHoveredInfo}
                color="purple"
              />
            </div>
            
            {/* Enhanced features section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="mb-10 bg-gray-50 rounded-xl p-4 border border-gray-100"
            >
              <h3 className="text-sm font-medium text-gray-700 mb-3">Services disponibles</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Check />, text: "Renseignements visa" },
                  { icon: <Star />, text: "Inscription écoles" },
                  { icon: <Mail />, text: "Support administratif" },
                  { icon: <Calendar />, text: "Rendez-vous personnalisés" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-[#FFC3BC]/10 rounded-full p-1">
                      {React.cloneElement(feature.icon, { className: "h-3 w-3 text-[#FFC3BC]" })}
                    </div>
                    <span className="text-xs text-gray-600">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Enhanced action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <ButtonEffect color="primary">
                <a 
                  href="https://www.google.com/maps?q=OLA+DECO,+route+du+camp+Leclerc,+Dakar"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#18133E] to-[#271D5B] text-white font-medium py-2.5 px-5 rounded-full"
                >
                  <Navigation className="h-4 w-4" />
                  <span>Itinéraire</span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    className="ml-1"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </motion.div>
                </a>
              </ButtonEffect>
              
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="relative"
            onHoverStart={() => setMapHovered(true)}
            onHoverEnd={() => setMapHovered(false)}
          >
            {/* Enhanced map decorative border */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -inset-4 rounded-2xl border-2 border-dashed border-[#FFC3BC]/40 z-0"
              animate={{ borderColor: mapHovered ? 'rgba(255, 195, 188, 0.6)' : 'rgba(255, 195, 188, 0.4)' }}
            />
            
            {/* Enhanced pattern overlay */}
            <motion.div 
              className="absolute -inset-8 -z-10 bg-gradient-to-tr from-[#FFC3BC]/5 to-transparent rounded-full blur-xl"
              animate={{
                scale: mapHovered ? 1.05 : 1,
                opacity: mapHovered ? 0.7 : 0.4
              }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Enhanced map container with animation */}
            <motion.div 
              className="h-[450px] bg-white rounded-xl overflow-hidden shadow-xl relative z-10 border border-gray-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Enhanced map overlay gradient */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white via-white/80 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-[#18133E]/5 mix-blend-multiply z-10 pointer-events-none"></div>
              
              {/* Enhanced location marker with animated elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="relative">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 0.2, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute w-10 h-10 bg-gradient-to-br from-[#FFC3BC]/40 to-pink-400/30 rounded-full -inset-5"
                  />
                  <motion.div
                    animate={{ 
                      scale: [1, 2, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3
                    }}
                    className="absolute w-8 h-8 bg-gradient-to-tr from-[#FFC3BC]/30 to-[#18133E]/20 rounded-full -inset-4"
                  />
                  <div className="w-5 h-5 bg-gradient-to-br from-[#FFC3BC] to-pink-500 rounded-full shadow-lg relative z-10"></div>
                </div>
              </div>
              
              {/* Enhanced compass rose */}
              <div className="absolute bottom-6 right-6 z-20">
                <motion.div 
                  className="w-12 h-12 bg-white/80 rounded-full shadow-md backdrop-blur-sm flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-10 h-10 bg-[url('/compass-rose.svg')] bg-contain bg-center bg-no-repeat"></div>
                </motion.div>
              </div>
              
              {/* Google Maps iframe */}
              <iframe
  src="https://www.google.com/maps?q=OLA+DECO,+route+du+camp+Leclerc,+Dakar&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  title="SenFrance Dakar location"
  className="z-0"
/>

            </motion.div>
            
            {/* Enhanced office info tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-5 right-10 bg-white py-3 px-5 rounded-full shadow-lg z-20 flex items-center gap-2 border border-gray-100"
              whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-800">Bureau ouvert maintenant</span>
            </motion.div>
            
            {/* Added office photo tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -top-5 left-10 bg-white py-2 px-4 rounded-lg shadow-lg z-20 flex items-center gap-2 border border-gray-100"
              whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <Zap className="h-4 w-4 text-[#FFC3BC]" />
              <span className="text-xs font-medium text-gray-800">Plus de proximité</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced info item component with color variations
const InfoItem = ({ icon, title, content, delay, id, hoveredInfo, setHoveredInfo, color }) => {
  const isHovered = hoveredInfo === id;
  
  // Color mappings for different styles
  const colorStyles = {
    rose: {
      light: 'bg-[#FFC3BC]/10',
      dark: 'bg-[#FFC3BC]',
      text: 'text-[#FFC3BC]'
    },
    indigo: {
      light: 'bg-indigo-50',
      dark: 'bg-indigo-500',
      text: 'text-indigo-500'
    },
    purple: {
      light: 'bg-purple-50',
      dark: 'bg-purple-500',
      text: 'text-purple-500'
    }
  };
  
  const style = colorStyles[color] || colorStyles.rose;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-start group"
      onMouseEnter={() => setHoveredInfo(id)}
      onMouseLeave={() => setHoveredInfo(null)}
    >
      <motion.div 
        className={`p-3 rounded-xl ${isHovered ? style.dark : style.light} transition-all duration-300 mr-3 mt-1`}
        animate={isHovered ? { scale: 1.1, rotate: [0, -5, 5, 0] } : { scale: 1, rotate: 0 }}
        transition={{ 
          scale: { duration: 0.2 },
          rotate: { duration: 0.5 }
        }}
      >
        {React.cloneElement(icon, { 
          className: `h-5 w-5 ${isHovered ? 'text-white' : style.text} transition-colors duration-300`
        })}
      </motion.div>
      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-[#18133E] mb-1 group-hover:text-[#271D5B] transition-colors duration-300">{title}</h3>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="overflow-hidden"
              >
                <ChevronRight className={`h-4 w-4 ${style.text}`} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="text-gray-600">
          {content.map((line, index) => (
            <motion.p 
              key={index}
              animate={isHovered ? { x: 2 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Button effect wrapper
const ButtonEffect = ({ children, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const glowColor = color === 'primary' 
    ? 'from-[#18133E]/30 to-[#271D5B]/20' 
    : 'from-[#FFC3BC]/30 to-pink-300/20';
  
  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div 
        className={`absolute -inset-1 bg-gradient-to-r ${glowColor} rounded-full blur-md opacity-0`}
        animate={isHovered ? { opacity: 0.8, scale: 1.05 } : { opacity: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      {children}
      
      {/* Particle effects on hover */}
      <AnimatePresence>
        {isHovered && color === 'primary' && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  x: 0,
                  y: 0 
                }}
                animate={{ 
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 20],
                  y: [0, (Math.random() - 0.5) * 20 - 10]
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: i * 0.1,
                }}
                className="absolute top-1/2 right-4 w-1.5 h-1.5 rounded-full bg-white"
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DakarOffice;