import React from 'react';
import {
  ArrowRight,
  Shield,
  CheckCircle,
  Clock,
  FileText,
  Users,
  Star,
  Key
} from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const PageGarantie = () => {
    useScrollToTop();
  return (
    <div className="min-h-screen bg-white">
      {/* Section héro */}
      <section className="relative py-8 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#18133E] via-[#231A54] to-[#18133E] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#FFC3BC]/20 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="text-sm font-medium text-white">Solution de garantie</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Garantie Locative
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Vous n'avez pas de garant ?
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-[#FFC3BC] mb-4">
                Pas d'inquiétude !
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Il n'a jamais été aussi simple de louer. Garantme permet à nos étudiants en mobilité de décrocher leur futur logement.
              </p>
            </div>

            <div>
              <a
                href='https://app.garantme.fr/fr/senfrance'
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] text-[#18133E] hover:from-[#ff9d94] hover:to-[#FFC3BC] rounded-full px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300"
              >
                <span>Postuler maintenant</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section avantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#18133E] mb-4">
              Parce que...
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-[#FFC3BC]" />,
                title: "Sérieux de votre dossier",
                description: "La garantie de notre partenaire met en évidence le sérieux de votre dossier et votre solvabilité auprès du bailleur. La location n'a jamais été aussi accessible."
              },
              {
                icon: <Star className="h-12 w-12 text-[#FFC3BC]" />,
                title: "Solution fiable",
                description: "Avec Garantme, vous avez l'assurance de disposer d'une solution fiable, innovante et compréhensible qui ravira les professionnels de l'immobilier."
              },
              {
                icon: <Users className="h-12 w-12 text-[#FFC3BC]" />,
                title: "Confiance des propriétaires",
                description: "Garantme est reconnue et acceptée par les propriétaires partout en France, donnant plus de crédibilité à votre candidature locative."
            }
  ].map((avantage, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-20 h-20 bg-[#FFC3BC]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {avantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#18133E] mb-4 text-center">
                  {avantage.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {avantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section processus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#18133E] mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un processus simple et rapide en 3 étapes pour obtenir votre garantie locative
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  icon: <FileText className="h-8 w-8 text-white" />,
                  title: "Remplissez votre dossier",
                  description: "En seulement 5 minutes, remplissez votre dossier et chargez vos pièces justificatives. Si vous ne les avez pas toutes, aucun problème, vous pouvez les charger plus tard !",
                  time: "5 minutes"
                },
                {
                  step: "2",
                  icon: <CheckCircle className="h-8 w-8 text-white" />,
                  title: "Recevez votre certificat",
                  description: "Recevez le Certificat Garantme par e-mail dans la même journée. Ce document prouve aux propriétaires que Garantme peut être votre garant.",
                  time: "24h maximum"
                },
                {
                  step: "3",
                  icon: <Key className="h-8 w-8 text-white" />,
                  title: "Utilisez votre certificat",
                  description: "Pendant votre recherche de logement et vos visites, ajoutez votre Certificat d'Éligibilité® à votre candidature pour que les propriétaires le voient. Il est valide partout en France.",
                  time: "Valide partout en France"
                }
              ].map((etape, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#18133E] to-[#271D5B] rounded-full flex items-center justify-center relative">
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFC3BC] rounded-full flex items-center justify-center">
                        <span className="text-[#18133E] font-bold text-sm">{etape.step}</span>
                      </div>
                      {etape.icon}
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-semibold text-[#18133E]">
                          {etape.title}
                        </h3>
                        <div className="inline-flex items-center gap-1 bg-[#FFC3BC]/20 text-[#18133E] text-sm font-medium px-3 py-1 rounded-full mt-2 md:mt-0">
                          <Clock className="h-4 w-4" />
                          {etape.time}
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {etape.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="py-16 bg-gradient-to-r from-[#18133E] to-[#271D5B]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pourquoi Garantme ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {[
                "Solution 100% digitale et rapide",
                "Acceptée par tous les propriétaires",
                "Pas d'avance de frais",
                "Support client réactif"
              ].map((point, index) => (
                <div key={index}
                className="flex items-center justify-center md:justify-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#FFC3BC] flex-shrink-0" />
                  <span className="text-white font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div>
              <a
                href='https://app.garantme.fr/fr/senfrance'
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] text-[#18133E] hover:from-[#ff9d94] hover:to-[#FFC3BC] rounded-full px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300"
              >
                <span>Commencer ma demande</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageGarantie;
