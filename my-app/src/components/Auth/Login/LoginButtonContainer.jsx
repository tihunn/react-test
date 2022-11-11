import React from "react";
import {connect} from "react-redux";
import LoginButton from "./LoginButton";


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {})(LoginButton)
