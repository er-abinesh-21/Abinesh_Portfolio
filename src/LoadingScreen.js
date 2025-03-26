import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <motion.div 
        className="loading-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="neon-text">
          <span className="letter">L</span>
          <span className="letter">O</span>
          <span className="letter">A</span>
          <span className="letter">D</span>
          <span className="letter">I</span>
          <span className="letter">N</span>
          <span className="letter">G</span>
        </div>
        <div className="loading-bar">
          <motion.div 
            className="loading-progress"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
        <motion.p 
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Your Next Big Inspiration...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;