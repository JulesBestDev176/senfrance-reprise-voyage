
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const StudentJob = () => {
  return (
    <section className="py-20 bg-[#18133E] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Postulez pour un <span className="text-[#FFC3BC]">job étudiant</span>
            </h2>
            <p className="text-white/80 mb-8">
              Travailler pendant ses études, c'est possible. Vous pouvez prendre un emploi à temps partiel sans compromettre votre formation et vos chances de réussite.
            </p>
            <Button asChild className="bg-[#FFC3BC] hover:bg-[#FFC3BC]/90 text-[#18133E] font-bold rounded-full">
              <Link to="/vivre-en-france/job-etudiant">
                TRAVAILLER <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
              alt="Job étudiant" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudentJob;
