import User from "./User/User";
import "./Users.css";
import * as axios from "axios";

const Users = (props) => {
	let getUsers = () => {
		if (props.users.length === 0) {
			axios
				.get("https://social-network.samuraijs.com/api/1.0/users")
				.then((respons) => {
					props.setUsers(respons.data.items);
				});
		}
	};

	let usersElements = props.users.map((user) => {
		return (
			<User
				key={user.id}
				id={user.id}
				fullName={user.name}
				status={user.status}
				followed={user.followed}
				//country={user.location.country}
				//city={user.location.city}
				changeFollow={props.changeFollow}
			/>
		);
	});

	return (
		<div className="users">
			<button onClick={getUsers}>Get Users</button> <br/>
			<div className="users__items">
				{usersElements}
			</div>
		</div>
	);
};

export default Users;
