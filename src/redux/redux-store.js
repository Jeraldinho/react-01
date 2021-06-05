import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import prifileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk'

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
	profilePage: prifileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;