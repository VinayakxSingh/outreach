import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaServer, FaMobile, FaTools, FaDatabase } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('development');

  const tabVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const services = {
    development: [
      {
        id: 1,
        icon: <FaReact className="service-icon" />,
        title: "Custom Web Application",
        description: "Complete web application development with MERN stack. Includes planning, design, development, testing, and deployment.",
        features: ["User authentication", "Database integration", "API development", "Responsive design", "Initial SEO setup"],
        timeline: "8-12 weeks",
        priceRange: "$100 - $300",
      },
      {
        id: 2,
        icon: <FaNodeJs className="service-icon" />,
        title: "API Development",
        description: "Robust and scalable APIs built with Node.js, Express and MongoDB to power your applications.",
        features: ["API architecture design", "Documentation", "Performance optimization", "Authentication/Authorization", "Testing suite"],
        timeline: "3-6 weeks",
        priceRange: "$150 - $350",
      },
      {
        id: 3,
        icon: <FaMobile className="service-icon" />,
        title: "Frontend Development",
        description: "Pixel-perfect, responsive frontends with React that provide exceptional user experiences.",
        features: ["Responsive design", "Component architecture", "State management", "Performance optimization", "Animation integration"],
        timeline: "4-8 weeks",
        priceRange: "$80 - $200",
      }
    ],
    consulting: [
      {
        id: 4,
        icon: <FaTools className="service-icon" />,
        title: "Code Review & Improvement",
        description: "Review your existing codebase to identify issues, improve architecture, and enhance performance.",
        features: ["Architecture assessment", "Code quality review", "Performance optimization", "Best practices implementation", "Documentation"],
        timeline: "1-3 weeks",
        priceRange: "$150 - $400",
      },
      {
        id: 5,
        icon: <FaServer className="service-icon" />,
        title: "Technical Consulting",
        description: "Expert advice on technology stack, architecture, and development practices.",
        features: ["Technology evaluation", "Architecture planning", "Team training", "Development workflow", "Scaling strategies"],
        timeline: "2-4 weeks",
        priceRange: "$200 - $600",
      }
    ],
    maintenance: [
      {
        id: 6,
        icon: <FaDatabase className="service-icon" />,
        title: "Application Maintenance",
        description: "Ongoing support and maintenance to keep your application running smoothly.",
        features: ["Bug fixing", "Performance monitoring", "Security updates", "Feature enhancements", "Regular backups"],
        timeline: "Monthly subscription",
        priceRange: "$150 - $500/month",
      }
    ]
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Services</span>
          <h2 className="section-title">Solutions I <span className="text-gradient">Deliver</span></h2>
          <p className="section-description">
            Specialized web development services tailored to solve your business challenges and drive growth.
          </p>
        </motion.div>

        <div className="services-tabs">
          <button
            className={`tab-button ${activeTab === 'development' ? 'active' : ''}`}
            onClick={() => setActiveTab('development')}
          >
            Development
          </button>
          <button
            className={`tab-button ${activeTab === 'consulting' ? 'active' : ''}`}
            onClick={() => setActiveTab('consulting')}
          >
            Consulting
          </button>
          <button
            className={`tab-button ${activeTab === 'maintenance' ? 'active' : ''}`}
            onClick={() => setActiveTab('maintenance')}
          >
            Maintenance
          </button>
        </div>

        <motion.div
          className="services-grid"
          key={activeTab}
          variants={tabVariants}
          initial="hidden"
          animate="visible"
        >
          {services[activeTab].map((service) => (
            <motion.div
              className="service-card"
              key={service.id}
              variants={itemVariants}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-features">
                <h4>What's Included:</h4>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="service-details">
                <div className="service-timeline">
                  <span className="detail-label">Timeline:</span>
                  <span className="detail-value">{service.timeline}</span>
                </div>
                <div className="service-price">
                  <span className="detail-label">Investment:</span>
                  <span className="detail-value">{service.priceRange}</span>
                </div>
              </div>

              <a href="#contact" className="btn btn-primary service-cta">
                Discuss Your Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
