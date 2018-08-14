<template>
<div class="discountShow">
  <div class="warn">只要发送国乐一号到10086就可以获得100元优惠券</div>
  <div class="discount_hd">
    <a href="javascript:" class="img_warp">
      <img src="https://img.alicdn.com/imgextra/i4/2285959110/TB2hwrbhBsmBKNjSZFsXXaXSVXa_!!2285959110.jpg" alt="优惠享不停"/>
    </a>
  </div>
  <div class="mob_tea_1" v-for="img in img_module">
    <a :href="img.linkhref">
      <img :src="img.src" alt=""/>
    </a>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
              img_module:[
                {id:'01',value:'国乐优惠',src:'http://www.guoyueyihao.com/templets/eleven_carl/888/sj_03.jpg',linkhref:''},
                {id:'02',value:'国乐优惠',src:'http://www.guoyueyihao.com//templets/eleven_carl/888/sj_04.jpg',linkhref:''},
                {id:'03',value:'国乐优惠',src:'http://www.guoyueyihao.com//templets/eleven_carl/888/sj_05.jpg',linkhref:''},
                {id:'04',value:'国乐优惠',src:'http://www.guoyueyihao.com/templets/eleven_carl/888/sj_06.jpg',linkhref:''},
                {id:'05',value:'国乐优惠',src:'http://www.guoyueyihao.com//templets/eleven_carl/888/sj_07.jpg',linkhref:''},
                {id:'06',value:'国乐优惠',src:'http://www.guoyueyihao.com//templets/eleven_carl/888/sj_08.jpg',linkhref:''},
                {id:'07',value:'国乐优惠',src:'http://www.guoyueyihao.com//templets/eleven_carl/888/sj_09.jpg',linkhref:'http://www.guoyueyihao.com/plus/view.php?aid=538'},
                {id:'08',value:'国乐优惠',src:'http://www.guoyueyihao.com/templets/eleven_carl/888/sj_10.jpg',linkhref:'http://www.guoyueyihao.com/plus/view.php?aid=751'},
                {id:'09',value:'国乐优惠',src:'http://www.guoyueyihao.com//templets/eleven_carl/888/sj_11.jpg',linkhref:'http://www.guoyueyihao.com/plus/view.php?aid=540'},
                {id:'10',value:'国乐优惠',src:'http://www.guoyueyihao.com//templets/eleven_carl/888/sj_12.jpg',linkhref:'http://www.guoyueyihao.com/plus/view.php?aid=538'},
                {id:'11',value:'国乐优惠',src:'http://www.guoyueyihao.com/templets/eleven_carl/888/sj_13.jpg',linkhref:'http://www.guoyueyihao.com/plus/view.php?aid=751'},
                {id:'12',value:'国乐优惠',src:'http://www.guoyueyihao.com//templets/eleven_carl/888/sj_14.jpg',linkhref:'http://www.guoyueyihao.com/plus/view.php?aid=540'},
                {id:'13',value:'国乐优惠',src:'http://www.guoyueyihao.com//templets/eleven_carl/888/sj_15.jpg',linkhref:'http://www.guoyueyihao.com/plus/view.php?aid=538'},
                {id:'14',value:'国乐优惠',src:'http://www.guoyueyihao.com/templets/eleven_carl/888/sj_16.jpg',linkhref:'http://www.guoyueyihao.com/plus/view.php?aid=751'},
                {id:'15',value:'国乐优惠',src:'http://www.guoyueyihao.com//templets/eleven_carl/888/sj_17.jpg',linkhref:'http://www.guoyueyihao.com/plus/view.php?aid=540'},
                {id:'16',value:'国乐优惠',src:'http://www.guoyueyihao.com//templets/eleven_carl/888/sj_18.jpg',linkhref:'http://www.guoyueyihao.com/plus/view.php?aid=538'},
                {id:'17',value:'国乐优惠',src:'http://www.guoyueyihao.com/templets/eleven_carl/888/sj_19.jpg',linkhref:'http://www.guoyueyihao.com/plus/view.php?aid=751'},
                {id:'18',value:'国乐优惠',src:'http://www.guoyueyihao.com//templets/eleven_carl/888/sj_20.jpg',linkhref:'http://www.guoyueyihao.com/plus/view.php?aid=540'},
                {id:'19',value:'国乐优惠',src:'http://www.guoyueyihao.com//templets/eleven_carl/888/sj_21.jpg',linkhref:'http://www.guoyueyihao.com/plus/view.php?aid=538'}
              ]
            }
        }
    }
</script>


<style scoped>
  .discountShow{
    width: 100%;
  }
  .warn{
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 18px;
    text-align: center;
    color: orange;
  }
.discount_hd{
  width: 100%;
}
  .img_warp,.mob_tea_1{
    display: inline-block;
    width: 100%;
  }
  .img_warp img,.mob_tea_1 img{
    width: 100%;
  }
</style>
