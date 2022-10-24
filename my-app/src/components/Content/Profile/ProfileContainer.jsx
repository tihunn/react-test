import React from 'react';
import {
    pushPost,
    setProfile,
    updateTextareaPost,
} from "../../../store/profilePageReducer";
import {toggleIsFetching,} from  "../../../store/preloaderReducer";
import Posts from "./Posts";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";

class ProfileApiContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`).then( response => {
            this.props.toggleIsFetching(false);
            this.props.setProfile(response.data)
        })

    }
    render() {
        return <>
            <Profile profileData = {this.props.stateProfilePage.profileData}/>
            <Posts stateProfilePage={this.props.stateProfilePage}
                   pushPost={this.props.pushPost}
                   updateTextareaPost={this.props.updateTextareaPost}/>
            </>
    }
}


let mapStateToProps = (state) => {
    return {stateProfilePage: state.profilePage}
}



const ProfileContainer = connect(mapStateToProps, {
    pushPost,
    updateTextareaPost,
    setProfile,
    toggleIsFetching,
})(ProfileApiContainer);
export default ProfileContainer;