// Action type names
const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

const prifileReducer = (state, action) => {
	switch (action.type) {
		// On Profile page
		// Add new post
		case ADD_POST:
			let newPost = {
				id: 3,
				messages: state.newPostText,
				likesCount: 45
			}

			state.posts.push(newPost)
			state.newPostText = '';

			return state;

		// Update new post text prop in state 
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.text;

			return state;

		default:
			return state;
	}
}

// Action creators
// Profile page
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	text
});

export default prifileReducer;