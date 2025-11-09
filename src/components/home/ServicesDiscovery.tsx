import React, { useState } from 'react';
import { ArrowRight, Search, Clock, Settings, Sparkles, Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesDiscovery = () => {
  // Services cards data
  const services = [
    {
      icon: <Search className="h-5 w-5" />,
      title: "Orientation",
      description: "Conseils pour ton parcours académique",
      color: "indigo"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Accompagnement",
      description: "Suivi régulier tout au long de ton cursus",
      color: "purple"
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Démarches administratives",
      description: "Assistance pour tes formalités en France",
      color: "rose"
    }
  ];

  return (
    <section className="py-8 md:py-8 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

        {/* Enhanced gradient shapes */}
        <div
          className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-b from-[#FFC3BC]/5 to-transparent rounded-full opacity-70 blur-3xl -z-10"
        />
        <div
          className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-t from-[#18133E]/5 to-transparent rounded-full opacity-50 blur-3xl -z-10"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - Enhanced */}
          <div className="lg:pr-8">
            <div className="inline-block mb-6">
              <span className="bg-[#FFC3BC]/10 py-1 px-3 rounded-full text-sm text-[#18133E] font-medium border border-[#FFC3BC]/20 shadow-sm">
                Nos Services
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#18133E] tracking-tight">
              Découvre une gamme complète
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-[#FFC3BC] to-[#FFC3BC]/30 rounded-full mb-6" />

            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Nous proposons un accompagnement global aux jeunes qui nous confient leur projet d'études. Notre offre est basée sur vos besoins et ne cesse de s'enrichir pour répondre à vos préoccupations.
            </p>
            
            {/* Feature bullets */}
            <div className="space-y-3 mb-10">
              {[
                "Expertise en mobilité étudiante",
                "Écoute et disponibilité",
                "Documents fiables et sécurisés"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="bg-[#FFC3BC]/10 rounded-full p-1">
                    <Check className="h-3.5 w-3.5 text-[#FFC3BC]" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="inline-block">
              <Button asChild className="bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all duration-300 border-0">
                <Link to="/services" className="flex items-center">
                  <span className="mr-2">CENTRE DE SERVICES</span>
                  <div>
                    <ArrowRight size={18} />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Services Cards - Enhanced */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
              />
            ))}
          </div>
        </div>
        
        {/* Bottom decoration - Enhanced */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-2 text-sm bg-[#18133E]/5 py-2 px-4 rounded-full">
            <Star className="h-4 w-4 text-[#FFC3BC] fill-[#FFC3BC]" />
            <span className="text-[#18133E]">Des solutions adaptées à tes besoins</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Component for service card with enhanced animations and colors
const ServiceCard = ({ icon, title, description, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Color mappings for different card styles
  const colorStyles = {
    indigo: {
      bg: "bg-indigo-50",
      icon: "text-indigo-600",
      border: "bg-indigo-500",
      hover: "hover:border-indigo-200 hover:shadow-indigo-100"
    },
    purple: {
      bg: "bg-purple-50",
      icon: "text-purple-600",
      border: "bg-purple-500",
      hover: "hover:border-purple-200 hover:shadow-purple-100"
    },
    rose: {
      bg: "bg-[#FFC3BC]/10",
      icon: "text-[#FFC3BC]",
      border: "bg-[#FFC3BC]",
      hover: "hover:border-[#FFC3BC]/20 hover:shadow-[#FFC3BC]/10"
    }
  };

  const style = colorStyles[color] || colorStyles.indigo;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-white rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-all duration-300 overflow-hidden ${style.hover}`}
    >
      <div className="p-6 flex items-start gap-4 relative">
        {/* Enhanced icon container */}
        <div className={`${style.bg} rounded-xl p-3 ${style.icon} transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-xl text-[#18133E] mb-1">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        {/* Enhanced arrow animation */}
        {isHovered && (
          <div className="ml-auto self-center transition-all duration-300">
            <div className={`${style.bg} p-2 rounded-full`}>
              <ArrowRight size={16} className={style.icon} />
            </div>
          </div>
        )}
      </div>

      {/* Enhanced bottom border animation */}
      <div className={`h-1 ${style.border} transition-all duration-400 ${isHovered ? 'w-full' : 'w-0'}`} />
    </div>
  );
};

export default ServicesDiscovery;