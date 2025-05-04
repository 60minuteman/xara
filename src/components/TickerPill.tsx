'use client';

import { motion } from 'framer-motion';

const services = [
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'Cloud Solutions',
  'DevOps',
  'AI Integration',
  'Custom Software',
  'Digital Strategy'
];

const TickerPill = () => {
  return (
    <div className="absolute bottom-12 left-0 right-0 overflow-hidden h-10 flex items-center justify-center">
      <div className="relative w-full">
        {/* Left fade */}
        <div className="absolute left-0 z-10 w-32 h-full bg-gradient-to-r from-black to-transparent" />
        
        <motion.div
          className="flex whitespace-nowrap gap-8"
          animate={{
            x: [0, '-50%']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {[...services, ...services].map((service, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-white/50 text-sm border border-white/10"
            >
              {service}
            </span>
          ))}
        </motion.div>

        {/* Right fade */}
        <div className="absolute right-0 top-0 z-10 w-32 h-full bg-gradient-to-l from-black to-transparent" />
      </div>
    </div>
  );
};

export default TickerPill; 