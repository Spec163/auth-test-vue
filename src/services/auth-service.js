import axios from 'axios';

const API_URL = 'http://localhost:8090/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'auth', {
                login: user.login,
                password: user.password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'registration', {
            login: user.login,
            phoneNumber: user.phoneNumber,
            password: user.password
        });
    }
}

export default new AuthService();
