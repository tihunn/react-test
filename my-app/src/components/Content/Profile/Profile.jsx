import React from "react";
import ava from "../../common/defaultAva.png";
import css from "./Profile.module.css";
import StatusContainer from "./StatusContainer";

export default function Profile(props) {

    return <div className={css.profile} >
        <div >
            <img src={props.profileData.photos.large != null  ? props.profileData.photos.large : ava}
                 className={css.ava}/>
        </div>
        <div >

            <h1> {props.profileData.fullName} </h1>
            <StatusContainer/>
            {props.profileData.aboutMe} <br/>
            {props.profileData.contacts.vk} <br/>
            Работа: {props.profileData.lookingForAJobDescription}
                </div>


    </div>
}
