import React from 'react';
import {
  ArrowRight,
  Home,
  CheckCircle,
  Clock,
  Smartphone,
  Wrench,
  FileX,
  Zap,
  Gift,
  DollarSign,
  Shield,
  Star,
  Users,
  Award,
  Percent
} from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const PageAssuranceHabitation = () => {
    useScrollToTop();
  return (
    <div className="min-h-screen bg-white">
      {/* Section héro optimisée */}
      <section className="relative py-16 md:py-8 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#18133E] via-[#231A54] to-[#18133E]">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

          {/* Éléments décoratifs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#FFC3BC]/20 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 md:w-96 md:h-96 rounded-full bg-purple-500/20 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge avec offre spéciale */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <Gift className="h-4 w-4 text-[#FFC3BC]" />
              <span className="text-sm font-medium text-white">1 mois offert aux clients SenFrance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Assurance Habitation
              <span className="block text-[#FFC3BC] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
                Multirisques
              </span>
            </h1>

            {/* Description mise en évidence */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-white/20 max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-white leading-relaxed">
                <span className="text-[#FFC3BC] font-semibold">Obligatoire pour les locataires</span>, cette assurance protège des dégâts des eaux, incendie, vandalisme...
              </p>
            </div>

            {/* CTA principal avec informations rapides */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div>
                <a
                  href='https://www.luko.eu/fr/onboard#Address'
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] text-[#18133E] hover:from-[#ff9d94] hover:to-[#FFC3BC] rounded-full px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  <span>Souscrire en 2 minutes</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="flex flex-wrap gap-3 justify-center text-sm text-white/80">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-[#FFC3BC]" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-[#FFC3BC]" />
                  <span>Attestation immédiate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section avantages principaux */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18133E] mb-4">
              Pourquoi choisir Luko ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              L'assurance habitation nouvelle génération, pensée pour simplifier votre quotidien
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Gift className="h-10 w-10 md:h-12 md:w-12 text-[#FFC3BC]" />,
                title: "1 mois offert",
                description: "Fini les contrats obtus, nous délivrons une expérience de souscription et de protection fluide et intégrée. Luko résilie votre ancienne assurance pour vous.",
                badge: "Exclusif SenFrance"
              },
              {
                icon: <Clock className="h-10 w-10 md:h-12 md:w-12 text-[#FFC3BC]" />,
                title: "Remboursement rapide",
                description: "2 fois plus rapide que chez un assureur traditionnel. Vous êtes remboursé en 48 h pour les cas simples, bris de glace, dégât des eaux mineur...",
                badge: "48h"
              },
              {
                icon: <Smartphone className="h-10 w-10 md:h-12 md:w-12 text-[#FFC3BC]" />,
                title: "Souscription facile",
                description: "2 minutes et 8 questions pour souscrire. Des garanties claires : vous savez sur quoi vous êtes couvert. Vos attestations disponibles à tout moment.",
                badge: "2 min"
              },
              {
                icon: <Wrench className="h-10 w-10 md:h-12 md:w-12 text-[#FFC3BC]" />,
                title: "Artisan en 48h",
                description: "Réparation par un expert ou un artisan envoyé chez vous en 48h seulement. Luko utilise les technologies les plus récentes pour la gestion des sinistres.",
                badge: "Express"
              },
              {
                icon: <Zap className="h-10 w-10 md:h-12 md:w-12 text-[#FFC3BC]" />,
                title: "Assurance NVEI",
                description: "Vous avez une trottinette électrique? L'assurance complémentaire NVEI garantit le conducteur d'un véhicule électrique individuel contre les dommages à un tiers.",
                badge: "Option"
              },
              {
                icon: <FileX className="h-10 w-10 md:h-12 md:w-12 text-[#FFC3BC]" />,
                title: "Zéro paperasse",
                description: "Et zéro charabia. En cas de sinistre, déclaration facile en photo et vidéo dans votre application Luko. Prise de contact via le chat ou par mail.",
                badge: "100% digital"
              }
            ].map((avantage, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#FFC3BC]/20 transition-all duration-300 relative group"
              >
                {/* Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#18133E] to-[#271D5B] text-white text-xs font-medium px-3 py-1 rounded-full">
                  {avantage.badge}
                </div>

                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FFC3BC]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FFC3BC]/20 transition-colors duration-300">
                  {avantage.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#18133E] mb-4">
                  {avantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {avantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section "Meilleur produit" */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-[#18133E] to-[#271D5B] rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
              {/* Éléments décoratifs */}
              <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 rounded-full bg-[#FFC3BC]/10 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-purple-500/10 blur-3xl"></div>

              <div className="relative z-10">
                <div className="text-center mb-8 md:mb-12">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <Award className="h-5 w-5 text-[#FFC3BC]" />
                    <span className="text-sm font-medium">Produit recommandé</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Le meilleur produit pour nos clients
                  </h2>
                  <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                    Nous avons sélectionné Luko pour sa simplicité, sa rapidité et sa transparence
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {[
                    {
                      icon: <CheckCircle className="h-8 w-8 text-[#FFC3BC]" />,
                      title: "Simple & Rapide",
                      stat: "2 min",
                      description: "Souscription en ligne simplifiée"
                    },
                    {
                      icon: <Users className="h-8 w-8 text-[#FFC3BC]" />,
                      title: "Satisfaction client",
                      stat: "#1",
                      description: "Meilleure satisfaction du marché"
                    },
                    {
                      icon: <Shield className="h-8 w-8 text-[#FFC3BC]" />,
                      title: "Sans engagement",
                      stat: "100%",
                      description: "Flexible et personnalisable"
                    },
                    {
                      icon: <Percent className="h-8 w-8 text-[#FFC3BC]" />,
                      title: "Économies",
                      stat: "-20%",
                      description: "Moins cher que la concurrence"
                  }
  ].map((point, index) => (
                    <div
                      key={index}
                      className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                    >
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        {point.icon}
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-[#FFC3BC] mb-2">
                        {point.stat}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
                      <p className="text-white/70 text-sm">{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section garanties */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18133E] mb-4">
              Couverture complète
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tous les risques essentiels couverts pour protéger votre logement et vos biens
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: "Dégâts des eaux",
                description: "Fuites, ruptures de canalisations, débordements",
                icon: "💧",
                color: "blue"
              },
              {
                title: "Incendie",
                description: "Incendie, explosion, foudre et dommages électriques",
                icon: "🔥",
                color: "red"
              },
              {
                title: "Vol et cambriolage",
                description: "Vol par effraction, vandalisme après effraction",
                icon: "🔒",
                color: "gray"
              },
              {
                title: "Responsabilité civile",
                description: "Dommages causés à des tiers dans votre logement",
                icon: "👥",
                color: "green"
              },
              {
                title: "Catastrophes naturelles",
                description: "Tempête, grêle, neige, catastrophes naturelles",
                icon: "🌪️",
                color: "purple"
              },
              {
                title: "Bris de glace",
                description: "Vitres, miroirs, plaques de cuisson, sanitaires",
                icon: "🪟",
                color: "cyan"
              },
              {
                title: "Assistance 24/7",
                description: "Dépannage d'urgence 24h/24, relogement",
                icon: "🆘",
                color: "orange"
              },
              {
                title: "Protection juridique",
                description: "Aide juridique en cas de litige locatif",
                icon: "⚖️",
                color: "indigo"
              }
            ].map((garantie, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-[#FFC3BC]/20 transition-all duration-300 text-center group"
              >
                <div className="text-3xl md:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {garantie.icon}
                </div>
                <h3 className="font-semibold text-[#18133E] mb-2 text-sm md:text-base">
                  {garantie.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {garantie.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-[#18133E] to-[#271D5B]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Home className="h-8 w-8 md:h-10 md:w-10 text-white" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Protégez votre logement
              <span className="block text-[#FFC3BC] mt-2">dès maintenant</span>
            </h2>

            <p className="text-lg md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto">
              Souscription en 2 minutes, attestation immédiate, 1 mois offert pour les clients SenFrance
            </p>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center">
              <div className="w-full sm:w-auto">
                <a
                  href='https://www.luko.eu/fr/onboard#Address'
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] text-[#18133E] hover:from-[#ff9d94] hover:to-[#FFC3BC] rounded-full px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                  <span>Souscrire maintenant</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/80 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FFC3BC] flex-shrink-0" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Gift className="h-5 w-5 text-[#FFC3BC] flex-shrink-0" />
                  <span>1 mois offert</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-5 w-5 text-[#FFC3BC] flex-shrink-0" />
                  <span>2 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18133E] mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-gray-600">
              Tout ce que vous devez savoir sur l'assurance habitation
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            {[
              {
                question: "L'assurance habitation est-elle vraiment obligatoire ?",
                answer: "Oui, l'assurance habitation est obligatoire pour tous les locataires en France. Elle doit couvrir au minimum la responsabilité civile et les risques locatifs. Une attestation doit être fournie au propriétaire lors de la signature du bail et renouvelée chaque année."
              },
              {
                question: "Quand dois-je souscrire mon assurance ?",
                answer: "Vous devez souscrire votre assurance avant la remise des clés. L'attestation d'assurance est généralement demandée lors de la signature du bail. Avec Luko, vous obtenez votre attestation immédiatement après la souscription."
              },
              {
                question: "Que se passe-t-il si je résilie mon bail ?",
                answer: "Avec Luko, vous pouvez résilier votre assurance à tout moment sans frais. La résiliation prend effet à la date de fin de votre bail. Il suffit d'envoyer votre préavis via l'application ou par email."
              },
              {
                question: "Comment déclarer un sinistre rapidement ?",
                answer: "Très simplement via l'application Luko ! Prenez des photos, décrivez les dommages et envoyez votre déclaration directement depuis votre smartphone. Vous pouvez également contacter le service client via le chat intégré."
            }
  ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-[#FFC3BC]/20 transition-colors duration-300"
              >
                <h3 className="font-semibold text-[#18133E] text-lg md:text-xl mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageAssuranceHabitation;
