/**
 * Created by Administrator on 2018/8/18.
 */
import pageLoading from './pageLoading.vue'

const pageLoader={
  install:function(Vue){
    Vue.component('ploading',pageLoading)
  }
}
export default pageLoader
