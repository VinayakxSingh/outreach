import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './CaseStudies.css';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Optimization",
      client: "HIX Cosmetics",
      industry: "Retail",
      image: "https://ext.same-assets.com/208087761/2989160812.png",
      problem: "The client faced slow loading times, poor mobile experience, and low conversion rates on their existing e-commerce platform.",
      solution: "Rebuilt the front-end with React, implemented responsive design principles, added animations for better user engagement, and optimized product filtering and cart functionality.",
      results: [
        "63% improvement in page load speed",
        "41% increase in mobile conversions",
        "28% increase in average session duration",
        "52% reduction in cart abandonment rate"
      ],
      testimonial: {
        quote: "Vinayak transformed our online store into a sleek, high-performing platform that our customers love to use. The improved mobile experience has been a game-changer for our business.",
        author: "Reema Gupta",
        position: "Marketing Director, HIX Cosmetics"
      }
    },
    {
      id: 2,
      title: "Task Management Application",
      client: "Productivity Inc.",
      industry: "Software",
      image: "https://ext.same-assets.com/208087761/2439593597.png",
      problem: "The client needed a robust task management system that could help teams track projects, set deadlines, and improve collaboration.",
      solution: "Designed and developed a React-based task management application with categorization features, completion tracking, and responsive design using modern JavaScript practices.",
      results: [
        "85% adoption rate among target users",
        "32% improvement in project completion time",
        "Reduction in missed deadlines by 47%",
        "Seamless integration with existing tools"
      ],
      testimonial: {
        quote: "The task management system Vinayak created has completely transformed how our team collaborates. It's intuitive, flexible, and has significantly improved our productivity.",
        author: "David Chen",
        position: "Operations Manager, Productivity Inc."
      }
    },
    {
      id: 3,
      title: "Community Engagement Portal",
      client: "Local Government Agency",
      industry: "Government",
      image: "https://ext.same-assets.com/208087761/3235061235.png",
      problem: "The client needed a platform to improve citizen engagement and create transparency between local government and community members.",
      solution: "Built a MERN stack application allowing citizens to submit and vote on local issues, track resolution progress, and engage with government officials.",
      results: [
        "Over 15,000 active users within first 3 months",
        "72% increase in citizen participation in local issues",
        "Average issue resolution time decreased by 35%",
        "Featured in Government Technology magazine as an innovative solution"
      ],
      testimonial: {
        quote: "This platform has revolutionized how we connect with our citizens. The transparency and ease of use have rebuilt trust in our local government and significantly improved community engagement.",
        author: "Priya Sharma",
        position: "Community Relations Director"
      }
    }
  ];

  const handleNext = () => {
    setActiveCase((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveCase((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  return (
    <section id="work" className="section case-studies-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Case Studies</span>
          <h2 className="section-title">Client <span className="text-gradient">Success Stories</span></h2>
          <p className="section-description">
            Real-world examples of how I've helped businesses solve complex problems and achieve their goals.
          </p>
        </motion.div>

        <div className="case-navigation">
          <button className="nav-btn prev-btn" onClick={handlePrev}>
            &larr;
          </button>
          <div className="case-indicator">
            {caseStudies.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === activeCase ? 'active' : ''}`}
                onClick={() => setActiveCase(index)}
              ></span>
            ))}
          </div>
          <button className="nav-btn next-btn" onClick={handleNext}>
            &rarr;
          </button>
        </div>

        <div className="case-slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              className="case-study"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="case-content">
                <div className="case-header">
                  <h3 className="case-title">{caseStudies[activeCase].title}</h3>
                  <div className="case-meta">
                    <span className="case-client">{caseStudies[activeCase].client}</span>
                    <span className="case-industry">{caseStudies[activeCase].industry}</span>
                  </div>
                </div>

                <div className="case-details">
                  <div className="case-section">
                    <h4>Challenge</h4>
                    <p>{caseStudies[activeCase].problem}</p>
                  </div>

                  <div className="case-section">
                    <h4>Solution</h4>
                    <p>{caseStudies[activeCase].solution}</p>
                  </div>

                  <div className="case-section">
                    <h4>Results</h4>
                    <ul className="results-list">
                      {caseStudies[activeCase].results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="case-testimonial">
                  <p className="testimonial-quote">"{caseStudies[activeCase].testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <span className="author-name">{caseStudies[activeCase].testimonial.author}</span>
                    <span className="author-position">{caseStudies[activeCase].testimonial.position}</span>
                  </div>
                </div>

                <a href="#contact" className="btn-case-contact">
                  <span>Achieve similar results</span>
                  <FaArrowRight />
                </a>
              </div>

              <div className="case-image">
                <img src={caseStudies[activeCase].image} alt={caseStudies[activeCase].title} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div id="testimonials" className="testimonials-section">
          <h3 className="testimonials-title">What Clients Say</h3>

          <div className="testimonials-grid">
            <motion.div
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Working with Vinayak was a breath of fresh air. He took the time to understand our business goals before writing a single line of code. The result was a web application that not only looked great but actually solved our core business problems."
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Amit Patel</h4>
                    <p>CEO, TechStart Solutions</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Vinayak delivered our project on time and on budget, but what impressed me most was his ability to translate our vague ideas into a concrete, functional application. His technical skills are matched by his excellent communication."
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Sarah Johnson</h4>
                    <p>Marketing Director, GrowthHub</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "We hired Vinayak to fix performance issues with our web application. Not only did he resolve the immediate problems, but he also refactored key parts of our codebase to prevent future issues. Would definitely work with him again."
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Raj Mehta</h4>
                    <p>CTO, DataFlow Systems</p>
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

export default CaseStudies;
