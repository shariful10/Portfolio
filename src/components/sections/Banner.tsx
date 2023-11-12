import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Image from "../../assets/avatar.svg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";

const Banner = () => {
	return (
		<section
			id="home"
			className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
		>
			<div className="w-full md:w-5/6 md:mx-auto px-5 md:px-0">
				<div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
					<div className="flex-1 text-center font-secondary lg:text-left">
						<motion.h1
							variants={fadeIn({ direction: "up", delay: 0.3 })}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="text-[55px] font-bold leading-[1] lg:text-[110px]"
						>
							Shariful <span>Islam</span>
						</motion.h1>
						<motion.div
							variants={fadeIn({ direction: "up", delay: 0.4 })}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
						>
							<span className="mr-4">I am a</span>
							<TypeAnimation
								sequence={[
									"Full Stack Developer",
									2000,
									"React Developer",
									2000,
									"Frontend Developer",
									2000,
									"MERN Stack Developer",
									2000,
									"Wordpress Developer",
									2000,
								]}
								speed={50}
								className="text-accent"
								wrapper="span"
								repeat={Infinity}
							/>
						</motion.div>
						<motion.p
							variants={fadeIn({ direction: "up", delay: 0.5 })}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-8 max-w-lg mx-auto lg:mx-0"
						>
							Hey, I'm Shariful Islam, a Passionate  Full Stack Developer. I love
							building web application. Proficient in MERN Stack
							development.
						</motion.p>
						<div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
							<button className="btn btn-lg">Contact me</button>
							<a href="#" className="text-gradient btn-link">
								My Portfolio
							</a>
						</div>
						<div className="flex text-xl gap-x-6 max-w-max mx-auto lg:mx-0">
							<a href="#">
								<FaGithub />
							</a>
							<a href="#">
								<FaLinkedin />
							</a>
							<a href="#">
								<FaDribbble />
							</a>
						</div>
					</div>
					<div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
						<img src={Image} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
