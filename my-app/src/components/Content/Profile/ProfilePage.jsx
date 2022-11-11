import React from "react";
import ava from "../../common/defaultAva.png";
import css from "./Profile.module.css";
import StatusContainer from "./Status/StatusContainer";

export default function ProfilePage(props) {

    return <div className={css.profile} >
        <div >
            <img src={props.profileData.photos.large != null  ? props.profileData.photos.large : ava}
                 className={css.ava}/>
        </div>
        <div >

            <h1> {props.profileData.fullName} </h1>
            Статус: <StatusContainer/> <br/>
            Обо мне: {props.profileData.aboutMe} <br/>
            Vk: {props.profileData.contacts.vk} <br/>
            Работа: {props.profileData.lookingForAJobDescription}
                </div>


    </div>
}
