import Preloader from "../../common/Preloader/Preloader";
import "./ProfileInfo.css";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />;
	}

	return (
		<div className="profile__info">
			<div className="avatar">
				<img
					src={
						props.profile.photos.large !== null
							? props.profile.photos.large
							: "https://via.placeholder.com/250x300"
					}
					alt="ava"
				/>
			</div>

			<div className="user-info">
				<div className=".user-info__item user-info__name">
					{props.profile.fullName}
				</div>
				<div className="user-info__item user-info__status">
					This is my super status
				</div>
				<div className="user-info__item">
					<span>About me:</span> {props.profile.aboutMe}
				</div>
				{/* <div className="user-info__item user-info__birthday">
					<span>Date of Birth:</span> 01.01.1981
				</div>
				<div className="user-info__item user-info__birthday">
					<span>City:</span> New York
				</div>
				<div className="user-info__item user-info__edu">
					<span>Education:</span> MSU'08
				</div>
				<div className="user-info__item user-info__website">
					<span>Web Site:</span> https://microsoft.com
				</div> */}
				<div className="user-info__item">
					<span>Looking for job:</span>{" "}
					{props.profile.lookingForAJob === true
						? props.profile.lookingForAJobDescription
						: "Нет"}
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
