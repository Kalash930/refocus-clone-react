/*

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

*/


import React, { useState } from 'react';
import Button from './Button';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-[980px] py-4 px-4 mx-auto flex items-center justify-between border-b border-zinc-700">
      {/* Left section with logo and title */}
      <div className="flex items-center">
        <img className="w-10" src="src/refokus (1).png" alt="Refocus Logo" />
        <h3 className="text-white ml-2 text-lg font-semibold">Refocus</h3>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-10 items-center ml-20">
        {["Home", "Work", "Culture", "", "Next"].map((elem, index) => (
          <a
            key={index}
            href="#"
            className="text-white text-sm flex gap-3 items-center font-regular hover:text-zinc-400"
          >
            {index === 1 ? (
              <span className="inline-block w-1 h-1 rounded-full bg-green-500 shadow-[0_0_5px_2px_rgba(34,197,94,0.4)] animate-pulse"></span>
            ) : null}
            {elem.length === 0 ? <span className="w-[2px] h-7 bg-zinc-600"></span> : null}
            {elem}
          </a>
        ))}
      </div>

      {/* Button on desktop */}
      <div className="hidden md:block">
        <Button />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {/* Simple hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-700 md:hidden">
          <div className="flex flex-col items-center py-4 space-y-4">
            {["Home", "Work", "Culture", "", "Next"].map((elem, index) => (
              <a
                key={index}
                href="#"
                className="text-white text-base flex gap-3 items-center font-regular hover:text-zinc-400"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {index === 1 ? (
                  <span className="inline-block w-1 h-1 rounded-full bg-green-500 shadow-[0_0_5px_2px_rgba(34,197,94,0.4)] animate-pulse"></span>
                ) : null}
                {elem.length === 0 ? <span className="w-[2px] h-7 bg-zinc-600"></span> : null}
                {elem}
              </a>
            ))}
            {/* Mobile Button */}
            <div>
              <Button />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
