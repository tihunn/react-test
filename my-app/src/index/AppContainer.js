import React from "react";
import {connect} from "react-redux";
import App from "./App";
import Preload from "../components/common/Preload/Preload";
import {initialize} from "../store/authReducer";

class AppContainer extends React.Component {
    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if (!this.props.isInitialized) {return <Preload/>}
        return (
            <App {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isInitialized: state.auth.isInitialized
    }
}

export default connect(mapStateToProps, {initialize})(AppContainer)
