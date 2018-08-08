<template>
<div class="page">
  <a href="javascript:" id="prePage" @click="prePage">上一页</a>
  <a href="javascript:" id="nextPage" @click="nextPage">下一页</a>
  <ul>
    <li v-for="(item,index) in pageCount" :class="{active:nowIndex==index}" @click=" setPageShow(index)">{{index+1}}</li>
  </ul>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
      props:{
        list:{
          type:Array,
          default:[]
        },
        showCount:{
          type:Number,
          default:4
        }
      },
        data(){
            return {
              nowIndex:0,
              pageCount:1
            }
        },
    created(){
      if(this.list.length%this.list.showCount){
          return  this.pageCount=parseInt(this.list.length/this.showCount)+1;
        }else{
          return  this.pageCount=parseInt(this.list.length/this.showCount)
        }

    },
    methods:{
      setPageShow(index){
        if(index){
          this.nowIndex=index
        }
        let startIndex=this.nowIndex*this.showCount;
        let endIndex=(this.nowIndex+1)*this.showCount;
        let PageNum={
          startNum:startIndex,
          endNum:endIndex,
          nowIndex:this.nowIndex
        }
        this.$emit('onChange',PageNum)
      },
      nextPage(){
        if(this.nowIndex<this.pageCount-1){
          this.nowIndex++;
        }else{
          this.nowIndex=this.pageCount-1
        }
        this.setPageShow();
      },
      prePage(){
        if(this.nowIndex>0){
          this.nowIndex--;
        }else{
          this.nowIndex=0
        }
        this.setPageShow();
      }
    },
    mounted(){
    }

    }
</script>


<style scoped lang="scss">
  .page{
    width: 320px;
    text-align: center;
    margin: 20px auto;
  }
  .page ul{
    display: inline-block;
    width: auto;
    overflow: hidden;
  }
.page li{
  float: left;
  margin-left: 2px;
  width: 20px;
  font-size: 12px;
  background: #fff;
  text-align: center;
  color: $indexColor;
}
  .page .active{
    background: $indexColor;
    color: #fff
  }
  #nextPage{
    float: right;
  }
  #prePage{
    float: left;
  }
</style>
