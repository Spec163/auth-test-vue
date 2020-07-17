import Vue from 'vue';
import Vuex from 'vuex';

// import { auth } from './auth.module'
import AuthService from '../services/auth-service'
import getters from './getters/getters'

Vue.use(Vuex);

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

export default new Vuex.Store({
  namespaced: true,
  state: initialState,
  mutations: {
    LOGIN_SUCCESS(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    LOGIN_FAILURE(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
  },
  actions: {
    LOGIN({ commit }, user) {
      return AuthService.login(user).then(
          user => {
            commit('LOGIN_SUCCESS', user);
            return Promise.resolve(user);
          },
          error => {
            commit('LOGIN_FAILURE');
            return Promise.reject(error);
          }
      );
    },
  },
  getters,
  // modules: {
  //   auth
  // }
});
