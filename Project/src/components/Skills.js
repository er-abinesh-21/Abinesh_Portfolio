import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Palette, Terminal, Globe, Server } from 'lucide-react';
import '../styles/Skills.css';

/**
 * Skills section component with progress bars
 * @returns {JSX.Element} Skills component
 */
const Skills = () => {
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: `${width}%`,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    }),
  };

  const skillCategories = [
    {
      icon: <Code2 className="skills__category-icon" />,
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'C', level: 85 },
      ],
    },
    {
      icon: <Globe className="skills__category-icon" />,
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Responsive Design', level: 90 },
      ],
    },
    {
      icon: <Server className="skills__category-icon" />,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Socket.IO', level: 80 },
      ],
    },
    {
      icon: <Database className="skills__category-icon" />,
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 85 },
      ],
    },
    {
      icon: <Palette className="skills__category-icon" />,
      title: 'Design',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Canva', level: 90 },
        { name: 'UI/UX Design', level: 90 },
        { name: 'Wireframing', level: 95 },
        { name: 'Prototyping', level: 95 },

      ],
    },
    {
      icon: <Terminal className="skills__category-icon" />,
      title: 'Tools',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills__background"></div>
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="skills__container"
      >
        <motion.div variants={itemVariants} className="skills__header">
          <h2 className="skills__title">
            Technical Skills
          </h2>
          <p className="skills__subtitle">
            A comprehensive overview of my technical expertise and proficiency in various technologies.
          </p>
        </motion.div>

        <div className="skills__categories">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="skills__category"
            >
              <div className="skills__category-header">
                <div className="skills__category-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="skills__category-title">
                  {category.title}
                </h3>
              </div>

              <div className="skills__list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skills__item">
                    <div className="skills__item-header">
                      <span className="skills__item-name">
                        {skill.name}
                      </span>
                      <span className="skills__item-level">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skills__progress-bar">
                      <motion.div
                        custom={skill.level}
                        variants={progressVariants}
                        className="skills__progress-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;