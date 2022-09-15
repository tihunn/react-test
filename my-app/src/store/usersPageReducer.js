let initialState = {
    usersData: [
        {   id: 1,
            firstName: "Dima",
            lastName: 'Kurduk',
            status: "like gonjubass",
            following: true,
            location: {country: "Russia", sity: "Mahachkala"},
            ava: 'https://sun2.userapi.com/sun2-10/s/v1/ig2/uOcBPYk6A3zR2WO36KQp8ptIKozKqj2aoOYWD2_WX3-s1NgzMKv7xU61oNHkvXT4ZNwZRnabHPeBAIBVHst5JbCB.jpg?size=50x50&quality=96&crop=120,240,960,960&ava=1'
        }, {id: 2,
            firstName: "Sasha",
            lastName: 'Maymi',
            status: "dump",
            following: false,
            location: {country: "England", sity: "london"},
            ava: 'https://yandex-images.clstorage.net/5WKUz1169/4c13b5lh7p/mT-_mgQhREei-EpV_tjVuDqKf57NwagwAk86WkMUt-cFIRHQLq9UVd_7NdrzWtmrzGso2c6Yxp2F7L02PIgCsdtq-9YfPwtNo_hJWPfD3L8xgnCWydWvMloYIQ8bVLmyH2ZO1xOVJCetxx6423up0oQ8fo-d0NyNkdfbO1zDet-VLLi6PysDWrTgM2bT5NKfIOV_rsmYpWwAaEYvB2_ujS9kN6otqCMTp-wUudZMkMulH2mbk8yxrIjr52FF0l3EqS2HnjM5OUSR2StlztnhsQPyc7jRo7VbJ2RxBCdv0aEgdTWUCpwQHqr2JoXbWIbLuxZXjLLslLmS8PdIaMtm7JsTr4M1Kw9liNgxXsns2o4E4km5_YaHdxpYYggbYM20DkE-gyqFDDeA1CWd2l2W5oUuRqKc_5umj-zSdVrKaNuoOr-YLBMzbKnpB2TL4vyeNcJyuduBrlUsQXAdOUDamRFUBrcFsBUcneA6jedEkfinFX2hj-maqrfPwmt44EX4qRacvzoeOke15AVOztTdlyPgXbn0vq9oKUlPJCVy67wyQDmkBKUDCYXvBaboTYfNsBZqrr3dtrSjyfVJSvte5a0ZnqggMxBusu8jVcrvwrox3Wa4ybalewlmbwEyZsiALXEirCC-FxWt2gO6wGWKzpY-dayA8ZuIo_j9VU31VuSeFKyyGQgiX7ToFnTz5uWSMcJ7rNOhm0w7akwlL03wgSp3ObY8shATjukimNl6qf2rNUimk_2XvpLSxmxo8VDFpC28kAYqJk2s4Q5-0czjiRTPfLDupa9mIkdFLyxDzLwQXgmOAbgADrbrAZP6Wo_EtylCr7PbvrOc_MlWQcl32Ywbuq4ANwdAqeIDQevx54wR7Fayy6u4fxJIYhslYsORA1ckkSO6EgOd0AKL9HW35ZgOao2P-LOevMLtSmrrdd6DMp2ZBDAzWLT4E1XxwNyVKdx_jcGEkGghZGUMMUY'
        }, {id: 3,
            firstName: "Vika",
            lastName: 'Man',
            status: "i'm girl",
            following: true,
            location: {country: "uzbekistan", sity: "Moskov"},
            ava: 'https://tlgrm.ru/_/stickers/30d/e61/30de61a2-2668-41e0-9cca-3431ab397d3f/7.jpg',
        },
    ]
}; initialState.usersData.map(user => user);

export let usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "follow":
            return {
                ...state,
                usersData: state.usersData.map(user => {
                 if (action.userId === user.id) {
                     return {...user, following: true}
                 } return user })
        }
        case  "unfollow":
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (action.userId === user.id) {
                        return {...user, following: false}
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

