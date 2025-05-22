import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 1, duration: 0.6 }
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className="hero-subtitle">
            Freelance MERN Stack Developer
          </motion.h2>
          <motion.h1 variants={itemVariants} className="hero-title">
            I Create <span className="text-gradient">High-Impact Web Solutions</span> That Grow Your Business
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-description">
            Transform your digital presence with custom web applications built for performance,
            user engagement, and business growth. Available for new projects starting June 2025.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <a href="#services" className="btn btn-primary">Explore Services</a>
            <a href="#contact" className="btn btn-secondary">Get a Free Consultation</a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <a href="https://github.com/VinayakxSingh" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vinayak-singh-8ab2442ab/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:vinayaksinghforyou@gmail.com">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img src="/Vinayak-image.jpeg" alt="Vinayak Singh" />
          <div className="image-bg-accent"></div>
        </motion.div>
      </div>

      <motion.div
        className="quick-stats"
        variants={statsVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="stat-item">
          <span className="stat-number">25+</span>
          <span className="stat-label">Projects Completed</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">98%</span>
          <span className="stat-label">Client Satisfaction</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">4+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">On-time Delivery</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
