
/*
import React from 'react'
import Product from './Product'

function Products() {
    const products = [
        {
            title: "Arqitel",
            description:
                "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            case: false,
        },
        {
            title: "TTR",
            description:
                "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            case: false,
        },
        {
            title: "YIR",
            description:
                "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            live: true,
            case: true,
        },
        {
            title: "Yahoo!",
            description:
                "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live: true,
            case: true,
        },
    ]
  return (
    <div className='mt-20 relative'>
        {products.map((elem,index)=>{
            return <Product key={index} val={elem}/>

        })}
        <div className="absolute top-0 w-full h-full pointer-events-none">
            <div className='window absolute w-[20rem] h-[19rem] left-[43%] bg-white -translate-x-[50%] overflow-hidden'>
                        <div className='w-full h-full bg-sky-200'></div>
                        <div className='w-full h-full bg-sky-700'></div>
                        <div className='w-full h-full bg-sky-300'></div>
                        <div className='w-full h-full bg-sky-600'></div>
                       
            </div>

        </div>
    </div>
  )
}

export default Products
*/
/*




import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
	const products = [
		{
			title: "arqitel",
			description:
				"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
			live: true,
			case: false,
		},
		{
			title: "cula",
			description:
				"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
			live: true,
			case: true,
		},
		{
			title: "layout",
			description:
				"An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
			live: true,
			case: false,
		},
		{
			title: "TTR",
			description:
				"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
			live: true,
			case: false,
		},
	];

	const [pos, setPos] = useState(0);

	const mover = (val) => {
		setPos(val * 19);
	};

	return (
		<div className="mt-32 relative">
			{products.map((elem, index) => (
				<Product mover={mover} count={index} val={elem} key={index} />
			))}
			<div className="absolute top-0 w-full h-full pointer-events-none">
				<motion.div
					initial={{ y: pos, x: "-50%" }}
					animate={{ y: pos + "rem" }}
					transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
					className="absolute w-[20rem] h-[19rem] bg-white left-[44%] overflow-hidden bg-zinc-600"
				>
					<motion.div
						animate={{ y: -pos + "rem" }}
						className="w-full h-full bg-sky-200"
						transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
					>   
					    
                        <img className="w-full h-full object-cover" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png" alt="" />
                    </motion.div>
					<motion.div
						animate={{ y: -pos + "rem" }}
						className="w-full h-full bg-sky-300"
						transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
					>
                         <img className="w-full h-full object-cover" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png" alt="" />
                    </motion.div>
					<motion.div
						animate={{ y: -pos + "rem" }}
						className="w-full h-full bg-sky-400"
						transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
					>
                         <img className="w-full h-full object-cover" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png" alt="" />
                    </motion.div>
					<motion.div
						animate={{ y: -pos + "rem" }}
						className="w-full h-full bg-sky-500"
						transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
					>
                         <img className="w-full h-full object-cover" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png" alt="" />
                    </motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default Products;




*/


import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
	const products = [
		{
			title: "arqitel",
			description:
				"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
			live: true,
			case: false,
		},
		{
			title: "cula",
			description:
				"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
			live: true,
			case: true,
		},
		{
			title: "layout",
			description:
				"An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
			live: true,
			case: false,
		},
		{
			title: "TTR",
			description:
				"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
			live: true,
			case: false,
		},
	];

	const [pos, setPos] = useState(0);

	const mover = (val) => {
		setPos(val * 19);
	};

	return (
		<div className="mt-32 relative">
			{products.map((elem, index) => (
				<Product mover={mover} count={index} val={elem} key={index} />
			))}
			<div className="absolute top-0 w-full h-full pointer-events-none">
				<motion.div
					initial={{ y: pos, x: "-50%" }}
					animate={{ y: pos + "rem" }}
					transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
					className="absolute w-[20rem] h-[19rem] rounded-md   left-[44%] overflow-hidden "
				>
					<motion.div
						animate={{ y: -pos + "rem" }}
						className="w-full h-full rounded-md overflow-hidden "
						transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
					>   

					    
                        <img className="w-full h-full rounded-md object-cover" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png" alt="" />



                    </motion.div>
					<motion.div
						animate={{ y: -pos + "rem" }}
						className="w-full h-full rounded-md overflow-hidden"
						transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
					>


                         <img className="w-full h-full rounded-md object-cover" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png" alt="" />


                    </motion.div>
					<motion.div
						animate={{ y: -pos + "rem" }}
						className="w-full h-full rounded-md overflow-hidden"
						transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
					>

                         <img className="w-full h-full rounded-md object-cover" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png" alt="" />


                    </motion.div>
					<motion.div
						animate={{ y: -pos + "rem" }}
						className="w-full h-full rounded-md overflow-hidden"
						transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
					>


                         <img className="w-full rounded-md h-full object-cover" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png" alt="" />

						 
                    </motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default Products;