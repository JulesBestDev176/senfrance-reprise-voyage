import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Briefcase, GraduationCap, Clock, CircleDollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const StudentJob = () => {
  const [isHovered, setIsHovered] = useState(false);
    
  // Parallax effect for different elements
      
  // Mouse position for interactive elements
      
  // Smooth spring for the mouse follower
  const springConfig = { damping: 25, stiffness: 300 };
      
  // Handle mouse movement
  const handleMouseMove = (e) => {
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Title animation
  const titleWords = "Postule un job étudiant".split(" ");
  
  // Statistics data
  const stats = [
    { icon: <Clock />, value: "20h", label: "Par semaine" },
    { icon: <CircleDollarSign />, value: "11.65€", label: "SMIC horaire" },
    { icon: <Users />, value: "80%", label: "Des étudiants" },
  ];

  return (
    <section 
      
      className="py-8 relative overflow-hidden bg-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-full h-full opacity-5"
        />
        
        {/* Animated gradient blobs */}
        <div 
          className="absolute top-[20%] right-[5%] w-[40rem] h-[40rem] rounded-full bg-purple-600/10 blur-[8rem]"
        />
        <div 
          className="absolute bottom-[10%] left-[5%] w-[30rem] h-[30rem] rounded-full bg-[#FFC3BC]/10 blur-[6rem]"
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gray-400/20 blur-[1px]"
            style={{
              left: `${10 + Math.random() * 80}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      {/* Mouse follower light effect */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#FFC3BC]/20 to-purple-500/10 blur-[80px] pointer-events-none z-0 opacity-30"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div
          >
            {/* Title with word-by-word animation */}
            <div className="overflow-hidden mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {titleWords.map((word, i) => (
                  <span
                    key={i}
                    className={`inline-block mr-2 ${word === "job" ? "text-[#FFC3BC]" : "text-gray-900"}`}
                  >
                    {word === "job" ? (
                      <span className="relative">
                        <span className="relative z-10">job</span>
                        <span 
                          className="absolute -bottom-1 left-0 right-0 h-[0.2em] bg-[#FFC3BC]/70 z-0 rounded-full"
                        />
                      </span>
                    ) : (
                      word
                    )}
                  </span>
                ))}
               
              </h2>
            </div>

            <p 
              className="text-gray-600 mb-10 text-lg leading-relaxed"
            >
              Travailler pendant ses études, c'est possible. Tu peux prendre un emploi à temps partiel sans compromettre ta formation et tes chances de réussite.
            </p>

            {/* Statistics */}
            <div 
              className="grid grid-cols-3 gap-4 mb-10"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div 
                    className="bg-[#FFC3BC]/20 rounded-full p-2 mb-2"
                  >
                    {React.cloneElement(stat.icon, { className: "h-5 w-5 text-[#FFC3BC]" })}
                  </div>
                  <span className="text-xl font-bold text-gray-900">{stat.value}</span>
                  <span className="text-xs text-gray-600">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Button with animations */}
            <div
              className="relative"
            >
              <div 
                className="absolute -inset-2 bg-gradient-to-r from-[#FFC3BC]/60 to-pink-500/40 rounded-full blur-md opacity-50"
              />
              <Button 
                asChild 
                className="relative bg-gradient-to-r from-[#FFC3BC] to-pink-500 hover:from-pink-500 hover:to-[#FFC3BC] text-white font-bold rounded-full px-8 py-6 shadow-lg border-0 transition-all duration-300"
              >
                <Link to="/vivre-en-france/job-etudiant" className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  <span>TROUVER UN JOB</span>
                  <div
                    className="ml-1"
                  >
                    <ArrowRight size={18} />
                  </div>
                </Link>
              </Button>
              
              {/* Button particles effect */}
              
                {isHovered && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[#FFC3BC]"
                      />
                    ))}
                  </>
                )}
              
            </div>
          </div>
          
          {/* Image Column */}
          <div
            className="relative"
          >
            {/* Decorative elements */}
            <div 
              className="absolute inset-0 border-2 border-[#FFC3BC]/30 rounded-2xl -m-4 z-0"
            />
            <div 
              className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-[#FFC3BC]/20 to-purple-500/15 rounded-full blur-xl z-0"
            />
            
            {/* Main image with interactive hover effect */}
            <div
              className="relative z-10 overflow-hidden rounded-2xl shadow-2xl shadow-gray-500/20 border border-gray-200"
            >
              {/* Image gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#18133E]/60 to-transparent z-10"></div>
              
              {/* Image */}
              <img 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Étudiant travaillant à temps partiel" 
                className="w-full h-auto object-cover aspect-square md:aspect-auto md:h-[500px] rounded-2xl"
              />
              
              {/* Image caption */}
              <div 
                className="absolute bottom-0 left-0 right-0 p-6 z-20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="h-5 w-5 text-[#FFC3BC]" />
                  <span className="text-white font-medium">Concilie études et travail</span>
                </div>
                <p className="text-white/80 text-sm">
                  De nombreuses opportunités existent pour les étudiants internationaux
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentJob;