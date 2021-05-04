import {rerenderApp} from "./../render";

let state = {
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
}

window.state = state;

// On Profile page
export let addPost = () => {
	let newPost = {
		id: 3,
		messages: state.profilePage.newPostText,
		likesCount: 45
	}

	state.profilePage.posts.push(newPost)
	state.profilePage.newPostText = '';
	rerenderApp(state);
}
export let updateNewPostText = (text) => {
	state.profilePage.newPostText = text;
	rerenderApp(state);
}

// On Dialogs page
export let addMessage = () => {
	let newMessage = {
		id: 3,
		name: "Vera Fischer",
		message: state.dialogsPage.newMessageText
	}

	state.dialogsPage.messages.push(newMessage)
	state.dialogsPage.newMessageText = '';
	rerenderApp(state);
}
export let updateNewMessageText = (text) => {
	state.dialogsPage.newMessageText = text;
	rerenderApp(state);
}

export default state;