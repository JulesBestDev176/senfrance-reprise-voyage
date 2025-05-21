import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
        variant: "default",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour vous aider dans toutes vos démarches liées aux études en France.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Informations de contact */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-primary/5 rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl font-bold">Nos coordonnées</h2>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Adresse</h3>
                  <p className="text-muted-foreground">
                    123 Avenue Cheikh Anta Diop<br />
                    Dakar, Sénégal
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">
                    contact@senfrance.fr<br />
                    support@senfrance.fr
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Téléphone</h3>
                  <p className="text-muted-foreground">
                    +221 XX XXX XX XX<br />
                    +221 XX XXX XX XX
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Horaires d'ouverture</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Lundi - Vendredi</span>
                  <span>9h - 17h</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Samedi</span>
                  <span>9h - 13h</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-medium">
                      Adresse email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Votre email"
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block font-medium">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sujet de votre message"
                    required
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message"
                    required
                    className="rounded-lg min-h-[150px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={loading}
                  className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
                >
                  {loading ? "Envoi en cours..." : (
                    <>
                      <Send size={18} />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Carte */}
        <div className="mt-16 rounded-2xl overflow-hidden h-96 shadow-sm border border-gray-100">
          <div className="w-full h-full bg-primary/5 flex items-center justify-center">
            <div className="text-center p-6">
              <MapPin size={48} className="text-primary mx-auto mb-4" />
              <p className="text-lg font-medium">Carte interactive</p>
              <p className="text-muted-foreground">
                123 Avenue Cheikh Anta Diop, Dakar, Sénégal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;