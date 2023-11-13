import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import InputField from "./InputField";

const Contact = () => {
	return (
		<section id="contact" className="py-16 lg:section">
			<div className="w-full md:w-5/6 md:mx-auto px-5 md:px-0">
				<div className="flex flex-col lg:flex-row">
					<motion.div
						variants={fadeIn({ direction: "right", delay: 0.3 })}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex justify-start items-center"
					>
						<div className="">
							<h4 className="texl-xl uppercase text-accent font-medium mb-2 tracking-wide">
								Get in touch
							</h4>
							<h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
								Let's work <br /> together!
							</h2>
						</div>
					</motion.div>
					<motion.form
						variants={fadeIn({ direction: "left", delay: 0.3 })}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-12 p-6 items-start"
					>
						<InputField type="text" name="name" placeholder="name" />
						<InputField type="email" name="email" placeholder="email" />
						<textarea
							className="bg-transparent border-b py-12 w-full outline-none placeholder:text-white focus:border-accent transition-all duration-300 resize-none mb-12"
							id=""
							placeholder="Your message"
						/>
						<button type="submit" className="btn btn-lg">
							Send message
						</button>
					</motion.form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
