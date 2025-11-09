import React from 'react';
import { ArrowRight, Home, Wallet, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MainServices = () => {
  return (
    <section className="relative">


      {/* Main content starts below the wave */}
      <div className="py-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-100 rounded-full opacity-30"></div>
          <div className="absolute bottom-10 -left-20 w-80 h-80 bg-pink-100 rounded-full opacity-30"></div>
          <div className="absolute top-60 left-1/3 w-4 h-4 bg-indigo-400 rounded-full opacity-50"></div>
          <div className="absolute bottom-40 right-1/4 w-6 h-6 bg-pink-400 rounded-full opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Nos services essentiels</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous avons identifié les éléments clés pour réussir ta demande de visa étudiant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Housing Section */}
            <ServiceCard
              icon={<Home />}
              title="Trouvez le logement idéal"
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
              title="Justifie tes ressources avec l'AVI"
              description="L'attestation de virement irrévocable est l'une des méthodes agréées par les services consulaires pour prouver que tu as les moyens de financer ton projet."
              buttonText="AVI"
              link="/visa/avi"
              direction="right"
              delay={0.4}
              color="purple"
            />
          </div>

          <div className="mt-16 text-center">
            <Link to="/services" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors group">
              <span>Découvrir tous nos services</span>
              <ExternalLink size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
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
    <div className={`rounded-2xl p-8 border border-gray-100 bg-white shadow-lg transition-all duration-300 group hover:shadow-xl hover:-translate-y-1 ${styles.shadow}`}>
      <div className="flex flex-col h-full">
        <div className="flex items-start mb-5">
          <div className={`rounded-2xl w-14 h-14 flex items-center justify-center ${styles.iconBg} transition-transform duration-300 group-hover:scale-110`}>
            {React.cloneElement(icon, { className: "h-7 w-7" })}
          </div>
          <div className="ml-5 flex-1">
            <h3 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${styles.hover}`}>
              {title}
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded group-hover:from-indigo-300 group-hover:to-purple-300 transition-colors duration-500"></div>
          </div>
        </div>

        <p className="text-gray-600 mb-7 flex-grow">
          {description}
        </p>

        <div className="mt-auto">
          <Button
            asChild
            className={`bg-gradient-to-r ${styles.button} text-white font-medium px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center`}
          >
            <Link to={link}
                className="flex items-center">
              <span>{buttonText}</span>
              <ArrowRight size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainServices;
