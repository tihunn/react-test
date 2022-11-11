import React from "react";
import {connect} from "react-redux";
import Authorized from "./Authorized/Authorized";
import {logOut} from "../../store/authReducer";
import LoginContainer from "./Login/LoginButtonContainer";


class IsAuthContainer extends React.Component {
    componentDidMount() {
    }


    render() {
        return <div>
            {this.props.stateAuth.isAuth ?
                <Authorized ava={this.props.stateAuth.ava} name={this.props.stateAuth.name} logOut={this.props.logOut}/> :
                <LoginContainer/>}
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        stateAuth: state.auth,
    }
}

export default connect(mapStateToProps, {logOut})(IsAuthContainer)
