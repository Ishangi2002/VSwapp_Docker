import React from 'react'
import { UserIcon } from '@heroicons/react/24/solid';

export const HowItWorks = () => {
  return (
    <section className='py-16'>
    <div className="text-4xl text-center text-white  ">
      <p >How it works</p>

    {/*first cicle */}  

    <div className="flex items-center justify-center mt-20 space-x-8"></div>
      <div className="flex flex-col items-center text-center ml-[-990px] ">
        <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center">
          <UserIcon className="w-10 h-10 text-blue-500" />
        </div>
          <p className="text-lg text-white font-medium mt-4">Register</p>
          <p className="text-gray-300 text-sm mt-1 w-56">
              Create an account and specify your skills and interests
          </p>
    </div>

    <div
      className="absolute text-[90px] text-white"
      style={{ top: '950px', left: '450px' }}>→
    </div>

    {/*second circle*/}
    
    <div className="flex items-center justify-center ml-[-100px] -mt-40"></div>
      <div className="flex flex-col items-center text-center ml-[10px] ">
        <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center">
          🔍
        </div>
          <p className="text-lg text-white font-medium mt-4">Choose a skill</p>
          <p className="text-gray-300 text-sm mt-1 w-56">
              Find a skill you're interested in or people to exchange with
          </p>
    </div>

    <div
      className="absolute text-[90px] text-white"
      style={{ top: '955px', left: '950px' }}>→
    </div>

    {/* Third circle */}

    <div className="flex items-center justify-center ml-[-800px] -mt-40"></div>
      <div className="flex flex-col items-center text-center ml-[980px] ">
        <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center">
          🔁
        </div>
          <p className="text-lg text-white font-medium mt-4">Start Exchanging</p>
          <p className="text-gray-300 text-sm mt-1 w-56">
              Communicate and exchange knowledge in a convenient format
          </p>
    </div> 

    </div>
    </section>
  )
}

export default HowItWorks