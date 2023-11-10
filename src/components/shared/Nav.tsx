import { Link } from 'react-scroll';
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

const Nav = () => {
	return (
		<nav className='fixed bottom-2'>
			<div className="w-full md:w-5/6 md:mx-auto px-5 md:px-0">
				<div>
					<Link to=''>
						<BiHomeAlt />
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
