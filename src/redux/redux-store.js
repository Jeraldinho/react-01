import dialogsReducer from "./dialogs-reducer";
import prifileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
	profilePage: prifileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;