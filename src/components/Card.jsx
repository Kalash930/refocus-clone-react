import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Button from './Button';
import { motion } from 'framer-motion';

function Card({width,start,para,hover}) {
  
  return (
    <motion.div  whileHover={{padding:"44px"}} className={`${width} ${hover} min-h-[65vh] bg-zinc-800 rounded-xl p-5 flex flex-col justify-between`}>
       <motion.div  className='w-full'>
         <div className='w-full flex items-center justify-between'>
            <h3>one heading</h3>
            <FaArrowRightLong />
            

        </div>
        <h1 className='text-3xl font-semibold mt-5'>whatever heading</h1>
       </motion.div>
       <motion.div className='down w-full '>

        {start&&(
            <>
             <h1 className='text-6xl font-regular tracking-tight leading-none '> Start A Project   
                <span className="inline-block ml-1">
    <span
      className="dot-animation ml-4"
      style={{ animationDelay: "0s" }}
    >.</span>
    <span
      className="dot-animation ml-2"
      style={{ animationDelay: "0.2s" }}
    >.</span>
    <span
      className="dot-animation ml-2"
      style={{ animationDelay: "0.4s" }}
    >.</span>
  </span>
             </h1>
            <motion.button
  whileTap={{ scale: 0.95 }}
  whileHover={{ scale: 1.05 }}
  className='py-2 mt-5 px-5 rounded-full border border-zinc-200 text-white 
  hover:bg-white hover:text-black hover:shadow-lg transition-all duration-300'
>
  Contact Us
</motion.button>
            </>
        )}
        {para&&(
            
            <>
             <p className='text-sm   text-zinc-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </>

        )}

       
    
       </motion.div>
    </motion.div>
  )
}

export default Card