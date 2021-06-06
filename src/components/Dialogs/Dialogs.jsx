import "./Dialogs.css";
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
	let dialogsElements = props.dialogs.map((dialog) => (
		<Dialog name={dialog.name} key={dialog.id} id={dialog.id} />
	));
	let messagesElements = props.messages.map((message) => (
		<Message name={message.name} message={message.message} key={message.id} />
	));

	let messageText = React.createRef();

	let onSendMessage = () => {
		props.sendMessage();
	};

	let onChangeMessageText = () => {
		let text = messageText.current.value;
		props.changeMessageText(text);
	};

	if(!props.isAuth) return <Redirect to={"/login"} />;

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
							value={props.newMessageText}
							ref={messageText}
						/>

						<div className="text-right">
							<button
								type="button"
								onClick={onSendMessage}
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
