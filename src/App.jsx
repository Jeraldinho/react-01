import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />

			<main className="main">
				<div className="container">
					<Sidebar />
					<Profile />
				</div>
			</main>
		</div>
	);
};

export default App;
