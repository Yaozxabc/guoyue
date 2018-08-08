import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
var state={
  count:0,
  loading:false
};
const mutations={
  add(state){
  state.count++;
},
  reduce(state){
    state.count--;
  },
  showloading(state){
state.loading=true;
  },
  hideloading(state){
    state.loading=false;
  }
};
const actions={
  add:({commit})=>{
    commit('add')
  },
  reduce:({commit})=>{
  commit('reduce')
  },
  OddAdd:({commit,state})=>{//commit用于提交mutations中的方法，state用于传递状态值进行判断
    if(state.count%2==0){
      commit('add')
    }
  },
  AjaxAdd:({commit})=>{
  new Promise((resolve)=>{
   setTimeout(function(){
     commit('add')
     resolve();//执行成功，触发回调函数，回调函数可以带数值，返回给promise对象，传递给下一个执行对象，在此行代码中，未传出任何参数
   },1000)
  })
},
  showload:({commit,state})=>{
    axios.get('./static/abc.txt').then((response)=>{
      alert(response.data)
      commit('hideloading')
    }).catch(()=>{
      commit('showloading')
    })
},
hideload:({commit})=>{
  commit('hideloading')
}
};
const getters={
  getCount(state){
    return state.count
  },
  getLoading(state){
    return state.loading
  }
}
export default new Vuex.Store({
  actions,state,mutations,getters
})
