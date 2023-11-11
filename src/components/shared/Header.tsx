
const Header = () => {
	return (
		<header className="py-8">
			<div className="w-full md:w-5/6 md:mx-auto px-5 md:px-0">
				<div className="flex items-center justify-between">
					<a href="#">
						<h1 className="text-xl md:text-2xl md:leading-[28px] xl:text-[32px] leading-[24px] xl:leading-[36px] font-black font-primary">
							<span className="text">
								SHARIFUL
							</span> 
							<br />
							ISLAM
						</h1>
					</a>
               <button className="btn btn-sm">Work with me</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
