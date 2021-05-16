import { NavLink } from "react-router-dom";
import Friend from "./MyFriends/Friend";
import "./Sidebar.css";

const Sidebar = (props) => {
	let friendsElements = props.state.friends.map((friend) => (
		<Friend name={friend.name} key={friend.id} />
	));

	return (
		<div className="sidebar">
			<ul className="sidebar__nav-list">
				<li className="sidebar__nav-list-item">
					<NavLink to="/profile" className="sidebar__link">
						<i className="mdi mdi-account"></i>
						Profile
					</NavLink>
				</li>
				<li className="sidebar__nav-list-item">
					<NavLink to="/dialogs" className="sidebar__link">
						<i className="mdi mdi-message-text"></i>
						Messages
					</NavLink>
				</li>
				<li className="sidebar__nav-list-item">
					<NavLink to="/news" className="sidebar__link">
						<i className="mdi mdi-newspaper"></i>
						News
					</NavLink>
				</li>
				<li className="sidebar__nav-list-item">
					<NavLink to="/music" className="sidebar__link">
						<i className="mdi mdi-music-note"></i>
						Music
					</NavLink>
				</li>
				<li className="sidebar__nav-list-item">
					<NavLink to="/users" className="sidebar__link">
						<i className="mdi mdi-account-multiple"></i>
						Users
					</NavLink>
				</li>
				<li className="sidebar__nav-list-item">
					<NavLink to="/settings" className="sidebar__link">
						<i className="mdi mdi-settings"></i>
						Settings
					</NavLink>
				</li>
			</ul>

			<div className="sidebar__friends-block">
				<div className="sidebar__friends-block-title">My friends</div>
				{friendsElements}
			</div>
		</div>
	);
};

export default Sidebar;
