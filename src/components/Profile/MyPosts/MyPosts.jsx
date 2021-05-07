import "./MyPosts.css";
import Post from "./Post/Post";
import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "./../../../redux/state";

const MyPosts = (props) => {
	let postsElements = props.posts.map((post) => (
		<Post message={post.messages} likesCount={post.likesCount} />
	));

	let postTextarea = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCreator());
	};

	let onPostChange = () => {
		let text = postTextarea.current.value;
		props.dispatch(updateNewPostActionCreator(text));
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
					onClick={addPost}
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
