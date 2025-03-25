import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=21abinesh@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__background"></div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="contact__container"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="contact__header">
          <h2 className="contact__title">Get in Touch</h2>
          <p className="contact__subtitle">Let's connect and discuss how we can work together on your next project.</p>
        </motion.div>

        <div className="contact__content">
          {/* Contact Form */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="contact__form-container">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__form-label">Name</label>
                  <input type="text" id="name" name="name" className="contact__form-input" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__form-label">Email</label>
                  <input type="email" id="email" name="email" className="contact__form-input" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="contact__form-group">
                <label htmlFor="subject" className="contact__form-label">Subject</label>
                <input type="text" id="subject" name="subject" className="contact__form-input" placeholder="Project Inquiry" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="contact__form-group">
                <label htmlFor="message" className="contact__form-label">Message</label>
                <textarea id="message" name="message" rows={6} className="contact__form-textarea" placeholder="Your message here..." value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="contact__form-button">
                <span>Send Message</span>
                <Send className="contact__button-icon" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="contact__info-container">
            <div className="contact__info-card">
              <h3 className="contact__info-title">Contact Information</h3>
              <div className="contact__info-list">
                <div className="contact__info-item">
                  <div className="contact__info-icon-wrapper"><Mail className="contact__info-icon" /></div>
                  <div className="contact__info-content">
                    <p className="contact__info-label">Email</p>
                    <a href="mailto:21abinesh@gmail.com" className="contact__info-value contact__info-link">21abinesh@gmail.com</a>
                  </div>
                </div>
                <div className="contact__info-item">
                  <div className="contact__info-icon-wrapper"><MapPin className="contact__info-icon" /></div>
                  <div className="contact__info-content">
                    <p className="contact__info-label">Location</p>
                    <p className="contact__info-value">Kathirkamam, Puducherry</p>
                  </div>
                </div>
                <div className="contact__info-item">
                  <div className="contact__info-icon-wrapper"><Phone className="contact__info-icon" /></div>
                  <div className="contact__info-content">
                    <p className="contact__info-label">Phone</p>
                    <p className="contact__info-value">+91 98435 59795</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact__social-card">
              <h3 className="contact__social-title">Connect with Me</h3>
              <div className="contact__social-links">
                <a href="https://github.com/er-abinesh-21" target="_blank" rel="noopener noreferrer" className="contact__social-link-item" aria-label="GitHub">
                  <Github className="contact__social-icon" />
                </a>
                <a href="https://linkedin.com/in/abinesh21" target="_blank" rel="noopener noreferrer" className="contact__social-link-item" aria-label="LinkedIn">
                  <Linkedin className="contact__social-icon" />
                </a>
                <a href="mailto:21abinesh@gmail.com" className="contact__social-link-item" aria-label="Email">
                  <Mail className="contact__social-icon" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
