import React from "react";

function Footer() {
	return (
		<div className="w-full py-5  text-white">
			<div className="max-w-[980px] mx-auto px-4 sm:px-6 md:px-8 py-10 flex flex-col md:flex-row md:gap-20 gap-12">
				{/* Logo / Brand */}
				<div className="basis-full md:basis-1/2">
					<h1 className="text-[5rem] sm:text-[5rem] md:text-[6rem] font-semibold leading-none tracking-tight select-none flex flex-wrap">
						{"refokus.".split("").map((char, idx) => (
							<span
								key={idx}
								className="transition-all duration-300 px-1 hover:text-black cursor-pointer"
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

				{/* Links & Info */}
				<div className="flex flex-col sm:flex-row sm:gap-12 md:basis-1/2 w-full">
					{/* Socials */}
					<div className="flex-1 mb-8 sm:mb-0">
						<h4 className="mb-6 text-zinc-400 uppercase tracking-wide font-semibold">
							Socials
						</h4>
						{["instagram", "twitter (x?)", "linkedin"].map((item, index) => (
							<a
								href="#"
								key={index}
								className="block mt-2 capitalize text-zinc-500 hover:text-zinc-400 transition-colors duration-200"
							>
								{item}
							</a>
						))}
					</div>

					{/* Sitemap */}
					<div className="flex-1 mb-8 sm:mb-0">
						<h4 className="mb-6 text-zinc-400 uppercase tracking-wide font-semibold">
							Sitemap
						</h4>
						{["home", "work", "career", "contact"].map((item, index) => (
							<a
								href="#"
								key={index}
								className="block mt-2 capitalize text-zinc-500 hover:text-zinc-400 transition-colors duration-200"
							>
								{item}
							</a>
						))}
					</div>

					{/* Description and badge */}
					<div className="flex-1 flex flex-col items-start sm:items-end text-zinc-400 text-sm leading-relaxed">
						<p className="mb-5 max-w-xs">
							Refokus is a pioneering digital agency driven by design and empowered by
							technology.
						</p>
						<img
							src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg"
							alt="Enterprise Partner Badge"
							className="w-40 cursor-pointer transition-opacity duration-300 hover:opacity-60 hover:scale-105 rounded-md"
						/>
					</div>
				</div>
			</div>

			{/* Bottom policy links */}
			<div className="max-w-[980px] mx-auto px-4 sm:px-6 md:px-8 flex flex-wrap gap-5 border-t border-zinc-700 pt-5 text-zinc-600 text-sm">
				{["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(
					(item, index) => (
						<a
							href="#"
							key={index}
							className="hover:text-zinc-400 transition-colors duration-200"
						>
							{item}
						</a>
					)
				)}
			</div>
		</div>
	);
}

export default Footer;
