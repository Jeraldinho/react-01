import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";

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
