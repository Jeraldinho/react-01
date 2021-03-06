import { connect } from "react-redux";
import { compose } from "redux";
import {
	addMessageActionCreator,
	apdateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";

/* const DialogsContainer = (props) => {
	let state = props.store.getState();

	let onSendMessage = () => {
		props.store.dispatch(addMessageActionCreator());
	};

	let onChangeMessageText = (text) => {
		props.store.dispatch(apdateNewMessageTextActionCreator(text));
	};

	return (
		<Dialogs
			sendMessage={onSendMessage}
			changeMessageText={onChangeMessageText}
			dialogs={state.dialogsPage.dialogs}
			messages={state.dialogsPage.messages}
			newMessageText={state.dialogsPage.newMessageText}
		/>
	);
}; */

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		newMessageText: state.dialogsPage.newMessageText,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(addMessageActionCreator());
		},

		changeMessageText: (text) => {
			dispatch(apdateNewMessageTextActionCreator(text));
		},
	};
};

compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);
