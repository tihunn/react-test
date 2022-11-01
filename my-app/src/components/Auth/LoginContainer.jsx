import React from "react";
import {connect} from "react-redux";
import Login from "./Login";


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {})(Login)
