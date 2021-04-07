import Vue from 'vue'
import App from './App.vue'
import router from './router'
import sidebar from './views/sidebar.vue'
Vue.component('sidebar', sidebar);
Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
