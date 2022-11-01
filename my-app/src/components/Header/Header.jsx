import React from "react";
import logo from "./logo.svg";
import s from "./Header.module.css";
import css from "./Header.module.css";
import AuthContainer from "../Auth/AuthContainer";

const Header = () => {

    return <header className={s.App_header}>
        <img src={logo} className={s.App_logo} alt="logo"/>
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
            className={s.App_link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
        <div className={css.auth}>
            <AuthContainer/>
        </div>
    </header>
}

export default Header;