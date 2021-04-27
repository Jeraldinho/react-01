import "./MyPosts.css";
import Posts from "./Post/Post";

const MyPosts = () => {
	return (
		<div className="my-posts">
			<div className="my-posts__title">My posts</div>
			<form action="" className="write-post-form">
				<textarea
					name="post-massage"
					id=""
					cols="30"
					rows="2"
					placeholder="Your news"
				></textarea>

				<div className="text-right">
					<button className="send-post-btn btn">Send</button>
				</div>
			</form>

			<div className="post-list">
				<Posts />
			</div>
		</div>
	);
};

export default MyPosts;