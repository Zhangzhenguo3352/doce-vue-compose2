// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import fastclick from "fastclick" 

import App from './App'
import router from './router'
import install from '../../src/index'



fastclick.attach(document.body)
install(Vue);

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
