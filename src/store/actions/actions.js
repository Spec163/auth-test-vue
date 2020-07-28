import axios from 'axios'
import authHeader from '../../services/auth-header'
// import Balance from '../../models/balance'
// import BalanceReplenishmentService from '../../services/billing-service/balance-replenishment-service'

const API_URL = 'http://localhost:8090/admin/'
// let newBalance = new Balance('', 0)

export  default {
    GET_USERS_INFO_FROM_API({commit}) {
        return axios.get(API_URL + 'users/',
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
        console.log(user_data)
        // console.log('balance::: ', balance)
        // newBalance.phoneNumber = balance.phoneNumber
        // newBalance.money = balance.money
        // console.log('newBalance = ',newBalance)
        // BalanceReplenishmentService.replenish(newBalance)
        //     .then(response => {
        //         console.log('RESPONSE:  ', response.data)
        //     })
        commit('UPDATE_BALANCE_TO_STATE', user_data)
    }
}
