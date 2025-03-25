import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <motion.div
        className="animated-background__gradient"
        animate={{
          background: [
            'linear-gradient(45deg, var(--color-primary), var(--color-accent))',
            'linear-gradient(225deg, var(--color-accent), var(--color-primary))',
            'linear-gradient(45deg, var(--color-primary), var(--color-accent))'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="animated-background__overlay" />
    </div>
  );
};

export default AnimatedBackground;