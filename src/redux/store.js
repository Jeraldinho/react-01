import dialogsReducer from "./dialogs-reducer";
import prifileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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

	dispatch(action) {
		this._state.profilePage = prifileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	},
}

export default store;