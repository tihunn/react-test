import React from 'react';
import {connect} from "react-redux";
import Auth from "./Auth";
import Login from "./Login";
import axios from "axios";
import {setAuthData, setAvaAndName} from "../../../store/authReducer";


class AuthContainer extends React.Component {
    componentDidMount() {

        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true} ).then(response => {
            this.props.setAuthData(response.data.data);
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`).then(response => {
                this.props.setAvaAndName(response.data.photos.small, response.data.fullName);
            })
        })
    }


    render() {
        return <>
            {this.props.stateAuth.isAuth ? <Auth ava={this.props.stateAuth.ava} name={this.props.stateAuth.name}/> :
                <Login/>}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        stateAuth: state.auth,
    }
}

export default connect(mapStateToProps, {setAuthData, setAvaAndName, })(AuthContainer)
