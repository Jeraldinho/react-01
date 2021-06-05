import { authAPI, profileAPI } from "../api/api";

// Action type names
const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_AUTH_USER_PHOTO = "SET_AUTH_USER_PHOTO";

let initialState = {
	id: null,
	email: null,
	login: null,
	photo: null,
	isAuth: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true
			}

		case SET_AUTH_USER_PHOTO:
			return {
				...state,
				photo: action.photo
			}

		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching }

		default:
			return state;
	}
}

// Action creators
export const setAuthUsersData = (id, login, email) => ({ type: SET_AUTH_USER_DATA, data: { id, login, email } });
export const setAuthUserPhoto = (photo) => ({ type: SET_AUTH_USER_PHOTO, photo });
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getAuthUserDataThunkCreator = () => {
	return (dispatch) => {
		authAPI.authMe()
			.then((respons) => {
				let { id, login, email } = respons.data.data;

				if (respons.data.resultCode === 0) {
					dispatch(setAuthUsersData(id, login, email));
				}

				return profileAPI.getProfileInfo(id);
			})
			.then((respons) => {
				dispatch(setAuthUserPhoto(respons.data.photos.small));
			});
	}
}

export default authReducer;