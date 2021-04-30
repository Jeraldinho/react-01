import "./Dialogs.css";
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	let dialogsElements = props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} />);
	let messagesElements = props.messages.map(message => <Message name={message.name} message={message.message} />);

	return (
		<div className="dialogs">
			<div className="dialogs__title">Dialogs</div>

			<div className="dialogs__wrapper">
				<div className="dialogs__items">
					{dialogsElements}
				</div>

				<div className="dialogs__messages">
					{messagesElements}
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
