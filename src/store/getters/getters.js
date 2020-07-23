export default {
    GET_USER_TOKEN(state) {
        return state.auth.user.token
    },
    GET_USER_ROLE(state) {
        return state.auth.user.role
    },
    GET_USER_IS_ACTIVE(state) {
        return state.auth.status.loggedIn
    },
    GET_USERS_INFO(state) {
        return state.users
    }
}