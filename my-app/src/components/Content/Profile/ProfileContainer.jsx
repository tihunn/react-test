import React from "react";
import {
    getProfile,
    pushPost,
    updateTextareaPost,
} from "../../../store/profilePageReducer";
import Posts from "./Posts";
import Profile from "./Profile";
import {connect} from "react-redux";
import {useParams, useLocation, useNavigate} from "react-router-dom";
import Preload from "../../common/Preload/Preload";


class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        let userId = this.props.router.params.userId
        if (!userId) {userId = 2}
        this.props.getProfile(userId)
    }
    render() {
        return <>
            {this.props.preloader.isFetching ? <Preload/> : null}
            <Profile profileData = {this.props.stateProfilePage.profileData}/>
            <Posts stateProfilePage={this.props.stateProfilePage}
                   pushPost={this.props.pushPost}
                   updateTextareaPost={this.props.updateTextareaPost}/>
            </>
    }
}

function withRouter(Component) {
    return function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {stateProfilePage: state.profilePage,
        preloader: state.preloader
    }
}

let WithUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    pushPost,
    updateTextareaPost,
    getProfile,
})(WithUrlProfileContainer);
