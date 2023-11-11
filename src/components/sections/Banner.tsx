import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Image from "../../assets/avatar.svg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";
import Logo from "../shared/Logo";

const Banner = () => {
	return (
		<div id="home" className="section">
			<div className="w-full md:w-5/6 md:mx-auto px-5 md:px-0">
				<div className="">
					<div className="">
						<Logo />
						<div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
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
						L</div>
						<p className="">
							Hey, I'm Shariful Islam, a Full Stack Developer. I love
							building web application. Proficient in MERN Stack
							development.
						</p>
						<div className="">
							<button className="btn btn-lg">Contact me</button>
						</div>
					</div>
					<div className="">
						<img src={Image} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
