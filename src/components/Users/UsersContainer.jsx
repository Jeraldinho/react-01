import { connect } from "react-redux";
import { setUsersAC, usersFollowAC } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		changeFollow: (userId) => {
			dispatch(usersFollowAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;
