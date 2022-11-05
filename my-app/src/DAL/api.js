import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "8d5a188f-d975-4b0c-8986-ccb6a4319e52"
    }
})

export const usersAPI = {
    getUsers(selectedPage = 1, pageSize = 10) {
        return instance.get(`users?page=${selectedPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
}

export const profileAPI = {
    getProfile(userId = 2) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    getStatus(userId = 2) {
        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data
        })
    },
    updateStatus(newStatus) {
        return instance.put(`profile/status/`, {status: newStatus})
    }
}

export const authAPI = {
    isAuth() {
        return instance.get("auth/me").then(response => {
            return response.data
        })
    },
    getAvaAndName(userId) {
        return instance.get(`profile/${userId}`)
    }
}