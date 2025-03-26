import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, MessageSquare, Cloud, Shield } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredProject, setHoveredProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    },
    hover: {
      scale: 1.02,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    initial: { opacity: 0.5 },
    hover: {
      opacity: 0.75,
      transition: {
        duration: 0.3
      }
    }
  };

  const titleContainerVariants = {
    initial: { y: 0 },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const iconWrapperVariants = {
    initial: { rotate: 0 },
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  const featureListVariants = {
    hidden: { 
      opacity: 0,
      height: 0
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const featureItemVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: (i) => ({ 
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    })
  };

  const projects = [
    {
      title: 'ByteTalk - Realtime Chat App',
      description: 'A real-time chat application featuring room-based messaging and scalable architecture.',
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2000&auto=format&fit=crop',
      tech: ['React.js', 'Node.js', 'Socket.IO', 'CSS'],
      icon: <MessageSquare className="projects__card-icon" />,
      github: 'https://github.com/er-abinesh-21/Byte_Talk',
      demo: 'https://byte-talk-8wwm.onrender.com/',
      features: [
        'Real-time messaging using Socket.IO',
        'Room-based chat functionality',
        'Responsive and modern UI design',
        'User presence indicators'
      ]
    },
    {
      title: 'Rain or Shine - Weather App',
      description: 'A responsive weather application with dynamic search and real-time updates.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2000&auto=format&fit=crop',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'OpenWeatherMap API'],
      icon: <Cloud className="projects__card-icon" />,
      github: 'https://github.com/er-abinesh-21/Rain_or_Shine',
      demo: 'https://rain-or-shine-22ts.onrender.com/',
      features: [
        'Dynamic weather data from OpenWeatherMap API',
        'Location-based weather information',
        'Responsive design with Bootstrap',
        'Interactive weather icons'
      ]
    },
    {
      title: 'SiteSentry - Web Extension',
      description: 'A Chrome extension for tracking online habits and boosting productivity.',
      image: 'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2000&auto=format&fit=crop',
      tech: ['JavaScript', 'Chrome Extensions API', 'HTML5', 'CSS3'],
      icon: <Shield className="projects__card-icon" />,
      github: 'https://github.com/er-abinesh-21/Web-Extension',
      demo: 'https://chrome.google.com/webstore/detail/sitesentry/abcdef123456',
      features: [
        'Website tracking functionality',
        'Distraction blocking features',
        'Productivity reports generation',
        'Customizable blocking rules'
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects__background"></div>
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="projects__container"
      >
        <motion.div variants={cardVariants} className="projects__header">
          <h2 className="projects__title">
            Featured Projects
          </h2>
          <p className="projects__subtitle">
            A showcase of my recent development work, featuring web applications and browser extensions.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="projects__card"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="projects__card-image-container">
                <motion.img
                  variants={imageVariants}
                  initial="initial"
                  whileHover="hover"
                  src={project.image}
                  alt={project.title}
                  className="projects__card-image"
                />
                <motion.div 
                  variants={overlayVariants}
                  initial="initial"
                  whileHover="hover"
                  className="projects__card-overlay"
                />
                <motion.div 
                  variants={titleContainerVariants}
                  initial="initial"
                  whileHover="hover"
                  className="projects__card-title-container"
                >
                  <motion.div 
                    variants={iconWrapperVariants}
                    className="projects__card-icon-wrapper"
                  >
                    {project.icon}
                  </motion.div>
                  <h3 className="projects__card-title">{project.title}</h3>
                </motion.div>
              </div>

              <div className="projects__card-content">
                <p className="projects__card-description">
                  {project.description}
                </p>

                <div className="projects__card-tags">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="projects__card-tag"
                      whileHover={{ 
                        scale: 1.1,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10
                        }
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <AnimatePresence>
                  {hoveredProject === index && (
                    <motion.div
                      variants={featureListVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="projects__card-features"
                    >
                      <ul className="projects__feature-list">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            custom={featureIndex}
                            variants={featureItemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="projects__feature-item"
                          >
                            <span className="projects__feature-bullet"></span>
                            <span className="projects__feature-text">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="projects__card-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__card-link"
                    whileHover={{ 
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="projects__link-icon" />
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__card-link"
                    whileHover={{ 
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="projects__link-icon" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;