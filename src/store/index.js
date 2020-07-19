import Vue from 'vue';
import Vuex from 'vuex';

import  auth  from './auth.module'
import getters from './getters/getters'

Vue.use(Vuex);


export default new Vuex.Store({

  getters,
  modules: {
    auth
  }
});