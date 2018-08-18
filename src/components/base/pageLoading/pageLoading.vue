<template>
<div class="pageLoading">
  <div class="img">
    <slot></slot>
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
  .pageLoading .img{
    position: fixed;
    left: calc( 50% - 100px);
    top: calc( 50% - 100px);
    width: 200px;
    height: 200px;
  }
  .pageLoading img{
    width: 100%;
  }
  .pageLoading h3{
    font-size: 30px;
    font-weight: bold;
    color: rosybrown;
    text-align: center;
    text-shadow: 3px 2px #fffe50;
  }
</style>
