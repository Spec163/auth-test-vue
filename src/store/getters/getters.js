export default {
    GET_USER_TOKEN(state) {
        return state.auth.user.token
    },
    GET_USER_ROLE(state) {
        return state.auth.user.role
    },
    IS_ADMIN_ROLE(state) {
        return state.auth.user.role === 'ROLE_ADMIN'
    },
    GET_USER_IS_ACTIVE(state) {
        return state.auth.status.loggedIn
    },
    // сделать сортироваку
    GET_USERS_INFO(state) {
        return state.users
    },
    SORTED_TARIFFS: state => (state.tariffs || []).sort((a, b) => -(a.id - b.id))

}