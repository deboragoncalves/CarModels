import Vue from 'vue'
import CarModels from './CarModels.vue'
import axios from 'axios'
import "@/filters/filters"
import vueScrollto from 'vue-scrollto'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(vueScrollto)

new Vue({
  render: h => h(CarModels),
}).$mount('#carModels')
