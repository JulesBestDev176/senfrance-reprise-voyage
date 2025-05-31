import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Loader2,
  Clock,
  Users,
  Sparkles,
  Star,
  ArrowRight,
  MessageSquare,
  Headphones,
  Shield
} from "lucide-react";
import DakarOffice from "@/components/home/DakarOffice";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const { toast } = useToast();

  // Scroll animations
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // URL de l'API
  const API_URL = import.meta.env.PROD 
  ? (import.meta.env.VITE_API_URL || 'https://senfrance-backend.onrender.com')
  : 'http://localhost:5000';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "L'email est obligatoire";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = "Le sujet doit contenir au moins 3 caractères";
    }
    
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Dans votre handleSubmit de ContactPage.tsx, remplacez le fetch par :

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!validateForm()) {
    toast({
      title: "Erreur de validation",
      description: "Veuillez corriger les erreurs dans le formulaire.",
      variant: "destructive",
    });
    return;
  }

  setLoading(true);

  try {
    // console.log('🚀 Envoi vers:', `${API_URL}/api/contact`);
    // console.log('📦 Données:', formData);

    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      credentials: 'include', // Important pour CORS avec credentials
      body: JSON.stringify(formData),
    });

    // console.log('📡 Réponse status:', response.status);
    // console.log('📡 Réponse headers:', response.headers);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // console.log('✅ Réponse données:', data);

    if (data.success) {
      toast({
        title: "✅ Message envoyé !",
        description: data.message,
        variant: "default",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } else {
      throw new Error(data.message || 'Erreur lors de l\'envoi');
    }
  } catch (error) {
    // console.error('❌ Erreur complète:', error);
    
    let errorMessage = "Impossible d'envoyer le message. Veuillez réessayer.";
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      errorMessage = "Problème de connexion au serveur. Vérifiez votre réseau.";
    } else if (error.message.includes('CORS')) {
      errorMessage = "Erreur de configuration serveur. Contactez le support.";
    }
    
    toast({
      title: "❌ Erreur d'envoi",
      description: errorMessage,
      variant: "destructive",
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#18133E] via-[#231A54] to-[#18133E] overflow-hidden"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          
          {/* Animated decorative elements */}
          <motion.div 
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#FFC3BC]/20 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-white"
            >
              <div className="inline-block mb-4 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                <span className="text-sm font-medium">Contactez SenFrance</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Parlons de votre{' '}
                <span className="bg-gradient-to-r from-[#FFC3BC] to-[#ff9d94] bg-clip-text text-transparent">
                  projet
                </span>
              </h1>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                Notre équipe d'experts est à votre disposition pour vous accompagner dans toutes vos démarches. 
                <span className="font-semibold text-[#FFC3BC]"> Réponse garantie sous 24h.</span>
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Conseil personnalisé et gratuit",
                  "Équipe d'experts dédiés",
                  "Suivi transparent de votre dossier",
                  "Support disponible 7j/7"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-[#FFC3BC] mr-3 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                >
                  <div className="text-2xl font-bold text-[#FFC3BC] mb-1">2000+</div>
                  <div className="text-white/70 text-sm">Étudiants conseillés</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                >
                  <div className="text-2xl font-bold text-[#FFC3BC] mb-1">24h</div>
                  <div className="text-white/70 text-sm">Délai de réponse</div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Contact Methods Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-6"
            >
              {[
                { icon: Mail, title: "E-mail", info: "contact@senfrance.com", color: "from-blue-500 to-blue-600" },
                { icon: Phone, title: "Téléphone", info: "+33 9 72 14 66 97", color: "from-green-500 to-green-600" },
                { icon: MapPin, title: "Adresse", info: "15 quai des Chartrons, Bordeaux", color: "from-purple-500 to-purple-600" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.info}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <motion.div 
            className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full bg-[#FFC3BC]/5 blur-3xl"
            style={{ y: foregroundY }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#FFC3BC]/10 text-[#18133E] text-sm font-medium mb-4 border border-[#FFC3BC]/20">
              Formulaire de Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18133E]">
              Envoyez-nous un message
            </h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-[#FFC3BC] to-[#FFC3BC]/30 rounded-full mx-auto mb-6"
            />
            <p className="text-gray-600">
              Décrivez votre projet et nous vous recontacterons rapidement avec une solution personnalisée.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-[#18133E]">Nos coordonnées</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#FFC3BC]/10 p-3 rounded-full text-[#18133E]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Adresse</h4>
                      <p className="text-gray-600">
                        15 quai des Chartrons
                        <br />
                        33000 Bordeaux - France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#FFC3BC]/10 p-3 rounded-full text-[#18133E]">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">E-mail</h4>
                      <a href="mailto:contact@senfrance.com" className="text-[#18133E] hover:text-[#FFC3BC] transition-colors">
                        contact@senfrance.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#FFC3BC]/10 p-3 rounded-full text-[#18133E]">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Téléphone</h4>
                      <div className="space-y-1">
                        <a href="tel:+33972146697" className="block text-[#18133E] hover:text-[#FFC3BC] transition-colors">
                          +33 9 72 14 66 97
                        </a>
                        <a href="tel:+33744518296" className="block text-[#18133E] hover:text-[#FFC3BC] transition-colors">
                          +33 7 44 51 82 96
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-[#18133E]">Horaires d'ouverture</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Lundi - Vendredi</span>
                    <span className="text-[#18133E]">10h - 20h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Samedi</span>
                    <span className="text-[#18133E]">10h - 18h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Dimanche</span>
                    <span className="text-gray-500">Fermé</span>
                  </div>
                </div>
              </div>

              {/* Service Status */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-green-600" size={24} />
                  <h3 className="font-semibold text-green-800">Service actif</h3>
                </div>
                <ul className="text-sm text-green-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <Clock size={16} />
                    Réponse sous 24h garantie
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail size={16} />
                    Confirmation automatique par E-mail
                  </li>
                  <li className="flex items-center gap-2">
                    <Users size={16} />
                    Équipe dédiée aux étudiants
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Formulaire de contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-r from-[#18133E] to-[#271D5B] p-3 rounded-xl">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#18133E]">Formulaire de contact</h3>
                    <p className="text-gray-600">Tous les champs marqués d'un * sont obligatoires</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-medium text-gray-700">
                        Nom complet *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom complet"
                        className={`rounded-xl border-2 transition-all duration-200 ${
                          errors.name 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-200 focus:border-[#FFC3BC]'
                        }`}
                        disabled={loading}
                      />
                      {errors.name && (
                        <div className="flex items-center gap-1 text-red-500 text-sm">
                          <AlertCircle size={16} />
                          {errors.name}
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-medium text-gray-700">
                        Adresse E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className={`rounded-xl border-2 transition-all duration-200 ${
                          errors.email 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-200 focus:border-[#FFC3BC]'
                        }`}
                        disabled={loading}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 text-red-500 text-sm">
                          <AlertCircle size={16} />
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block font-medium text-gray-700">
                      Sujet *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Exemple: Demande d'information sur les études en France"
                      className={`rounded-xl border-2 transition-all duration-200 ${
                        errors.subject 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-[#FFC3BC]'
                      }`}
                      disabled={loading}
                    />
                    {errors.subject && (
                      <div className="flex items-center gap-1 text-red-500 text-sm">
                        <AlertCircle size={16} />
                        {errors.subject}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block font-medium text-gray-700">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet d'études, vos questions ou vos besoins en détail..."
                      className={`rounded-xl border-2 transition-all duration-200 min-h-[150px] resize-none ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-[#FFC3BC]'
                      }`}
                      disabled={loading}
                    />
                    {errors.message && (
                      <div className="flex items-center gap-1 text-red-500 text-sm">
                        <AlertCircle size={16} />
                        {errors.message}
                      </div>
                    )}
                    <div className="text-sm text-gray-500 text-right">
                      {formData.message.length}/1000 caractères
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-[#18133E] to-[#271D5B] hover:from-[#271D5B] hover:to-[#18133E] text-white rounded-xl px-8 py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin mr-2" size={20} />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-800 font-medium mb-1">
                        Confirmation automatique
                      </p>
                      <p className="text-sm text-blue-700">
                        Vous recevrez un E-mail de confirmation à l'adresse indiquée.
                        Notre équipe vous répondra personnellement sous 24h.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#18133E]">Venez nous rendre visite</h3>
            <p className="text-gray-600">
              Situés au cœur de Bordeaux, nous sommes facilement accessibles en transport en commun.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
          >
            <iframe
              title="Carte interactive SenFrance"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.397894793511!2d-0.5756728848831083!3d44.84827157909892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527f479f41a9b%3A0x2b6b50f91b6bb366!2s15%20Quai%20des%20Chartrons%2C%2033000%20Bordeaux%2C%20France!5e0!3m2!1sfr!2sfr!4v1699198669254!5m2!1sfr!2sfr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

       {/* Dakar Office */}
      <DakarOffice />
    </div>
  );
};

export default ContactPage;