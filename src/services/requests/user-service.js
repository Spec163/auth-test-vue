import axios from 'axios';
import authHeader from '../auth-header';

const API_URL = 'http://localhost:8090/';

class UserService {
    // getPublicContent() {
    //     return axios.get(API_URL + 'all');
    // }

    getUserInfo() {
        return axios.get(API_URL + 'user/info/', {headers: authHeader()});
    }

    getAccountInformation() {
        return axios.post(
            API_URL + 'profile',
            {},
            {headers: authHeader()}
        )
            .then(response => {
                return response
            })
            .catch(error => {
                console.error(error, 'Информация о пользователе не получена!!!')
                return error
            });
    }
}

export default new UserService();

