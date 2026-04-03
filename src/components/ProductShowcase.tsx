import React from 'react';
import { motion } from 'motion/react';

const ProductShowcase: React.FC = () => {
  const features = [
    {
      title: "KINETIC FOAM",
      subtitle: "Revolutionary Energy Return",
      description: "Our proprietary foam technology provides unmatched cushioning while returning energy with every stride. Designed for the long run.",
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1000",
      reversed: false
    },
    {
      title: "AERO-WEAVE",
      subtitle: "Breathable Performance",
      description: "A seamless, single-piece upper that adapts to your foot's natural movement. Maximum breathability meets structural support.",
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
      reversed: true
    }
  ];

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${feature.reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 aspect-square overflow-hidden"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: feature.reversed ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <p className="text-brand-accent text-xs font-bold uppercase tracking-[0.4em] mb-4">
                Innovation
              </p>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
                {feature.title}
              </h2>
              <h3 className="text-xl font-light tracking-widest text-white/70 mb-8 uppercase">
                {feature.subtitle}
              </h3>
              <p className="text-white/50 leading-relaxed max-w-lg mx-auto md:mx-0">
                {feature.description}
              </p>
              <button className="mt-10 px-8 py-3 border border-white/20 hover:border-brand-accent transition-all duration-300 uppercase tracking-widest text-xs font-bold">
                Learn More
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
