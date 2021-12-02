import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './plugins/axios/index'
import './plugins/lodash/lodash'
import router from './plugins/router/index'
import './plugins/bootstrap/index'
import './assets/styles/style.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
