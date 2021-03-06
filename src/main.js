import Vue from 'vue'
import App from './App.vue'
import LongPress from './plugins/longpress'

Vue.use(LongPress, {
  time: 350
})

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
