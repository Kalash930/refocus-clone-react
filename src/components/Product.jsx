/*
import React from 'react'
import Button from './Button'

function Product({val}) {
  return (
    <div className='w-full  py-20 text-white h-[19rem] '>
        <div className='max-w-[980px] mx-auto flex items-center justify-between'>
            <h1 className='text-6xl capitalize font-semibold'>{val.title}</h1>
            <div className='dets  w-1/3'>
                <p className='mb-5 text-sm'>{val.description}</p>
                <div className='flex items-center gap-3 '>
                    {val.live&& <Button title='Live Project'/>}
                    {val.case&& <Button title={"Case Study"} />}
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Product
*/

import React from "react";
import Button from "./Button";

const Product = ({ val, mover, count }) => {
	return (
		<div className="w-full py-20 h-[19rem] text-white">
			<div
				onMouseEnter={() => {
					mover(count);
				}}
				className="max-w-[980px] mx-auto flex justify-between items-center"
			>
				<h1 className="text-6xl capitalize font-medium">{val.title}</h1>
				<div className="w-1/3">
					<p className="mb-10">{val.description}</p>
					<div className="flex items-center gap-5">
						{val.live && <Button title="Live Preview" />}
						{val.case && <Button title="Case Study" />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;