
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

// Destinations data
const destinations = [
  {
    id: 1,
    name: "Dakar",
    description: "La capitale vibrante du Sénégal offre un mélange unique de culture moderne africaine et d'influences coloniales françaises. Découvrez ses marchés animés, ses galeries d'art et sa vie nocturne trépidante.",
    image: "https://images.unsplash.com/photo-1597435877853-7d70704f5563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    attractions: ["Monument de la Renaissance Africaine", "Île de Gorée", "Marché Sandaga", "Village des Arts"]
  },
  {
    id: 2,
    name: "Saint-Louis",
    description: "Ancienne capitale du Sénégal colonial, Saint-Louis est une ville insulaire pleine de charme avec ses rues étroites et ses bâtiments colorés d'architecture coloniale. Un véritable voyage dans le temps.",
    image: "https://images.unsplash.com/photo-1591461712364-3022bfcd7931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80",
    attractions: ["Pont Faidherbe", "Quartier colonial", "Parc National des Oiseaux du Djoudj", "Village de pêcheurs"]
  },
  {
    id: 3,
    name: "Lac Rose (Lac Retba)",
    description: "Cette merveille naturelle, également connue sous le nom de Lac Retba, doit sa couleur rose à la présence d'algues spécifiques. C'est également un lieu de travail pour les récolteurs de sel traditionnels.",
    image: "https://images.unsplash.com/photo-1594402745330-19d51f899711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    attractions: ["Baignade dans le lac", "Récolte traditionnelle de sel", "Tour en 4x4 dans les dunes", "Villages environnants"]
  },
  {
    id: 4,
    name: "Île de Gorée",
    description: "Site classé au patrimoine mondial de l'UNESCO, l'île de Gorée a joué un rôle central dans la traite négrière. C'est aujourd'hui un lieu de mémoire important et un centre artistique.",
    image: "https://images.unsplash.com/photo-1592302855504-af24bce3d929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    attractions: ["Maison des Esclaves", "Musée Historique", "Plage de Gorée", "Ateliers d'artistes"]
  },
  {
    id: 5,
    name: "Parc National du Niokolo-Koba",
    description: "Plus grande réserve naturelle du Sénégal, ce parc national abrite une faune variée incluant lions, éléphants, hippopotames et de nombreuses espèces d'oiseaux dans un paysage de savane magnifique.",
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1978&q=80",
    attractions: ["Safari en 4x4", "Observation des animaux", "Randonnées guidées", "Camping en brousse"]
  },
  {
    id: 6,
    name: "Réserve de Bandia",
    description: "À proximité de Dakar, cette réserve privée permet d'observer de nombreux animaux africains dans leur habitat naturel : rhinocéros, girafes, zèbres, antilopes et crocodiles.",
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1978&q=80",
    attractions: ["Safari en 4x4", "Restaurant sur place", "Baobabs centenaires", "Tombeau Sérère"]
  },
  {
    id: 7,
    name: "Sine Saloum",
    description: "Ce delta formé par les fleuves Sine et Saloum est constitué de mangroves, d'îles et de villages traditionnels. C'est un paradis pour les amateurs de nature et d'authenticité.",
    image: "https://images.unsplash.com/photo-1640275286464-21cb1bc59fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    attractions: ["Excursion en pirogue", "Observation des oiseaux", "Villages de pêcheurs", "Îles aux coquillages"]
  },
  {
    id: 8,
    name: "Casamance",
    description: "Région verdoyante au sud du Sénégal, la Casamance est connue pour ses plages magnifiques, sa culture unique et sa cuisine délicieuse. Un Sénégal différent, plus vert et plus tranquille.",
    image: "https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    attractions: ["Cap Skirring", "Forêts de Baobabs", "Villages Diola", "Artisanat local"]
  }
];

const Destinations = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-senfrance-blue">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522509585149-c9cd39d1ff08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Destinations au Sénégal
            </h1>
            <p className="text-xl text-white/80">
              Découvrez la diversité des paysages et des cultures du Sénégal à travers nos destinations phares
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h2 className="text-2xl font-bold text-white mb-1 flex items-center">
                        <MapPin size={20} className="mr-2 flex-shrink-0" />
                        {destination.name}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-4">{destination.description}</p>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Points d'intérêt:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {destination.attractions.map((attraction, i) => (
                        <li key={i}>{attraction}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-senfrance-lightSand">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à explorer ces destinations ?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Nos circuits touristiques vous permettent de découvrir ces lieux incroyables dans les meilleures conditions.
            </p>
            <div className="inline-flex items-center justify-center">
              <a 
                href="/tours" 
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Découvrir nos circuits
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destinations;
