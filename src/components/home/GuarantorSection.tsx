import React, { useState } from 'react';
import { ArrowRight, Shield, Home, Check, Star, TrendingUp, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const GuarantorSection = () => {
  // Animation controls
  
  return (
    <section className="py-8 relative overflow-hidden">
      {/* Background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-white -z-10">
        <div 
          className="absolute top-0 right-0 w-full h-full opacity-10"
        />
        <div 
          className="absolute -top-10 -right-10 w-80 h-80 rounded-full bg-indigo-100 blur-3xl opacity-30"
        />
        <div 
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-pink-100 blur-3xl opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#271D5B] tracking-wider uppercase bg-[#FFC3BC]/10 py-1 px-3 rounded-full mb-3 border border-[#FFC3BC]/20">
            Protection & Tranquillité
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Solutions de garantie pour ton logement
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sécurise ta location et protège ton habitat avec nos solutions d'assurance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Rental Guarantee Card */}
          <GuarantorCard 
            title="Garantie locative"
            icon={<Shield />}
            description="Avec notre partenaire privilégié, remplis ton dossier et charge tes pièces justificatives en seulement 5 minutes. Si tu ne les as pas toutes, aucun problème, tu peux les charger plus tard !"
            benefits={[
              "Demande en 5 minutes chrono",
              "Acceptation par tous les propriétaires",
              "Suivi en temps réel de ton dossier"
            ]}
            ctaText="Obtenir une garantie"
            logoText="Garantme"
            link="/vivre-en-france/assurances"
            color="indigo"
            direction="left"
            delay={0.1}
          />

          {/* Housing Insurance Card */}
          <GuarantorCard 
            title="Assurance habitation"
            icon={<Home />}
            description="Profite d'une expérience client unique et d'une alternative crédible aux assureurs traditionnels avec une offre simple, transparente et éthique qui génère la meilleure satisfaction client du marché."
            benefits={[
              "Souscription 100% en ligne",
              "Offre transparente et sans surprise",
              "Meilleure satisfaction client du marché"
            ]}
            ctaText="Souscrire une assurance"
            logoText="Luko"
            link="/vivre-en-france/assurances"
            color="pink"
            direction="right"
            delay={0.3}
          />
        </div>

        {/* Additional info */}
        <div
          className="mt-16 flex flex-col items-center"
        >
          {/* <div className="bg-white/80 backdrop-blur-sm py-3 px-5 rounded-full shadow-md flex items-center gap-2 text-sm font-medium text-gray-600">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span>Plus de 10 000 étudiants nous font confiance</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

// Dynamic, interactive card component with advanced Framer Motion animations
const GuarantorCard = ({ title, icon, description, benefits, ctaText, logoText, link, color, direction, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  
  // For advanced parallax effect on card content
      
  // Transform mouse movement to rotate card slightly
      
  // Animation for the logo spotlight effect
  
  // Handle mouse move for parallax effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <div
      className="relative group"
    >
      {/* Card glow effect on hover */}
      <div 
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] blur-lg"
      />
      
      {/* Main card */}
      <div 
        className="bg-white border border-gray-200 hover:border-[#FFC3BC]/30 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl hover:shadow-[#271D5B]/10 relative z-10 h-full"
      >
        <div className="p-8 md:p-10 flex flex-col h-full relative overflow-hidden">
          {/* Icon and title section */}
          <div className="flex items-start mb-6">
            <div 
              className="rounded-2xl p-4 bg-gradient-to-br from-[#FFC3BC] to-[#ff9d94] text-white transition-transform duration-300 group-hover:scale-110 relative z-10"
            >
              {React.cloneElement(icon, { className: "h-6 w-6" })}
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
              <div className="h-1 w-16 bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] rounded-full transition-all duration-300 group-hover:w-24"></div>
            </div>
          </div>
          
          {/* Logo section */}
          <div
            className="mb-6 relative"
          >
            <div className="h-16 w-40 rounded-xl bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] flex items-center justify-center text-[#18133E] font-bold text-xl relative overflow-hidden">
              {logoText}
              
              {/* Logo spotlight effect */}
              <div 
                className="absolute inset-0 w-full h-full"
              >
                <div 
                  className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                />
              </div>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 mb-6">
            {description}
          </p>
          
          {/* Benefits list with animated checkmarks */}
          <div className="space-y-3 mb-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3"
              >
                <div
                  className="rounded-full bg-[#FFC3BC]/20 p-1"
                >
                  <Check className="h-3.5 w-3.5 text-[#271D5B]" />
                </div>
                <span className="text-gray-700 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* Call to action button with animation */}
          <div className="mt-auto">
            <div
            >
              <Link 
                to={link} 
                className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] hover:from-[#ff9d94] hover:to-[#FFC3BC] text-[#18133E] font-medium text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow relative overflow-hidden border-0"
              >
                <span>{ctaText}</span>
                <div
                  className="ml-2"
                >
                  <ArrowRight size={18} />
                </div>
                
                {/* Button particle effect */}
                
                  {isHovered && (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute right-8 w-2 h-2 rounded-full bg-white"
                        />
                      ))}
                    </>
                  )}
                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuarantorSection;