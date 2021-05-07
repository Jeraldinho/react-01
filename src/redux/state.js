// Action type names
const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

const ADD_MESSAGE = "ADD_MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"

// Action creators
// Profile page
export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	text
});

// Dialogs page
export const addMessageActionCreator = () => {
	return { type: ADD_MESSAGE }
};

export const apdateNewMessageTextActionCreator = (text) => {
	return { type: UPDATE_NEW_MESSAGE_TEXT, text }
};


let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, messages: "First post", likesCount: 14 },
				{ id: 2, messages: "Second post", likesCount: 20 },
			],
			newPostText: ""
		},
		dialogsPage: {
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
		},
		sidebar: {
			friends: [
				{ id: 1, name: "Murilo Benício" },
				{ id: 2, name: "Giovanna Antonelli" },
				{ id: 3, name: "Vera Fischer" },
				{ id: 3, name: "Reginaldo Faria" },
				{ id: 3, name: "Neusa Borges" },
			],
		}
	},
	_callSubscriber() {
		console.log("The state has changed")
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) { // { type: 'ADD-POST' }
		switch (action.type) {
			// On Profile page
			// Add new post
			case ADD_POST:
				let newPost = {
					id: 3,
					messages: this._state.profilePage.newPostText,
					likesCount: 45
				}

				this._state.profilePage.posts.push(newPost)
				this._state.profilePage.newPostText = '';
				this._callSubscriber(this._state);
				break

			// Update new post text prop in state 
			case UPDATE_NEW_POST_TEXT:
				this._state.profilePage.newPostText = action.text;
				this._callSubscriber(this._state);
				break

			// On Dialogs page
			// Add/send new message
			case ADD_MESSAGE:
				let newMessage = {
					id: 3,
					name: "Vera Fischer",
					message: this._state.dialogsPage.newMessageText
				}

				this._state.dialogsPage.messages.push(newMessage)
				this._state.dialogsPage.newMessageText = '';
				this._callSubscriber(this._state);
				break

			// Update new message text prop in state 
			case UPDATE_NEW_MESSAGE_TEXT:
				this._state.dialogsPage.newMessageText = action.text;
				this._callSubscriber(this._state);
				break
		}
	},
}

export default store;

window.store = store;