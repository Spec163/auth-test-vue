import axios from 'axios'
import authHeader from '../auth-header'

const API_URL = 'http://localhost:8090/rabbitmq/'

class BillingService {
    expenses(maxServiceCost) {
        return axios
            .post(API_URL + 'expenses', {
                    phoneNumber: maxServiceCost.phoneNumber
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

    billingOrder(order) {
        return axios
            .post(API_URL + 'billing', {
                    phoneNumber: order.phoneNumber,
                    serviceId: order.serviceId,
                    expenses: order.expenses
                },
                {headers: authHeader()}
            )
    }

    changeUserTariff(id) {
        return axios.post(
            API_URL + 'change-tariff',
            {id: id},
            {headers: authHeader()}
        )
            .then(response => {
                return response.status
            })
            .catch(error => {
                console.error(error)
                return error.status
            })
    }
}

export default new BillingService();