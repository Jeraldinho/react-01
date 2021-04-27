import MyPosts from "./MyPosts/MyPosts";
import "./Profile.css";

const Profile = () => {
	return (
		<div className="profile">
			<div className="avatar">
				<a href="">
					<img src="https://via.placeholder.com/250x300" alt="ava" />
				</a>
			</div>

			<div className="user-info">
				<div className=".user-info__item user-info__name">Jhon Doe</div>
				<div className="user-info__item user-info__birthday">
					<span>Date of Birth:</span> 01.01.1981
				</div>
				<div className="user-info__item user-info__birthday">
					<span>City:</span> New York
				</div>
				<div className="user-info__item user-info__edu">
					<span>Education:</span> MGU'08
				</div>
				<div className="user-info__item user-info__website">
					<span>Web Site:</span> https://microsoft.com
				</div>
			</div>

			<MyPosts />
		</div>
	);
};

export default Profile;
