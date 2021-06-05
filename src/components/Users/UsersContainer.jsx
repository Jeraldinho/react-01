import React from "react";
import { connect } from "react-redux";
import {
	setCurrentPage,
	setUsers,
	setUsersTotalCount,
	getUsersThunkCreator,
	setCurrentPageThunkCreator,
	followThunkCreator,
} from "../../redux/users-reducer";
import Users from "./Users";
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
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
					changeFollow={this.props.followThunk}
					toggleFollowingProgress={this.props.toggleFollowingProgress}
					followingInProgress={this.props.followingInProgress}
				/>
			);
		});
	};

	componentDidMount() {
		this.props.getUsersThunkCreator(
			this.props.currentPage,
			this.props.pageSize
		);
	}

	onChangeCurrentpage = (pageNumber) => {
		this.props.setCurrentPageThunkCreator(pageNumber, this.props.pageSize);
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
		return (
			<>
				{this.props.isFetching === true ? <Preloader /> : null}

				<Users
					createUsersElements={this.createUsersElements}
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
			</>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		usersTotalCount: state.usersPage.usersTotalCount,
		pageSize: state.usersPage.pageSize,
		currentPage: state.usersPage.currentPage,
		pageBtnCount: state.usersPage.pageBtnCount,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	};
};

/* let mapDispatchToProps = (dispatch) => {
	return {
		followThunk: (isFetching, userId) => {
			dispatch(followThunkCreator(isFetching, userId));
		},
		setUsers: (users) => {
			dispatch(setUsers(users));
		},
		setUsersTotalCount: (usersTotalCount) => {
			dispatch(setUsersTotalCount(usersTotalCount));
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPage(pageNumber));
		},
		toggleIsFetching: (isFetching) => {
			dispatch(toggleIsFetching(isFetching));
		},
		getUsersThunk: (currentPage, pageSize) => {
			dispatch(getUsersThunkCreator(currentPage, pageSize));
		}
	};
}; */

export default connect(mapStateToProps, {
	followThunkCreator,
	setUsers,
	setUsersTotalCount,
	setCurrentPage,
	getUsersThunkCreator,
	setCurrentPageThunkCreator,
})(UsersContainer);
