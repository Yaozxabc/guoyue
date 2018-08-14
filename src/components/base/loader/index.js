import loaders from './loader.vue'

const loadang={
  install:function(Vue){
    Vue.component("loadang",loaders)
  }
}
export default loadang
