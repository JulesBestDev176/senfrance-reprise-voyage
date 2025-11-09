import React, { useState, useRef } from 'react';
import { 
  HelpCircle, 
  ArrowLeft,
  Globe,
  MapPin,
  Users,
  Clock,
  Home,
  GraduationCap,
  Search,
  Plus,
  Minus,
  MessageCircle,
  Phone,
  Mail,
  Star,
  Heart,
  Target,
  CheckCircle,
  Info,
  Book,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const FAQPage = () => {
  useScrollToTop();
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // FAQ Data
  const faqData = [
    {
      id: 'pays',
      question: 'Aux ressortissants de quel pays SenFrance s\'adresse-t-elle ?',
      answer: `SenFrance a pour vocation d'accompagner toute personne qui vient s'installer en France pour ses études. D'où que vous veniez, vous pouvez nous joindre en remplissant le formulaire de contact ou en nous téléphonant. 

Les ressortissants de tous les pays et de tous les continents sont les bienvenus. Notre équipe multiculturelle comprend les défis spécifiques auxquels font face les étudiants internationaux, quelle que soit leur origine.`,
      icon: <Globe className="w-6 h-6" />,
      category: 'Général',
      color: 'indigo'
    },
    {
      id: 'territoire',
      question: 'SenFrance est-elle une agence locale ou nationale ?',
      answer: `Le siège de SenFrance est basé à Bordeaux. Cependant, nous avons vocation à nous occuper d'étudiants partout en France. 

N'hésitez pas à nous soumettre votre cas, quelle que soit votre ville d'accueil en région parisienne ou en province. Notre réseau de partenaires nous permet d'intervenir sur l'ensemble du territoire français.`,
      icon: <MapPin className="w-6 h-6" />,
      category: 'Services',
      color: 'blue'
    },
    {
      id: 'timing',
      question: 'Dois-je être en France ou attendre d\'y être arrivé(e) pour contacter SenFrance ?',
      answer: `Vous n'êtes pas du tout obligé(e) d'attendre votre arrivée en France pour nous contacter. D'ailleurs, nous vous encourageons à le faire avant votre arrivée, afin de préparer celle-ci au mieux.

**Avantages d'un contact précoce :**
- Préparation optimale de votre installation
- Constitution anticipée des dossiers
- Réservation de logement avant votre arrivée
- Organisation des démarches administratives

Contactez-nous le plus tôt possible pour permettre à notre équipe de travailler avec efficacité.`,
      icon: <Clock className="w-6 h-6" />,
      category: 'Processus',
      color: 'green'
    },
    {
      id: 'parents',
      question: 'Je suis parent(e). Puis-je contacter SenFrance pour mon enfant ?',
      answer: `Absolument ! Nous traitons directement avec les parents. Si votre enfant est mineur par exemple, il ne peut engager aucune responsabilité avec la société. 

**Notre approche familiale :**
- Contact direct avec les parents
- Implication dans tout le processus
- Accompagnement personnalisé
- Suivi régulier et transparent

Mais même quand il est majeur, nous privilégions la présence des parents tout au long du processus. En tant que parent(e), vous êtes souvent essentiel à son projet.`,
      icon: <Users className="w-6 h-6" />,
      category: 'Famille',
      color: 'purple'
    },
    {
      id: 'temporaire',
      question: 'SenFrance s\'occupe-t-elle d\'hébergement temporaire ?',
      answer: `Les étudiants que nous accompagnons ne sont pas forcément en France pour plusieurs années. Vous pouvez nous solliciter pour un court séjour dans le cadre de séminaires par exemple.

**Solutions temporaires :**
- Hébergement pour formations courtes
- Logement pour séminaires
- Solutions flexibles selon la durée
- Accompagnement adapté aux séjours courts

Il y a aussi le cas de ceux qui viennent suivre une formation de seulement quelques semaines. Contactez-nous pour une solution sur mesure.`,
      icon: <Home className="w-6 h-6" />,
      category: 'Logement',
      color: 'amber'
    },
    {
      id: 'francais',
      question: 'Je suis étudiant(e) français(e). Puis-je être accompagné(e) par SenFrance ?',
      answer: `SenFrance est née dans une volonté d'aider les étudiants étrangers à s'installer en France. Mais nous ne nous interdisons pas de proposer nos services aux Français qui en feraient la demande.

**Notre ouverture :**
- Étude attentive de chaque cas
- Services adaptés aux besoins spécifiques
- Accompagnement personnalisé
- Solutions sur mesure

Nous sommes à l'écoute, alors vous pouvez nous soumettre votre cas. Nous l'étudierons attentivement et vous proposerons une solution adaptée.`,
      icon: <GraduationCap className="w-6 h-6" />,
      category: 'Étudiants français',
      color: 'rose'
  }
  ];

  // Color styles
  const colorStyles = {
    indigo: {
      light: "bg-indigo-50",
      medium: "bg-indigo-500",
      text: "text-indigo-600",
      border: "border-indigo-200",
      icon: "from-indigo-500 to-indigo-600"
    },
    blue: {
      light: "bg-blue-50",
      medium: "bg-blue-500",
      text: "text-blue-600",
      border: "border-blue-200",
      icon: "from-blue-500 to-blue-600"
    },
    green: {
      light: "bg-green-50",
      medium: "bg-green-500",
      text: "text-green-600",
      border: "border-green-200",
      icon: "from-green-500 to-green-600"
    },
    purple: {
      light: "bg-purple-50",
      medium: "bg-purple-500",
      text: "text-purple-600",
      border: "border-purple-200",
      icon: "from-purple-500 to-purple-600"
    },
    amber: {
      light: "bg-amber-50",
      medium: "bg-amber-500",
      text: "text-amber-600",
      border: "border-amber-200",
      icon: "from-amber-500 to-amber-600"
    },
    rose: {
      light: "bg-[#FFC3BC]/10",
      medium: "bg-[#FFC3BC]",
      text: "text-[#FFC3BC]",
      border: "border-[#FFC3BC]/20",
      icon: "from-[#FFC3BC] to-[#ff9d94]"
  }
  };

  // Filter FAQs based on search term
  const filteredFAQs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Categories for filtering
  const categories = [...new Set(faqData.map(faq => faq.category))];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#18133E] via-[#231A54] to-[#18133E] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          
          {/* Animated decorative elements */}
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#FFC3BC]/20 blur-3xl transition-all duration-300"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            
            
            <div className="w-20 h-20 bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] rounded-full flex items-center justify-center mx-auto mb-8">
              <HelpCircle className="h-10 w-10 text-white" />
            </div>
            
            <div className="mb-8">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium mb-4 border border-white/20">
                Questions fréquentes
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Bienvenue chez SenFrance
              </h1>
              <p className="text-xl text-[#FFC3BC] font-semibold mb-4">
                Partenaire des étudiants
              </p>
            </div>
            
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Trouvez rapidement les réponses à vos questions sur nos services d'accompagnement 
              pour étudiants internationaux en France.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#18133E] to-[#271D5B] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden transition-all duration-300">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#FFC3BC] blur-3xl transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-purple-400 blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="h-6 w-6 text-[#FFC3BC]" />
                    <span className="text-[#FFC3BC] font-semibold">Notre histoire</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Comment SenFrance est née</h2>
                </div>

                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-white/90 mb-6 leading-relaxed text-center">
                    SenFrance est née de la volonté de ses associés et d'une idée simple :{' '}
                    <strong className="text-[#FFC3BC]">offrir un service dont nous n'avions pas pu bénéficier</strong> en tant qu'étudiants étrangers dans une société et une culture nouvelles.
                  </p>

                  <p className="text-white/90 mb-6 leading-relaxed text-center">
                    Nous sommes persuadés que la cause principale de l'échec chez beaucoup d'étudiants (qu'ils viennent de loin ou non) tient aux{' '}
                    <strong className="text-[#FFC3BC]">conditions de vie</strong>. Notre engagement est donc né d'un constat sans appel : un besoin réel existe sans solution adaptée.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#FFC3BC]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="h-8 w-8 text-[#FFC3BC]" />
                      </div>
                      <h3 className="font-semibold text-white mb-2">Notre mission</h3>
                      <p className="text-white/70 text-sm">Être le partenaire de l'étudiant</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#FFC3BC]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="h-8 w-8 text-[#FFC3BC]" />
                      </div>
                      <h3 className="font-semibold text-white mb-2">Notre engagement</h3>
                      <p className="text-white/70 text-sm">Solutions sur mesure</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#FFC3BC]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="h-8 w-8 text-[#FFC3BC]" />
                      </div>
                      <h3 className="font-semibold text-white mb-2">Notre objectif</h3>
                      <p className="text-white/70 text-sm">Votre stabilité pendant vos études</p>
                    </div>
                  </div>

                  <p className="text-white/90 mb-8 leading-relaxed text-center">
                    Nous nous considérons comme{' '}
                    <strong className="text-[#FFC3BC]">le partenaire de l'étudiant</strong>. Nos solutions sur mesure seront pour lui un bâton de pèlerin. Nous travaillons avec des organisations, des particuliers et des entreprises pour fournir un service de qualité.
                  </p>

                  <div className="text-center">
                    <p className="text-white/90 mb-6">
                      Vous êtes évidemment en quête de stabilité pendant vos études. Nous sommes ravis de vous y aider.
                    </p>

                    <Link to="/contact" className="bg-[#FFC3BC] hover:bg-[#ff9d94] text-[#18133E] font-semibold px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300">
                      <MessageCircle className="h-5 w-5" />
                      <span>Contactez-nous sans attendre</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full bg-[#FFC3BC]/5 blur-3xl transition-all duration-300"></div>
        </div>

        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
              <p className="text-gray-600">
                Trouvez rapidement les réponses à vos questions ou contactez notre équipe pour un accompagnement personnalisé.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Rechercher dans les questions fréquentes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#FFC3BC] focus:border-[#FFC3BC] sm:text-sm"
              />
            </div>

            {/* Category Tags */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredFAQs.map((faq, index) => {
              const style = colorStyles[faq.color];
              const isExpanded = expandedFAQ === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-xl border ${style.border} shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl`}
                >
                  <button
                    onClick={() => setExpandedFAQ(isExpanded ? null : faq.id)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center gap-4"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${style.icon} flex items-center justify-center text-white flex-shrink-0`}
                    >
                      {faq.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 ${style.light} ${style.text} rounded-full text-xs font-medium`}
                        >
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {isExpanded ? (
                        <Minus className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Plus className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <div className={`${style.light} rounded-lg p-6`}>
                        <div className="prose prose-gray max-w-none">
                          {faq.answer.split('\n').map((paragraph, pIndex) => {
                            if (paragraph.trim() === '') return null;

                            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                              return (
                                <h4
                                  key={pIndex}
                                  className="font-semibold text-gray-900 mb-3 text-base"
                                >
                                  {paragraph.replace(/\*\*/g, '')}
                                </h4>
                              );
                            }

                            if (paragraph.startsWith('- ')) {
                              return (
                                <div
                                  key={pIndex}
                                  className="flex items-start gap-2 mb-2"
                                >
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"
                                  />
                                  <span className="text-gray-700">
                                    {paragraph.substring(2)}
                                  </span>
                                </div>
                              );
                            }

                            return (
                              <p
                                key={pIndex}
                                className="text-gray-700 mb-3 leading-relaxed"
                              >
                                {paragraph}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredFAQs.length === 0 && searchTerm && (
            <div className="max-w-4xl mx-auto text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucun résultat trouvé
              </h3>
              <p className="text-gray-600 mb-6">
                Nous n'avons pas trouvé de réponse correspondant à votre recherche "
                <strong>{searchTerm}</strong>".
              </p>
              <Button
                onClick={() => setSearchTerm('')}
                className="bg-[#18133E] hover:bg-[#271D5B] text-white"
              >
                Effacer la recherche
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#18133E] to-[#271D5B] rounded-2xl p-8 text-center text-white relative overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#FFC3BC] blur-2xl transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-purple-400 blur-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Vous ne trouvez pas la réponse à votre question ?
                </h3>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions 
                  et vous accompagner dans votre projet d'études en France.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-[#FFC3BC] hover:bg-[#ff9d94] text-[#18133E] font-semibold px-6 py-3 rounded-full">
                    <Link
  to="/contact" className="bg-[#FFC3BC] hover:bg-[#ff9d94] text-[#18133E] font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
>
  <MessageCircle className="h-5 w-5" />
  <span>Nous contacter</span>
</Link>
                  </Button>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;