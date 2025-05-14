
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sophie Dupont",
    location: "Paris, France",
    comment: "Un voyage inoubliable au Sénégal grâce à SenFrance ! L'organisation était parfaite, les guides très professionnels et les hébergements de qualité. Je recommande vivement !",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
  },
  {
    id: 2,
    name: "Pierre Martin",
    location: "Lyon, France",
    comment: "Notre circuit de 10 jours était parfaitement organisé. Nous avons découvert des lieux authentiques loin des sentiers battus. Une agence à recommander sans hésitation !",
    rating: 5,
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 3,
    name: "Marie Leclerc",
    location: "Bordeaux, France",
    comment: "Merci à toute l'équipe de SenFrance pour ce magnifique voyage. Le Sénégal est un pays magnifique et l'accueil y est chaleureux. Notre guide était exceptionnel !",
    rating: 4,
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-senfrance-blue text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ce que nos clients disent
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Découvrez les témoignages de nos voyageurs sur leurs expériences au Sénégal avec SenFrance
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-white/70 text-sm">{testimonial.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}
                  />
                ))}
              </div>

              <p className="text-white/90 italic">{testimonial.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
