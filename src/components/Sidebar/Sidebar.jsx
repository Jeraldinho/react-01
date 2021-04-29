import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<ul className="sidebar__list">
				<li className="sidebar__list-item">
					<NavLink to="/profile" className="sidebar__link">
						<i className="mdi mdi-account"></i>
						Profile
					</NavLink>
				</li>
				<li className="sidebar__list-item">
					<NavLink to="/dialogs" className="sidebar__link">
						<i className="mdi mdi-message-text"></i>
						Messages
					</NavLink>
				</li>
				<li className="sidebar__list-item">
					<NavLink to="/news" className="sidebar__link">
						<i className="mdi mdi-newspaper"></i>
						News
					</NavLink>
				</li>
				<li className="sidebar__list-item">
					<NavLink to="/music" className="sidebar__link">
						<i className="mdi mdi-music-note"></i>
						Music
					</NavLink>
				</li>
				<li className="sidebar__list-item">
					<NavLink to="/settings" className="sidebar__link">
						<i className="mdi mdi-settings"></i>
						Settings
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
