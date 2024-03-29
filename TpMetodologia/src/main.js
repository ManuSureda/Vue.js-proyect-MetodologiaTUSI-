import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

Vue.config.productionTip = false
                            //revisar el puerto
axios.defaults.baseURL = 'http://localhost:8080/';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
