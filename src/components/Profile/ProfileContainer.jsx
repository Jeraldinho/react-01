import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
	toggleIsFetchingAC,
	setUserProfileAC,
} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import { withRouter } from "react-router-dom";
import { profileAPI } from "../../api/api";

class ProfileContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);

		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}

		profileAPI.getProfileInfo(userId)
		.then((respons) => {
			this.props.toggleIsFetching(false);
			this.props.setUserProfile(respons.data);
		});
	}

	render() {
		return (
			<>
				{this.props.isFetching === true ? <Preloader /> : null}

				<Profile {...this.props} profile={this.props.profile} />
			</>
		);
	}
}

let mapStateToProps = (state) => ({
	isFetching: state.usersPage.isFetching,
	profile: state.profilePage.profile,
	users: state.usersPage.users,
});

let mapDispatchToProps = (dispatch) => {
	return {
		toggleIsFetching: (isFetching) => {
			dispatch(toggleIsFetchingAC(isFetching));
		},
		setUserProfile: (profile) => {
			dispatch(setUserProfileAC(profile));
		},
	};
};

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withUrlDataContainerComponent);
