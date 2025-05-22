import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <h3>Vinayak <span className="text-gradient">Singh</span></h3>
            <p>Solving complex web development problems and delivering results that grow your business.</p>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Web Application Development</a></li>
                <li><a href="#services">Frontend Development</a></li>
                <li><a href="#services">API Development</a></li>
                <li><a href="#services">Technical Consulting</a></li>
                <li><a href="#services">Maintenance & Support</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#process">My Process</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Vinayak Singh. All rights reserved.</p>
          </div>

          <div className="footer-social">
            <a href="https://github.com/VinayakxSingh" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vinayak-singh-8ab2442ab/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:vinayaksinghforyou@gmail.com">
              <FaEnvelope />
            </a>
          </div>

          <button className="scroll-top" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
