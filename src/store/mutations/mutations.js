export default {
    SET_USERS_INFO_TO_STATE: (state, users) => {
        state.users = users;
    },
    UPDATE_BALANCE_TO_STATE: (state, user_data) => {
        const updateIndex = state.users.findIndex(item => item.id === user_data.id)
        state.users = [
            ...state.users.slice(0, updateIndex),
            user_data,
            ...state.users.slice(updateIndex + 1)
        ]
    }
}