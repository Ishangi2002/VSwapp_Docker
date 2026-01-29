import React from 'react';
import { UserIcon, MagnifyingGlassIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

export const HowItWorks = () => {
  const steps = [
    {
      title: "Register",
      desc: "Create an account and specify your skills and interests.",
      icon: <UserIcon className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Choose a skill",
      desc: "Find a skill you're interested in or people to exchange with.",
      icon: <MagnifyingGlassIcon className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Start Exchanging",
      desc: "Communicate and exchange knowledge in a convenient format.",
      icon: <ArrowsRightLeftIcon className="w-10 h-10 text-blue-500" />,
    },
  ];

  return (
    <section className="py-24 bg-[#030712] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How it works</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Steps Container - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Connector Line (visible only on desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-700 -z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Icon Container with Hover Glow */}
              <div className="w-24 h-24 rounded-full bg-[#0f172a] border-2 border-white flex items-center justify-center mb-6 
                            transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                {step.icon}
              </div>

              {/* Text */}
              <motion.h3 
                whileHover={{ scale: 1.05 }}
                className="text-xl font-semibold text-white mb-3"
              >
                {step.title}
              </motion.h3>
              
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-[250px]">
                {step.desc}
              </p>

              {/* Arrow Decoration (Desktop Only) */}
              {index < 2 && (
                <div className="hidden md:block absolute top-8 -right-4 text-4xl text-white opacity-30">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;