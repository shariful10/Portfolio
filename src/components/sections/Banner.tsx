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
               <div className="">text</div>
               <div className="">
                  <img src={Image} alt="" />
               </div>
            </div>
         </div>
		</div>
	);
};

export default Banner;
