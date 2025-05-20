
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Testimonials from '@/components/home/Testimonials';

// Team members data
const team = [
  {
    name: "Sophie Martin",
    role: "Fondatrice & Directrice",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    bio: "Passionnée par le Sénégal depuis plus de 20 ans, Sophie a fondé SenFrance pour partager sa passion du pays de la Teranga."
  },
  {
    name: "Moussa Diop",
    role: "Responsable des Opérations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    bio: "Natif de Saint-Louis, Moussa connaît parfaitement son pays et assure la coordination de tous nos circuits sur place."
  },
  {
    name: "Claire Dubois",
    role: "Conseillère en Voyages",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80",
    bio: "Avec 15 ans d'expérience dans le tourisme, Claire vous aide à concevoir le voyage qui vous ressemble."
  },
  {
    name: "Mamadou Ndiaye",
    role: "Guide Senior",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    bio: "Guide francophone expérimenté, Mamadou partage avec passion l'histoire et la culture de son pays."
  }
];

// Timeline data
const timeline = [
  {
    year: "2005",
    title: "Création de SenFrance",
    description: "Fondation de l'agence à Paris par Sophie Martin après plusieurs années passées au Sénégal."
  },
  {
    year: "2008",
    title: "Ouverture du bureau à Dakar",
    description: "Pour mieux servir nos clients sur place et développer notre réseau local."
  },
  {
    year: "2012",
    title: "Développement des circuits écotouristiques",
    description: "Lancement de nos premiers circuits axés sur la préservation de l'environnement et l'immersion culturelle."
  },
  {
    year: "2016",
    title: "Prix du tourisme responsable",
    description: "SenFrance reçoit une reconnaissance pour son engagement dans le tourisme durable."
  },
  {
    year: "2020",
    title: "Digitalisation des services",
    description: "Lancement de notre plateforme en ligne permettant de personnaliser et réserver des circuits directement."
  },
  {
    year: "2023",
    title: "Expansion de notre offre",
    description: "Introduction de nouveaux circuits et destinations dans toute l'Afrique de l'Ouest."
  }
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-senfrance-blue">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591461712364-3022bfcd7931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              À Propos de SenFrance
            </h1>
            <p className="text-xl text-white/80">
              Spécialiste des voyages au Sénégal depuis 2005
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80" 
                alt="Notre histoire" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Notre Histoire
              </h2>
              <p className="text-lg mb-4 text-gray-700">
                SenFrance est née en 2005 de la passion de Sophie Martin pour le Sénégal après plusieurs années passées à Dakar. Ce qui a commencé comme une petite agence spécialisée est devenu au fil des ans un acteur reconnu dans l'organisation de voyages de qualité au Sénégal.
              </p>
              <p className="mb-6 text-gray-700">
                Notre mission est de faire découvrir l'authentique Sénégal à travers des circuits soigneusement conçus qui allient confort, découvertes culturelles et respect de l'environnement. Notre équipe franco-sénégalaise met tout en œuvre pour vous offrir une expérience de voyage inoubliable.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span>Une expertise locale incomparable et des partenaires de confiance</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span>Des circuits personnalisés adaptés à tous les profils de voyageurs</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span>Un engagement fort pour un tourisme responsable et durable</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-senfrance-lightSand">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Chez SenFrance, nous croyons en un tourisme qui crée de la valeur pour tous : voyageurs, communautés locales et environnement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Authenticité</h3>
              <p className="text-gray-600 text-center">
                Nous proposons des expériences authentiques qui vous connectent véritablement avec la culture et les habitants du Sénégal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Durabilité</h3>
              <p className="text-gray-600 text-center">
                Nous nous engageons à minimiser notre impact environnemental et à soutenir les économies locales dans toutes nos activités.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Qualité</h3>
              <p className="text-gray-600 text-center">
                Nous ne faisons aucun compromis sur la qualité de nos services, de l'hébergement à l'accompagnement, pour vous garantir un voyage sans souci.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Équipe</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Une équipe passionnée et expérimentée à votre service pour organiser votre voyage au Sénégal
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-senfrance-lightSand">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Parcours</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              L'histoire de SenFrance à travers les années
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="w-1/2 px-4">
                  <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center w-0">
                  <div className="h-full w-0.5 bg-primary"></div>
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {item.year}
                  </div>
                  <div className="h-full w-0.5 bg-primary"></div>
                </div>
                <div className="w-1/2 px-4"></div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </section>
    </>
  );
};

export default About;
