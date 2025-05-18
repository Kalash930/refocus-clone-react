import React from 'react'
import Button from './Button'

function  Navbar() {
  return (
    <div className='max-w-[980px] py-6 flex mx-auto items-center justify-between border-b-[1px] border-zinc-700' >
      
      <div className='nleft flex items-center'>
          <img className='w-10' src="src/refokus (1).png" alt="" />
        <h3 className='text-white ml-2'>Refocus</h3>
        <div className='links flex gap-10 ml-20 items-center'>
            {["Home","Work","Culture","","Next"].map((elem,index) =>(
            <a key={index} href="#" className='text-white text-sm flex gap-3 items-center font-regular hover:text-zinc-400'> 

            {index===1?<span style={{}} className='inline-block w-1 h-1 rounded-full  bg-green-500 shadow-[0_0_5px_2px_rgba(34,197,94,0.4)] animate-pulse'></span>:null}
            {elem.length===0? <span className='w-[2px] h-7 bg-zinc-600'> </span>:null}
            {elem}</a>
            ))}
        </div>
      </div>
      <Button/>
    </div>
  )
}

export default  Navbar