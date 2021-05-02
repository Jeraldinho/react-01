let state = {
	profilePage: {
		posts: [
			{ id: 1, messages: "First post", likesCount: 14 },
			{ id: 2, messages: "Second post", likesCount: 20 },
		],
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
		]
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

export let addPost = (postMessage) => {
	state.profilePage.posts.push(
		{ id: 3, messages: postMessage, likesCount: 45 }
	)

	console.log(state.profilePage.posts);
}

export default state;