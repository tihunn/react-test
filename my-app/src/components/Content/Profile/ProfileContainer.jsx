import React from "react";
import {
    requestProfile, requestStatus, pushPost, updateTextareaPost,
} from "../../../store/profilePageReducer";
import Posts from "./Posts/Posts";
import ProfilePage from "./ProfilePage";
import {connect} from "react-redux";
import Preload from "../../common/Preload/Preload";
import WithAuthRedirect from "../../Auth/WithAuthRedirect/WithAuthRedirect";
import {compose} from "redux";
import WithRouter from "../../hoc/WithRouter";
import {getMyId, getPreloader, getProfile} from "../../../store/selectors/profileSelector";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.myId
        }
        if (userId) {
            this.props.requestProfile(userId)
            this.props.requestStatus(userId)
        }
    }

    render() {
        return <>
            {this.props.preloader.isFetching ? <Preload/> : null}
            <ProfilePage profileData={this.props.profile.profileData}/>
            <Posts stateProfilePage={this.props.profile}
                   pushPost={this.props.pushPost}
                   />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        preloader: getPreloader(state),
        myId: getMyId(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        pushPost,
        updateTextareaPost,
        requestProfile,
        requestStatus,
    }),
    WithRouter,
    WithAuthRedirect,
)(ProfileContainer);

