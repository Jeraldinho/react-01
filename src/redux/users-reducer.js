// Action type names
const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
	// users: [
	// 	{ id: 1, followed: true, fullName: 'Murilo Benício', status: 'I am ok', location: { city: 'Berlin', country: 'Germany' } },
	// 	{ id: 2, followed: false, fullName: 'Giovanna Antonelli', status: 'I will be back!!!', location: { city: 'Ontario', country: 'Canada' } },
	// 	{ id: 3, followed: true, fullName: 'Vera Fischer', status: 'Do not text me!', location: { city: 'New York', country: 'USA' } },
	// ],
	users: [],
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: !user.followed };
					}
					return user;
				})
			}
		case SET_USERS:
			return { ...state, users: [...state.users, ...action.users] }

		default:
			return state;
	}
}

// Action creators
// Users page
export const usersFollowAC = (userId) => ({ type: FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;