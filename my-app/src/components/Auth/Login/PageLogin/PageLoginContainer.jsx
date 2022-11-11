import React from "react";
import PageLogin from "./PageLogin";
import {connect} from "react-redux";
import {postLogin} from "../../../../store/authReducer";





class PageLoginContainer extends React.Component {
    validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = "Required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }
        if (!values.password) {
            errors.password = "Required";
        } else if (/^[а-яё]/i.test(values.password)
        ) {
            errors.password = "used cyrillic";
        }
        return errors;
    }

    render() {
    return <PageLogin  {...this.props} onSubmit={this.onSubmit} validate={this.validate}/>
}}

let mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}

export default connect(mapStateToProps, {postLogin})(PageLoginContainer)