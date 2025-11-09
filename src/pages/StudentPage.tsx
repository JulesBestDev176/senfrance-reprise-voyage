import React, { useState, useRef, ReactNode } from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  GraduationCap, 
  Home, 
  Briefcase, 
  User, 
  ArrowDownCircle,
  Coffee,
  MapPin,
  BookOpen,
  Users,
  Calendar,
  Star,
  Target,
  Heart,
  CheckCircle,
  Clock,
  Shield,
  Check,
  Sparkles,
  CreditCard,
  FileText,
  Building,
  Key
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

// Définition des types
type ColorStyleKey = 'indigo' | 'rose' | 'amber';

interface ColorStyle {
  light: string;
  medium: string;
  dark: string;
  text: string;
  border: string;
  hover: string;
  icon: string;
  button: string;
  shadow: string;
}

interface Section {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
  content: string;
  cta: string;
  ctaLink: string;
  color: ColorStyleKey;
  image: string;
}

interface ValueItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  color: ColorStyleKey;
}

const StudentPage = () => {
  useScrollToTop();
  // State for active section and pricing
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activePricing, setActivePricing] = useState<string | null>(null);
  
  // Refs for sections
  const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({});
  
  // Color mappings for different card styles
  const colorStyles: Record<ColorStyleKey, ColorStyle> = {
    indigo: {
      light: "bg-indigo-50",
      medium: "bg-indigo-500",
      dark: "bg-indigo-600",
      text: "text-indigo-600",
      border: "border-indigo-100",
      hover: "group-hover:border-indigo-200 group-hover:shadow-indigo-100/40",
      icon: "from-indigo-500 to-indigo-600",
      button: "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700",
      shadow: "shadow-indigo-500/20"
    },
    rose: {
      light: "bg-rose-50",
      medium: "bg-rose-500",
      dark: "bg-rose-600",
      text: "text-rose-600",
      border: "border-rose-100",
      hover: "group-hover:border-rose-200 group-hover:shadow-rose-100/40",
      icon: "from-rose-500 to-rose-600",
      button: "from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700",
      shadow: "shadow-rose-500/20"
    },
    amber: {
      light: "bg-amber-50",
      medium: "bg-amber-500",
      dark: "bg-amber-600",
      text: "text-amber-600",
      border: "border-amber-100",
      hover: "group-hover:border-amber-200 group-hover:shadow-amber-100/40",
      icon: "from-amber-500 to-amber-600",
      button: "from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700",
      shadow: "shadow-amber-500/20"
    }
  };
  
  // Set section ref
  const setSectionRef = (sectionId: string, node: HTMLElement | null) => {
    if (node) {
      sectionRefs.current[sectionId] = node;
    }
  };

  // Sections data with animation configs
  const sections: Section[] = [
    {
      id: "profile",
      title: "Mon profil",
      icon: <User className="w-6 h-6 text-white" />,
      description: "Parlons ensemble",
      content: "Il est primordial pour nous de travailler en étroite collaboration avec ceux qui nous confient leur destin. C'est une responsabilité que nous ne prenons pas à la légère. La première étape du voyage consiste à définir le parcours et préparer sa monture. Un projet clair et personnel est indispensable pour réussir ses études supérieures. Parlons ensemble pour trouver un plan qui te corresponde.",
      cta: "PRENDRE RENDEZ-VOUS",
      ctaLink: "/contact",
      color: "indigo",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "formation",
      title: "Choisir ma formation",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      description: "Progresser et prospérer",
      content: "L'une des premières raisons de l'échec, c'est la perte de motivation. Quand on se sent bien dans sa formation, on progresse plus vite. Un grand nombre d'étudiants ambitieux et déterminés au départ ont connu l'obstacle de l'orientation et n'ont jamais su le surmonter. \"Bien choisir\" est synonyme de \"bien commencer\" et rime avec \"bien finir\". Nous t'apportons notre expérience et nos conseils.",
      cta: "PERFECTIBLE.APP",
      ctaLink: "https://www.perfectible.app/register",
      color: "indigo",
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "logement",
      title: "Trouver mon logement",
      icon: <Home className="w-6 h-6 text-white" />,
      description: "Avoir l'esprit tranquille",
      content: "Première tracasserie, le logement est aussi le premier poste de dépenses pour un étudiant. Autant dire qu'il faut prendre le problème à bras le corps pour s'éviter toute mauvaise surprise. Entre un budget parfois serré et la méconnaissance du secteur, la recherche d'un appartement peut vite devenir une traversée du désert. Nous t'aidons à trouver l'oasis et ton havre de paix.",
      cta: "SE LOGER",
      ctaLink: "/visa/hebergement",
      color: "rose",
      image: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "job",
      title: "Mon job étudiant",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      description: "Sécuriser mon projet",
      content: "Un étudiant sur deux travaille au moins une fois au cours de son année universitaire. Un travail rémunéré qui prend plusieurs formes. Le soutien de la famille ou les bourses d'études ne suffisent pas dans tous les cas. L'activité salariée permet souvent de financer ses études et de vivre décemment. Pour beaucoup d'étudiants, il est impossible de faire autrement. Nos opportunités seront les tiennes.",
      cta: "TRAVAILLER",
      ctaLink: "/vivre-en-france/job-etudiant",
      color: "amber",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
    }
  ];
  
  // Pricing data
  const pricingPlans = [
    {
      id: "avi",
      title: "AVI + carte de débit",
      price: "450 €",
      icon: <CreditCard />,
      description: "Document édité en 48h pour demande de visa",
      features: [
        "Attestation validée par notre établissement partenaire",
        "Carte bancaire internationale incluse",
        "Assistance pour la constitution du dossier",
        "Suivi de votre demande de visa"
      ],
      cta: "Souscrire",
      ctaLink: "/services/avi",
      color: "indigo"
    },
    {
      id: "caution",
      title: "Caution pour études",
      price: "299 €",
      icon: <FileText />,
      description: "Document édité en 48h pour demande de visa",
      features: [
        "Garantie financière pour votre logement",
        "Document reconnu par les services consulaires",
        "Édité en français et en anglais",
        "Vérification de conformité incluse"
      ],
      cta: "Souscrire",
      ctaLink: "/services/caution",
      color: "indigo"
    },
    {
      id: "reservation",
      title: "Attestation d'hébergement",
      price: "149 €",
      icon: <Home />,
      description: "Document édité en 2h pour demande de visa",
      features: [
        "Attestation d'hébergement temporaire",
        "Adresse en France valide pour le consulat",
        "Livraison express par email",
        "Service de modification inclus"
      ],
      cta: "Souscrire",
      ctaLink: "/services/attestation",
      color: "rose"
    },
    {
      id: "logement",
      title: "Logement étudiant",
      price: "359 €",
      icon: <Building />,
      description: "Bail renouvelable",
      features: [
        "Studio meublé dans une résidence moderne",
        "Accompagnement dans la recherche",
        "Visite virtuelle des logements disponibles",
        "Assistance à l'état des lieux"
      ],
      cta: "Souscrire",
      ctaLink: "/services/logement",
      color: "amber"
  }
  ];
  
  // Toggle pricing details
  const togglePricing = (pricingId: string) => {
    setActivePricing(activePricing === pricingId ? null : pricingId);
  };

  // Values section data
  const values: ValueItem[] = [
    {
      icon: <Target />,
      title: "Personnalisation",
      description: "Notre approche est adaptée à chaque étudiant et à ses objectifs"
    },
    {
      icon: <Clock />,
      title: "Efficacité",
      description: "Nous accélérons vos démarches pour que vous puissiez vous concentrer sur l'essentiel"
    },
    {
      icon: <Heart />,
      title: "Passion",
      description: "Nous aimons ce que nous faisons et nous nous engageons pleinement"
    },
    {
      icon: <CheckCircle />,
      title: "Excellence",
      description: "Nous visons toujours la meilleure qualité dans tous nos services"
    }
  ];
  
  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      quote: "SenFrance a transformé mon rêve d'étudier en France en réalité. Ils m'ont guidé à chaque étape, de la candidature jusqu'à mon installation.",
      author: "Abdou K., étudiant en Master Finance",
      color: "indigo"
    },
    {
      quote: "Grâce à leur aide, j'ai trouvé une formation parfaitement adaptée à mon projet professionnel et un logement idéalement situé.",
      author: "Fatou D., étudiante en licence de Droit",
      color: "rose"
  }
  ];
  
  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-start justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#FFC3BC]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#18133E]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[#FFC3BC]/30 bg-[#FFC3BC]/10">
              <span className="text-sm font-medium text-[#18133E]">Étudiants internationaux</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#18133E]">
              Votre succès académique commence ici
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Nous vous accompagnons à chaque étape de votre parcours d'études en France.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] text-[#18133E] hover:from-[#ff9d94] hover:to-[#FFC3BC] rounded-full px-8 py-6 text-lg font-medium border-0">
                <Link to="/contact" className="flex items-center gap-2">
                  <span>Commencer mon projet</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#18133E]/20 text-[#18133E] hover:bg-[#18133E]/5 rounded-full px-8 py-6 text-lg font-medium">
                <a href="#services">
                  <span>Découvrir nos services</span>
                </a>
              </Button>
            </div>
            
            {/* Stats rapides */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-[#FFC3BC]">2000+</div>
                <div className="text-sm text-gray-600">Étudiants accompagnés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FFC3BC]">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FFC3BC]">24/7</div>
                <div className="text-sm text-gray-600">Support disponible</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-8 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full bg-[#FFC3BC]/5 blur-3xl transition-all duration-300"
          />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-full bg-[#18133E]/5 blur-3xl"
          />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-[#FFC3BC]/10 text-[#18133E] text-sm font-medium mb-4 border border-[#FFC3BC]/20">
              Services étudiants
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18133E]">
              Notre accompagnement sur mesure
            </h2>
            <div className="h-1 bg-gradient-to-r from-[#FFC3BC] to-[#FFC3BC]/30 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600">
              Nous vous proposons un ensemble de services adaptés à vos besoins pour faciliter votre parcours d'études en France.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-12">
            {sections.map((section, index) => {
              const isActive = activeSection === section.id;
              const style = colorStyles[section.color as ColorStyleKey];

              return (
                <div
                  ref={(node) => setSectionRef(section.id, node)}
                  key={section.id}
                  onMouseEnter={() => setActiveSection(section.id)}
                  onMouseLeave={() => setActiveSection(null)}
                  className={`group bg-white rounded-2xl overflow-hidden shadow-lg ${style.shadow} border ${style.border} ${style.hover} transition-all duration-300 flex flex-col h-full relative`}
                >
                  {/* Background image with overlay */}
                  <div className="h-48 overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#18133E]/70 to-transparent z-10`}></div>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-6 z-20 flex items-center">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${style?.icon || ''} flex items-center justify-center mr-3`}>
                        {section?.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-4">
                      <h4 className={`text-lg font-semibold ${style.text}`}>
                        {section.description}
                      </h4>
                    </div>
                    
                    <p className="text-gray-600 mb-6 flex-grow">
                      {section.content}
                    </p>
                    
                    <div className="mt-auto">
                      <Link
                        to={section.ctaLink}
                        className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${style.button} text-white font-medium py-3 px-6 rounded-xl transition-all duration-300`}
                      >
                        <span>{section.cta}</span>
                        <div className="ml-2">
                          <ArrowRight size={18} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-8 bg-[#18133E] text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#FFC3BC]/10 blur-3xl transition-all duration-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium mb-4 border border-white/20">
              Témoignages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ce que disent nos étudiants
            </h2>
            <div className="h-1 bg-gradient-to-r from-[#FFC3BC] to-transparent rounded-full mx-auto mb-6" />
            <p className="text-white/80">
              Découvrez les expériences de nos étudiants qui ont réussi leur projet d'études en France grâce à notre accompagnement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => {
              const style = colorStyles[testimonial.color as ColorStyleKey];
              
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${style.icon} flex items-center justify-center`}>
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div className="h-1 flex-grow bg-white/20 rounded-full"></div>
                  </div>
                  <p className="text-white/90 text-lg mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-right text-white/70">
                    — {testimonial.author}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      
      {/* Values Section */}
      <section className="py-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#FFC3BC]/10 blur-3xl transition-all duration-300">
          </div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#271D5B]/5 blur-3xl transition-all duration-300">
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-[#18133E]/10 text-[#18133E] text-sm font-medium mb-4 border border-[#18133E]/20">
              Nos valeurs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18133E]">
              Ce qui nous définit
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#FFC3BC] to-transparent rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700">
              Notre engagement est d'offrir un accompagnement d'excellence à chaque étudiant, guidé par des valeurs fortes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-[#FFC3BC]/30 transition-all duration-300 hover:shadow-lg hover:bg-white"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFC3BC] to-[#FFC3BC]/50 flex items-center justify-center text-white mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#18133E]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block bg-[#FFC3BC]/10 px-4 py-2 rounded-full border border-[#FFC3BC]/20">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-[#FFC3BC] fill-[#FFC3BC]" />
                <span className="text-[#18133E] font-medium">Plus de 2000 étudiants accompagnés avec succès</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call-to-action Section */}
      <section className="py-8 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full bg-[#FFC3BC]/5 blur-3xl transition-all duration-300"
          />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 text-center transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#18133E] to-[#271D5B] rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18133E]">
              Prêt à commencer votre aventure étudiante?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour un premier entretien sans engagement. 
              Nous sommes impatients de vous accompagner dans votre projet d'études en France.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <div>
                <Button asChild className="bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white rounded-full px-8 py-6 text-lg font-medium">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Prendre rendez-vous</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div>
                <Button asChild variant="outline" className="text-[#18133E] border-[#18133E]/20 hover:bg-[#18133E]/5 rounded-full px-8 py-6 text-lg font-medium">
                  <Link to="/etudiants/faq">
                    <span>Questions fréquentes</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentPage;