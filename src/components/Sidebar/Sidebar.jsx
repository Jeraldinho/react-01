import "./Sidebar.css";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<ul className="sidebar__list">
				<li>
					<a href="" className="sidebar__link active">
						Profile
					</a>
				</li>
				<li>
					<a href="" className="sidebar__link">
						Messages
					</a>
				</li>
				<li>
					<a href="" className="sidebar__link">
						News
					</a>
				</li>
				<li>
					<a href="" className="sidebar__link">
						Music
					</a>
				</li>
				<li>
					<a href="" className="sidebar__link">
						Settings
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
