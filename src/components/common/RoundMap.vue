<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="https://s1.ax1x.com/2018/07/22/PGQAsO.jpg" alt=""/></div>
      <div class="swiper-slide"><img src="https://s1.ax1x.com/2018/07/22/PGQELD.jpg" alt=""/></div>
      <div class="swiper-slide"><img src="https://s1.ax1x.com/2018/07/22/PGQZee.jpg" alt=""/></div>
      <div class="swiper-slide"><img src="https://s1.ax1x.com/2018/07/22/PGQedH.jpg" alt=""/></div>
      <div class="swiper-slide"><img src="https://s1.ax1x.com/2018/07/22/PGQkQK.jpg" alt=""/></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
    export default{
      name: 'swiper',
        data(){
            return {
              mySwiper: null
            }
        },
    methods:{
      _initSwiper(){
        this.mySwiper = new Swiper('.swiper-container', {
          autoplay:true,
          loop:true,
          pagination: {
            el: '.swiper-pagination',
          },
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true//修改swiper的父元素时，自动初始化swiper
        })
      }
    },
    mounted(){
      this._initSwiper()
    }
    }
</script>


<style scoped>
  .swiper-container {
    width: 100%;
    height: 412px;
  }
  .swiper-slide img{
    width: 100%;
    height: 100%;
  }
</style>
