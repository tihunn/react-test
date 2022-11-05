import React from "react";
import {
    getProfile, getStatus, pushPost, updateTextareaPost,
} from "../../../store/profilePageReducer";
import Posts from "./Posts";
import Profile from "./Profile";
import {connect} from "react-redux";
import Preload from "../../common/Preload/Preload";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import WithRouter from "../../hoc/WithRouter";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.yourId
        }
        if (userId) {
            this.props.getProfile(userId)
            this.props.getStatus(userId)
        }
    }

    render() {
        return <>
            {this.props.preloader.isFetching ? <Preload/> : null}
            <Profile profileData={this.props.stateProfilePage.profileData}/>
            <Posts stateProfilePage={this.props.stateProfilePage}
                   pushPost={this.props.pushPost}
                   updateTextareaPost={this.props.updateTextareaPost}/>
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        stateProfilePage: state.profilePage, preloader: state.preloader, yourId: state.auth.data.id,
    }
}

export default compose(
    connect(mapStateToProps, {
        pushPost,
        updateTextareaPost,
        getProfile,
        getStatus,
    }),
    WithRouter,
    WithAuthRedirect,
)(ProfileContainer);

