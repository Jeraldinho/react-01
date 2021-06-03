const { default: axios } = require("axios");

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": "35d67d20-0965-4f7d-a776-bd398127017a"
	}
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((respons) => {
				return respons.data
			})
	},

	follow(id){
		return instance.post(`follow/${id}`)
	},

	unFollow(id){
		return instance.delete(`follow/${id}`)
	}
}

export const authAPI = {
	authMe() {
		return instance.get(`auth/me`)
	}
}

export const profileAPI = {
	getProfileInfo(userId) {
		return instance.get(`profile/` + userId)
	},

	getUserStatus(userId) {
		return instance.get(`profile/status/` + userId)
	}
}