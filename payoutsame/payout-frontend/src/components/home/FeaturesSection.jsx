import React from 'react';
import FeatureCard from './FeatureCard';
import { Motion, variants } from '../../utils/animations';
import AnimatedSection from '../AnimatedSection';

const { motion } = Motion;

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <motion.svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </motion.svg>
      ),
      title: "Automated Payouts",
      description: "Streamline your payout process with our automated system."
    },
    {
      icon: (
        <motion.svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </motion.svg>
      ),
      title: "Detailed Reports",
      description: "Get comprehensive insights into your mentor payouts."
    },
    {
      icon: (
        <motion.svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </motion.svg>
      ),
      title: "Secure Platform",
      description: "Your data is protected with industry-standard security measures."
    }
  ];

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection animation="fade" delay={0.2}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to manage mentor payouts
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Our platform provides all the tools you need to efficiently manage mentor payouts and track mentor performance.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="container" delay={0.4}>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  custom={index}
                  variants={variants.item}
                >
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </dl>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturesSection;
