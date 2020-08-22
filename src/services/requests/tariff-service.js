import axios from 'axios';
import authHeader from '../auth-header';

const API_URL = 'http://localhost:8090/profile/tariff/';

class TariffService {
    addTariff(tariff) {
        console.log('add request:  ', tariff)
        return axios.post(
            API_URL,
            {
                title: tariff.title,
                price: tariff.price,
                call: tariff.call,
                sms: tariff.sms,
                internet: tariff.internet,
            },
            {headers: authHeader()})
            .then(response => {
                console.log('RESPONSE ADD TARIFF: ', response)
                return response
            })
            .catch(error => {
                console.error('Add tariff exception!', error)
                return error
            })
    }

    updateTariff(tariff) {
        return axios.put(
            API_URL + tariff.id,
            {
                title: tariff.title,
                price: tariff.price,
                call: tariff.call,
                sms: tariff.sms,
                internet: tariff.internet,
            },
            {headers: authHeader()}
        )
            .then(response => {
                return response
            })
            .catch(error => {
                console.error('Update tariff exception!', error)
                return error
            })
    }

    removeTariff(id) {
        return axios
            .delete(API_URL + id, {headers: authHeader()})
            .then(response => {
                return response
            })
            .catch(error => {
                console.log('ID:', id)
                console.log('Ошибка: Тарифф не был удалён!', error);
            })
    }
}

export default new TariffService();