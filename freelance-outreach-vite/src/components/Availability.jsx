import { motion } from 'framer-motion';
import { FaCalendarAlt, FaLightbulb, FaClock } from 'react-icons/fa';
import './Availability.css';

const Availability = () => {
  return (
    <section id="availability" className="section availability-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Availability</span>
          <h2 className="section-title">Current <span className="text-gradient">Project Schedule</span></h2>
          <p className="section-description">
            I take on a limited number of projects to ensure each client receives the attention they deserve.
          </p>
        </motion.div>

        <div className="availability-container">
          <motion.div
            className="availability-status"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="status-header">
              <FaCalendarAlt className="status-icon" />
              <h3>Current Status</h3>
            </div>
            <div className="status-content">
              <div className="status-indicator available">
                <span className="status-dot"></span>
                <span className="status-text">Available for New Projects</span>
              </div>
              <p className="status-description">
                I'm currently accepting new projects starting from <strong>June 2025</strong>.
                Limited spots available - book your project consultation today to secure your spot.
              </p>
              <a href="#contact" className="btn btn-primary status-cta">
                Book a Consultation
              </a>
            </div>
          </motion.div>

          <div className="schedule-details">
            <motion.div
              className="schedule-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="schedule-icon">
                <FaLightbulb />
              </div>
              <h4>Project Types</h4>
              <p>Currently accepting:</p>
              <ul className="schedule-list">
                <li>Custom web applications</li>
                <li>E-commerce sites</li>
                <li>Frontend development</li>
                <li>API development</li>
                <li>Technical consulting</li>
              </ul>
            </motion.div>

            <motion.div
              className="schedule-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="schedule-icon">
                <FaClock />
              </div>
              <h4>Timeline Expectations</h4>
              <p>Typical project timelines:</p>
              <ul className="schedule-list">
                <li>Small projects: 2-4 weeks</li>
                <li>Medium projects: 4-8 weeks</li>
                <li>Large projects: 8-12+ weeks</li>
              </ul>
              <p className="schedule-note">
                Custom timelines available for urgent projects (subject to availability).
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="booking-process"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>Booking Process</h3>
          <ol className="process-list">
            <li>
              <strong>Initial Consultation</strong> - We'll discuss your project requirements and goals in a free 30-minute consultation.
            </li>
            <li>
              <strong>Proposal & Quote</strong> - I'll provide a detailed proposal including timeline, deliverables, and pricing.
            </li>
            <li>
              <strong>Project Scheduling</strong> - Upon approval, we'll lock in your project start date with a 25% deposit.
            </li>
          </ol>
          <div className="booking-cta">
            <a href="#contact" className="btn btn-secondary">
              Schedule Your Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Availability;
