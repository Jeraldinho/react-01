
let initialState = {
	friends: [
		{ id: 1, name: "Murilo Benício" },
		{ id: 2, name: "Giovanna Antonelli" },
		{ id: 3, name: "Vera Fischer" },
		{ id: 3, name: "Reginaldo Faria" },
		{ id: 3, name: "Neusa Borges" },
	],
}

const sidebarReducer = (state = initialState, action) => {
	return state;
}

export default sidebarReducer;