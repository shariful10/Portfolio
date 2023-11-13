import { Outlet } from "react-router-dom";
import Header from "./components/shared/Header";

function App() {
	return (
		<div className="bg-site bg-no-repeat bg-cover overflow-hidden">
			<Header />
			<Outlet />
		</div>
	);
}

export default App;
