import About from "../components/sections/About";
import Banner from "../components/sections/Banner";
import Contact from "../components/sections/Contact";
import Services from "../components/sections/Services";
import Work from "../components/sections/Work";
import Nav from "../components/shared/Nav";

const Home = () => {
	return <div className="text-white">
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
   </div>;
};

export default Home;
