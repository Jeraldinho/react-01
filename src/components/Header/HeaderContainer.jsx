import React from "react";
import { connect } from "react-redux";
import { getAuthUserDataThunkCreator } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getAuthUserDataThunkCreator();
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

export default connect(mapStateToProps, { getAuthUserDataThunkCreator })(
	HeaderContainer
);
