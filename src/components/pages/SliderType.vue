<template>
<div class="warp">
  <div :class="['left',{fix:offsetT}]"><LeftNav  @onChange="curList" :navlist="list"></LeftNav></div>
  <div class="right">
    <div>
      <transition name="bb">
      <RightCon :curPro="productlist[nowIndex]" :curImg="list[nowIndex]" v-show="isShow"></RightCon>
      </transition>
      <transition name="bb">
      <RightCon :curPro="productlist[nowIndex]" :curImg="list[nowIndex]" v-show="!isShow"></RightCon>
      </transition>
    </div>
    <div>

    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  import LeftNav from '@/components/common/LeftNav'
  import RightCon from '@/components/common/RightCon'
    export default{
      props:{
        offsetT:{
          type:Boolean,
          default:false
        },
        list:{
          type:Array,
          default:[]
        },
        productlist:{
          type:Array,
          default:[]
        },
      },
        data(){
            return {
              count:{'count':'36'},
              isShow:true,
              nowIndex:0,
            }
        },
  methods:{
    curList(data){
      this.isShow=!this.isShow;
      this.nowIndex=data;
      this.$emit('onOffset')
    },
    addCount(count){
      for(let i=0;i<this.productlist.length;i++){
        for(let j=0;j<this.productlist[0].length;j++){
          this.productlist[i][j]=Object.assign({},count,this.productlist[i][j])
        }
      }
    }
  },
  components:{
    RightCon,LeftNav
  },
  created(){
    this.addCount(this.count)
  }
    }
</script>


<style scoped>
.warp{
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-bottom: 60px;
  background: #f6f6f6;
}
  .left{
    float: left;
    width: 160px;
    margin-right: 20px;
  }
  .fix{
    position: fixed;
    top:44px;
  }
  .right{
    float: right;
    width: 460px;
  }
.bb-enter{
  opacity: 0;
}
.bb-enter-active,.bb-leave{
  transition: all .5s ;
}
.bb-leave-active{
  opacity: 0;

}
</style>
