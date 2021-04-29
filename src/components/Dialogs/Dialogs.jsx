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
	let dialogsData = [
		{id: 1, name: "Natan"},
		{id: 2, name: "Joe"},
		{id: 3, name: "Brandan"},
	]

	let messagesData = [
		{id: 1, name: "Natan", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat reprehenderit, veniam nesciunt recusandae quaerat architecto unde magni sint voluptates distinctio excepturi voluptatum autem velit tenetur suscipit? Hic, ratione beatae."},
		{id: 2, name: "Joe", message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
	]

	return (
		<div className="dialogs">
			<div className="dialogs__title">Dialogs</div>

			<div className="dialogs__wrapper">
				<div className="dialogs__items">
					<Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
					<Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
					<Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
				</div>

				<div className="dialogs__messages">
					<Message name={messagesData[0].name} message={messagesData[0].message} />
					<Message name={messagesData[1].name} message={messagesData[1].message} />
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
