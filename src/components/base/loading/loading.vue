<template>
  <div class="warp">
<div class="loading" v-show="getLoading">
  <div class="loader">
    <div class="loader-inner line-spin-fade-loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>

</div>
    <p>现在的数字是{{getCount}}</p>
    <input type="button" value="增加" @click="add"/>
    <input type="button" value="减少" @click="reduce"/>
    <input type="button" value="偶数添加1" @click="OddAdd"/>
    <input type="button" value="添加异步操作" @click="AjaxAdd"/>
    <input type="button" value="请求数据" @click="showload"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions,mapGetters} from 'vuex'
    export default{
        data(){
            return {}
        },
  computed:mapGetters([
    'getCount','getLoading'
  ]),
  methods:mapActions([
    'add','reduce','OddAdd','AjaxAdd','showload','hideload'
  ])
    }
</script>


<style scoped>
  .warp{
    height: 500px;
    width: 100%;
    text-align: center;
  }
  .warp input{
    width: 100px;
  }
  .loading{
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
  }
  .loader-inner{
    position: absolute;
    left: 50px;
  }
  .loader{margin-bottom:50px;min-height:100px;}
  @-webkit-keyframes line-spin-fade-loader {
    50% {
      opacity: 0.3; }

    100% {
      opacity: 1; } }
  @keyframes line-spin-fade-loader {
    50% {
      opacity: 0.3; }

    100% {
      opacity: 1; } }
  .line-spin-fade-loader {
    position: relative; }
  .line-spin-fade-loader > div:nth-child(1) {
    top: 20px;
    left: 0;
    -webkit-animation: line-spin-fade-loader 1.2s 0.12s infinite ease-in-out;
    animation: line-spin-fade-loader 1.2s 0.12s infinite ease-in-out; }
  .line-spin-fade-loader > div:nth-child(2) {
    top: 13.63636px;
    left: 13.63636px;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: line-spin-fade-loader 1.2s 0.24s infinite ease-in-out;
    animation: line-spin-fade-loader 1.2s 0.24s infinite ease-in-out; }
  .line-spin-fade-loader > div:nth-child(3) {
    top: 0;
    left: 20px;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-animation: line-spin-fade-loader 1.2s 0.36s infinite ease-in-out;
    animation: line-spin-fade-loader 1.2s 0.36s infinite ease-in-out; }
  .line-spin-fade-loader > div:nth-child(4) {
    top: -13.63636px;
    left: 13.63636px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-animation: line-spin-fade-loader 1.2s 0.48s infinite ease-in-out;
    animation: line-spin-fade-loader 1.2s 0.48s infinite ease-in-out; }
  .line-spin-fade-loader > div:nth-child(5) {
    top: -20px;
    left: 0;
    -webkit-animation: line-spin-fade-loader 1.2s 0.6s infinite ease-in-out;
    animation: line-spin-fade-loader 1.2s 0.6s infinite ease-in-out; }
  .line-spin-fade-loader > div:nth-child(6) {
    top: -13.63636px;
    left: -13.63636px;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: line-spin-fade-loader 1.2s 0.72s infinite ease-in-out;
    animation: line-spin-fade-loader 1.2s 0.72s infinite ease-in-out; }
  .line-spin-fade-loader > div:nth-child(7) {
    top: 0;
    left: -20px;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-animation: line-spin-fade-loader 1.2s 0.84s infinite ease-in-out;
    animation: line-spin-fade-loader 1.2s 0.84s infinite ease-in-out; }
  .line-spin-fade-loader > div:nth-child(8) {
    top: 13.63636px;
    left: -13.63636px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-animation: line-spin-fade-loader 1.2s 0.96s infinite ease-in-out;
    animation: line-spin-fade-loader 1.2s 0.96s infinite ease-in-out; }
  .line-spin-fade-loader > div {
    background-color: #279fcf;
    width: 4px;
    height: 35px;
    border-radius: 2px;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    position: absolute;
    width: 5px;
    height: 15px; }

</style>
