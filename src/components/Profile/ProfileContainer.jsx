import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfileInfoThunkCreator } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}

		this.props.getProfileInfoThunkCreator(userId);
	}

	render() {
		return (
			<>
				{this.props.isFetching === true ? <Preloader /> : null}

				<Profile
					{...this.props}
					profile={this.props.profile}
					status={this.props.status}
				/>
			</>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		isFetching: state.usersPage.isFetching,
		profile: state.profilePage.profile,
		status: state.profilePage.userStatus,
	};
};

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getProfileInfoThunkCreator })(withUrlDataContainerComponent);
