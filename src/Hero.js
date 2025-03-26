import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code2, Globe, Database } from 'lucide-react';
import { Link } from 'react-scroll';
import Profile from './Images/ProPic.png'; // Correct import
import './Hero.css';

/**
 * Hero section component with animated elements
 * @returns {JSX.Element} Hero component
 */
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const floatingIconVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="hero">
      {/* Background gradient */}
      <div className="hero__background"></div>
      
      {/* Floating icons */}
      <motion.div 
        className="hero__icons"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="hero__icon hero__icon--code"
          variants={floatingIconVariants}
          animate="animate"
        >
          <Code2 size={70} />
        </motion.div>
        <motion.div
          className="hero__icon hero__icon--globe"
          variants={floatingIconVariants}
          animate="animate"
        >
          <Globe size={70} />
        </motion.div>
        <motion.div
          className="hero__icon hero__icon--database"
          variants={floatingIconVariants}
          animate="animate"
        >
          <Database size={70} />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="hero__container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="hero__content">
          {/* Text Content */}
          <motion.div className="hero__text" variants={itemVariants}>
            <motion.h2 
              className="hero__subtitle"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.h2>
            <motion.h1 
              className="hero__title"
              variants={itemVariants}
            >
              Abinesh B
            </motion.h1>
            <motion.div 
              className="hero__role"
              variants={itemVariants}
            >
              <span className="hero__role-text">
                MERN Stack Developer
              </span>
            </motion.div>
            <motion.p className="hero__description" variants={itemVariants}>
              I am a passionate B.Tech CSE student specializing in MERN Stack development, with expertise in front-end design and building responsive web applications. With a keen interest in creating dynamic and seamless web experiences, I aim to combine my technical skills and creativity to develop interactive and user-friendly solutions. Let's collaborate to bring innovative web experiences to life!
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="hero__buttons"
              variants={itemVariants}
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hero__button"
              >
                View Projects
              </Link>
              <Link
                 onClick={() => window.open('https://drive.google.com/file/d/1JWgDuhWTaQXJzntI7HLqYjEPtfjHPmCl/view?usp=sharing', '_blank')}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hero__button"
              >
                Resume
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hero__button"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="hero__image-container"
            variants={itemVariants}
          >
            <div className="hero__image-wrapper">
              <img src={Profile} alt="Abinesh B" className="hero__image" /> {/* Fixed here */}
              <div className="hero__image-shadow"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="hero__scroll"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="hero__scroll-icon" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;