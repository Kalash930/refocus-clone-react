import React from 'react';

function Stripe({ val }) {
  return (
    <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-4 py-4 border border-zinc-700 flex justify-between items-center hover:opacity-80 transition-opacity duration-300'>
      <img className="max-h-8 object-contain" src={val.url} alt="logo" />
      <span className='font-semibold text-sm sm:text-base'>{val.number}</span>
    </div>
  );
}

export default Stripe;
