import React from 'react';
import s from './NavBar.module.css';

const NavBar = () => {
    return <nav className="nav">


        <div className={s.gavno}>
            profile
        </div>
        <div>
            messages
        </div>
        <div>
            news
        </div>
        <div>
            music
        </div>
        <div>
            setting
        </div>
    </nav>
}

export default NavBar;