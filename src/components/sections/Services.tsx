import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { BsArrowUpRight } from "react-icons/bs";

const services = [
	{
		name: "Full Stack Development",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maiores, quia quo expedita accusamus illum ducimus tempore repellat distinctio harum apperiam.",
		link: "Learn more",
	},
	{
		name: "MERN Stack Development",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maiores, quia quo expedita accusamus illum ducimus tempore repellat distinctio harum apperiam.",
		link: "Learn more",
	},
	{
		name: "React Development",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maiores, quia quo expedita accusamus illum ducimus tempore repellat distinctio harum apperiam.",
		link: "Learn more",
	},
	{
		name: "Wordpress Development",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maiores, quia quo expedita accusamus illum ducimus tempore repellat distinctio harum apperiam.",
		link: "Learn more",
	},
];

const Services = () => {
	return (
		<section id="services" className="section">
			<div className="w-full md:w-5/6 md:mx-auto px-5 md:px-0">
				<div className="flex flex-col lg:flex-row">
					<div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
						<h2 className="h2 text-accent mb-6">What I Do.</h2>
						<h3 className="h3 max-w-[455px] mb-16">
							I'm a MERN Stack Developer with over 2 yaers of experience
						</h3>
                  <button className="btn btn-sm">See my work</button>
					</div>
					<div className="">services</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
