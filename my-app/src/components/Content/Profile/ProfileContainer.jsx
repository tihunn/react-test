import React from 'react';
import {newPostPushCreator, updateTextareaPostCreator} from "../../../store/postPageReducer";
import Profile from "./Profile";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {stateProfilePage: state.profilePage}
}

let mapDispatchToProps = (dispatch) => {
    return {
        pushPost: () => dispatch(newPostPushCreator()),
        postChange: (body) => dispatch(updateTextareaPostCreator(body)),
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ProfileContainer;