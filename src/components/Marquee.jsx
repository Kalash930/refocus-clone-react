
/*
import { motion } from 'framer-motion'
import React from 'react'


function Marquee({imagesUrl,direction}) {
  return (
    <div className='flex w-full overflow-hidden'>
    <motion.div 
        initial={{ x: direction === "left" ? "0" : "-100%" }}
				animate={{ x: direction === "left" ? "-100%" : "0" }}
				transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
        {imagesUrl.map((url,index)=><img key={index} src={url} className='flex-shrink-0 w-[7vw]'/>)}
    </motion.div>
     <motion.div initial={{ x: direction === "left" ? "0" : "-100%" }}
				animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
        {imagesUrl.map((url,index)=><img key={index} src={url} className='flex-shrink-0 w-[7vw]'/>)}
    </motion.div>
    </div>
    
  )
}

export default Marquee

*/


import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ imagesUrls, direction }) => {
	return (
		<div className="w-full flex overflow-hidden">
			<motion.div
				initial={{ x: direction === "left" ? "0" : "-100%" }}
				animate={{ x: direction === "left" ? "-100%" : "0" }}
				transition={{ ease: "linear", duration: 15, repeat: Infinity }}
				className="flex flex-shrink-0 gap-40 py-10 pr-40"
			>
				{imagesUrls.map((url, index) => (
					<img
						src={url}
						key={index}
						alt="marquee"
						className="flex-shrink-0 w-[7vw]"
					/>
				))}
			</motion.div>
			<motion.div
				initial={{ x: direction === "left" ? "0" : "-100%" }}
				animate={{ x: direction === "left" ? "-100%" : "0" }}
				transition={{ ease: "linear", duration: 15, repeat: Infinity }}
				className="flex flex-shrink-0 gap-40 py-10 pr-40"
			>
				{imagesUrls.map((url, index) => (
					<img
						src={url}
						key={index}
						alt="marquee"
						className="flex-shrink-0 w-[7vw]"
					/>
				))}
			</motion.div>
		</div>
	);
};

export default Marquee;