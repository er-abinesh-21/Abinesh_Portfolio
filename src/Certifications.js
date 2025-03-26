import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle, Calendar, ExternalLink } from 'lucide-react';
import './Certifications.css';

/**
 * Certifications section component
 * @returns {JSX.Element} Certifications component
 */
const Certifications = () => {
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

  const certifications = [
    {
      title: 'Mern Full Stack Web Development Internship (Remote)',
      issuer: 'Codtech IT Solutions',
      date: 'February 2025',
      credentialId: 'CT6WINT',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      image: 'https://images.ctfassets.net/3pv3o0yr6pgj/7qixtK8KRrnkJalWNJ1RMk/61dbe1a62bc14aa7244bb8e6ce12f237/MERN_Fullstack__1_.jpg',
      url: 'https://drive.google.com/file/d/1iXXmRwo_GAnQhbgaVL_V9MHpIR4CNDT_/view?usp=drive_link',
    },
    {
      title: 'Python Programming Internship (Remote)',
      issuer: 'Ybi Foundation',
      date: 'March 2025',
      credentialId: 'RTHSA8WVGERSG',
      skills: ['Programming', 'Logical Thinking', 'Algorithms', 'Data Structures'],
      image: 'https://afrihub.com/assets/img/pc/python.png',
      url: 'https://drive.google.com/file/d/1PKaHlcC4Avc8EBO686IOkOcGuGNnbNzq/view?usp=drive_link',
    },
    {
      title: 'Postman API Fundamentals',
      issuer: 'Postman Academy',
      date: 'February 2025',
      credentialId: 'POSTMAN180225',
      skills: ['API Design', 'RESTful APIs', 'Postman'],
      image: 'https://blog.logrocket.com/wp-content/uploads/2022/09/automating-api-tests-postman.png',
      url: 'https://drive.google.com/file/d/1kEngquZQ4R-kYORRLQPThuMtFUF9pzyX/view?usp=sharing',
    },
    {
      title: 'Introduction to MongoDB',
      issuer: 'MongoDB University',
      date: 'September 2024',
      credentialId: 'MDBlkul4g10v8',
      skills: ['MongoDB', 'Database Design', 'Aggregation', 'Indexing'],
      image: 'https://www.digitalocean.com/cdn-cgi/image/quality=75,width=1920/https://www.digitalocean.com/api/static-content/v1/images?src=https%3A%2F%2Fcommunity-cdn-digitalocean-com.global.ssl.fastly.net%2FuCcwj4q1e8Tx91Ce5En11NdE&raw=1',
      url: 'https://drive.google.com/file/d/1hOQsBGpzTHBckQhX06Q50NlefO-2tddH/view?usp=drive_link',
    },
    {
      title: 'Juniper Networking (Virtual) Internship',
      issuer: 'EduSkills (AICTE)',
      date: 'June 2024',
      credentialId: 'JUNIPERJUN24',
      skills: ['Networking', 'Computer Networks', 'Network Design' ],
      image: 'https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/a6efd491-1ca7-4275-88e4-746f3cfdf5b7/image.png',
      url: 'https://drive.google.com/file/d/1g3ddxulE9x5PzmxWSlzPTeMDDJmpTCR-/view?usp=drive_link',
    },
    {
      title: 'Git & Github Bootcamp',
      issuer: 'LetsUpgrade',
      date: 'September 2024',
      credentialId: 'LUEGGSEP124227',
      skills: ['Git', 'Version Control', 'Collaboration', 'GitHub'],
      image: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm79oa15f1d731833o7nc.jpg',
      url: 'https://drive.google.com/file/d/1GNaW4KLZrbGEOeD9sw2XKVZsuGV5_TxP/view?usp=drive_link',
    },
    {
      title: 'Microsoft Office (Word, Excel, Powerpoint',
      issuer: 'Udemy',
      date: 'January 2025',
      credentialId: 'MICROWEP020125',
      skills: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint'],
      image: 'https://media.licdn.com/dms/image/D4E12AQHC4KcfWWeT_g/article-cover_image-shrink_600_2000/0/1671703088088?e=2147483647&v=beta&t=SmCExQKXzwOwkfExC4r1V-j3tvOOW9hChp9Ttu4VA3k',
      url: 'https://drive.google.com/file/d/1PLLbwEiCXw77YTxXHyKctGGmHQP5moUz/view?usp=drive_link',
    },
    {
      title: 'UI/UX Design with Figma',
      issuer: 'Udemy',
      date: 'March 2025',
      credentialId: 'UIUX14032025',
      skills: ['UI/UX Design', 'Figma', 'Prototyping', 'Wireframing'],
      image: 'https://www.uxdesigninstitute.com/blog/wp-content/uploads/2024/11/101_UX_vs_UI_illustration_blog-1.png',
      url: 'https://drive.google.com/file/d/1uw_6ckgUTGUCA5W09uQYm-9OzESlquW8/view?usp=sharing',
    },
    {
      title: 'Canva for Graphic Design',
      issuer: 'Udemy',
      date: 'March 2025',
      credentialId: 'CANVA140325',
      skills: ['Graphic Design', 'Canva', 'Visual Communication', 'Branding'],
      image: 'https://www.author.thinkwithniche.com/allimages/project/thumb_741c5use-canva-create-pictures.jpg',
      url: 'https://drive.google.com/file/d/1UTJF98i2Z5OMRVJUaPZ1hao9DgFEzUj8/view?usp=sharing',
    },
    {
      title: 'Developing Data Based App with DASH (Workshop)',
      issuer: 'Annamalai University',
      date: 'August 2024',
      credentialId: 'DASHAU080424',
      skills: ['Git & Github', 'DASH', 'Python'],
      image: 'https://media.geeksforgeeks.org/geeksforgeeks/IntroductiontoDashinPython/IntroductiontoDashinPython20240722160047.png',
      url: 'https://drive.google.com/file/d/11f00_dxLNryLC1RdozCrhvbOV1I3rH9K/view?usp=drive_link',
    },
    {
      title: 'Digital Productivity',
      issuer: 'NIIT Foundation',
      date: 'March 2025',
      credentialId: 'DIGIPRO0325',
      skills: ['Productivity Tools', 'Word', 'Excel', 'Powerpoint'],
      image: 'https://www.lingfordconsulting.com.au/wp-content/uploads/2022/05/iStock-952063596-640x424-1.jpg',
      url: 'https://drive.google.com/file/d/1eurxl4EwtV6lv_hHAy4ABEjZ2IA1Q7KV/view?usp=sharing',
    },
    {
      title: 'Prompt Engineering for Beginners',
      issuer: 'GUVI',
      date: 'March 2025',
      credentialId: 'PROMPT160325',
      skills: ['Prompt Engineering', 'AI','LLM', 'Chat-GPT'],
      image: 'https://www.cienciaedados.com/wp-content/uploads/2023/06/O-Que-e-Prompt-Engineering.png',
      url: 'https://drive.google.com/file/d/1Ufe8U_I0xId3hizhM12-eHzgBR0a6KO0/view?usp=sharing',
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications__background"></div>
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="certifications__container"
      >
        <motion.div variants={itemVariants} className="certifications__header">
          <h2 className="certifications__title">
            Certifications
          </h2>
          <p className="certifications__subtitle">
            Professional certifications and achievements that validate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="certifications__grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="certifications__card"
            >
              <div className="certifications__card-image-container">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certifications__card-image"
                />
                <div className="certifications__card-overlay"></div>
                <div className="certifications__card-title-container">
                  <div className="certifications__card-icon-wrapper">
                    <Award className="certifications__card-icon" />
                  </div>
                  <h3 className="certifications__card-title">{cert.title}</h3>
                </div>
              </div>

              <div className="certifications__card-content">
                <div className="certifications__card-info">
                  <div className="certifications__card-issuer">
                    <CheckCircle className="certifications__info-icon" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="certifications__card-date">
                    <Calendar className="certifications__info-icon" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <div className="certifications__card-skills">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="certifications__skill-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="certifications__card-footer">
                  <span className="certifications__credential-id">
                    ID: {cert.credentialId}
                  </span>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certifications__view-link"
                  >
                    <ExternalLink className="certifications__link-icon" />
                    <span>View Certificate</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;