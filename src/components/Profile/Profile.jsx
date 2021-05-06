import MyPosts from "./MyPosts/MyPosts";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div className="profile">
			<ProfileInfo />

			<MyPosts 
				posts={props.profilePage.posts}
				newPostText={props.profilePage.newPostText}
				dispatch={props.dispatch}
			/>
		</div>
	);
};

export default Profile;
