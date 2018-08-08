import loader from './loading.vue'

const loading={
  install:function(Vue){
    Vue.component("Loading",loader)
  }
}
export default loading;
