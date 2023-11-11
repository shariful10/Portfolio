import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Image from "../../assets/avatar.svg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";

const Banner = () => {
	return (
		<div id="home" className="section">
			<div className="w-full md:w-5/6 md:mx-auto px-5 md:px-0">
				<div className="">
					<div className="">
						<h1 className="text-xl md:text-2xl md:leading-[28px] xl:text-[32px] leading-[24px] xl:leading-[36px] font-black font-primary">
							<span className="text">SHARIFUL</span>
							<br />
							ISLAM
						</h1>
						<div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold">
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
