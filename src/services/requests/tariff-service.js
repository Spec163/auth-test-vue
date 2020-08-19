import axios from 'axios';
import authHeader from '../auth-header';

const API_URL = 'http://localhost:8090/profile/tariff/';

class TariffService {
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