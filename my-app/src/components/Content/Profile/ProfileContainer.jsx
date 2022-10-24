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
import {useParams, useLocation, useNavigate} from "react-router-dom";
import Preload from "../../common/Preload/Preload";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {userId = 2}
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/` + userId).then( response => {
            this.props.toggleIsFetching(false);
            this.props.setProfile(response.data)
        })

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
    setProfile,
    toggleIsFetching,

})(WithUrlProfileContainer);
