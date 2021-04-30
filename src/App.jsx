import "./App.css";
import "./css/materialdesignicons.min.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

// Posts Data for Profile page
let posts = [
	{messages: "First post", likes: 14},
	{messages: "Second post", likes: 20},
]

// Dialogs Data for Messages
let dialogs = [
	{id: 1, name: "Natan"},
	{id: 2, name: "Joe"},
	{id: 3, name: "Brandan"},
]

// Messages Data for Messages
let messages = [
	{id: 1, name: "Natan", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat reprehenderit, veniam nesciunt recusandae quaerat architecto unde magni sint voluptates distinctio excepturi voluptatum autem velit tenetur suscipit? Hic, ratione beatae."},
	{id: 2, name: "Joe", message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
]

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />

				<main className="main">
					<div className="container">
						<Sidebar />

						<div className="app-content">
							<Route path="/profile" render={ () => <Profile posts={posts} /> } />
							<Route path="/dialogs" render={ () => <Dialogs dialogs={dialogs} messages={messages} /> } />
							<Route path="/news" render={News} />
							<Route path="/music" render={Music} />
							<Route path="/settings" render={Settings} />
						</div>
					</div>
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;
