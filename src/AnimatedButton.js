import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, className, onClick, delay = 0 }) => {
  const buttonVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        delay
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 400
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.button
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;