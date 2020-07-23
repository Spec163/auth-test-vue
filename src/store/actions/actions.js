import axios from 'axios'
import authHeader from '../../services/auth-header'

 const API_URL = 'http://localhost:8090/user/users/'

export  default {
    GET_USERS_INFO_FROM_API({commit}) {
        return axios.get(API_URL,
            { headers: authHeader() })
            .then((users) => {
                commit('SET_USERS_INFO', users.data);
                return users;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
    }
}
