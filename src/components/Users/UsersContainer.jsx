import React from "react";
import { connect } from "react-redux";
import { setCurrentPageAC, setUsersAC, setUsersTotalCountAC, usersFollowAC } from "../../redux/users-reducer";
import Users from "./Users";
import User from "./User/User";
import * as axios from "axios";

class UsersContainer extends React.Component {
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

	createUsersElements = () => {
		return this.props.users.map((user) => {
			return (
				<User
					key={user.id}
					id={user.id}
					avatar={user.photos.small}
					fullName={user.name}
					status={user.status}
					followed={user.followed}
					changeFollow={this.props.changeFollow}
				/>
			);
		});
	}

	componentDidMount() {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then((respons) => {
				this.props.setUsers(respons.data.items);
				this.props.setUsersTotalCount(respons.data.totalCount);
			});
	}

	onChangeCurrentpage = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
			)
			.then((respons) => {
				this.props.setUsers(respons.data.items);
			});
	};

	onPrevPage = () => {
		let prevPage = this.props.currentPage - 1;
		if (this.props.currentPage > 1) {
			this.onChangeCurrentpage(prevPage);
		}
	};

	onNextPage = () => {
		let nextPage = this.props.currentPage + 1;
		if (this.props.currentPage < this.props.usersTotalCount) {
			this.onChangeCurrentpage(nextPage);
		}
	};

	toFirstPage = () => {
		this.onChangeCurrentpage(1);
	};

	toLastPage = () => {
		let pageCount = Math.ceil(
			this.props.usersTotalCount / this.props.pageSize
		);
		this.onChangeCurrentpage(pageCount);
	};

	render() {
		return <Users createUsersElements={this.createUsersElements}
		onChangeCurrentpage={this.onChangeCurrentpage}
		onPrevPage={this.onPrevPage}
		onNextPage={this.onNextPage}
		toFirstPage={this.toFirstPage}
		toLastPage={this.toLastPage}
		usersTotalCount={this.props.usersTotalCount}
		pageSize={this.props.pageSize}
		currentPage={this.props.currentPage}
		pageBtnCount={this.props.pageBtnCount}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		usersTotalCount: state.usersPage.usersTotalCount,
		pageSize: state.usersPage.pageSize,
		currentPage: state.usersPage.currentPage,
		pageBtnCount: state.usersPage.pageBtnCount,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		changeFollow: (userId) => {
			dispatch(usersFollowAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		setUsersTotalCount: (usersTotalCount) => {
			dispatch(setUsersTotalCountAC(usersTotalCount));
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);
