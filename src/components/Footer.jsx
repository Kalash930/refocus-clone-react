import React from 'react'

function Footer() {

	
  return (
    <div className='w-full py-5 '>
        <div className='max-w-[980px] py-10 flex gap-32 mx-auto  '>
            <div className='basis-1/2'>


                   <h1 className="text-[9rem] font-semibold leading-none tracking-tight flex select-none">
                      {"refokus.".split("").map((char, idx) => (
                        <span
  key={idx}
  className="transition-all duration-300 text-white px-1 hover:text-black"
  style={{
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "transparent",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.WebkitTextStrokeColor = "white";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.WebkitTextStrokeColor = "transparent";
  }}
>
  {char === " " ? "\u00A0" : char}
</span>
  ))}
</h1>





            </div>
            <div className=' flex gap-4'>
                <div className="basis-1/3">
						<h4 className="mb-8 text-zinc-500 capitalize">
							socials
						</h4>
						{["instagram", "twitter (x?)", "Linkedin"].map(
							(item, index) => (
								<a
									href="#"
									key={index}
									className="mt-2 capitalize block text-zinc-600  hover:text-zinc-400"
                                    
								>
									{item}
								</a>
							)
						)}
					</div> 
                    <div className="basis-1/3">
						<h4 className="mb-8 text-zinc-500 capitalize">
							sitemao
						</h4>
						{["home", "work", "carrier","contact"].map(
							(item, index) => (
								<a
									href="#"
									key={index}
									className="mt-2 capitalize block text-zinc-600  hover:text-zinc-400"
								>
									{item}
								</a>
							)
						)}
					</div>
                    <div className=" basis-1/2 flex flex-col items-end">
						<p className="text-right text-zinc-400 ">
							Refokus is a pioneering digital agency driven by
                            design and empowered by technology.
							
						</p>
						<img
							src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg"
							alt="footer"
							className="w-40 mt-5 cursor-pointer transition-opacity duration-300 hover:opacity-60 hover:scale-105 rounded-md"
						/>
					</div>
                    
            </div>
        </div>
        <div className="max-w-[980px] mx-auto flex gap-5 border-t-[1px] border-zinc-700 pt-5 ">
				{["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(
					(item, index) => (
						<a
							href="#"
							key={index}
							className="text-zinc-600 font-normal text-sm delay-200 hover:text-zinc-400"
						>
							{item}
						</a>
					)
				)}
			</div>

    </div>
  )
}

export default Footer