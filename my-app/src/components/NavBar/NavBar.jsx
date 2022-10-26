import React from 'react';
import css from './NavBar.module.css';
import {Link} from "react-router-dom";

export default function NavBar () {
    return <nav className="nav">


        <div className={css.gavno}>
            <Link to="/profile"> Profile</Link>
        </div>
        <div>
            <Link to="/dialog"> Dialog</Link>
        </div>
        <div>
            <Link to="/users"> Users</Link>
        </div>
        <div>
            <Link to="/news"> News</Link>
        </div>
        <div>
            <Link to="/music"> Music</Link>
        </div>
        <div>
            <Link to="/setting"> Setting</Link>
        </div>
    </nav>
}