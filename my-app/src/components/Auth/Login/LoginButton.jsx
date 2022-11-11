import React from "react";
import {Navigate, NavLink} from "react-router-dom";
import css from "./LoginButton.module.css"

export default function LoginButton(props) {
    if (props.isAuth) { return <Navigate to={"/profile"}/> }
    return <NavLink to={"/auth/login"}>
    <div className={css.login}>Login</div>
    </NavLink>
}

