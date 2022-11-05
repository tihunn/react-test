import React from "react";
import {connect} from "react-redux";
import Status from "./Status";
import {setStatus, updateStatus} from "../../../store/profilePageReducer";

const mapStateToProps = (state) => {
    return {status: state.profilePage.status}
}


export default connect(mapStateToProps, {updateStatus, setStatus})(Status)
