
import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Hero = () => {
  // Hero content animation variants
  const heroContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
      }
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528277342758-f1d7613953a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center items-center text-white text-center">
        <motion.div
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Découvrez la Magie du Sénégal
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Explorez les plages immaculées, les parcs nationaux et la culture riche du Sénégal avec nos circuits personnalisés
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-lg p-4 shadow-lg mx-auto max-w-2xl mt-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="md:col-span-2">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    type="text" 
                    placeholder="Destination" 
                    className="pl-10 bg-gray-50 border-0"
                  />
                </div>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="bg-gray-50 border-0">
                    <SelectValue placeholder="Catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beach">Plages</SelectItem>
                    <SelectItem value="nature">Nature</SelectItem>
                    <SelectItem value="culture">Culture</SelectItem>
                    <SelectItem value="adventure">Aventure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Button className="w-full bg-accent hover:bg-accent/90">
                  <Search size={18} className="mr-2" />
                  <span>Rechercher</span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
