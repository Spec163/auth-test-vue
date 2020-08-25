export default {
    SET_USERS_INFO_TO_STATE(state, users) {
        state.users = users;
    },
    UPDATE_BALANCE_TO_STATE(state, user_data) {
        const updateIndex = state.users.findIndex(item => item.id === user_data.id)
        state.users = [
            ...state.users.slice(0, updateIndex),
            user_data,
            ...state.users.slice(updateIndex + 1)
        ]
    },

    SET_TARIFFS_TO_STATE(state, tariffs) {
        state.tariffs = tariffs;
    },


    REMOVE_TARIFF_MUTATION(state, tariff) {
        const deletionIndex = state.tariffs.findIndex(item => item.id === tariff.id)

        if (deletionIndex > -1) {
            state.tariffs = [
                ...state.tariffs.slice(0, deletionIndex),
                ...state.tariffs.slice(deletionIndex + 1)
            ]
        }
    },
    /*CHANGE_ACCOUNT_TARIFF_MUTATION(state, tariff) {
        console.log('Tariff in Mutation: ', tariff)
        state.accountInfo[0].title = tariff.title
        state.accountInfo[0].price = tariff.price
        state.accountInfo[0].call = tariff.call
        state.accountInfo[0].sms = tariff.sms
        state.accountInfo[0].internet = tariff.internet
        state.accountInfo[0].balance = state.accountInfo.balance - tariff.price

        console.log('Acc: ', state.accountInfo)
    },*/

    SET_ACCOUNT_INFORMATION_TO_STATE(state, accountInfo) {
        state.accountInfo = accountInfo
    },

    ADD_TARIFF_MUTATION(state, tariff) {
        state.tariffs = [
            ...state.tariffs,
            tariff
        ]
    },
    UPDATE_TARIFF_MUTATION(state, tariff) {
        const updateIndex = state.tariffs.findIndex(item => item.id === tariff.id)

        state.tariffs = [
            ...state.tariffs.slice(0, updateIndex),
            tariff,
            ...state.tariffs.slice(updateIndex + 1)
        ]
    },

    SET_UPDATED_ACCOUNT_BALANCE_TO_STATE(state, balance) {
        state.accountInfo.balance = parseInt(state.accountInfo.balance) + parseInt(balance.money)
        console.log('New Balance:: ', state.accountInfo.balance)
    }
}