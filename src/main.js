import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import $ from 'jquery'

import 'animate.css'


import '../static/css/reset.css'
import '../static/css/style.css'
import '../static/css/lyy-style.css'
import '../static/js/base.js'


Vue.prototype.axios = axios
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

