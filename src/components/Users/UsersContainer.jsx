import React from "react";
import { connect } from "react-redux";
import {
	setCurrentPageAC,
	setUsersAC,
	setUsersTotalCountAC,
	usersFollowAC,
	toggleIsFetchingAC,
	toggleFollowingProgress,
} from "../../redux/users-reducer";
import Users from "./Users";
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

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
					changeFollow={this.props.changeFollow}
					toggleFollowingProgress={this.props.toggleFollowingProgress}
					followingInProgress={this.props.followingInProgress}
				/>
			);
		});
	};

	componentDidMount() {
		this.props.toggleIsFetching(true);

		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((respons) => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(respons.items);
			this.props.setUsersTotalCount(respons.totalCount);
		});
	}

	onChangeCurrentpage = (pageNumber) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(pageNumber);

		usersAPI.getUsers(pageNumber, this.props.pageSize).then((respons) => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(respons.items);
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
		return (
			<>
				{ this.props.isFetching === true ? <Preloader /> : null }

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

let mapDispatchToProps = (dispatch) => {
	return {
		changeFollow: (userId) => {
			dispatch(usersFollowAC(userId));
		},
		toggleFollowingProgress: (isFetching, userId) => {
			dispatch(toggleFollowingProgress(isFetching, userId));
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
		toggleIsFetching: (isFetching) => {
			dispatch(toggleIsFetchingAC(isFetching));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
