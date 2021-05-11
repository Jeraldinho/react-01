import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

/* const MyPostsContainer = (props) => {
	let state = props.store.getState();

	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	};

	let onPostChange = (text) => {
		props.store.dispatch(updateNewPostActionCreator(text));
	};

	return (
		<MyPosts
			addPost={addPost}
			updateNewPost={onPostChange}
			posts={state.profilePage.posts}
			newPostText={state.profilePage.newPostText}
		/>
	);
}; */

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator());
		},
	
		updateNewPost: (text) => {
			dispatch(updateNewPostActionCreator(text));
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
