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
	return (
		<div className="dialogs">
			<div className="dialogs__title">Dialogs</div>

			<div className="dialogs__wrapper">
				<div className="dialogs__items">
					<Dialog name="Natan" id="1" />
					<Dialog name="Joe" id="2" />
					<Dialog name="Brandan" id="3" />
				</div>

				<div className="dialogs__messages">
					<Message
						name="Natan"
						message="Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Quod placeat reprehenderit, veniam nesciunt
					recusandae quaerat architecto unde magni sint
					voluptates distinctio excepturi voluptatum autem
					velit tenetur suscipit? Hic, ratione beatae."
					/>

					<Message
						name="Joe"
						message="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
					/>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
