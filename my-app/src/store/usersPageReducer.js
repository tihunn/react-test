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

export const follow = (id) => ({type: "follow", userId: id})
export const unfollow = (id) => ({type: "unfollow", userId: id})
export const setUsers = (users) => ({type: "setUsers", users: users})
export const setTotalUsersCount = (totalUsersCount) => ({type: "setTotalUsersCount", totalUsersCount: totalUsersCount})
export const setSelectedPage = (selectedPage) => ({type: "setSelectedPage", selectedPage: selectedPage})
export const toggleIsFetching = (isFetching) => ({type: "toggleIsFetching", isFetching: isFetching})
export const toggleIsDisabled = (isDisabled, userId) => ({type: "toggleDisabled", isDisabled, userId})