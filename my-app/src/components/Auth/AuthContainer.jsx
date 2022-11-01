import React from "react";
import {connect} from "react-redux";
import Auth from "./Auth";
import Login from "./Login";
import {getAuthData} from "../../store/authReducer";


class AuthContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthData()
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

export default connect(mapStateToProps, {getAuthData})(AuthContainer)
