<template>
<div class="load">
  <img  src="./loader.gif" alt="" />
  <p>正在加载中</p>
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
.load{
  position: absolute;
  top:50%;
  left: calc(50% - 150px);
  text-align: center;
  transform: translateY(-50%);
  width: 300px;
  height: 300px;
}
  .load img{
    width: 100%;
    height: 100%;
  }
</style>
