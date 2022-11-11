import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";


let redirectMapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const WithAuthRedirect = (Component) => {
    const Auth = (props) => {
            if (!props.isAuth) return <Navigate to={"/auth/login"}/>
            return <Component {...props}/>
        }
    return connect(redirectMapStateToProps)(Auth);
}

export default WithAuthRedirect