import React from "react";
import {connect} from "react-redux";
import Auth from "./Auth";
import Login from "./Login";
import {setAuthData, setAvaAndName} from "../../../store/authReducer";
import {authAPI} from "../../../DAL/api";


class AuthContainer extends React.Component {
    componentDidMount() {

        authAPI.isAuth().then(data => {
            this.props.setAuthData(data.data);
            if (data.resultCode === 0) {
                authAPI.getAvaAndName(data.data.id).then(response => {
                    this.props.setAvaAndName(response.data.photos.small, response.data.fullName);
                })
            }
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

export default connect(mapStateToProps, {setAuthData, setAvaAndName,})(AuthContainer)
