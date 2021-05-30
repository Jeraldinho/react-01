// Action type names
const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
	posts: [
		{ id: 1, messages: "First post", likesCount: 14 },
		{ id: 2, messages: "Second post", likesCount: 20 },
	],
	newPostText: "",
	profile: null,
	isFetching: false,
}

const prifileReducer = (state = initialState, action) => {
	switch (action.type) {
		// On Profile page
		// Add new post
		case ADD_POST: {
			let newPostText = state.newPostText;

			return {
				...state,
				posts: [...state.posts, { id: 15, messages: newPostText, likesCount: 45 }],
				newPostText: ''
			};
		}

		// Update new post text prop in state 
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.text
			};
		}

		// Set user profile
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			};
		}

		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching}

		default:
			return state;
	}
}

// Action creators
// Profile page
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ( {type: UPDATE_NEW_POST_TEXT, text} );
export const setUserProfileAC = (profile) => ( {type: SET_USER_PROFILE, profile} );
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default prifileReducer;