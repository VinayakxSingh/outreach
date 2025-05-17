import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import { Motion, variants } from '../utils/animations';
import AnimatedSection from './AnimatedSection';

const { motion } = Motion;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <AnimatedSection animation="fade" delay={0.2}>
            <div>
              <motion.h3
                className="text-lg font-semibold mb-4"
                whileHover={{ scale: 1.02 }}
              >
                EdPayout
              </motion.h3>
              <motion.p
                className="text-gray-400 mb-4"
                whileHover={{ scale: 1.02 }}
              >
                Simplifying mentor payout management for EdTech platforms.
              </motion.p>
              <motion.div
                className="flex space-x-4"
                whileHover={{ scale: 1.02 }}
              >
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiTwitter className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiLinkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiGithub className="h-6 w-6" />
                </motion.a>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FiMail className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">contact@edpayout.com</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FiMapPin className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">123 Tech Street, Silicon Valley, CA</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and news.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} EdPayout. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
