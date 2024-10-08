import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { router } from './router'
import store from './store/index.js'


Vue.use(VueRouter)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')