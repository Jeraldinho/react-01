import React from "react";
import User from "./User/User";
import "./Users.css";
import * as axios from "axios";

class Users extends React.Component {
	/* usersElements = this.props.users.map((user) => {
		return (
			<User
				key={user.id}
				id={user.id}
				fullName={user.name}
				status={user.status}
				followed={user.followed}
				//country={user.location.country}
				//city={user.location.city}
				changeFollow={this.props.changeFollow}
			/>
		);
	}); */

	createUsersElements() {
		return (
			this.props.users.map( user => {
				return (
					<User
						key={user.id}
						id={user.id}
						fullName={user.name}
						status={user.status}
						followed={user.followed}
						changeFollow={this.props.changeFollow}
					/>
				)
			})
		)
	}

	componentDidMount() {
		axios
			.get("https://social-network.samuraijs.com/api/1.0/users")
			.then((respons) => {
				this.props.setUsers(respons.data.items);
			});
	}

	render() {
		return (
			<div className="users">
				<div className="users__items">
					{this.createUsersElements()}
				</div>
			</div>
		);
	}
}

export default Users;
