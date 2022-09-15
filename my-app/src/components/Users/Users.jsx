import React from "react";
import User from "./User/User";

export default function Users(props) {
    let elementUser = props.stateUsersPage.usersData.map(user => <User key={user.id}
                                                                       id={user.id}
                                                                       firstName={user.firstName}
                                                                       lastname={user.lastName}
                                                                       ava={user.ava}
                                                                       following={user.following}
                                                                       follow2={props.follow2}
                                                                       unfollow={props.unfollow}
                                                                       />);

    return <div> {elementUser} </div>
};