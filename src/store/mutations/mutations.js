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
    },

    SET_TARIFFS_TO_STATE: (state, tariffs) => {
        state.tariffs = tariffs;
    },

    // ADD_TARIFF_TO_STATE(state, tariff) {
    //     state.tariffs = [
    //         ...state.tariffs,
    //         tariff
    //     ]
    // },
    // UPDATE_TARIFF_TO_STATE(state, tariff) {
    //     const updateIndex = state.tariffs.findIndex(item => item.id === tariff.id)
    //
    //     state.tariffs = [
    //         ...state.tariffs.slice(0, updateIndex),
    //         tariff,
    //         ...state.tariffs.slice(updateIndex + 1)
    //     ]
    // },
    // REMOVE_TARIFF_MUTATION(state, tariff) {
    //     const deletionIndex = state.tariffs.findIndex(item => item.id === tariff.id)
    //
    //     if (deletionIndex > -1) {
    //         state.tariffs = [
    //             ...state.tariffs.slice(0, deletionIndex),
    //             ...state.tariffs.slice(deletionIndex + 1)
    //         ]
    //     }
    // },

}