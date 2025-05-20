import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, Briefcase, GraduationCap, Clock, CircleDollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const StudentJob = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for different elements
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageY = useTransform(scrollYProgress, [0, 1], [25, -25]);
  
  // Mouse position for interactive elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring for the mouse follower
  const springConfig = { damping: 25, stiffness: 300 };
  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);
  
  // Handle mouse movement
  const handleMouseMove = (e) => {
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Title animation
  const titleWords = "Postulez pour un job étudiant".split(" ");
  
  // Statistics data
  const stats = [
    { icon: <Clock />, value: "20h", label: "Par semaine" },
    { icon: <CircleDollarSign />, value: "11.65€", label: "SMIC horaire" },
    { icon: <Users />, value: "80%", label: "Des étudiants" },
  ];

  return (
    <motion.section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-28 relative overflow-hidden bg-gradient-to-br from-[#18133E] via-[#231A54] to-[#2F265F]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-full h-full opacity-5"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            repeatType: 'reverse',
            ease: "linear"
          }}
          style={{
            backgroundImage: 'url(/grid-pattern.svg)',
            backgroundSize: '60px'
          }}
        />
        
        {/* Animated gradient blobs */}
        <motion.div 
          className="absolute top-[20%] right-[5%] w-[40rem] h-[40rem] rounded-full bg-purple-600/10 blur-[8rem]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-[10%] left-[5%] w-[30rem] h-[30rem] rounded-full bg-[#FFC3BC]/10 blur-[6rem]"
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.1, 0.15, 0.1],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full bg-white/30 blur-[1px]"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Mouse follower light effect */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#FFC3BC]/30 to-purple-500/10 blur-[80px] pointer-events-none z-0 opacity-50"
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ y: textY }}
          >
            {/* Title with word-by-word animation */}
            <div className="overflow-hidden mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    className={`inline-block mr-2 ${word === "job" ? "text-[#FFC3BC]" : "text-[#FFF]"}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: i * 0.1,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                  >
                    {word === "job" ? (
                      <span className="relative">
                        <span className="relative z-10">job</span>
                        <motion.span 
                          className="absolute -bottom-1 left-0 right-0 h-[0.2em] bg-[#FFC3BC]/70 z-0 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: titleWords.length * 0.1 + 0.2,
                            duration: 0.8
                          }}
                        />
                      </span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
                <motion.span 
                  className="text-[#FFC3BC] inline-block"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: titleWords.length * 0.1,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                >
                  étudiant
                </motion.span>
              </h2>
            </div>

            <motion.p 
              className="text-white/80 mb-10 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Travailler pendant ses études, c'est possible. Vous pouvez prendre un emploi à temps partiel sans compromettre votre formation et vos chances de réussite.
            </motion.p>

            {/* Statistics */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center border border-white/10 hover:bg-white/10 transition-colors duration-300"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="bg-[#FFC3BC]/20 rounded-full p-2 mb-2"
                    whileHover={{ 
                      rotate: [0, -10, 10, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {React.cloneElement(stat.icon, { className: "h-5 w-5 text-[#FFC3BC]" })}
                  </motion.div>
                  <span className="text-xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs text-white/70">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button with animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="relative"
            >
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-[#FFC3BC]/80 to-pink-500/50 rounded-full blur-md opacity-70"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <Button 
                asChild 
                className="relative bg-gradient-to-r from-[#FFC3BC] to-pink-500 hover:from-pink-500 hover:to-[#FFC3BC] text-[#18133E] font-bold rounded-full px-8 py-6 shadow-lg border-0 transition-all duration-300"
              >
                <Link to="/vivre-en-france/job-etudiant" className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  <span>TROUVER UN JOB</span>
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="ml-1"
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </Link>
              </Button>
              
              {/* Button particles effect */}
              <AnimatePresence>
                {isHovered && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ 
                          opacity: 0, 
                          scale: 0,
                          x: 0,
                          y: 0 
                        }}
                        animate={{ 
                          opacity: [0, 0.8, 0],
                          scale: [0, 1, 0],
                          x: [0, (Math.random() - 0.5) * 60],
                          y: [0, (Math.random() - 0.5) * 60]
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ 
                          duration: 1,
                          delay: i * 0.05,
                        }}
                        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-white"
                        style={{
                          top: "50%",
                          left: "80%",
                          translateX: "-50%",
                          translateY: "-50%"
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ y: imageY }}
            className="relative"
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute inset-0 border-2 border-[#FFC3BC]/20 rounded-2xl -m-4 z-0"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-[#FFC3BC]/30 to-purple-500/20 rounded-full blur-xl z-0"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Main image with interactive hover effect */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 overflow-hidden rounded-2xl shadow-2xl shadow-purple-900/30 border border-white/10"
            >
              {/* Image gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#18133E]/80 to-transparent z-10"></div>
              
              {/* Image */}
              <motion.img 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Étudiant travaillant à temps partiel" 
                className="w-full h-auto object-cover aspect-square md:aspect-auto md:h-[500px] rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
              
              {/* Image caption */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 z-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="h-5 w-5 text-[#FFC3BC]" />
                  <span className="text-white/90 font-medium">Conciliez études et travail</span>
                </div>
                <p className="text-white/70 text-sm">
                  De nombreuses opportunités existent pour les étudiants internationaux
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default StudentJob;