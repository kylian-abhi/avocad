import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Fallback high-quality video if uploaded one is not found */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-man-running-on-the-beach-at-sunset-1280-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-brand-black/60" />
        
        {/* Futuristic Grid Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ 
               backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 leading-none">
            MOVE WITHOUT<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent-red">
              LIMITS
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light tracking-wide">
            Experience the future of performance footwear. Engineered for those who never stop moving.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a 
              href="#collections"
              className="px-10 py-4 bg-brand-white text-brand-black font-bold uppercase tracking-widest hover:bg-brand-accent transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Shop Collection
            </a>
            <a 
              href="#tech"
              className="px-10 py-4 border border-white/30 hover:border-brand-accent transition-all duration-300 uppercase tracking-widest font-bold inline-block"
            >
              Explore Tech
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-2 opacity-50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-white animate-scroll" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
