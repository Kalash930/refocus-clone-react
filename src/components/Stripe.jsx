import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[20%] px-4 py-4  border-b-[1px] border-t-[1px] border-r-[1px] border-zinc-700 flex justify-between items-center hover:opacity-1border-t-[1px] '>
        <img src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span> 
    </div>
  )
}

export default Stripe