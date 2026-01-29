import React from 'react'
import { UserIcon, MagnifyingGlassIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/solid';

export const HowItWorks = () => {
  const steps = [
    {
      title: "Register",
      desc: "Create an account and specify your skills and interests",
      icon: <UserIcon className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Choose a skill",
      desc: "Find a skill you're interested in or people to exchange with",
      icon: <MagnifyingGlassIcon className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Start Exchanging",
      desc: "Communicate and exchange knowledge in a convenient format",
      icon: <ArrowsRightLeftIcon className="w-10 h-10 text-blue-500" />,
    },
  ];

  return (
    <section className='py-24 text-white'>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">How it works</h2>

        {/* Steps Container */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step Card */}
              <div className="flex flex-col items-center text-center flex-1 group">
                {/* Icon Circle with Pulse Effect */}
                <div className="relative">
                  <div className="w-24 h-24 border-2 border-blue-500/30 rounded-full flex items-center justify-center 
                                bg-[#0f172a] transition-all duration-500 group-hover:scale-110 group-hover:border-blue-500 
                                group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                    {step.icon}
                  </div>
                  {/* Step Number Circle */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 transition-colors duration-300 group-hover:text-blue-400">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">
                  {step.desc}
                </p>
              </div>

              {/* Arrow between steps (Desktop only) */}
              {index < 2 && (
                <div className="hidden md:flex items-center h-24 text-4xl text-blue-900/40 animate-pulse">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks;