import React from "react";
import {addMessage, onMessageChange} from "../../../store/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";

let mapStateToProps = (state) => {
    return {
        stateDialogsPage: state.dialogsPage,
    }
}


export default compose(
    connect(mapStateToProps, {addMessage, onMessageChange}),
    WithAuthRedirect,
)(Dialogs)
