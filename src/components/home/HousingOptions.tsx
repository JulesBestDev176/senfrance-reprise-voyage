import React, { useState } from 'react';
import { ArrowRight, Home, FileText, CheckCircle, MapPin, Calendar, Key } from 'lucide-react';
import { Link } from 'react-router-dom';

const HousingOptions = () => {
  return (
    <section className="py-8 relative overflow-hidden">
      {/* Arrière-plan stylisé */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-white">
        <div className="absolute inset-0 opacity-40 bg-[url('/grid-pattern.svg')] bg-center"></div>
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-100 blur-3xl opacity-30"
        />
        <div 
          className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-pink-100 blur-3xl opacity-30"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#271D5B] tracking-wider uppercase bg-[#FFC3BC]/10 py-1 px-3 rounded-full mb-3 border border-[#FFC3BC]/20">
            Solutions de logement
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Trouve l'hébergement parfait pour tes études
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des solutions adaptées à chaque situation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Reservation Card */}
          <HousingCard 
            icon={<Home />}
            title="Hébergement avec réservation"
            subtitle="Sécurise ton logement à distance"
            description="Tu as été accepté dans une école française, mais tu es ressortissant étranger et tu dois passer par une demande de visa... Pour faciliter tes démarches, obtiens d'ores et déjà une réservation de logement SenFrance et une attestation d'hébergement. Complète les étapes pour la signature du bail quand tu seras en France."
            features={[
              "Attestation de logement",
              "Réservation rapide",
              "Processus simplifié"
            ]}
            link="/visa/hebergement"
            linkText="Réserver un logement"
            color="indigo"
            delay={0}
          />

          {/* Lease Card */}
          <HousingCard 
            icon={<FileText />}
            title="Signature de bail à distance"
            subtitle="Solution complète et sécurisée"
            description="Si tu veux signer ton bail à distance avant même ton arrivée en France, tu en as la possibilité. Le bail te servira d'attestation d'hébergement et sera suffisant pour toutes tes démarches, y compris la demande de visa. Cette solution est plus coûteuse. Mais si tu es déjà en France pour tes études, pouvoir signer un bail avec nos partenaires est une vraie opportunité."
            features={[
              "Bail reconnu par les autorités",
              "Processus 100% en ligne",
              "Partenaires de confiance"
            ]}
            link="/visa/hebergement"
            linkText="Signer un bail"
            color="pink"
            delay={0.2}
          />
        </div>

        <div
          className="mt-16 text-center"
        >
          <Link 
            to="/visa/hebergement" 
            className="inline-flex items-center text-[#271D5B] font-medium hover:text-[#18133E] transition-colors group bg-white/80 backdrop-blur-sm py-3 px-6 rounded-full shadow-sm hover:shadow transition-all duration-300"
          >
            <span>Explorer toutes nos options de logement</span>
            <div
              className="ml-2"
            >
              <ArrowRight size={18} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Composant de carte de logement avec animations et effets de survol
const HousingCard = ({ icon, title, subtitle, description, features, link, linkText, color, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl shadow-lg group transition-all duration-500 hover:shadow-xl hover:shadow-[#271D5B]/10 hover:border-[#FFC3BC]/30"
    >
      <div className="p-8 md:p-10 h-full flex flex-col">
        <div className="flex items-center mb-6">
          <div 
            className="p-3 rounded-xl bg-gradient-to-br from-[#FFC3BC] to-[#ff9d94] text-white transition-transform duration-300 group-hover:scale-110"
          >
            {React.cloneElement(icon, { className: "h-6 w-6" })}
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <p className="text-[#271D5B] font-medium">{subtitle}</p>
          </div>
        </div>

        <p className="text-gray-600 mb-6 flex-grow">
          {description}
        </p>

        {/* Features list */}
        <div className="mb-8">
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start"
              >
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-[#271D5B] flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Button with hover animation */}
        <div
          className="mt-auto"
        >
          <Link 
            to={link} 
            className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] hover:from-[#ff9d94] hover:to-[#FFC3BC] text-[#18133E] font-medium transition-all duration-300 shadow-sm hover:shadow border-0"
          >
            <span>{linkText}</span>
            <div
              className="ml-2"
            >
              <ArrowRight size={18} />
            </div>
          </Link>
        </div>
      </div>

      {/* Background spotlight effect on hover */}
      <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute -inset-[3px] bg-[#FFC3BC]/5 blur-md rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
      </div>
    </div>
  );
};

export default HousingOptions;