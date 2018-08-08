<template>
  <div style="width: 100%;margin-top: 30px">
    <div style="width:480px;height:340px;border:1px solid gray;margin: 0 auto" id="container"></div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {}
        },
    created(){
      var map = new BMap.Map("container");          // 创建地图实例
      var point = new BMap.Point(113.328169,23.145517);  // 创建点坐标
      map.centerAndZoom(point, 15);
      var marker = new BMap.Marker(point);        // 创建标注
      map.addOverlay(marker);                     // 将标注添加到地图中
    }
    }
</script>


<style scoped>

</style>
