import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  Shield, 
  Home, 
  CheckCircle, 
  InfoIcon, 
  AlertCircle,
  Umbrella,
  Key,
  ExternalLink,
  Download,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const PageAssurances = () => {
  useScrollToTop();
  // États pour les formulaires
  const [formGarantmeSubmitted, setFormGarantmeSubmitted] = useState(false);
  const [formLukoSubmitted, setFormLukoSubmitted] = useState(false);
  
  // Reference pour les effets de parallaxe
    // Valeurs pour les effets de parallaxe
      // Fonction de soumission pour Garantme
  const soumettreFormGarantme = () => {
    setFormGarantmeSubmitted(true);
    
    // Réinitialiser le message après 5 secondes
    setTimeout(() => {
      setFormGarantmeSubmitted(false);
    }, 5000);
  };
  
  // Fonction de soumission pour Luko
  const soumettreFormLuko = () => {
    setFormLukoSubmitted(true);
    
    // Réinitialiser le message après 5 secondes
    setTimeout(() => {
      setFormLukoSubmitted(false);
    }, 5000);
  };

  return (
    <div className="relative">
      {/* Section héro */}
      <section className="relative h-screen flex items-start justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFC3BC]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#18133E]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[#FFC3BC]/30 bg-[#FFC3BC]/10">
              <span className="text-sm font-medium text-[#18133E]">Services essentiels</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#18133E]">
              Assurances
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-[#271D5B]">
              Garant & MRH
            </h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
              Sécurise ton logement avec nos solutions de garantie et d'assurance habitation.
            </p>
            
            {/* Deux options principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <a href="#garantme" className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#FFC3BC] hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-[#FFC3BC]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Key className="h-6 w-6 text-[#FFC3BC]" />
                </div>
                <h3 className="text-xl font-bold text-[#18133E] mb-2">Garant Garantme</h3>
                <p className="text-gray-600 text-sm">Solution de cautionnement reconnue</p>
              </a>
              
              <a href="#luko" className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#FFC3BC] hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-[#FFC3BC]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-[#FFC3BC]" />
                </div>
                <h3 className="text-xl font-bold text-[#18133E] mb-2">Assurance Luko</h3>
                <p className="text-gray-600 text-sm">Assurance habitation obligatoire</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Garantme */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#FFC3BC]/10 rounded-full flex items-center justify-center mr-4">
                    <Key className="h-8 w-8 text-[#FFC3BC]" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#18133E]">
                    Besoin d'un garant?
                  </h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Accompagnement, gain de temps et tranquillité d'esprit : partenaire de confiance, <strong>Garantme</strong> nous donne les moyens de nous libérer des tâches à faible valeur ajoutée pour nous concentrer sur le cœur de notre métier : libérer l'accès au logement, tout simplement.
                </p>
                
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {["Processus 100% en ligne", "Garant fiable reconnu par les propriétaires", "Décision rapide sous 24h", "Tarifs préférentiels pour nos étudiants"].map((point, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FFC3BC] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
                
                {formGarantmeSubmitted && (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 mb-6 flex items-start transition-all duration-300">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Demande envoyée avec succès !</p>
                      <p className="text-sm">Tu recevras un E-mail avec les instructions pour compléter ta souscription.</p>
                    </div>
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <a
                      href='https://app.garantme.fr/fr/senfrance' className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white rounded-xl px-6 py-3 font-medium shadow-md transition-all duration-300"
                    >
                      Postuler
                    </a>
                  </div>
                  
                  <div className="flex-1">
                    <Button
                      asChild
                      variant="outline" className="w-full border-[#18133E]/20 text-[#18133E] hover:bg-[#18133E]/5 rounded-xl px-6 py-3 font-medium"
                    >
                      <Link to="/garantie/en-savoir-plus" className="flex items-center justify-center gap-2">
                        <span>En savoir plus</span>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-md transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#18133E] mb-4">Comment ça fonctionne ?</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#18133E] text-white text-sm font-bold mr-2 mt-0.5 flex-shrink-0">
                        1
                      </div>
                      <p className="text-gray-600">
                        Remplis le formulaire en quelques minutes et transmets les documents demandés
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#18133E] text-white text-sm font-bold mr-2 mt-0.5 flex-shrink-0">
                        2
                      </div>
                      <p className="text-gray-600">
                        Reçois une réponse sous 24h avec le montant de la caution
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#18133E] text-white text-sm font-bold mr-2 mt-0.5 flex-shrink-0">
                        3
                      </div>
                      <p className="text-gray-600">
                        Paie en ligne et obtiens ton certificat de garantie à présenter au propriétaire
                      </p>
                    </li>
                  </ol>
                </div>
                
                <div className="bg-[#FFC3BC]/10 p-6 rounded-xl border border-[#FFC3BC]/20 transition-all duration-300">
                  <div className="flex items-start">
                    <InfoIcon className="h-5 w-5 text-[#FFC3BC] mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#18133E] mb-2">Pourquoi avoir un garant ?</h3>
                      <p className="text-gray-600 text-sm">
                        En France, la plupart des propriétaires exigent un garant qui s'engage à payer le loyer en cas de défaut de paiement du locataire. Garantme te permet d'obtenir cette garantie même si tu n'as pas de proche qui peut se porter garant pour toi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Luko */}
      <section className="py-16 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#18133E] mb-4">Ce qui est couvert</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Dégâts des eaux", icon: <Umbrella className="h-5 w-5 text-[#FFC3BC]" /> },
                      { title: "Incendie", icon: <AlertCircle className="h-5 w-5 text-[#FFC3BC]" /> },
                      { title: "Vol et cambriolage", icon: <Shield className="h-5 w-5 text-[#FFC3BC]" /> },
                      { title: "Responsabilité civile", icon: <User className="h-5 w-5 text-[#FFC3BC]" /> }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-[#FFC3BC]/10 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                          {item.icon}
                        </div>
                        <span className="text-gray-700 mt-1">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#18133E] mb-4">Les avantages Luko</h3>
                  <ul className="space-y-3">
                    {[
                      "Souscription 100% en ligne en moins de 2 minutes",
                      "Application mobile intuitive pour déclarer un sinistre",
                      "Assurance responsable avec une partie des cotisations reversée à des associations",
                      "Tarifs adaptés aux étudiants à partir de 5€/mois"
                    ].map((avantage, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#FFC3BC] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{avantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section FAQ */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-[#FFC3BC]/10 text-[#18133E] text-sm font-medium mb-4 border border-[#FFC3BC]/20">
              Questions fréquentes
            </span>
            <h2 className="text-3xl font-bold mb-4 text-[#18133E]">
              Tout savoir sur les assurances
            </h2>
            <p className="text-gray-600">
              Nous répondons à vos questions les plus fréquentes sur le garant et l'assurance habitation.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Quelle est la différence entre un garant et une assurance habitation ?",
                  answer: "Le garant est une personne physique ou morale qui s'engage à payer ton loyer en cas de défaillance. L'assurance habitation, quant à elle, couvre les dommages que tu pourrais causer à ton logement ou à des tiers (dégâts des eaux, incendie, etc.)."
                },
                {
                  question: "Puis-je souscrire à ces services même si je n'ai pas encore de logement ?",
                  answer: "Pour Garantme, tu peux faire une demande de garantie avant même d'avoir trouvé un logement. Cela te permettra de connaître le montant maximal de loyer pour lequel tu pourras obtenir une garantie. Pour l'assurance habitation Luko, il te faudra connaître l'adresse du logement pour finaliser la souscription."
                },
                {
                  question: "Quel est le délai pour obtenir mon attestation d'assurance ?",
                  answer: "Avec Luko, tu reçois ton attestation d'assurance habitation immédiatement après la souscription en ligne. Pour Garantme, le certificat de garantie est généralement délivré sous 24 à 48h après validation de ton dossier."
                },
                {
                  question: "Est-ce que ces services sont accessibles aux étudiants internationaux ?",
                  answer: "Oui, Garantme et Luko sont accessibles aux étudiants internationaux. Garantme a spécifiquement développé des offres adaptées aux profils internationaux, et Luko propose des contrats d'assurance habitation sans condition de nationalité."
              }
  ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#18133E] flex items-center justify-center flex-shrink-0 mt-1">
                      <AlertCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#18133E] text-lg mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Section CTA */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#18133E] to-[#271D5B] rounded-2xl p-8 md:p-12 shadow-xl text-center text-white overflow-hidden relative transition-all duration-300">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#FFC3BC]/10 blur-3xl transition-all duration-300"></div>
              <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20 shadow-xl transition-all duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Besoin de conseils personnalisés ?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                Notre équipe est disponible pour t'aider à choisir la solution la plus adaptée à ta situation. N'hésite pas à nous contacter pour un accompagnement sur mesure.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <div>
                  <Button asChild className="bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] text-[#18133E] hover:from-[#ff9d94] hover:to-[#FFC3BC] rounded-full px-8 py-6 text-lg font-medium border-0 shadow-xl transition-all duration-300">
                    <Link to="/contact" className="flex items-center gap-2">
                      <span>Contacter un conseiller</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div>
                  <Button asChild variant="outline" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/20 rounded-full px-8 py-6 text-lg font-medium shadow-lg transition-all duration-300">
                    <Link to="/ressources/guides-assurances">
                      <span>Télécharger notre guide</span>
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

export default PageAssurances;