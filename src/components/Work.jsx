
/*


import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const Work = () => {
	const [images, setImages] = useState([
		{
			url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
			top: "50%",
			left: "50%",
			isActive: false,
		},
		{
			url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
			top: "60%",
			left: "40%",
			isActive: false,
		},
		{
			url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
			top: "45%",
			left: "56%",
			isActive: false,
		},
		{
			url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
			top: "60%",
			left: "53%",
			isActive: false,
		},
		{
			url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
			top: "43%",
			left: "40%",
			isActive: false,
		},
		{
			url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
			top: "65%",
			left: "55%",
			isActive: false,
		},
	]);

	const { scrollYProgress } = useScroll();

	useMotionValueEvent(scrollYProgress, "change", (e) => {
	  console.log("Page scroll: ", e);
	});

	scrollYProgress.on("change", (data) => {
		function imagesShow(arr) {
			setImages((prev) =>
				prev.map((item, index) =>
					arr.indexOf(index) === -1
						? { ...item, isActive: false }
						: { ...item, isActive: true }
				)
			);
		}

		switch (Math.floor(data * 100)) {
			case 1:
				imagesShow([]);
				break;
			case 2:
				imagesShow([0]);
				break;
			case 3:
				imagesShow([0, 1]);
				break;
			case 4:
				imagesShow([0, 1, 2]);
				break;
			case 5:
				imagesShow([0, 1, 2, 3]);
				break;
			case 6:
				imagesShow([0, 1, 2, 3, 4]);
				break;
            case 7:
                imagesShow([0,1,2,3,4,5]) ;
                break;
		}
	});


   
  return (
    <div className='w-full '>
        <div className='max-w-[980px] mx-auto text-center relative mt-5'>
            <h1 className='text-[30vw] leading-none font-semibold select-none'>work</h1>
            <div className='absolute w-full h-full  top-0 '>
              {images.map((element,index)=> (element.isActive&&<img className='w-52 rounded-md absolute -translate-x-[50%] -translate-y-[50%] ' style={{top:element.top,left:element.left}} src={element.url} alt="" />
)
             //   return <img className='w-52 rounded-md absolute -translate-x-[50%] ' style={{top:element.top,left:element.left}} src={element.url} alt="" />

              )}
            </div>
            
        </div>
    </div>
  )
}

export default Work




*/


import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "60%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (e) => {
    console.log("Page scroll: ", e);
  });

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      case 5:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
      default:
        imagesShow([]);
    }
  });

  // Split the word "work" into characters
  const word = "work".split("");

  // Variants for container to stagger children
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Variants for each letter animation
  const letter = {
    hidden: { opacity: 0, y: -250 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 800, damping: 100 },
    },
  };

  return (
    <div className="w-full">
      <div className="max-w-[980px] mx-auto text-center relative mt-5 select-none">
        <motion.h1
          className="text-[30vw] leading-none font-semibold tracking-tight"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {word.map((char, index) => (
            <motion.span
              key={index}
              variants={letter}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <div className="absolute w-full h-full top-0">
          {images.map(
            (element, index) =>
              element.isActive && (
                <img
                  key={index}
                  className="w-52 rounded-md absolute -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: element.top, left: element.left }}
                  src={element.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;

