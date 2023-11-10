import { Outlet } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

function App() {
	return (
		<div className="bg-site bg-no-repeat bg-cover overflow-hidden">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
