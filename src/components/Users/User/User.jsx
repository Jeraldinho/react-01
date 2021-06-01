import axios from "axios";
import { NavLink } from "react-router-dom";

const User = (props) => {
	let onFollowed = () => {
		if(props.followed) {
			axios
			.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
				withCredentials: true,
				headers: {
					"API-KEY": "35d67d20-0965-4f7d-a776-bd398127017a"
				}
			})
			.then((respons) => {
				if (respons.data.resultCode === 0) {
					props.changeFollow(props.id);
				}
			})
		} else {
			axios
			.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
				withCredentials: true,
				headers: {
					"API-KEY": "35d67d20-0965-4f7d-a776-bd398127017a"
				}
			})
			.then((respons) => {
				if (respons.data.resultCode === 0) {
					props.changeFollow(props.id);
				}
			})
		}
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

				<button className={props.followed === true ? 'users__item-follow followed' : 'users__item-follow'} onClick={onFollowed}>
					{props.followed === true ? <span>Followed <i className="mdi mdi-check"></i></span> : "Follow"}
				</button>
			</div>
		</div>
	);
};

export default User;
