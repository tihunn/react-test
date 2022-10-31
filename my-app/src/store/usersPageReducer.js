import {usersAPI} from "../DAL/api";

let initialState = {
    usersData: [],
    totalUsersCount: 1,
    selectedPage: 1,
    pageSize: 10,
    isFetching: false,
    isDisabled: [],
};

export let usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "follow":
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (action.userId === user.id) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case  "unfollow":
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (action.userId === user.id) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case "setUsers":
            return {
                ...state,
                usersData: [...action.users]
            }
        case "setTotalUsersCount":
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        case "setSelectedPage":
            return {
                ...state,
                selectedPage: action.selectedPage,
            }
        case "toggleIsFetching":
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case "toggleDisabled":
            return {
                ...state,
                isDisabled: action.isDisabled ?
                    [...state.isDisabled, action.userId] :
                    state.isDisabled.filter(id => id != action.userId)
            }
    }
    return state
}

const followSuccess = (id) => ({type: "follow", userId: id})
const unfollowSuccess = (id) => ({type: "unfollow", userId: id})
const setUsers = (users) => ({type: "setUsers", users: users})
const setTotalUsersCount = (totalUsersCount) => ({type: "setTotalUsersCount", totalUsersCount: totalUsersCount})
const setSelectedPage = (selectedPage) => ({type: "setSelectedPage", selectedPage: selectedPage})
const toggleIsFetching = (isFetching) => ({type: "toggleIsFetching", isFetching: isFetching})
const toggleIsDisabled = (isDisabled, userId) => ({type: "toggleDisabled", isDisabled, userId})

export const follow = (userId) => (dispatch) => {
    dispatch( toggleIsFetching(true) );
    dispatch( toggleIsDisabled(true, userId) );
    usersAPI.follow(userId).then(response => {
        dispatch( toggleIsFetching(false) );
        dispatch( toggleIsDisabled(false, userId) );
        if (response.data.resultCode === 0) {
            dispatch( followSuccess(userId) );
        }
    });
}

export const unfollow = (userId) => (dispatch) => {
    dispatch( toggleIsFetching(true) );
    dispatch( toggleIsDisabled(true, userId) );
    usersAPI.unfollow(userId).then(response => {
        dispatch( toggleIsFetching(false) );
        dispatch( toggleIsDisabled(false, userId) );
        if (response.data.resultCode === 0) {
            dispatch( unfollowSuccess(userId) );
        }
    });
}

export const getUsers = (selectedPage, pageSize) => (dispatch) => {
    dispatch( setSelectedPage(selectedPage) );
    dispatch( toggleIsFetching(true) );
    usersAPI.getUsers(selectedPage, pageSize).then(data => {
        dispatch( toggleIsFetching(false) );
        dispatch( setUsers(data.items) );
        dispatch( setTotalUsersCount(data.totalCount) );
    });
}