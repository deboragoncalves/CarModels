import Vue from 'vue'
import CarModels from './CarModels.vue'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(CarModels),
}).$mount('#carModels')
