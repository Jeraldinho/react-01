import React from "react";
import { addMessageActionCreator, apdateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
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
};

export default DialogsContainer;
