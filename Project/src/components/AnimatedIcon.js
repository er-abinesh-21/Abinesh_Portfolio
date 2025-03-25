import React from 'react';
import { motion } from 'framer-motion';

const AnimatedIcon = ({ icon: Icon, className, size = 24, delay = 0 }) => {
  const iconVariants = {
    hidden: { 
      opacity: 0,
      scale: 0,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200
      }
    }
  };

  return (
    <motion.div
      variants={iconVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={className}
    >
      <Icon size={size} />
    </motion.div>
  );
};

export default AnimatedIcon;