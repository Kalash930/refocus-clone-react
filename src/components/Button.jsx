/*

import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title="Get Started"}) {
  return (
     <div className="group w-40 px-5 py-2 bg-zinc-100 rounded-full text-black flex items-center justify-between hover:bg-zinc-800 hover:text-white  transition-all duration-300 cursor-pointer overflow-hidden">
      <span className="text-sm font-semibold">{title}</span>

      
      <span className="relative h-6 w-6 flex items-center justify-center overflow-hidden">
        <IoIosReturnRight className="absolute top-[-100%] text-xl  group-hover:top-0 hover:text-white transition-all duration-200" />
      </span>
    </div>
  )
}

export default Button





*/


import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get Started" }) {
  return (
    <div className="group w-40 px-5 py-2 bg-white border-[1.5px] border-transparent rounded-full text-black flex items-center justify-between hover:bg-black hover:text-zinc-200 hover:border-white transition-all duration-300 cursor-pointer overflow-hidden">
      
      <span className="text-sm font-semibold">{title}</span>

      {/* Icon container with animation */}
      <span className="relative h-6 w-6 flex items-center justify-center overflow-hidden">
        <IoIosReturnRight className="absolute top-[-100%] text-xl group-hover:top-0 transition-all duration-200" />
      </span>
    </div>
  );
}

export default Button;
