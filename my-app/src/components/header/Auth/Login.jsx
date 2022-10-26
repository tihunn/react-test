import React from "react";
import {NavLink} from "react-router-dom";
import css from "./Login.module.css"

export default function Login(props) {
    return <NavLink to={"/auth/login"}>
    <div className={css.login}>Login</div>
    </NavLink>
}