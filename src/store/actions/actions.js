import axios from 'axios'
import authHeader from '../../services/auth-header'
// import Balance from '../../models/balance'
// import BalanceReplenishmentService from '../../services/billing-service/balance-replenishment-service'

const API_URL = 'http://localhost:8090/'
// let newBalance = new Balance('', 0)

export  default {
    GET_USERS_INFO_FROM_API({commit}) {
        return axios.get(API_URL + 'admin/users/',
            { headers: authHeader() })
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
            { headers: authHeader() })
            .then((tariffs) => {
                commit('SET_TARIFFS_TO_STATE', tariffs.data);
                return tariffs;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
    },
}
