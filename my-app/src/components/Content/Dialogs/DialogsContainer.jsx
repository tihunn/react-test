import React from 'react';
import {addMessageCreator, onMessageChangeCreator} from "../../../store/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        stateDialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {
            dispatch(addMessageCreator(text))
        },
        updateTextInState: (text) => {
            dispatch(onMessageChangeCreator(text))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps )(Dialogs)
export default DialogsContainer;

