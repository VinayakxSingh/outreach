import React from 'react';
import { Motion, variants } from '../utils/animations';

const { motion, AnimatePresence } = Motion;

const AnimatedSection = ({ children, animation = 'slideUp', delay = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
      variants={variants[animation]}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
