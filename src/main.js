// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueResource from 'vue-resource'
import router from './router'
import element from 'element-ui'
// import http from 'http'
import axios from 'axios'

Vue.config.productionTip = false
// Vue.prototype.$http = http
Vue.prototype.rootUrl = '/agent/'
Vue.prototype.$axios = axios
Vue.use(element)
// Vue.use(VueResource)

axios.defaults.baseURL = 'http://192.168.1.34/'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
