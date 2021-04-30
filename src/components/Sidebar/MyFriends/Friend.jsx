const Friend = (props) => {
	return (
		<a href="" className="sidebar__friends-item">
			<img
				src="https://via.placeholder.com/30x30"
				alt="ava"
				className="sidebar__friends-item-avatar"
			/>

			<span className="sidebar__friends-item-name">{props.name}</span>
		</a>
	);
};

export default Friend;
