import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, GraduationCap, Briefcase, Award } from 'lucide-react';
import './About.css';

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
      title: 'Full-Stack Developer',
      description: 'Proficient in React.js, Node.js, Express.js, FastAPI, Flask, MongoDB, and PostgreSQL with expertise in UI/UX design using Figma.',
    },
    {
      icon: <GraduationCap className="about__card-icon" />,
      title: 'B.Tech in CSE',
      description: 'Pursuing Computer Science Engineering at Sri Venkateshwaraa College of Engineering and Technology (Nov 2022 – Jun 2026).',
    },
    {
      icon: <Briefcase className="about__card-icon" />,
      title: 'Industry Experience',
      description: 'Cyber Security & Software Engineer Intern at ePropelled and Full Stack Engineer Intern at CODTECH IT SOLUTIONS, with hands-on experience in full-stack web applications, real-time simulation tools, and security.',
    },
    {
      icon: <Award className="about__card-icon" />,
      title: 'Certifications',
      description: 'Certified in MongoDB, Postman API Fundamentals, Prompt Engineering, Python Programming, Networking, and more.',
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
          Innovative Software Engineer with a dual-focus in MERN Stack and Python development. Proven track record in building scalable, responsive web applications and robust Python-based software solutions. Expertise includes architecting RESTful APIs, UI/UX design via Figma, and optimizing application performance. Proficient in leveraging AI Agents and LLM orchestration to automate workflows and enhance software intelligence. Deeply committed to DevOps practices and cloud-native deployment to deliver efficient, user-centric, and future-proof digital products.
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