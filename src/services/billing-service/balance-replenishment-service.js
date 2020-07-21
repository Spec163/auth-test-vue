import axios from 'axios'
import authHeader from '../auth-header'

const API_URL = 'http://localhost:8090/rabbitmq/'

class BalanceReplenishmentService {
    replenish(balance) {
        return axios
            .post(API_URL + 'replenish/',
                {
                phoneNumber: balance.phoneNumber,
                money: balance.money
                },
                {headers: authHeader()}
            )
            .then(response => {
                return response
            })
            .catch(function (error) {
                return error.response
            });

    }
}

export default new BalanceReplenishmentService();