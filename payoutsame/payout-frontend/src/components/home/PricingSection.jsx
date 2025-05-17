import React from 'react';
import PricingCard from './PricingCard';
import { Motion, variants } from '../../utils/animations';
import AnimatedSection from '../AnimatedSection';

const { motion } = Motion;

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Starter",
      badge: "Most Popular",
      price: "Free",
      description: "Perfect for small platforms just starting out",
      features: [
        { included: true, text: "Up to 50 mentor sessions per month" },
        { included: true, text: "Basic payout automation" },
        { included: true, text: "Email support" },
        { included: false, text: "No priority support" },
        { included: false, text: "No custom payout rules" }
      ],
      ctaText: "Get Started",
      ctaLink: "/signup",
      highlighted: true
    },
    {
      title: "Pro",
      badge: "Professional",
      price: "$49",
      description: "Ideal for growing platforms with multiple mentors",
      features: [
        { included: true, text: "Up to 500 mentor sessions per month" },
        { included: true, text: "Advanced payout automation" },
        { included: true, text: "Priority email support" },
        { included: true, text: "Custom payout rules" },
        { included: true, text: "Monthly reports" }
      ],
      ctaText: "Get Started",
      ctaLink: "/signup"
    },
    {
      title: "Enterprise",
      badge: "Custom",
      price: "Contact us",
      description: "Custom solutions for large platforms",
      features: [
        { included: true, text: "Unlimited mentor sessions" },
        { included: true, text: "Enterprise-grade automation" },
        { included: true, text: "24/7 priority support" },
        { included: true, text: "Custom payout rules" },
        { included: true, text: "Custom reporting" }
      ],
      ctaText: "Contact Sales",
      ctaLink: "/contact"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade" delay={0.2}>
          <div className="text-center">
            <motion.h2
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
              whileHover={{ scale: 1.02 }}
            >
              Pricing Plans
            </motion.h2>
            <motion.p
              className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"
              whileHover={{ scale: 1.02 }}
            >
              Choose the plan that fits your needs
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="container" delay={0.4}>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={variants.item}
              >
                <PricingCard 
                  title={plan.title}
                  badge={plan.badge}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  ctaText={plan.ctaText}
                  ctaLink={plan.ctaLink}
                  highlighted={plan.highlighted}
                />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;
