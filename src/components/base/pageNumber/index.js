import pageNumber from './pageNumber.vue'

const pageNum={
  install:function(Vue){
Vue.component('PageNum',pageNumber)
  }
}
export default pageNum;
