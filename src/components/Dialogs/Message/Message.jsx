const Message = (props) => {
	return (
		<div className="dialogs__message">
			<img
				src="https://via.placeholder.com/50x50"
				className="dialogs__message-avatar"
				alt="ava"
			/>

			<div className="dialogs__message-text">
				<div className="dialogs__message-user-name">{props.name}</div>
				{props.message}
			</div>
		</div>
	);
};

export default Message;