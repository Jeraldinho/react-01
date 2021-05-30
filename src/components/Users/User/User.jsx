import { NavLink } from "react-router-dom";

const User = (props) => {
	let onFollowed = () => {
		props.changeFollow(props.id);
	};

	return (
		<div className="users__item">
			<div className="users__item-inner">
				<div className="users__item-avatar">
					<NavLink to={'/profile/' + props.id}>
						<img
							src={
								props.avatar !== null
									? props.avatar
									: "https://via.placeholder.com/80x80"
							}
							alt="ava"
						/>
					</NavLink>

					<div className="users__item-location">
						<div className="users__item-country">
							props.country,
						</div>
						<div className="users__item-city">props.city</div>
					</div>
				</div>

				<div className="users__item-text">
					<div className="users__item-name">{props.fullName}</div>
					<div className="users__item-status">{props.status}</div>
				</div>

				<button className="users__item-follow" onClick={onFollowed}>
					{props.followed === true ? "Followed" : "Follow"}
				</button>
			</div>
		</div>
	);
};

export default User;
