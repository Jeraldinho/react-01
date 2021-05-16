import User from "./User/User";
import "./Users.css";

const Users = (props) => {
	let usersElements = props.users.map((user) => {
		return <User
			key={user.id}
			id={user.id}
			fullName={user.fullName}
			status={user.status}
			followed={user.followed}
			country={user.location.country}
			city={user.location.city}
			changeFollow={props.changeFollow}
		/>;
	});

	return (
		<div className="users">
			<div className="users__items">
				{usersElements}
			</div>
		</div>
	);
};

export default Users;
