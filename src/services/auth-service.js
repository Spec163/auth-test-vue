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
        return axios
            .post(API_URL + 'registration', {
                phoneNumber: user.phoneNumber,
                login: user.login,
                password: user.password
        })
            .then(response => {
                return response
            })
            .catch(function (error) {
                if (error.response) {
                    return error.response
                }
            });
    }
}

export default new AuthService();
