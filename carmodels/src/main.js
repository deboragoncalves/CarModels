import Vue from 'vue'
import CarModels from './CarModels.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(CarModels),
}).$mount('#carModels')
