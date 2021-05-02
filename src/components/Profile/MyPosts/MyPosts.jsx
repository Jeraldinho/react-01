import "./MyPosts.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
	let postsElements = props.posts.map( post => <Post message={post.messages} likesCount={post.likesCount} /> );

	let postTextarea = React.createRef();
	let addPost = () => {
		let messageText = postTextarea.current.value;
		props.addPost(messageText);
	}
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
					className="post-message"
					ref={postTextarea}
				></textarea>

				<div className="text-right">
					<button onClick={ () => {addPost()}} className="send-post-btn btn">Send</button>
				</div>
			</form>

			<div className="post-list">
				{ postsElements }
			</div>
		</div>
	);
};

export default MyPosts;
