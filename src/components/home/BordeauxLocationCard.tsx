import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  Anchor,
  Wine,
  Heart,
  Star,
  Navigation,
  Globe,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const BordeauxLocationCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", damping: 15 }}
      className="relative w-full bg-gradient-to-r from-[#18133E] via-[#231A54] to-[#18133E]  overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')]"></div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FFC3BC]/20 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-500/15 blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative z-10 px-8 md:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Section - Main Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-12 h-12 bg-gradient-to-br from-[#FFC3BC] to-[#ff9d94] rounded-xl flex items-center justify-center shadow-lg"
              >
                <MapPin className="h-6 w-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  Bordeaux, France
                </h3>
                <p className="text-[#FFC3BC] font-medium">Notre siège social</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FFC3BC]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-5 w-5 text-[#FFC3BC]" />
                </div>
                <div>
                  <p className="text-white/90 font-medium mb-2">Adresse</p>
                  <p className="text-white/80 leading-relaxed">
                    15 quai des Chartrons
                    <br />
                    Bordeaux - France
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Section - Bordeaux Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="text-center mb-6">
              <h4 className="text-xl font-semibold text-white mb-2 flex items-center justify-center gap-2">
                <Star className="h-5 w-5 text-[#FFC3BC]" />
                Pourquoi Bordeaux ?
              </h4>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] rounded-full mx-auto"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Wine, text: "Patrimoine UNESCO" },
                { icon: Anchor, text: "Port historique" },
                { icon: Globe, text: "Ville étudiante" },
                { icon: Heart, text: "Art de vivre" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <item.icon className="h-6 w-6 text-[#FFC3BC]" />
                  <span className="text-sm text-white/90 font-medium text-center leading-tight">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Contact & Action */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
              <p className="text-white/90 italic text-center mb-4 leading-relaxed">
                "Au cœur de Bordeaux, nous accompagnons les étudiants du monde
                entier vers leur réussite en France"
              </p>

              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                  >
                    <Star className="h-4 w-4 text-[#FFC3BC] fill-[#FFC3BC]" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="h-4 w-4 text-[#FFC3BC]" />
                <span className="text-sm">+33 9 72 14 66 97</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="h-4 w-4 text-[#FFC3BC]" />
                <span className="text-sm">+33 7 44 51 82 96</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="h-4 w-4 text-[#FFC3BC]" />
                <span className="text-sm">contact@senfrance.com</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="flex-1">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(255, 195, 188, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] hover:from-[#ff9d94] hover:to-[#FFC3BC] text-[#18133E] font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <Navigation className="h-4 w-4" />
                  <span>Nous contacter</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFC3BC] to-transparent"></div>
    </motion.div>
  );
};

export default BordeauxLocationCard;
