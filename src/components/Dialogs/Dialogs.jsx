import "./Dialogs.css";
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	let dialogsElements = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} />);
	let messagesElements = props.state.messages.map(message => <Message name={message.name} message={message.message} />);

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
