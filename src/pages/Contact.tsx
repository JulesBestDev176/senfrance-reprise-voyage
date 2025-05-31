import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { CheckCircle, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
        duration: 5000,
      });
      
      // Reset form
      e.currentTarget.reset();
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/80">
              Notre équipe est à votre disposition pour répondre à toutes vos questions sur le Sénégal
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-muted p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Nous écrire</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Votre prénom" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Votre nom" 
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="votre.email@exemple.com" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input 
                    id="phone" 
                    placeholder="+33 6 12 34 56 78" 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un sujet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="information">Demande d'information</SelectItem>
                      <SelectItem value="reservation">Réservation</SelectItem>
                      <SelectItem value="devis">Demande de devis</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Votre message" 
                    rows={5} 
                    required 
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <div className="flex flex-col justify-between">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold mb-6">Nos Coordonnées</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <address className="not-italic text-gray-600">
                        123 Avenue des Champs-Élysées<br />
                        75008 Paris<br />
                        France
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <p className="text-gray-600">+33 1 23 45 67 89</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">contact@senfrance.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold mb-2">Horaires d'ouverture</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Lundi - Vendredi: 9h00 - 18h00</li>
                    <li>Samedi: 10h00 - 16h00</li>
                    <li>Dimanche: Fermé</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-muted p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span>Expertise locale et connaissance approfondie du Sénégal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span>Voyages personnalisés selon vos envies et votre budget</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span>Assistance 24/7 pendant votre séjour</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span>Engagement pour un tourisme responsable et durable</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-6">Notre emplacement</h2>
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047744348!2d2.3002013153698704!3d48.87004100866827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fcd61fa3b53%3A0x138145a077e3fde7!2sAv.%20des%20Champs-%C3%89lys%C3%A9es%2C%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1621923237460!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="SenFrance location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Questions Fréquentes</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Vous avez des questions sur le Sénégal ou sur nos services ? Consultez notre FAQ
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2">Quelle est la meilleure période pour visiter le Sénégal ?</h3>
              <p className="text-gray-600">
                La meilleure période est de novembre à mai, pendant la saison sèche. Les températures sont agréables et les précipitations rares.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2">Ai-je besoin d'un visa pour le Sénégal ?</h3>
              <p className="text-gray-600">
                Les ressortissants français et de nombreux pays européens n'ont pas besoin de visa pour des séjours de moins de 90 jours. Un passeport valide 6 mois après la date de retour est suffisant.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2">Quelle est la monnaie utilisée au Sénégal ?</h3>
              <p className="text-gray-600">
                La monnaie est le Franc CFA (XOF). Vous pouvez changer des euros sur place ou retirer directement aux distributeurs. Les cartes de crédit sont acceptées dans les hôtels et restaurants des grandes villes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2">Quelles vaccinations sont nécessaires ?</h3>
              <p className="text-gray-600">
                Le vaccin contre la fièvre jaune est obligatoire pour entrer au Sénégal. Nous recommandons également les vaccins contre l'hépatite A, le typhus et un traitement antipaludéen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
