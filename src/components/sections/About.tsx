import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useInView } from "react-intersection-observer";

const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	});

	return (
		<section id="about" className="section" ref={ref}>
			<div className="w-full md:w-5/6 md:mx-auto px-5 md:px-0">
				<div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
					<motion.div
						variants={fadeIn({ direction: "right", delay: 0.3 })}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
					></motion.div>
					<motion.div
						variants={fadeIn({ direction: "left", delay: 0.5 })}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1"
					>
						<h2 className="h2 text-accent">About me.</h2>
						<h3 className="h3 mb-4">
							I'm a MERN Stack Developer with over 2 yaers of experience
						</h3>
						<p className="mb-6">
							This is Shariful Islam, a MERN Stack developer passionate
							about crafting dynamic web applications. I specialize in
							MongoDB, Express.js, React.js, and Node.js. With a focus on
							seamless user experiences, I thrive on turning innovative
							ideas into high-quality, performant software. Let's build
							something amazing together! 🚀💻
						</p>
						<div className="flex gap-x-6 lg:gap-x-10 mb-12">
							<div className="">
								<div className="text-[40px] font-tertiary text-gradient mb-2">
									{inView && (
										<CountUp start={0} end={2} duration={3} />
									)}
									+
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Years of <br />
									Experience
								</div>
							</div>
							<div className="">
								<div className="text-[40px] font-tertiary text-gradient mb-2">
									{inView && (
										<CountUp start={0} end={100} duration={3} />
									)}
									+
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Projects <br />
									Completed
								</div>
							</div>
							<div className="">
								<div className="text-[40px] font-tertiary text-gradient mb-2">
									{inView && (
										<CountUp start={0} end={35} duration={3} />
									)}
									+
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Setisfied <br />
									Client
								</div>
							</div>
						</div>
						<div className="flex gap-x-8 items-center">
							<button className="btn btn-lg">Contact me</button>
							<a href="#" className="text-gradient btn-link">
								My Portfolio
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
