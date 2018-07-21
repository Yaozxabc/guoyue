// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css';
import _ from 'lodash'
import 'lib-flexible'
import './assets/styles/reset.css'
import 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.min.css'

Vue.config.productionTip = false;
Vue.prototype.$http=axios;
Vue.use(MintUi);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
