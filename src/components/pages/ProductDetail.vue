<template>
  <transition name="show">
<div class="product_show">
  <div class="product_hd">
    <i class="iconfont icon-return fl" @click="goback"></i>
    <i class="iconfont icon-menu fr"></i>
    <h3 class="product_title">{{curPage.name}}</h3>
  </div>
  <div class="product_img">
    <img :src="curPage.src" :alt="curPage.name"/>
  </div>
  <div class="product_con">
    <div class="product_name">
      {{curPage.name}}
      <i></i>
    </div>
    <div class="product_price">
      <p class="new_price">${{curPage.newprice}}</p>
      <p class="old_price">${{curPage.oldprice}}</p>
      <div class="product_type">
        <span>产品品牌：{{curPage.brand}}</span>
        <span>型号:小古筝</span>
        <span>{{curPage.id}}</span>
      </div>
      <div class="discount_news">
        促销信息（共一个优惠信息）
      </div>
    </div>
    <div class="product_discount">
      <a href="javascript:">优惠</a>
      <span>满{{curPage.discount_full}}元减{{curPage.discount_reduce}}元</span>
      <i class="fr discount_detail">&gt</i>
    </div>
    <ul class="productInfo_hd">
      <li>产品详情</li>
      <li>产品评价</li>
    </ul>
    <div class="productInfo_con">
      <ul>
      <li>产品主要内容</li>
      <li>好评</li>
      </ul>

    </div>
  </div>

</div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Mock from 'mockjs'
    export default{
        data(){
            return {
              nowIndex:'01',
              Odata:[],
              curPage:{}
            }
        },
    methods:{
      goback(){
        this.$router.go(-1)
      },
      _setCurInfo(){
        this.nowIndex=this.$route.params.id
        let arr=_.filter(this.Odata.list,(item)=>{
         return item.id===this.nowIndex;
        })
        this.curPage=arr[0]
      },
      _getMockInfo(){
        this.Odata=Mock.mock({
          'list|10':[{
            'id|+1':1,
            'name':'@ctitle',
            'oldprice':'@natural(1600,2000)',
            'newprice':'@natural(1000,1600)',
            'count':'@natural(25,230)',
            'brand':'@csentence(3,6)',
            'discount_full':'@natural(1000,1005)',
            'discount_reduce':'@natural(100,105)',
            'src':'@image(480x320,#dddddd)'
          }]
        })
        _.map(this.Odata.list,(item)=>{
          return item.id=`0${item.id}`
        })
      }
    },
    mounted(){
    this._getMockInfo()
    this._setCurInfo()
    }
  }
</script>


<style scoped lang="scss">
  .product_show{
    max-width: 640px;
    margin: 0 auto;
    z-index: 100;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background:$BgColor;
  }
  .product_hd{
    height: 44px;
    text-align: center;
    border-bottom: $line-border;
  }
  .product_hd i{
    height: 40px;
    line-height: 40px;
    font-size: 30px;
  }
  .product_hd h3{
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    font-weight: bold;
  }
  .product_img{
    width: 480px;
    margin: 0 auto;
  }
  .product_img img{
    width: 100%;
  }
  .product_con{
    padding: 0 14px;
    box-sizing: border-box;

  }
  .product_con .product_name{
    font-size: 24px;
    padding-bottom:28px ;
    border-bottom: $line-border;
  }
  .product_con .product_name i{
    float: right;
  }
  .product_price{
    padding: 8px 0;
    box-sizing: border-box;
  }
  .new_price{
    font-size: 20px;
    color: #d8060d;
    margin-bottom: 12px;
  }
 .old_price{
   font-size: 12px;
   color: #8b8a8a;
   margin-bottom: 12px;
   text-decoration: line-through;
  }
   .product_type{
     margin-bottom: 12px;
  }
  .product_type span{
    font-size: 20px;
    color: #000000;
    margin-left: 30px;
  }
 .discount_news{
    font-size: 12px;
    color: #8b8a8a;
  }
  .product_discount{
    border: $line-border;
    border-radius: 3px;
    padding: 10px 20px;
  }
  .product_discount a{
    display: inline-block;
    width: 44px;
    height: 28px;
    line-height: 28px;
    background: #eca22b;
    border-radius: 2px;
    text-align: center;
    color: #ffffff;
  }
  .product_discount span{
    margin-left: 28px;
    height: 28px;
    line-height: 28px;
    font-size: 22px;
  }
  .product_discount .discount_detail{
    width: 28px;
    height: 28px;
    line-height: 28px;
    font-size: 28px;
  }
  .productInfo_hd{
    display: flex;
    margin-top: 20px;
    height: 30px;
    background: #b89639;
   border-radius: 2px;
  }
  .productInfo_hd li{
    flex: 1;
    height: 30px;
    line-height: 30px;
    font-size: 24px;
    color: #fff;
    text-align: center;
  }
  .productInfo_con{
    width: 96%;
    overflow: hidden;
  }
  .productInfo_con ul{
    width: 200%;
  }
  .productInfo_con li{
    float: left;
    width: 50%;
  }
.show-enter-active,.show-leave-active{
  transition: all .3s ;
}
  .show-enter,.show-leave-to{
    transform: translate3d(100%,0,0);
  }
</style>
