let initialState = {
    usersData: []
};

    export let usersPageReducer = (state = initialState, action) => {
    debugger;
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
                usersData: [...state.usersData, ...action.users]
            }
    }
    return state
}

export const followingActionCreator = (id) => ({type: "follow", userId: id})
export const unfollowingActionCreator = (id) => ({type: "unfollow", userId: id})
export const setUsersActionCreator = (users) => ({type: "setUsers", users: users})