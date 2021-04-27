import "./Post.css";

const Post = (props) => {
	return (
		<div className="post-list__item">
			<img
				src="https://via.placeholder.com/50x50"
				className="post-list__item-avatar"
				alt="ava"
			/>
			<div className="post-list__item-text">{props.message}</div>

			<div className="post-list__item-likes">
				Likes: {props.likes}
			</div>
		</div>
	);
};

export default Post;
