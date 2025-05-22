import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">The Person Behind The <span className="text-gradient">Code</span></h2>
        </motion.div>

        <div className="about-container">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/Vinayak-image.jpeg" alt="Vinayak Singh" />
            <div className="image-accent"></div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Hi, I'm Vinayak Singh</h3>
            <p className="about-intro">
              I'm a Full-Stack Web Developer specializing in the MERN stack, passionate about creating
              impactful digital solutions that solve real business problems.
            </p>

            <div className="about-story">
              <p>
                My journey into web development began with a fascination for how technology could transform
                businesses and user experiences. After completing my education at Masai School with a
                specialization in Full Stack Web Development, I dedicated myself to mastering the MERN stack
                and related technologies.
              </p>
              <p>
                What sets me apart is my problem-solving approach. I don't just write code – I develop
                solutions that address specific business challenges, whether that's improving user engagement,
                streamlining operations, or increasing conversions.
              </p>
              <p>
                Beyond coding, I'm a state-level badminton champion, which has instilled in me the discipline,
                strategic thinking, and competitive drive that I bring to every project. I believe in continuous
                learning and stay updated with the latest web technologies and best practices.
              </p>
              <p>
                I work closely with clients to understand their vision and translate it into robust,
                user-friendly applications that exceed expectations. My goal is to be more than just a
                developer – I aim to be a valuable partner in your business growth.
              </p>
            </div>

          </motion.div>
        </div>

        <div id="agency" className="agency-partnership">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">For Agencies</span>
            <h2 className="section-title">Agency <span className="text-gradient">Partnership Program</span></h2>
            <p className="section-description">
              Extend your team's capabilities with reliable technical expertise.
            </p>
          </motion.div>

          <div className="agency-content">
            <motion.div
              className="agency-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>Why Partner With Me?</h3>
              <ul className="agency-benefits">
                <li>
                  <span className="benefit-title">Technical Expertise</span>
                  <p>Access MERN stack development expertise without the overhead of hiring in-house.</p>
                </li>
                <li>
                  <span className="benefit-title">White-Label Services</span>
                  <p>I work behind the scenes, representing your agency brand to your clients.</p>
                </li>
                <li>
                  <span className="benefit-title">Seamless Collaboration</span>
                  <p>Integrate with your existing workflows, communication channels, and project management tools.</p>
                </li>
                <li>
                  <span className="benefit-title">Priority Scheduling</span>
                  <p>Agency partners receive priority placement in my project schedule.</p>
                </li>
                <li>
                  <span className="benefit-title">Transparent Pricing</span>
                  <p>Special pricing structures for agencies, including volume discounts for ongoing work.</p>
                </li>
              </ul>
              <a href="#contact" className="btn btn-primary agency-cta">
                Discuss Agency Partnership
              </a>
            </motion.div>

            <motion.div
              className="agency-testimonial"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Vinayak has been an invaluable extension of our team. His technical skills, communication, and reliability have allowed us to take on more complex projects with confidence. Our clients are thrilled with the results."
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Neha Sharma</h4>
                    <p>Creative Director, PixelPerfect Agency</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
