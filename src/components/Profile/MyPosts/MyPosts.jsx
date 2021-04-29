import "./MyPosts.css";
import Post from "./Post/Post";

const MyPosts = () => {
	let postsData = [
		{messages: "First post", likes: 14},
		{messages: "Second post", likes: 20}
	]

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
				<Post message={postsData[0].messages} likes={postsData[0].likes} />
				<Post message={postsData[1].messages} likes={postsData[1].likes} />
			</div>
		</div>
	);
};

export default MyPosts;
