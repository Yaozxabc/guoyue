<template>
  <div>
    <ul class="menu">
      <li v-for="(item,index) in navlist" @click="tab(index)" :class="[{active:nowIndex==index},{bounceIn:nowIndex==index}]">{{item.value}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
      props:{
        navlist:{

          type:Array,
          default:[]
        }
      },
        data(){
            return {
              nowIndex:0,
            }
        },
    methods:{
      tab(index){
        this.nowIndex=index
        this.$emit('onChange',index)
      }
    }
    }
</script>


<style scoped lang="scss">
  .menu{
    background: #fff;
  }
  .menu li{
    width: 160px;
    height: 45px;
    line-height: 45px;
    font-size: 18px;
    text-align: center;
    border: 1px solid #e3e3e3;
    cursor: pointer;
  }
  @media screen and (max-width: 640px){
    $width:18px;
    $height:45px;
    .menu{
      background: #fff;
    }
    .menu li{
      width: 160px;
      height: $height;
      line-height: $height;
      font-size: $width;
      text-align: center;
      border: 1px solid #e3e3e3;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 480px){
    $width:27px;
    $height:60px;
    .menu{
      background: #fff;
    }
    .menu li{
      width: 160px;
      height: $height;
      line-height: $height;
      font-size: $width;
      text-align: center;
      border: 1px solid #e3e3e3;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 320px){
    $width:36px;
    $height:90px;
    .menu{
      background: #fff;
    }
    .menu li{
      width: 160px;
      height: $height;
      line-height: $height;
      font-size: $width;
      text-align: center;
      border: 1px solid #e3e3e3;
      cursor: pointer;
    }
  }
.fix{
  position: fixed;
  top:44px
}
  .menu .active{
    color: #d60f0f;
    border-left: 3px solid #d60f0f;
  }

</style>
