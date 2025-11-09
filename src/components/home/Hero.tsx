import React from "react";
import {
  BookOpen,
  Home,
  Briefcase,
  Wallet,
  ArrowRight,
  Star,
  Zap,
  Target,
  CheckCircle,
  Sparkles,
  Award,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {

  return (
    <div className="relative overflow-hidden bg-gray-50 h-auto min-h-screen md:min-h-[100vh] ">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Gradient blobs */}
          <div
            className="absolute top-10 right-[8%] w-96 h-96 rounded-full bg-gradient-to-br from-[#FFC3BC] to-[#18133E] blur-3xl opacity-[0.03]"
          />

          <div
            className="absolute -bottom-32 left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#18133E] to-[#FFC3BC] blur-3xl opacity-[0.02]"
          />

          {/* Additional colorful accent blobs */}
          <div
            className="absolute top-1/2 right-[20%] w-64 h-64 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-400/10 blur-2xl opacity-[0.05]"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container relative mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 lg:py-8 z-10 h-full md:flex md:items-center lg:flex lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 lg:gap-12 items-center w-full">
          {/* Text Column */}
          <div className="lg:col-span-6 text-[#18133E] mb-6 md:mb-8 lg:mb-0">
            <div className="mb-4 sm:mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 bg-gradient-to-r from-[#18133E] via-[#271D5B] to-[#18133E] bg-clip-text">
                Nous facilitons{" "}
                <span className="bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] bg-clip-text text-transparent">
                  la vie de l'étudiant
                </span>
              </h1>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 max-w-2xl leading-relaxed">
              Vous souhaitez poursuivre vos études loin de chez vous. Vous avez
              commencé les démarches nécessaires, mais vous ne savez pas ce qui
              vous attend une fois arrivé(e) en France ? Nous vous aidons à y
              voir plus clair. Pour mener à bien votre projet d'études, vous
              avez besoin de visibilité. Et si nous commencions par vous trouver
              un logement avant votre départ...
            </p>

            {/* Compact buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6 mb-4 sm:mb-6 md:mb-8">
              <a
                href="https://www.senfrance.fr/login-senfrance/student"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#18133E]/25 cursor-pointer flex items-center justify-center gap-2 group w-full sm:w-auto">
                  <span>Commencer</span>
                  <div className="group-hover:translate-x-1 transition-transform duration-200">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </button>
              </a>

              <Link to="/about">
                <button className="bg-white/80 backdrop-blur-sm text-[#18133E] hover:bg-white border-2 border-[#18133E]/20 hover:border-[#FFC3BC]/50 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer hover:shadow-lg w-full sm:w-auto">
                  Qui Sommes-Nous ?
                </button>
              </Link>
            </div>

            {/* Enhanced stats section */}
            <div className="mt-4 sm:mt-6 flex flex-col md:flex-row gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
              {[
                {
                  number: "1",
                  label: "Solution complète",
                  icon: <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />,
                },
                {
                  number: "98%",
                  label: "Taux de satisfaction",
                  icon: <Target className="h-4 w-4 sm:h-5 sm:w-5" />,
                },
                {
                  number: "24h",
                  label: "Support disponible",
                  icon: <Zap className="h-4 w-4 sm:h-5 sm:w-5" />,
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm flex-1 sm:flex-none hover:scale-105 hover:-translate-y-0.5 transition-transform"
                >
                  <div className="text-[#FFC3BC] flex-shrink-0">
                    {stat.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-base sm:text-lg font-bold text-[#18133E]">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trusted Partners with original images */}
            <div className="mt-4 sm:mt-6">
              <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
                <img
                  src="assets/images/partners/vivawallet.png"
                  alt="VivaWallet Partner"
                  className="h-6 md:h-7 lg:h-8 opacity-70 hover:opacity-100 transition-all duration-300 filter hover:brightness-110 hover:scale-110 hover:-translate-y-0.5"
                />
                <img
                  src="assets/images/partners/luko.png"
                  alt="Luko Partner"
                  className="h-6 md:h-7 lg:h-8 opacity-70 hover:opacity-100 transition-all duration-300 filter hover:brightness-110 hover:scale-110 hover:-translate-y-0.5"
                />
                <img
                  src="assets/images/partners/garantme.png"
                  alt="GarantMe Partner"
                  className="h-6 md:h-7 lg:h-8 opacity-70 hover:opacity-100 transition-all duration-300 filter hover:brightness-110 hover:scale-110 hover:-translate-y-0.5"
                />
                <img
                  src="assets/images/partners/smartgarant.png"
                  alt="SmartGarant Partner"
                  className="h-6 md:h-7 lg:h-8 opacity-70 hover:opacity-100 transition-all duration-300 filter hover:brightness-110 hover:scale-110 hover:-translate-y-0.5"
                />
              </div>
            </div>
          </div>

          {/* Enhanced Feature Highlights Column */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#FFC3BC]/20 to-[#18133E]/10 rounded-2xl sm:rounded-3xl blur-xl opacity-60"></div>

              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl border border-white/60 p-4 sm:p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/90">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#18133E] to-[#271D5B] bg-clip-text text-transparent">
                    Votre parcours simplifié
                  </h2>
                  <div className="bg-gradient-to-r from-[#FFC3BC]/30 to-[#FFC3BC]/20 border border-[#FFC3BC]/40 rounded-lg sm:rounded-xl py-1.5 sm:py-2 px-2 sm:px-3 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm shadow-inner w-fit">
                    <CheckCircle className="text-green-600 h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-[#18133E] font-semibold">
                      100% Accompagné
                    </span>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <FeatureItem
                    icon={<Target />}
                    title="Orientation académique"
                    description="Conseils personnalisés pour trouver l'établissement idéal"
                    color="from-purple-500 to-purple-600"
                    accentColor="text-purple-500"
                  />

                  <FeatureItem
                    icon={<Home />}
                    title="Hébergement garanti"
                    description="Réserve ton logement avant d'arriver en France"
                    color="from-[#FFC3BC] to-[#ff9d94]"
                    accentColor="text-[#FFC3BC]"
                  />

                  <FeatureItem
                    icon={<Wallet />}
                    title="Financement facilité"
                    description="Assistance pour la prise en charge financière"
                    color="from-green-500 to-green-600"
                    accentColor="text-green-500"
                  />

                  <FeatureItem
                    icon={<Zap />}
                    title="Intégration rapide"
                    description="Accompagnement dans tes démarches administratives"
                    color="from-[#18133E] to-[#271D5B]"
                    accentColor="text-[#18133E]"
                  />
                </div>

                <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center">
                  <div className="bg-gradient-to-r from-[#FFC3BC]/20 to-[#FFC3BC]/10 border border-[#FFC3BC]/30 rounded-full py-2 sm:py-3 px-3 sm:px-4 md:px-6 flex items-center gap-2 shadow-lg backdrop-blur-sm hover:scale-105 hover:-translate-y-0.5 transition-transform">
                    <Star className="text-yellow-500 h-4 w-4 sm:h-5 sm:w-5 fill-yellow-500" />
                    <span className="text-[#18133E] font-semibold text-xs sm:text-sm">
                      Plus de 2000 étudiants conseillés
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature item component
const FeatureItem = ({
  icon,
  title,
  description,
  color,
  accentColor,
}) => {
  return (
    <div className="flex items-start gap-3 sm:gap-4 group p-2 sm:p-3 rounded-xl hover:bg-white/50 transition-all duration-300 hover:translate-x-2 hover:scale-[1.02]">
      <div className={`bg-gradient-to-br ${color} rounded-lg sm:rounded-xl p-2 sm:p-3 text-white mt-1 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex-shrink-0`}>
        {React.cloneElement(icon, { className: "h-4 w-4 sm:h-5 sm:w-5" })}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className={`text-base sm:text-lg font-semibold text-[#18133E] mb-1 group-hover:${accentColor} transition-colors flex items-center gap-2`}>
          <span>{title}</span>
          <div className="overflow-hidden hidden sm:block group-hover:inline-block">
            <ArrowRight className={`h-3 w-3 sm:h-4 sm:w-4 ${accentColor}`} />
          </div>
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Hero;
