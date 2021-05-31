import "./App.css";
import "./css/materialdesignicons.min.css";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<HeaderContainer />

				<main className="main">
					<div className="container">
						<Sidebar state={props.state.sidebar} />

						<div className="app-content">
							<Route
								path="/profile/:userId?"
								render={() => <ProfileContainer />}
							/>
							<Route
								path="/dialogs"
								render={() => <DialogsContainer />}
							/>
							<Route path="/news" render={News} />
							<Route path="/music" render={Music} />
							<Route
								path="/users"
								render={() => <UsersContainer />}
							/>
							<Route path="/settings" render={Settings} />
						</div>
					</div>
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;
