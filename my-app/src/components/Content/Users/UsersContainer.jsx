import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followingActionCreator, setUsersActionCreator, unfollowingActionCreator} from "../../../store/usersPageReducer";



let mapStateToProps = (state) => {
    return {
        stateUsersPage: state.usersPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => dispatch(followingActionCreator(id)),
        unfollow: (id) => dispatch(unfollowingActionCreator(id)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
    }
};

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps )(Users);

