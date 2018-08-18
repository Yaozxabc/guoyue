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
import loading from '../src/components/base/loading'
import ploading from '../src/components/base/pageLoading'
import loader from '../src/components/base/loader'
import pageNum from '../src/components/base/pageNumber'
import store from './store'
import  '@/assets/styles/animate.min.css'
import Vuelazyload from 'vue-lazyload'


Vue.config.productionTip = false;//设置为 false 以阻止 vue 在启动时生成生产提示。
//axios.interceptors.request.use((config)=>{
//store.dispatch('showLoading')////发送请求时执行的函数1、发送成功，将showloading进行执行传递过去
//  return config;//返回执行后的对象
//},(error)=>{
//  return Promist.reject(error)
//})//2、发送失败，接受的失败值对象
//axios.interceptors.reject.use((config)=>{
//  store.dispatch('hideLoading')//1、接收成功，将hideloading进行执行传递过去
//},(error)=>{
//  return Promist.reject(error)
//})//2、接收失败，接受的失败值对象
Vue.prototype.$http=axios;
Vue.use(MintUi);
Vue.use(Vuelazyload,{
  loading:require('@/assets/images/loading.gif')
})
Vue.use(ploading)
Vue.use(loading)
Vue.use(loader)
Vue.use(pageNum)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
