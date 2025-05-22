import { motion } from 'framer-motion';
import './Process.css';

const Process = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We begin with a detailed consultation to understand your business goals, challenges, and requirements. I\'ll ask targeted questions to identify the core problems we need to solve.',
      timeframe: '1 week',
      deliverables: 'Project brief, requirements document, timeline, and proposal.',
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Based on our discovery findings, I\'ll develop a strategic roadmap for your project. This includes architecture planning, feature prioritization, and technical specifications.',
      timeframe: '1-2 weeks',
      deliverables: 'Project architecture, wireframes, technical specifications, and development timeline.'
    },
    {
      number: '03',
      title: 'Design & Development',
      description: 'I begin building your application with regular check-ins and progress updates. You\'ll have visibility into the development process with weekly demos and feedback sessions.',
      timeframe: '4-8 weeks',
      deliverables: 'Functional application components, code repository, and regular progress reports.'
    },
    {
      number: '04',
      title: 'Testing & Refinement',
      description: 'Your application undergoes rigorous testing for functionality, performance, and user experience. We\'ll work together to refine and polish the final product.',
      timeframe: '1-2 weeks',
      deliverables: 'Test reports, performance metrics, and final refinements.'
    },
    {
      number: '05',
      title: 'Launch & Support',
      description: 'Once approved, we deploy your application and ensure everything runs smoothly. I provide post-launch support to address any issues that may arise.',
      timeframe: 'Ongoing',
      deliverables: 'Deployed application, documentation, and maintenance plan.'
    }
  ];

  return (
    <section id="process" className="section process-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">My Process</span>
          <h2 className="section-title">How We'll <span className="text-gradient">Work Together</span></h2>
          <p className="section-description">
            A transparent, collaborative approach designed to deliver exceptional results for your business.
          </p>
        </motion.div>

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <motion.div
              className="process-step"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <div className="step-details">
                  <div className="step-timeframe">
                    <span className="detail-label">Timeframe:</span>
                    <span className="detail-value">{step.timeframe}</span>
                  </div>
                  <div className="step-deliverables">
                    <span className="detail-label">Deliverables:</span>
                    <span className="detail-value">{step.deliverables}</span>
                  </div>
                </div>
              </div>
              {index < processSteps.length - 1 && (
                <div className="connector-line"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="process-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3>Ready to start your project?</h3>
          <p>Let's discuss how I can help bring your vision to life.</p>
          <a href="#contact" className="btn btn-primary">Schedule a Consultation</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
