import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { firestorePlugin } from 'vuefire'
import './application/style.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter);

Vue.use(firestorePlugin);

const router = new VueRouter({
  routes,
  mode : 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
