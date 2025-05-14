
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, CalendarDays, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const Hero = () => {
  const [date, setDate] = useState<Date>();
  const [travelers, setTravelers] = useState("2");

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Fixed variants for blobs with correct type "loop" | "mirror" | "reverse"
  const blobVariants = {
    initial: {
      opacity: 0.7,
      scale: 0.8,
    },
    animate: {
      opacity: [0.7, 0.9, 0.7],
      scale: [0.8, 1.1, 0.8],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "mirror" as const,
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-r from-senfrance-darkBlue to-primary">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[10%] right-[15%] w-72 h-72 bg-senfrance-rose rounded-full filter blur-3xl opacity-40"
          variants={blobVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-[20%] left-[20%] w-96 h-96 bg-senfrance-rose rounded-full filter blur-3xl opacity-30"
          variants={blobVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div 
          className="absolute top-[40%] left-[10%] w-64 h-64 bg-secondary rounded-full filter blur-3xl opacity-20"
          variants={blobVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 4 }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-center text-white pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 variants={itemVariants} className="font-heading font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-senfrance-rose to-secondary bg-clip-text text-transparent">
              Explorez la Magie du Sénégal
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto">
            Voyages d'exception & circuits personnalisés au cœur de l'Afrique de l'Ouest
          </motion.p>

          {/* Search Box */}
          <motion.div 
            variants={itemVariants}
            className="bg-white backdrop-blur-lg bg-opacity-10 rounded-2xl p-6 shadow-lg mx-auto max-w-4xl mt-8 border border-white/20"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/90">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
                  <Input 
                    type="text" 
                    placeholder="Où voulez-vous aller?"
                    className="pl-10 bg-white bg-opacity-20 border-white/30 text-white placeholder:text-white/60 focus:ring-white/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/90">Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal bg-white bg-opacity-20 border-white/30 text-white"
                    >
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {date ? format(date, 'PPP', { locale: fr }) : <span className="text-white/60">Choisir une date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/90">Voyageurs</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
                  <Select value={travelers} onValueChange={setTravelers}>
                    <SelectTrigger className="pl-10 bg-white bg-opacity-20 border-white/30 text-white focus:ring-white/50">
                      <SelectValue placeholder="Nombre de personnes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 voyageur</SelectItem>
                      <SelectItem value="2">2 voyageurs</SelectItem>
                      <SelectItem value="3">3 voyageurs</SelectItem>
                      <SelectItem value="4">4 voyageurs</SelectItem>
                      <SelectItem value="5+">5+ voyageurs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium opacity-0">Rechercher</label>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-primary font-semibold shadow-button">
                  <Search size={18} className="mr-2" />
                  <span>Rechercher</span>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Call to actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mt-12"
          >
            <div className="flex items-center px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              <div className="mr-3 p-2 bg-secondary/20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm">Séjours personnalisés</span>
            </div>
            
            <div className="flex items-center px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              <div className="mr-3 p-2 bg-secondary/20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm">Guides locaux francophones</span>
            </div>
            
            <div className="flex items-center px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              <div className="mr-3 p-2 bg-secondary/20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm">Service client 24/7</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#ffffff">
          <path fillOpacity="1" d="M0,192L48,170.7C96,149,192,107,288,112C384,117,480,171,576,176C672,181,768,139,864,122.7C960,107,1056,117,1152,128C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
