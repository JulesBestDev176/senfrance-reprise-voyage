import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">SenFrance depuis 2021</h3>
            <p className="text-white/80 mb-4">
              Spécialiste de la mobilité étudiante vers la France. Des centaines
              d’étudiants accompagnés et conseillés. Une satisfaction client
              incomparable.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://api.whatsapp.com/message/3EL3Z6GKPQIQE1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://www.facebook.com/senfrance#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/senfrance.sas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Information légales */}
          <div>
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Conditions générales
                </Link>
              </li>
              <li>
                <Link
                  to="/legals"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  15 quai des Chartrons, Bordeaux - France
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <span className="text-white/80">+33 9 72 14 66 97</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <span className="text-white/80">+33 7 44 51 82 96</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <span className="text-white/80">contact@senfrance.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-8 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} SenFrance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
