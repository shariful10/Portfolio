import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import img1 from "../../assets/portfolio-img1.png";
import img2 from "../../assets/portfolio-img2.png";
import img3 from "../../assets/portfolio-img3.png";

const Work = () => {
	return (
		<section id="work" className="section">
			<div className="w-full md:w-5/6 md:mx-auto px-5 md:px-0">
				<div className="flex flex-col lg:flex-row gap-x-10">
					<motion.div
						variants={fadeIn({ direction: "right", delay: 0.3 })}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
					>
						<div className="">
							<h2 className="h2 leading-tight text-accent">
								My Latest <br /> Work.
							</h2>
							<p className="max-w-sm mb-16">
								Lorem ipsum dolor sit amet, consectetur adipisicing
								elit. Repellat, hic! Harum quis, cum velit neque esse
								eos molestiasdoloremque exlicabo!
							</p>
							<button className="btn btn-sm">View all projects</button>
						</div>
						<div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
							<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
							<img
								className="group-hover:scale-125 transition-all duration-500"
								src={img2}
								alt=""
							/>
							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient">
									Full Stack Development
								</span>
							</div>
							<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
								<span className="text-3xl text-white">
									Project Title
								</span>
							</div>
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn({ direction: "left", delay: 0.2 })}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex flex-col gap-y-10"
					>
						<div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
							<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
							<img
								className="group-hover:scale-125 transition-all duration-500"
								src={img1}
								alt=""
							/>
							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient">React Development</span>
							</div>
							<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
								<span className="text-3xl text-white">
									Project Title
								</span>
							</div>
						</div>
						<div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
							<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
							<img
								className="group-hover:scale-125 transition-all duration-500"
								src={img3}
								alt=""
							/>
							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient">
									MERN Stack Development
								</span>
							</div>
							<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
								<span className="text-3xl text-white">
									Project Title
								</span>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Work;
