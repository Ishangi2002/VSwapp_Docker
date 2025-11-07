import React from 'react'
import { Link } from "react-router-dom";


export const HowToSuggestSkill = () => {


  return (
    <section className='py-8'>
        <div className="bg-gradient-to-b from-[#090e2d] to-[#111827] min-h-screen text-white">
            <div className="text-3xl text-center text-white mt-32">
                <h4>How to suggest a skill</h4>
                <hr className="w-[100px]  border-t-2 border-blue-500 mx-auto mt-8 mb-4"></hr>
                <span className='text-lg'>Do you have a unique skill you'd like to share? Contact us and we will add your skill to catalog.</span>
            </div>
            <div className="text-lg ml-48 mt-32 space-y-8">
                <span className="block">🔁 Exchange Knowledge with others</span>
                <span className="block">🎓 Develop your teaching skill</span>
                <span className="block">🌟 Receive ratings and reviews</span>
            </div>

            <div className="flex justify-center mt-32">
                <Link to="/addskill">
                <button  className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-indigo-800 w-[700px] h-12">
                Add your Skill
                </button>
                </Link>
            </div>

            <div className="bg-gradient-to-b from-[#090e2d] to-[#111827] min-h-screen text-white">
                <div className="text-3xl text-center text-white mt-32">
                    <h4>Learning Skill</h4>
                    <hr className="w-[100px]  border-t-2 border-blue-500 mx-auto mt-3 mb-10"></hr>
                </div>

                <div className="grid grid-cols-2 gap-x-10 gap-y-12 p-4 max-w-[1200px] mx-auto">
                    <div className="bg-indigo-950 text-white h-16 p-5 rounded-xl text-center">#1 Set clear learning goals</div>
                    <div className="bg-indigo-950 text-white h-16 p-5 rounded-xl text-center ">#2 Practise regularly, at least 20 minutes a day</div>
                    <div className="bg-indigo-950 text-white h-16 p-5 rounded-xl text-center">#3 Exchange feedback after each session</div>
                    <div className="bg-indigo-950 text-white h-16 p-5 rounded-xl text-center">#4 Use various learning methods</div>
                </div>

                <div className="grid grid-cols-1 gap-x-10 gap-y-12 p-4 max-w-[600px] mx-auto mt-4">
                    <div className="bg-indigo-950 text-white h-16 p-5 rounded-xl text-center">#5 Document your progress</div>
                </div>
            </div>
        </div>
    </section>
   
  )
}
