import MyPosts from "./MyPosts/MyPosts";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div className="profile">
			<ProfileInfo />

			<MyPosts posts={props.state.posts} />
		</div>
	);
};

export default Profile;
