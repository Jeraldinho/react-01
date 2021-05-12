import "./MyPosts.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
	let postsElements = props.posts.map((post) => (
		<Post message={post.messages} likesCount={post.likesCount} key={post.id} />
	));

	let postTextarea = React.createRef();

	let onAddPost = () => {
		props.addPost();
	};

	let onPostChange = () => {
		let text = postTextarea.current.value;
		props.updateNewPost(text);
	};

	return (
		<div className="my-posts">
			<div className="my-posts__title">My posts</div>
			<textarea
				rows="2"
				className="post-message"
				placeholder="Enter your message"
				onChange={onPostChange}
				value={props.newPostText}
				ref={postTextarea}
			/>

			<div className="text-right">
				<button
					type="button"
					onClick={onAddPost}
					className="send-post-btn btn"
				>
					Send post
				</button>
			</div>

			<div className="post-list">{postsElements}</div>
		</div>
	);
};

export default MyPosts;
