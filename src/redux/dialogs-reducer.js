// Action type names
const ADD_MESSAGE = "ADD_MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"

let initialState = {
	dialogs: [
		{ id: 1, name: "Murilo Benício" },
		{ id: 2, name: "Giovanna Antonelli" },
		{ id: 3, name: "Vera Fischer" },
	],
	messages: [
		{ id: 1, name: "Reginaldo Faria", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat reprehenderit, veniam nesciunt recusandae quaerat architecto unde magni sint voluptates distinctio excepturi voluptatum autem velit tenetur suscipit? Hic, ratione beatae." },
		{ id: 2, name: "Neusa Borges", message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit." },
	],
	newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
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