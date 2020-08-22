import axios from 'axios'
import authHeader from '../../services/auth-header'
// import Balance from '../../models/balance'
// import BalanceReplenishmentService from '../../services/billing-service/balance-replenishment-service'
import TariffService from '../../services/requests/tariff-service'
// import BillingService from '../../services/billing-service/billing-service'
import UserService from '../../services/requests/user-service'

const API_URL = 'http://localhost:8090/'
// let newBalance = new Balance('', 0)

export default {
    GET_USERS_INFO_FROM_API({commit}) {
        return axios.get(API_URL + 'admin/users/',
            {headers: authHeader()})
            .then((users) => {
                commit('SET_USERS_INFO_TO_STATE', users.data);
                return users;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
    },
    UPDATE_USERS_INFO_BALANCE({commit}, user_data) {
        commit('UPDATE_BALANCE_TO_STATE', user_data)
    },

    GET_TARIFFS_FROM_API({commit}) {
        return axios.get(API_URL + 'profile/tariff',
            {headers: authHeader()})
            .then((tariffs) => {
                commit('SET_TARIFFS_TO_STATE', tariffs.data);
                return tariffs;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
    },

    // async GET_USER({commit}) {
    //     const userData = await UserService.getUserInfo()
    // },

    ADD_TARIFF_ACTION({commit, state}, tariff) {
        TariffService.addTariff(tariff).then(response => {
            console.log('Add response: ', response)

            const result = response.data
            const index = state.tariffs.findIndex(item => item.id === result.id)

            if (index > -1) {
                commit('UPDATE_TARIFF_MUTATION', result)
            } else {
                commit('ADD_TARIFF_MUTATION', result)
            }
        })


    },
    UPDATE_TARIFF_ACTION({commit}, tariff) {
        TariffService.updateTariff(tariff).then(
            response => {
                console.log('Update response:', response)
                commit('UPDATE_TARIFF_MUTATION', response.data)
            }
        )

    },

    async REMOVE_TARIFF_ACTION({commit}, tariff) {
        const result = await TariffService.removeTariff(tariff.id)

        console.log('Result: ', result)

        if (result.status === 200) {
            commit('REMOVE_TARIFF_MUTATION', tariff)
        }
    },

    /*async CHANGE_ACCOUNT_TARIFF_ACTION({commit}, tariff) {
        const result = await BillingService.changeUserTariff(tariff.id);

        if (result.status === 200) {
            commit('CHANGE_ACCOUNT_TARIFF_MUTATION', tariff)
        }
    },*/

    GET_ACCOUNT_INFORMATION_FROM_API({commit},) {
        UserService.getAccountInformation().then(
            response => {
                commit('SET_ACCOUNT_INFORMATION_TO_STATE', response.data)
            }
        )
    }

}
