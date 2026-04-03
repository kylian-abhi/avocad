import React from 'react';
import { motion } from 'motion/react';

const VideoHighlight: React.FC = () => {
  return (
    <section id="tech" className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-man-training-on-the-beach-1281-large.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-accent text-xs font-bold uppercase tracking-[0.6em] mb-8"
        >
          The Aether Philosophy
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-none uppercase"
        >
          Redefining the<br />Human Potential
        </motion.h2>
        <motion.a
          href="https://www.youtube.com/watch?v=-uNUXEN9LmE"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="px-12 py-4 bg-brand-white text-brand-black font-black uppercase tracking-[0.3em] text-xs hover:bg-brand-accent transition-all duration-300 inline-block"
        >
          Watch the Film
        </motion.a>
      </div>
    </section>
  );
};

export default VideoHighlight;
