import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<ul className="sidebar__list">
				<li>
					<NavLink to="/profile" className="sidebar__link">
						Profile
					</NavLink>
				</li>
				<li>
					<NavLink to="/dialogs" className="sidebar__link">
						Messages
					</NavLink>
				</li>
				<li>
					<NavLink to="/news" className="sidebar__link">
						News
					</NavLink>
				</li>
				<li>
					<NavLink to="/music" className="sidebar__link">
						Music
					</NavLink>
				</li>
				<li>
					<NavLink to="/settings" className="sidebar__link">
						Settings
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
