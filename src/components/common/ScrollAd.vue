<template>
  <div class="ad_hd clearfix">
    <h3>买筝必看</h3>
    <div class="ad_txt">
      <ul>
        <li @mouseover="stop()" @mouseout="scroll()">
          <transition-group name="fade"  >
          <p v-show="isShow" :key="1"><i>促销</i><router-link :to="{path:adTxt[nowIndex].path}" tag="a">{{adTxt[nowIndex].value}}</router-link></p>
          <p v-show="isShow" :key="2"><i>促销</i><router-link :to="{path:adTxt[nowIndex+1].path}" tag="a">{{adTxt[nowIndex+1].value}}</router-link></p>
          </transition-group>
          <transition-group name="fade" >
          <p v-show="!isShow" :key="1"><i>促销</i><router-link :to="{path:adTxt[nowIndex].path}" tag="a">{{adTxt[nowIndex].value}}</router-link></p>
          <p v-show="!isShow" :key="2"><i>促销</i><router-link :to="{path:adTxt[nowIndex+1].path}" tag="a">{{adTxt[nowIndex+1].value}}</router-link></p>
          </transition-group>
        </li>
      </ul>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
              isShow:true,
              timer:null,
              nowIndex:0,
              adTxt:[
                {id:"01",value:"教你挑选古筝",path:"/"},
                {id:"02",value:"古筝最新演绎",path:"/"},
                {id:"03",value:"细心的服务，周到的享受",path:"/"},
                {id:"04",value:"古筝必知事件",path:"/"},
                {id:"05",value:"传统古筝的结构",path:"/"}
              ]
            }
        },
    methods:{
      scroll(){
        var self=this;
        this.timer=setInterval(function(){
          self.isShow=!self.isShow
          if(self.nowIndex>=self.adTxt.length-2){
            self.nowIndex=0;
          }else{
            self.nowIndex++;
          }
        },3000)
      },
      stop(){
        clearInterval(this.timer)
      }
    },
    mounted(){
      this.scroll()
    }
    }
</script>


<style scoped>
  .fade-enter{
    transform: translateY(15px);
  }
  .fade-enter-active{
    transition:all .5s
  }
  .fade-leave-acitve{
    transition:all 1s
  }
  .fade-leave-acitve{
    transform: translateY(-30px);
  }
  .ad_hd{
    height: 60px;
    overflow: hidden;
    border-bottom: 1px solid #eff0f3;
  }
  .ad_hd h3{
    float: left;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    width: 40px;
    height: 50px;
    padding: 5px;

  }
  .ad_txt{
    height: 50px;
    float: left;
    padding: 5px;
  }
  .ad_txt i{
    height: 20px;
    line-height: 20px;
    border: 1px solid red;
    border-radius: 2px;
    color: red;
    margin: 0 5px;
  }
</style>
