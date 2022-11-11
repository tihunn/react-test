import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Navigate} from "react-router-dom";


export default class PageLogin extends React.Component {

    onSubmit = ( values, { setSubmitting } ) => {
        this.props.postLogin(values);
        setSubmitting(false);
    }

    render() {
        if (this.props.isAuth) { return <Navigate to={"/profile"}/> }
        return <Formik
            initialValues={{email: '', password: ''}}
            validate={this.props.validate}
            onSubmit={this.onSubmit}
        >
            {({isSubmitting}) => (
                <Form>
                    <div>Email</div>
                    <Field type="email" name="email"/>
                    <ErrorMessage name="email" component="div"/> <br/>
                    <div>Password</div>
                    <Field type="password" name="password"/>
                    <ErrorMessage name="password" component="div"/><br/>
                    remember me
                    <Field type="checkbox" name="rememberMe"/> <br/>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    }
}