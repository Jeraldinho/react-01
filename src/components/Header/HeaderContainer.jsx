import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUsersData, setAuthUserPhoto } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
				withCredentials: true,
			})
			.then((respons) => {
				let { id, login, email } = respons.data.data;

				this.props.setAuthUsersData(id, login, email);

				return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`);
			}).
			then((respons) => {
				this.props.setAuthUserPhoto(respons.data.photos.small);
			})
	}

	render() {
		return <Header {...this.props} />;
	}
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		photo: state.auth.photo,
	};
};

export default connect(mapStateToProps, { setAuthUsersData, setAuthUserPhoto })(HeaderContainer);
