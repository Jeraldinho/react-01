import "./Dialogs.css";
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
	let dialogsElements = props.state.dialogs.map((dialog) => (
		<Dialog name={dialog.name} id={dialog.id} />
	));
	let messagesElements = props.state.messages.map((message) => (
		<Message name={message.name} message={message.message} />
	));

	let messageText = React.createRef();

	let sendMessage = () => {
		let text = messageText.current.value;
		alert(text);
	}

	return (
		<div className="dialogs">
			<div className="dialogs__title">Dialogs</div>

			<div className="dialogs__wrapper">
				<div className="dialogs__items">{dialogsElements}</div>

				<div className="dialogs__messages">
					{messagesElements}

					<form action="" className="dialogs__messages-form">
						<textarea
							name="post-massage"
							id=""
							cols="30"
							rows="2"
							placeholder="Enter your message"
							ref={messageText}
						></textarea>

						<div className="text-right">
							<button onClick={sendMessage} className="send-message-btn btn">
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
