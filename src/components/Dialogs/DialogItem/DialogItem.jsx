import { NavLink } from "react-router-dom";

const Dialog = (props) => {
	let path = "/dialogs/" + props.id;

	return (
		<NavLink to={path} className="dialogs__item">
			{props.name}
		</NavLink>
	);
};

export default Dialog;