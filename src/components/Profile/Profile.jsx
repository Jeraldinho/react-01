import MyPosts from "./MyPosts/MyPosts";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let posts = [
	{messages: "First post", likes: 14},
	{messages: "Second post", likes: 20},
]

const Profile = () => {
	return (
		<div className="profile">
			<ProfileInfo />

			<MyPosts posts={posts} />
		</div>
	);
};

export default Profile;
