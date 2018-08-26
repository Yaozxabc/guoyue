<template>
<div class="pageLoading">
  <div class="mainShow">
    <slot name="title" ></slot>
    <div class="img">
      <slot name="img"></slot>
    </div>
    <slot name="text"></slot>
    <h3>Loading...</h3>
  </div>

</div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {}
        }
    }
</script>


<style scoped>
  .pageLoading .welcome{
    font-size: 30px;
    text-shadow: 2px 2px   #fffe50;
    font-weight: bold;
    font-family: huawen_black;
    color: red;
    text-align: center;
  }
.pageLoading{
  max-width: 640px;
  margin: 0 auto;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background:  #fff;;
  text-align: center;
}
  .pageLoading .mainShow{
    position: fixed;
    left: calc( 50% - 150px);
    top: calc( 50% - 300px);
    width: 300px;
    height: 300px;
  }
  .pageLoading .img{
    width: 300px;
    height: 300px;
  }
  .pageLoading .img img{
    width: 100%;
    height: 100%;
  }
  .pageLoading h3{
    font-size: 30px;
    font-weight: bold;
    color: rosybrown;
    text-align: center;
  }
</style>
