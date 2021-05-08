// Action type names
const ADD_MESSAGE = "ADD_MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"

const dialogsReducer = (state, action) => {
	switch (action.type) {
		// On Dialogs page
		// Add/send new message
		case ADD_MESSAGE:
			let newMessage = {
				id: 3,
				name: "Vera Fischer",
				message: state.newMessageText
			}

			state.messages.push(newMessage)
			state.newMessageText = '';
			return state;

		// Update new message text prop in state 
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.text;
			return state;

		default:
			return state;
	}
}

// Action creators
// Dialogs page
export const addMessageActionCreator = () => {
	return { type: ADD_MESSAGE }
};
export const apdateNewMessageTextActionCreator = (text) => {
	return { type: UPDATE_NEW_MESSAGE_TEXT, text }
};

export default dialogsReducer;