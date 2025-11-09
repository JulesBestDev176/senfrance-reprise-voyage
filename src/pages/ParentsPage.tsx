import React, { useRef, useState } from 'react';
import { 
  ArrowRight, 
  Users, 
  Check, 
  Clock, 
  Shield, 
  Heart, 
  Phone, 
  Home, 
  Plane, 
  Briefcase, 
  Headphones, 
  MapPin, 
  Calendar, 
  Star,
  Sparkles,
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const ParentsPage = () => {
  useScrollToTop();
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  // Features data
  const features = [
    {
      id: 1,
      title: "Entretien préliminaire",
      description: "L'un de nos conseillers prend en charge votre demande. Sont pris en compte vos souhaits et vos préférences : ville d'accueil, formation envisagée...",
      icon: <MessageCircle />,
      color: "indigo"
    },
    {
      id: 2,
      title: "Tarification claire et avantageuse",
      description: "En moins de 24h, vous recevez un devis sans frais cachés. Une fois que vous avez payé pour l'un de nos services, vous avez droit automatiquement à une remise sur tous les autres.",
      icon: <Check />,
      color: "purple"
    },
    {
      id: 3,
      title: "Suivi personnalisé du dossier",
      description: "Suivez la demande de votre enfant tout au long du processus, qu'il s'agisse d'une inscription dans un établissement d'enseignement supérieur, d'une recherche de logement ou d'une caution bancaire pour études à l'étranger.",
      icon: <Clock />,
      color: "rose"
    },
    {
      id: 4,
      title: "Accompagnement avant le départ",
      description: "Planifiez le voyage avec nous. Avec notre gamme de services, le billet d'avion, l'assurance voyage et le futur logement ne seront plus source de problèmes.",
      icon: <Plane />,
      color: "amber"
    },
    {
      id: 5,
      title: "Accueil à l'arrivée en France",
      description: "Nous pouvons aller chercher l'étudiant à l'aéroport et l'emmener à son domicile. C'est un service populaire auprès des parents qui peuvent dormir l'esprit tranquille.",
      icon: <MapPin />,
      color: "emerald"
    },
    {
      id: 6,
      title: "Aide à l'installation",
      description: "SenFrance suit votre enfant pendant les deux premiers mois de son arrivée dans le pays d'accueil. Puis pendant tout son cursus, nous restons disponibles pour l'aider et l'aiguiller.",
      icon: <Home />,
      color: "blue"
  }
  ];
  
  // Color mappings for different feature styles
  const colorStyles = {
    indigo: {
      light: "bg-indigo-50",
      medium: "bg-indigo-500",
      dark: "bg-indigo-600",
      text: "text-indigo-600",
      border: "border-indigo-100",
      hover: "group-hover:border-indigo-200 group-hover:shadow-indigo-100/40",
      icon: "from-indigo-500 to-indigo-600",
      shadow: "shadow-indigo-500/20"
    },
    purple: {
      light: "bg-purple-50",
      medium: "bg-purple-500",
      dark: "bg-purple-600",
      text: "text-purple-600",
      border: "border-purple-100",
      hover: "group-hover:border-purple-200 group-hover:shadow-purple-100/40",
      icon: "from-purple-500 to-purple-600",
      shadow: "shadow-purple-500/20"
    },
    rose: {
      light: "bg-[#FFC3BC]/10",
      medium: "bg-[#FFC3BC]",
      dark: "bg-[#ff9d94]",
      text: "text-[#FFC3BC]",
      border: "border-[#FFC3BC]/20",
      hover: "group-hover:border-[#FFC3BC]/30 group-hover:shadow-[#FFC3BC]/20",
      icon: "from-[#FFC3BC] to-[#ff9d94]",
      shadow: "shadow-[#FFC3BC]/20"
    },
    amber: {
      light: "bg-amber-50",
      medium: "bg-amber-500",
      dark: "bg-amber-600",
      text: "text-amber-600",
      border: "border-amber-100",
      hover: "group-hover:border-amber-200 group-hover:shadow-amber-100/40",
      icon: "from-amber-500 to-amber-600",
      shadow: "shadow-amber-500/20"
    },
    emerald: {
      light: "bg-emerald-50",
      medium: "bg-emerald-500",
      dark: "bg-emerald-600",
      text: "text-emerald-600",
      border: "border-emerald-100",
      hover: "group-hover:border-emerald-200 group-hover:shadow-emerald-100/40",
      icon: "from-emerald-500 to-emerald-600",
      shadow: "shadow-emerald-500/20"
    },
    blue: {
      light: "bg-blue-50",
      medium: "bg-blue-500",
      dark: "bg-blue-600",
      text: "text-blue-600",
      border: "border-blue-100",
      hover: "group-hover:border-blue-200 group-hover:shadow-blue-100/40",
      icon: "from-blue-500 to-blue-600",
      shadow: "shadow-blue-500/20"
  }
  };
  
  // Benefits cards
  const benefits = [
    {
      title: "Tranquillité d'esprit",
      description: "Ayez l'assurance que votre enfant est bien accompagné dans toutes ses démarches",
      icon: <Shield />,
      color: "purple",
      delay: 0.1
    },
    {
      title: "Suivi en temps réel",
      description: "Accédez à toutes les informations concernant le dossier de votre enfant à tout moment",
      icon: <Clock />,
      color: "indigo",
      delay: 0.2
    },
    {
      title: "Accompagnement complet",
      description: "Bénéficiez d'un accompagnement à chaque étape, des formalités administratives à l'installation",
      icon: <CheckCircle />,
      color: "rose",
      delay: 0.3
    },
    {
      title: "Service personnalisé",
      description: "Profitez d'un service sur mesure adapté aux besoins spécifiques de votre enfant",
      icon: <Heart />,
      color: "amber",
      delay: 0.4
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen flex items-start justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFC3BC]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#18133E]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[#FFC3BC]/30 bg-[#FFC3BC]/10">
              <span className="text-sm font-medium text-[#18133E]">Espace Parents</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#18133E]">
              Des parents rassurés pour un avenir radieux
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Suivez le parcours de votre enfant en temps réel et bénéficiez d'un accompagnement complet.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button asChild className="bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] text-[#18133E] hover:from-[#ff9d94] hover:to-[#FFC3BC] rounded-full px-8 py-6 text-lg font-medium border-0">
                <Link to="/contact" className="flex items-center gap-2">
                  <span>Parler à un conseiller</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#18133E]/20 text-[#18133E] hover:bg-[#18133E]/5 rounded-full px-8 py-6 text-lg font-medium">
                <a href='https://www.senfrance.fr/login-senfrance/parent'>
                  <span>Accéder au portail</span>
                </a>
              </Button>
            </div>
            
            {/* Contact rapide */}
            <div className="flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 max-w-md mx-auto">
              <div className="w-12 h-12 bg-[#FFC3BC]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-[#FFC3BC]" />
              </div>
              <div className="text-left">
                <p className="text-gray-500 text-sm">Besoin d'aide ?</p>
                <p className="text-[#18133E] font-medium">+33 (0)9 72 14 66 97</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Process Section */}
      <div className="py-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full bg-[#FFC3BC]/5 blur-3xl transition-all duration-300"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-full bg-[#18133E]/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-[#FFC3BC]/10 text-[#18133E] text-sm font-medium mb-4 border border-[#FFC3BC]/20">
              Notre processus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18133E]">
              Un accompagnement de qualité à chaque étape
            </h2>
            <div className="h-1 bg-gradient-to-r from-[#FFC3BC] to-[#FFC3BC]/30 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600">
              Nous vous proposons un processus clair et transparent, conçu pour vous offrir une tranquillité d'esprit totale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const style = colorStyles[feature.color as keyof typeof colorStyles];
              const isActive = activeFeature === feature.id;
              
              return (
                <div
                  key={feature.id}
                  onMouseEnter={() => setActiveFeature(feature.id)}
                  onMouseLeave={() => setActiveFeature(null)}
                  className={`group bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 h-full`}
                >
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#FFC3BC] to-[#ff9d94] flex items-center justify-center text-white">
                    {React.cloneElement(feature.icon, { className: "h-7 w-7" })}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-[#18133E]">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                  
                  <div className="mt-6 h-1 bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] rounded-full">
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="py-8 bg-[#18133E] text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#FFC3BC]/10 blur-3xl transition-all duration-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-xl max-w-md ml-auto transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#FFC3BC]/20 flex items-center justify-center">
                      <Star className="h-6 w-6 text-[#FFC3BC]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Expérience de qualité</h4>
                      <p className="text-white/70 text-sm">Parents satisfaits et rassurés</p>
                    </div>
                  </div>
                  <p className="text-white/80">
                    "SenFrance a transformé ce qui aurait pu être un processus stressant en une expérience sereine. Ma fille est maintenant épanouie à Paris."
                  </p>
                  <p className="text-right text-white/60 text-sm mt-2">
                    — Mariama D., parent d'étudiant
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-xl max-w-md mt-6 relative z-20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#FFC3BC]/20 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-[#FFC3BC]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Suivi transparent</h4>
                      <p className="text-white/70 text-sm">Accès à toutes les informations</p>
                    </div>
                  </div>
                  <p className="text-white/80">
                    "Ce qui m'a le plus rassuré, c'est de pouvoir suivre chaque étape en temps réel. Le suivi est impeccable et très professionnel."
                  </p>
                  <p className="text-right text-white/60 text-sm mt-2">
                    — Paul M., parent d'étudiant
                  </p>
                </div>
                
                <div className="absolute -top-6 -left-6 -right-6 -bottom-6 border-2 border-dashed border-white/10 rounded-2xl -z-10 transition-all duration-300"></div>
              </div>
            </div>
            
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium mb-4 border border-white/20">
                Avantages
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pourquoi nous faire confiance ?
              </h2>
              <div className="h-1 bg-gradient-to-r from-[#FFC3BC] to-transparent rounded-full mb-6"></div>
              <p className="text-white/80 mb-8">
                Nous prenons le relais tout en vous rendant compte à chaque étape. Notre approche centrée sur la famille garantit:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => {
                  const style = colorStyles[benefit.color as keyof typeof colorStyles];
                  
                  return (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${style.icon} flex-shrink-0`}>
                          {React.cloneElement(benefit.icon, { className: "h-5 w-5 text-white" })}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                          <p className="text-white/70 text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Call-to-action Section */}
      <div className="py-8 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full bg-[#FFC3BC]/5 blur-3xl transition-all duration-300"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 text-center transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#18133E] to-[#271D5B] rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18133E]">
              Donnez à votre enfant les meilleures chances
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Commencez dès aujourd'hui l'aventure SenFrance et accompagnez sereinement votre enfant vers la réussite académique et professionnelle.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white rounded-full px-8 py-6 text-lg font-medium">
                <Link to="/contact" className="flex items-center gap-2">
                  <span>Prendre rendez-vous</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentsPage;