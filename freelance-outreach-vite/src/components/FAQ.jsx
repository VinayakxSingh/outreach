import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What type of projects do you work on?",
      answer: "I specialize in full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js). This includes e-commerce platforms, content management systems, custom web applications, APIs, and frontend development. I focus on projects that require a blend of technical expertise and problem-solving to deliver meaningful business outcomes."
    },
    {
      question: "How much do your services cost?",
      answer: "Project pricing depends on scope, complexity, and timeline. I typically work with three pricing models: fixed-price projects (for well-defined scopes), milestone-based payments (for larger projects), and retainer agreements (for ongoing work). Most custom web applications range from $5,000-$15,000, while smaller projects or specific components may range from $2,000-$5,000. I provide detailed quotes after initial consultation."
    },
    {
      question: "What is your development process?",
      answer: "My development process includes five key phases: 1) Discovery - understanding your business needs and project requirements, 2) Strategy & Planning - creating architecture and specifications, 3) Design & Development - building your application with regular check-ins, 4) Testing & Refinement - ensuring everything works flawlessly, and 5) Launch & Support - deploying your application and providing ongoing assistance."
    },
    {
      question: "How long will my project take to complete?",
      answer: "Timeline varies based on project complexity, scope, and your feedback turnaround. Typically, small projects (landing pages, simple features) take 2-4 weeks, medium projects (multi-page websites, basic web apps) take 4-8 weeks, and large projects (complex web applications) take 8-12+ weeks. I'll provide a specific timeline estimate in your project proposal."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, I offer ongoing maintenance and support services to keep your application running smoothly. This includes bug fixes, security updates, performance optimization, and feature enhancements. I offer flexible maintenance packages starting at $500/month, depending on your needs and the complexity of your application."
    },
    {
      question: "How do we get started working together?",
      answer: "The process begins with a free 30-minute consultation call where we discuss your project goals and requirements. Following that, I'll provide a detailed proposal including scope, timeline, and pricing. Once approved, we'll sign a contract, I'll collect a deposit (typically 25-50%), and we'll schedule your project start date."
    },
    {
      question: "Can you work with my existing team or developers?",
      answer: "Absolutely! I frequently collaborate with in-house teams, designers, and other developers. I can integrate into your existing workflow, use your preferred project management tools, and follow your coding standards. I'm also happy to provide knowledge transfer and documentation to help your team maintain the project long-term."
    },
    {
      question: "Do you offer agency partnership or white-label services?",
      answer: "Yes, I work with agencies as a trusted development partner. I offer white-label development services, allowing agencies to expand their technical capabilities without increasing overhead. I can work directly with your clients or remain behind the scenes according to your preference. Agency partnerships include priority scheduling and special pricing structures."
    }
  ];

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">FAQ</span>
          <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="section-description">
            Common questions about working with me and my services.
          </p>
        </motion.div>

        <div className="faq-container">
          {faqData.map((faq, index) => (
            <motion.div
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="faq-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Still have questions?</h3>
          <p>Feel free to reach out directly. I'm always happy to help.</p>
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
