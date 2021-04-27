import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />

			<main className="main">
				<div className="container">
					<Sidebar />

					<div className="app-content">
						<Profile />
						<Dialogs />
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;
