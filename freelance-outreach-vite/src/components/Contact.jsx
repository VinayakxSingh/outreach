import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would handle form submission
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let's Discuss Your <span className="text-gradient">Project</span></h2>
          <p className="section-description">
            Ready to transform your web presence? I'm here to help you bring your vision to life.
          </p>
        </motion.div>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Contact Information</h3>
            <p className="contact-intro">
              Feel free to reach out if you have any questions about my services
              or want to discuss your project needs.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:vinayaksinghforyou@gmail.com">vinayaksinghforyou@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h4>Connect With Me</h4>
              <div className="social-links">
                <a href="https://github.com/VinayakxSingh" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/vinayak-singh-8ab2442ab/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="contact-availability">
              <h4>Current Availability</h4>
              <div className="availability-indicator available">
                <span className="availability-dot"></span>
                <span>Available for new projects starting June 2025</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send Me a Message</h3>
                <p>I'll get back to you within 1-2 business days.</p>
              </div>

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select id="service" name="service" required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option value="web-app">Custom Web Application</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="api">API Development</option>
                  <option value="consulting">Technical Consulting</option>
                  <option value="maintenance">Maintenance & Support</option>
                  <option value="agency">Agency Partnership</option>
                  <option value="other">Other (specify in message)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="budget">Estimated Budget (USD)</label>
                <select id="budget" name="budget" required defaultValue="">
                  <option value="" disabled>Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-20k">$10,000 - $20,000</option>
                  <option value="20k-plus">$20,000+</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="direct-contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>Or send me an email directly at:</p>
          <a href="mailto:vinayaksinghforyou@gmail.com" className="direct-email">
            vinayaksinghforyou@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
