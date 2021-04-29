import "./Dialogs.css";
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
	let dialogs = [
		{id: 1, name: "Natan"},
		{id: 2, name: "Joe"},
		{id: 3, name: "Brandan"},
	]

	let messages = [
		{id: 1, name: "Natan", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat reprehenderit, veniam nesciunt recusandae quaerat architecto unde magni sint voluptates distinctio excepturi voluptatum autem velit tenetur suscipit? Hic, ratione beatae."},
		{id: 2, name: "Joe", message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
	]

	let dialogsElements = dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} />);
	let messagesElements = messages.map(message => <Message name={message.name} message={message.message} />);

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
