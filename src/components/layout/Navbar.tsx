
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-heading font-bold text-primary">
            SenFrance
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {/* Étudiants */}
              <NavigationMenuItem>
                <Link to="/etudiants" className={cn(
                  'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none',
                  location.pathname.includes('/etudiants') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground'
                )}>
                  Étudiants
                </Link>
              </NavigationMenuItem>
              
              {/* Parents */}
              <NavigationMenuItem>
                <Link to="/parents" className={cn(
                  'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none',
                  location.pathname.includes('/parents') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground'
                )}>
                  Parents
                </Link>
              </NavigationMenuItem>
              
              {/* Demande de visa */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={
                  location.pathname.includes('/visa') || location.pathname.includes('/avi') || location.pathname.includes('/hebergement')
                    ? 'text-primary font-semibold' 
                    : 'text-foreground'
                }>
                  Demande de visa
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-4 md:w-[300px]">
                    <li>
                      <Link to="/visa/avi" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="font-medium">AVI</div>
                        <p className="text-sm text-muted-foreground">
                          Attestation de virement irrévocable
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/visa/hebergement" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
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
                <NavigationMenuTrigger className={
                  location.pathname.includes('/vivre-en-france') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground'
                }>
                  Vivre en France
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-4 md:w-[300px]">
                    <li>
                      <Link to="/vivre-en-france/job-etudiant" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="font-medium">Job étudiant</div>
                        <p className="text-sm text-muted-foreground">
                          Opportunités de travail pendant vos études
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/vivre-en-france/assurances" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
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
                  'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none',
                  location.pathname.includes('/tarifs') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground'
                )}>
                  Tarifs
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button className="ml-4 bg-accent hover:bg-accent/90 flex items-center gap-2">
            <span>Connexion</span>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                to="/etudiants"
                className="py-2 px-4 font-medium hover:bg-muted rounded-md"
              >
                Étudiants
              </Link>
              <Link
                to="/parents"
                className="py-2 px-4 font-medium hover:bg-muted rounded-md"
              >
                Parents
              </Link>
              
              {/* Demande de visa - mobile */}
              <div className="py-2 px-4">
                <div className="font-medium mb-2">Demande de visa</div>
                <div className="ml-4 flex flex-col space-y-2">
                  <Link
                    to="/visa/avi"
                    className="py-1 px-3 text-sm hover:bg-muted rounded-md"
                  >
                    AVI
                  </Link>
                  <Link
                    to="/visa/hebergement"
                    className="py-1 px-3 text-sm hover:bg-muted rounded-md"
                  >
                    Hébergement
                  </Link>
                </div>
              </div>
              
              {/* Vivre en France - mobile */}
              <div className="py-2 px-4">
                <div className="font-medium mb-2">Vivre en France</div>
                <div className="ml-4 flex flex-col space-y-2">
                  <Link
                    to="/vivre-en-france/job-etudiant"
                    className="py-1 px-3 text-sm hover:bg-muted rounded-md"
                  >
                    Job étudiant
                  </Link>
                  <Link
                    to="/vivre-en-france/assurances"
                    className="py-1 px-3 text-sm hover:bg-muted rounded-md"
                  >
                    Assurances
                  </Link>
                </div>
              </div>
              
              <Link
                to="/tarifs"
                className="py-2 px-4 font-medium hover:bg-muted rounded-md"
              >
                Tarifs
              </Link>
              
              <Button className="bg-accent hover:bg-accent/90 flex items-center gap-2 justify-center mt-2">
                <span>Connexion</span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
