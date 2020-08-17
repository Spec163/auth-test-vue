import Vue from 'vue';
import Vuex from 'vuex';

import  auth  from './auth.module'
import getters from './getters/getters'
import actions from './actions/actions'
import mutations from './mutations/mutations'


Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    users: [],
    tariffs: []
  },
  mutations,
  actions,
  getters,
  modules: {
    auth
  }
});