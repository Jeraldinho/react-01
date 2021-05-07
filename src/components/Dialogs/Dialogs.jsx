import "./Dialogs.css";
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { addMessageActionCreator, apdateNewMessageTextActionCreator } from "./../../redux/state";

const Dialogs = (props) => {
	let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
		<Dialog name={dialog.name} id={dialog.id} />
	));
	let messagesElements = props.dialogsPage.messages.map((message) => (
		<Message name={message.name} message={message.message} />
	));

	let messageText = React.createRef();

	let sendMessage = () => {
		props.dispatch(addMessageActionCreator());
	};

	let onChangeMessageText = () => {
		let text = messageText.current.value;
		props.dispatch(apdateNewMessageTextActionCreator(text));
	};

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
							rows="2"
							placeholder="Enter your message"
							onChange={onChangeMessageText}
							value={props.dialogsPage.newMessageText}
							ref={messageText}
						/>

						<div className="text-right">
							<button
								type="button"
								onClick={sendMessage}
								className="send-message-btn btn"
							>
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
