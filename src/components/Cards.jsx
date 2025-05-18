import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
        <div className='max-w-[980px] mx-auto flex  py-20 gap-2'> 
            <Card width={"basis-1/3"} start={false} para={true}/>
            <Card width={"basis-2/3"} start={true} para={false} hover={" hover:bg-violet-700"}/>
        </div>
    </div>
  )
}

export default Cards