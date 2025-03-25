import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, GraduationCap, Briefcase, Award } from 'lucide-react';
import '../styles/About.css';

/**
 * About section component with animated cards
 * @returns {JSX.Element} About component
 */
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cards = [
    {
      icon: <Code2 className="about__card-icon" />,
      title: 'MERN Stack Developer',
      description: 'Proficient in JavaScript, React.js, Node.js, Express.js, and MongoDB, with hands-on experience in UI/UX design using Figma.',
    },
    {
      icon: <GraduationCap className="about__card-icon" />,
      title: 'B.Tech in CSE',
      description: 'Currently pursuing Computer Science Engineering at Sri Venkateshwaraa College of Engineering and Technology.',
    },
    {
      icon: <Briefcase className="about__card-icon" />,
      title: 'Industry Experience',
      description: 'Full-Stack Developer at CODTECH IT SOLUTIONS, working on real-world projects with modern web technologies.',
    },
    {
      icon: <Award className="about__card-icon" />,
      title: 'Certifications',
      description: 'Multiple certifications in Full Stack Development, MongoDB, and various technical domains.',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about__background"></div>
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="about__container"
      >
        <motion.div variants={itemVariants} className="about__header">
          <h2 className="about__title">
            About Me
          </h2>
          <p className="about__subtitle">
          I am a passionate B.Tech Computer Science and Engineering student with a deep focus on MERN Stack development. I specialize in creating interactive, user-friendly front-end designs, and developing responsive web applications. I am constantly learning and enhancing my skills to build innovative and scalable web solutions. My goal is to contribute to the ever-evolving tech world by turning ideas into reality with clean and efficient code.
          </p>
        </motion.div>

        <div className="about__cards">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="about__card"
            >
              <div className="about__card-content">
                <div className="about__card-icon-wrapper">
                  {card.icon}
                </div>
                <div className="about__card-text">
                  <h3 className="about__card-title">
                    {card.title}
                  </h3>
                  <p className="about__card-description">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="about__cta"
        >
          <a
            href="https://github.com/er-abinesh-21"
            target="_blank"
            rel="noopener noreferrer"
            className="about__button"
          >
            View My Work
            <svg className="about__button-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;