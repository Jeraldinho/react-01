import "./MyPosts.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
	let postsElements = props.posts.map( post => <Post message={post.messages} likes={post.likes} /> );

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
				{ postsElements }
			</div>
		</div>
	);
};

export default MyPosts;
