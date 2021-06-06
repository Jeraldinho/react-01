import React from "react";
import Profile from "./Profile";
import { getProfileInfoThunkCreator } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import { connect } from "react-redux";

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

export default compose(
	connect(mapStateToProps, { getProfileInfoThunkCreator }),
	withRouter,
	withAuthRedirect
)(ProfileContainer);
