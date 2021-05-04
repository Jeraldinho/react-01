import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { addMessage, addPost, updateNewMessageText, updateNewPostText } from './redux/state.js';

export let rerenderApp = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App 
				state={state}
				addPost={addPost}
				updateNewPostText={updateNewPostText}
				addMessage={addMessage}
				updateNewMessageText={updateNewMessageText}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
