import { NavLink } from "react-router-dom";
import "./Dialogs.css";

const Dialog = (props) => {
	let path = "/dialogs/" + props.id;

	return (
		<NavLink to={path} className="dialogs__item">
			{props.name}
		</NavLink>
	);
};

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
