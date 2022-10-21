let initialState = {
    usersData: [],
    totalUsersCount: 0,
    selectedPage: 1,
    pageSize: 10
};

    export let usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "follow":
            return {
                ...state,
                usersData: state.usersData.map(user => {
                 if (action.userId === user.id) {
                     return {...user, followed: true}
                 } return user })
        }
        case  "unfollow":
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (action.userId === user.id) {
                        return {...user, followed: false}
                    } return user })
            }
        case "setUsers":
            return {
                ...state,
                usersData: [...action.users]
            }
        case "setTotalUsersCount":
            return {
                ...state,
                totalUsersCount:  action.totalUsersCount,
            }
        case "setSelectedPage":
            return {
                ...state,
                selectedPage:  action.selectedPage,
            }
    }
    return state
}

export const followingActionCreator = (id) => ({type: "follow", userId: id})
export const unfollowingActionCreator = (id) => ({type: "unfollow", userId: id})
export const setUsersActionCreator = (users) => ({type: "setUsers", users: users})
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({type: "setTotalUsersCount", totalUsersCount: totalUsersCount})
export const setSelectedPageActionCreator = (selectedPage) => ({type: "setSelectedPage", selectedPage: selectedPage})
