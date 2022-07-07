import Vue from 'vue'
import App from '@/App.vue'
import router from '@/plugins/vue-router'
import store from '@/plugins/vuex'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
