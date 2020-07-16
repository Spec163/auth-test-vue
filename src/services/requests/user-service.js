import axios from 'axios';
import authHeader from '../auth-header';

const API_URL = 'http://localhost:8090/';

class UserService {
    // getPublicContent() {
    //     return axios.get(API_URL + 'all');
    // }

    getUserInfo() {
        return axios.get(API_URL + 'user/info/', { headers: authHeader() });
    }
}

export default new UserService();

