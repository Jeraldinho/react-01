import { usersAPI } from "../api/api";

// Action type names
const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

let initialState = {
	users: [],
	usersTotalCount: 200,
	pageSize: 10,
	currentPage: 1,
	pageBtnCount: 7,
	isFetching: false,
	followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: !user.followed };
					}
					return user;
				})
			}

		case TOGGLE_FOLLOWING_PROGRESS:
			console.log(action.userId)
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
			}

		case SET_USERS:
			return { ...state, users: [...action.users] }

		case SET_USERS_TOTAL_COUNT:
			return { ...state, usersTotalCount: action.usersTotalCount }

		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.pageNumber }

		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching }

		default:
			return state;
	}
}

// Action creators
// Users page
export const usersFollow = (userId) => ({ type: FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber });
export const setUsersTotalCount = (usersTotalCount) => ({ type: SET_USERS_TOTAL_COUNT, usersTotalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId });


export const getUsersThunkCreator = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));

		usersAPI.getUsers(currentPage, pageSize).then((respons) => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(respons.items));
			dispatch(setUsersTotalCount(respons.totalCount));
		});
	}
}

export const setCurrentPageThunkCreator = (pageNumber, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		dispatch(setCurrentPage(pageNumber));

		usersAPI.getUsers(pageNumber, pageSize).then((respons) => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(respons.items));
		});
	}
}

export const followThunkCreator = (isFetching, userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));

		if (isFetching) {
			usersAPI.unFollow(userId).then((respons) => {
				if (respons.data.resultCode === 0) {
					dispatch(usersFollow(userId));
				}

				dispatch(toggleFollowingProgress(false, userId));
			});
		} else {
			usersAPI.follow(userId).then((respons) => {
				if (respons.data.resultCode === 0) {
					dispatch(usersFollow(userId));
				}

				dispatch(toggleFollowingProgress(false, userId));
			});
		}
	}
}

export default usersReducer;