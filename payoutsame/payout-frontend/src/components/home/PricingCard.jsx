import React from 'react';
import { Motion } from '../../utils/animations';

const { motion } = Motion;

const PricingCard = ({
  title,
  badge,
  price,
  description,
  features,
  ctaText,
  ctaLink,
  highlighted = false,
}) => {
  return (
    <motion.div
      className={`rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 ${highlighted ? 'ring-2 ring-blue-500' : ''}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {badge && (
          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
            {badge}
          </span>
        )}
      </div>

      {/* Price */}
      <div className="mt-6 flex items-baseline">
        <span className="text-4xl font-bold tracking-tight text-gray-900">{price}</span>
        {price !== 'Contact us' && (
          <span className="ml-1 text-sm font-medium text-gray-500">/month</span>
        )}
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-gray-500">{description}</p>

      {/* Features */}
      <ul className="mt-8 space-y-3" role="list">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0">
              {feature.included ? (
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            <p className={`ml-3 text-sm ${feature.included ? 'text-gray-700' : 'text-gray-500'}`}>
              {feature.text}
            </p>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-8">
        <a
          href={ctaLink}
          className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          {ctaText}
        </a>
      </div>
    </motion.div>
  );
};

export default PricingCard;
