import { motion } from 'framer-motion';

interface RetroGridProps {
  isLoaded: boolean;
}

const RetroGrid = ({ isLoaded }: RetroGridProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className="fixed inset-0 z-[2] overflow-hidden"
      style={{
        perspective: '1000px',
        perspectiveOrigin: '50% 50%'
      }}
    >
      {/* Main grid with perspective */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(transparent 0%, rgba(0, 0, 0, 0.1) 50%, transparent 100%)
          `,
          backgroundSize: '100% 4px',
          transform: 'rotateX(60deg) translateY(-60%) scale(3)',
          transformOrigin: 'center center',
          animation: 'gridMove 15s linear infinite',
          maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)',
        }}
      />

      {/* Vertical lines for perspective effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, 
              transparent calc(50% - 1px), 
              rgba(0, 0, 0, 0.1) 50%, 
              transparent calc(50% + 1px)
            ),
            linear-gradient(90deg, 
              transparent calc(25% - 1px), 
              rgba(0, 0, 0, 0.05) 25%, 
              transparent calc(25% + 1px)
            ),
            linear-gradient(90deg, 
              transparent calc(75% - 1px), 
              rgba(0, 0, 0, 0.05) 75%, 
              transparent calc(75% + 1px)
            )
          `,
          transform: 'rotateX(60deg) translateY(-60%) scale(3)',
          transformOrigin: 'center center',
          maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)',
        }}
      />
    </motion.div>
  );
};

export default RetroGrid; 