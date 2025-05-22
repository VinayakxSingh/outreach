import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container navbar-container">
        <motion.div
          className="navbar-logo"
          variants={itemVariants}
        >
          <a href="#home">
            <span className="logo-text">Vinayak <span className="text-gradient">Singh</span></span>
          </a>
        </motion.div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <motion.ul
          className={`navbar-menu ${isOpen ? 'active' : ''}`}
          variants={navVariants}
        >
          <motion.li variants={itemVariants}><a href="#services" onClick={toggleMenu}>Services</a></motion.li>
          <motion.li variants={itemVariants}><a href="#process" onClick={toggleMenu}>My Process</a></motion.li>
          <motion.li variants={itemVariants}><a href="#work" onClick={toggleMenu}>Case Studies</a></motion.li>
          <motion.li variants={itemVariants}><a href="#testimonials" onClick={toggleMenu}>Testimonials</a></motion.li>
          <motion.li variants={itemVariants}><a href="#faq" onClick={toggleMenu}>FAQ</a></motion.li>
          <motion.li variants={itemVariants}><a href="#about" onClick={toggleMenu}>About</a></motion.li>
          <motion.li variants={itemVariants}>
            <a href="#contact" className="btn btn-primary navbar-cta" onClick={toggleMenu}>
              Let's Talk
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
