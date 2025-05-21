import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, User, Search, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white py-2"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo redesigné */}
        <Link to="/" className="flex items-center">
          <div className="bg-primary text-white px-2 py-1 rounded">
            <span className="text-lg font-black tracking-wide uppercase">
              SENFRANCE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Redesigné */}
        <nav className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {/* Bouton Vérificateur */}
              <NavigationMenuItem>
                <a
  href="https://www.senfrance.fr/verificateur"
  className={cn(
    'group inline-flex h-10 w-max items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 border border-green-600 bg-green-100 hover:bg-green-200 text-green-700',
    location.pathname.includes('/verificateur') 
      ? 'font-semibold bg-green-200' 
      : ''
  )}
>
  <Search size={16} className="mr-2" />
  Vérificateur
</a>

              </NavigationMenuItem>
            
              {/* Étudiants */}
              <NavigationMenuItem>
                <Link to="/etudiants" className={cn(
                  'group inline-flex h-8 w-max items-center justify-center rounded-full px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary',
                  location.pathname.includes('/etudiants') 
                    ? 'text-primary font-semibold bg-primary/5' 
                    : 'text-foreground'
                )}>
                  Étudiants
                </Link>
              </NavigationMenuItem>
              
              {/* Parents */}
              <NavigationMenuItem>
                <Link to="/parents" className={cn(
                  'group inline-flex h-8 w-max items-center justify-center rounded-full px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary',
                  location.pathname.includes('/parents') 
                    ? 'text-primary font-semibold bg-primary/5' 
                    : 'text-foreground'
                )}>
                  Parents
                </Link>
              </NavigationMenuItem>
              
              {/* Demande de visa */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  'rounded-full h-8 px-3 transition-all duration-200 hover:bg-primary/10',
                  location.pathname.includes('/visa') || location.pathname.includes('/avi') || location.pathname.includes('/hebergement')
                    ? 'text-primary font-semibold bg-primary/5' 
                    : 'text-foreground'
                )}>
                  Demande de visa
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[240px] gap-1 p-3 md:w-[320px] bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
                    <li>
                      <Link to="/visa/avi" className="block select-none space-y-1 rounded-md p-3 hover:bg-primary/5 transition-all duration-200">
                        <div className="font-medium">AVI</div>
                        <p className="text-sm text-muted-foreground">
                          Attestation de virement irrévocable
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/visa/hebergement" className="block select-none space-y-1 rounded-md p-3 hover:bg-primary/5 transition-all duration-200">
                        <div className="font-medium">Hébergement</div>
                        <p className="text-sm text-muted-foreground">
                          Réservation et attestation d'hébergement
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* Vivre en France */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  'rounded-full h-8 px-3 transition-all duration-200 hover:bg-primary/10',
                  location.pathname.includes('/vivre-en-france') 
                    ? 'text-primary font-semibold bg-primary/5' 
                    : 'text-foreground'
                )}>
                  Vivre en France
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[240px] gap-1 p-3 md:w-[320px] bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
                    <li>
                      <Link to="/vivre-en-france/job-etudiant" className="block select-none space-y-1 rounded-md p-3 hover:bg-primary/5 transition-all duration-200">
                        <div className="font-medium">Job étudiant</div>
                        <p className="text-sm text-muted-foreground">
                          Opportunités de travail pendant vos études
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/vivre-en-france/assurances" className="block select-none space-y-1 rounded-md p-3 hover:bg-primary/5 transition-all duration-200">
                        <div className="font-medium">Assurances</div>
                        <p className="text-sm text-muted-foreground">
                          Protégez-vous pendant votre séjour
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* Tarifs */}
              <NavigationMenuItem>
                <Link to="/tarifs" className={cn(
                  'group inline-flex h-8 w-max items-center justify-center rounded-full px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary',
                  location.pathname.includes('/tarifs') 
                    ? 'text-primary font-semibold bg-primary/5' 
                    : 'text-foreground'
                )}>
                  Tarifs
                </Link>
              </NavigationMenuItem>
              
              {/* Contact */}
              <NavigationMenuItem>
                <Link to="/contact" className={cn(
                  'group inline-flex h-8 w-max items-center justify-center rounded-full px-3 py-1 text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary',
                  location.pathname.includes('/contact') 
                    ? 'text-primary font-semibold bg-primary/5' 
                    : 'text-foreground'
                )}>
                  <Mail size={15} className="mr-1" />
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <a href="https://www.senfrance.fr/login-senfrance/student" className="ml-3 rounded-full bg-primary hover:bg-primary/90 text-white flex items-center gap-1 px-4 py-1 transition-all duration-300 hover:shadow-md">
            <User size={15} />
            <span>Connexion</span>
          </a>
        </nav>

        {/* Mobile Menu Button - Redesigné */}
        <button 
          className="md:hidden text-foreground bg-primary/5 p-2 rounded-full hover:bg-primary/10 transition-all duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation - Redesigné */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-md absolute top-full left-0 right-0 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-2">
              {/* Bouton Vérificateur - mobile */}
              <a
                href="https://www.senfrance.fr/verificateur"
                className="py-3 px-4 font-medium bg-primary/10 text-primary hover:bg-primary/20 rounded-lg transition-all duration-200 flex items-center"
              >
                <Search size={18} className="mr-2" />
                Vérificateur
              </a>
              
              <Link
                to="/etudiants"
                className="py-3 px-4 font-medium hover:bg-primary/5 rounded-lg transition-all duration-200"
              >
                Étudiants
              </Link>
              <Link
                to="/parents"
                className="py-3 px-4 font-medium hover:bg-primary/5 rounded-lg transition-all duration-200"
              >
                Parents
              </Link>
              
              {/* Demande de visa - mobile */}
              <div className="py-2 px-4">
                <div className="font-medium mb-2 text-primary/80">Demande de visa</div>
                <div className="ml-4 flex flex-col space-y-1">
                  <Link
                    to="/visa/avi"
                    className="py-2 px-3 text-sm hover:bg-primary/5 rounded-md transition-all duration-200"
                  >
                    AVI
                  </Link>
                  <Link
                    to="/visa/hebergement"
                    className="py-2 px-3 text-sm hover:bg-primary/5 rounded-md transition-all duration-200"
                  >
                    Hébergement
                  </Link>
                </div>
              </div>
              
              {/* Vivre en France - mobile */}
              <div className="py-2 px-4">
                <div className="font-medium mb-2 text-primary/80">Vivre en France</div>
                <div className="ml-4 flex flex-col space-y-1">
                  <Link
                    to="/vivre-en-france/job-etudiant"
                    className="py-2 px-3 text-sm hover:bg-primary/5 rounded-md transition-all duration-200"
                  >
                    Job étudiant
                  </Link>
                  <Link
                    to="/vivre-en-france/assurances"
                    className="py-2 px-3 text-sm hover:bg-primary/5 rounded-md transition-all duration-200"
                  >
                    Assurances
                  </Link>
                </div>
              </div>
              
              <Link
                to="/tarifs"
                className="py-3 px-4 font-medium hover:bg-primary/5 rounded-lg transition-all duration-200"
              >
                Tarifs
              </Link>
              
              {/* Contact - mobile */}
              <Link
                to="/contact"
                className="py-3 px-4 font-medium hover:bg-primary/5 rounded-lg transition-all duration-200 flex items-center"
              >
                <Mail size={18} className="mr-2" />
                Contact
              </Link>
              
              <a href="https://www.senfrance.fr/login-senfrance/student" className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 justify-center mt-3 py-6 rounded-lg">
                <User size={18} />
                <span>Connexion</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;