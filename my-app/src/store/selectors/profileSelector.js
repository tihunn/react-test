export const getPreloader = (state) => {
    return state.preloader
}

export const getMyId = (state) => {
    return state.auth.data.id
}

export const getProfile = (state) => {
    return state.profilePage
}