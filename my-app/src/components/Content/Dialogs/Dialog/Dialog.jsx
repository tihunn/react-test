import React from 'react';
import css from "./Dialog.module.css";
import ava from "../../Ava.png";
import {Link} from "react-router-dom";

export default function Dialog(props) {
    return <Link to={props.id}>
        <div>
            <img src={ava} className={css.ava}/>
            {props.name}
        </div>
    </Link>
}