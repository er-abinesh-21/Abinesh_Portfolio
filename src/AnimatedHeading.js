import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeading = ({ children, className, delay = 0 }) => {
  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        delay
      }
    }
  };

  const words = children.split(' ');

  return (
    <h2 className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', marginRight: '0.5rem' }}>
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              style={{ display: 'inline-block', transformOrigin: 'bottom' }}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: delay + (letterIndex * 0.05) }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </h2>
  );
};

export default AnimatedHeading;