import React, { useState } from 'react';
import {
  Map,
  Calendar,
  Hotel,
  Car,
  Users,
  Shield,
  ChevronRight,
  Check,
  ArrowRight,
  Star
} from 'lucide-react';

const Services = () => {
  // Enhanced services data with color themes
  const services = [
    {
      id: 1,
      title: "Circuits Exclusifs",
      description: "Des voyages uniques conçus par des experts locaux pour vous faire découvrir le vrai Sénégal",
      icon: Map,
      color: "indigo",
      features: ["Guides francophones", "Petits groupes", "Sites uniques"]
    },
    {
      id: 2,
      title: "Voyages Sur Mesure",
      description: "Des itinéraires entièrement personnalisés selon vos envies, votre budget et votre rythme",
      icon: Calendar,
      color: "purple",
      features: ["Sur mesure", "Flexible", "Personnalisé"]
    },
    {
      id: 3,
      title: "Hébergements Premium",
      description: "Sélection rigoureuse d'hôtels, lodges et hébergements authentiques pour un confort optimal",
      icon: Hotel,
      color: "rose",
      features: ["Confort", "Authenticité", "Qualité"]
    },
    {
      id: 4,
      title: "Transport de Luxe",
      description: "Véhicules climatisés récents avec chauffeurs-guides expérimentés et francophones",
      icon: Car,
      color: "amber",
      features: ["Climatisés", "Confortables", "Sécurisés"]
    },
    {
      id: 5,
      title: "Guides Locaux Experts",
      description: "Accompagnement par des guides passionnés qui partagent leur culture et leurs connaissances",
      icon: Users,
      color: "emerald",
      features: ["Locaux", "Experts", "Passionnés"]
    },
    {
      id: 6,
      title: "Assistance 24/7",
      description: "Support permanent pendant votre séjour pour une tranquillité d'esprit absolue",
      icon: Shield,
      color: "blue",
      features: ["24/7", "Réactif", "Efficace"]
  ];

  // Color mappings for different card styles
  const colorStyles = {
    indigo: {
      light: "bg-indigo-50",
      medium: "from-indigo-500 to-indigo-600",
      text: "text-indigo-600",
      shadow: "shadow-indigo-500/20",
      border: "border-indigo-100",
      hover: "group-hover:border-indigo-200 group-hover:shadow-indigo-500/30"
    },
    purple: {
      light: "bg-purple-50",
      medium: "from-purple-500 to-purple-600",
      text: "text-purple-600",
      shadow: "shadow-purple-500/20",
      border: "border-purple-100",
      hover: "group-hover:border-purple-200 group-hover:shadow-purple-500/30"
    },
    rose: {
      light: "bg-[#FFC3BC]/10",
      medium: "from-[#FFC3BC] to-[#ff9d94]",
      text: "text-[#FFC3BC]",
      shadow: "shadow-[#FFC3BC]/20",
      border: "border-[#FFC3BC]/20",
      hover: "group-hover:border-[#FFC3BC]/30 group-hover:shadow-[#FFC3BC]/30"
    },
    amber: {
      light: "bg-amber-50",
      medium: "from-amber-500 to-amber-600",
      text: "text-amber-600",
      shadow: "shadow-amber-500/20",
      border: "border-amber-100",
      hover: "group-hover:border-amber-200 group-hover:shadow-amber-500/30"
    },
    emerald: {
      light: "bg-emerald-50",
      medium: "from-emerald-500 to-emerald-600",
      text: "text-emerald-600",
      shadow: "shadow-emerald-500/20",
      border: "border-emerald-100",
      hover: "group-hover:border-emerald-200 group-hover:shadow-emerald-500/30"
    },
    blue: {
      light: "bg-blue-50",
      medium: "from-blue-500 to-blue-600",
      text: "text-blue-600",
      shadow: "shadow-blue-500/20",
      border: "border-blue-100",
      hover: "group-hover:border-blue-200 group-hover:shadow-blue-500/30"
  };

  // State for tracking which card is hovered
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-8 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-[#18133E]/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-[#FFC3BC]/5 blur-3xl"></div>
        <div className="absolute top-1/4 right-10 w-48 h-48 rounded-full bg-purple-500/5 blur-3xl"></div>

        {/* Animated decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-[#FFC3BC]/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-[#18133E]/20 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-[#FFC3BC]/10 text-[#18133E] text-sm font-medium mb-4 border border-[#FFC3BC]/20">
            Services Exclusifs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#18133E]">
            Une expérience de voyage exceptionnelle
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#FFC3BC] to-[#FFC3BC]/30 rounded-full mx-auto mb-6" />

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous vous offrons un service complet et personnalisé pour un voyage inoubliable au Sénégal
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const style = colorStyles[service.color] || colorStyles.indigo;
            const isHovered = hoveredCard === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group bg-white rounded-2xl p-8 shadow-md ${style.shadow} hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border ${style.border} ${style.hover}`}
              >
                {/* Icon with enhanced animation */}
                <div className="mb-6 relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${style.medium} shadow-lg flex items-center justify-center text-white relative z-10 transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
                    <service.icon size={28} />
                  </div>

                  {/* Glow effect on hover */}
                  <div className={`absolute -inset-2 bg-gradient-to-br ${style.medium} rounded-full -z-10 transition-opacity duration-300 ${isHovered ? 'opacity-30 blur-xl' : 'opacity-0'}`} />
                </div>

                {/* Content with enhanced animations */}
                <h3 className="text-2xl font-bold mb-3 text-[#18133E] group-hover:text-[#271D5B] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 flex-grow mb-6">{service.description}</p>

                {/* Features tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2 py-1 rounded-full ${style.light} ${style.text} font-medium flex items-center gap-1`}
                    >
                      <Check className="h-3 w-3" />
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className={`flex items-center text-sm font-medium ${style.text} cursor-pointer`}>
                      En savoir plus
                      <ChevronRight className={`h-4 w-4 ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                    </span>

                    <div className={`flex items-center gap-1 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                      <Star className={`h-3 w-3 ${style.text} fill-current`} />
                      <Star className={`h-3 w-3 ${style.text} fill-current`} />
                      <Star className={`h-3 w-3 ${style.text} fill-current`} />
                    </div>
                  </div>
                </div>

                {/* Bottom border animation */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${style.medium} rounded-b-2xl transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            );
          })}
        </div>

        {/* Enhanced call-to-action */}
        <div className="mt-16 text-center">
          <ButtonEffect>
            <a
              href="#contactez-nous"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#18133E] to-[#271D5B] text-white py-3 px-6 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span>Découvrir tous nos services</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </ButtonEffect>

          <div className="flex justify-center mt-8 space-x-8">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-[#FFC3BC]" />
              <span className="text-sm text-gray-600">Garantie satisfait ou remboursé</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#FFC3BC]" />
              <span className="text-sm text-gray-600">Guides expérimentés</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Button effect component for attractive hover effects
const ButtonEffect = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute -inset-1 bg-gradient-to-r from-[#FFC3BC]/30 to-[#18133E]/20 rounded-full blur-md transition-opacity duration-300 ${isHovered ? 'opacity-70' : 'opacity-0'}`} />

      {children}

      {/* Particle effects on hover */}
      {isHovered && (
        <>
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 right-4 w-2 h-2 rounded-full bg-white animate-ping"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '0.8s'
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Services;
