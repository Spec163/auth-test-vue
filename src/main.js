import Vue from 'vue'
import Vuetify from 'vuetify'
import { ValidationProvider } from 'vee-validate';
import App from './App.vue'
import { router } from './router/router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'

import Vuex from 'vuex'

Vue.config.productionTip = false
// убрать поля vee-validate
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(Vuetify)
Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App),
  vuetify: new Vuetify({})
}).$mount('#app')
