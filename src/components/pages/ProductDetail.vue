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
    <ul class="productInfo_hd" @click="tab($event)">
      <li :class="{active:isShow}">产品详情</li>
      <li :class="{active:!isShow}">产品评价</li>
    </ul>
    <div class="productInfo_con">
      <ul>
      <li v-show="isShow">
        <h3>{{curPage.name}}</h3>
        <div class="img_section" v-for="img in imglist">
          <a href="javascript:">
            <img :src="img.src" :alt="img.value"/>
          </a>
        </div>
      </li>
      <li v-show="!isShow">
        <div class="evaluate">
          暂无更多评价
        </div>
      </li>
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
              curPage:{},
              isShow:true,
              imglist:[
                {id:'01',value:'',src:'http://www.guoyueyihao.com/templets/images/xinadd/xinadd_zhanshi_02.png',linkhref:''},
                {id:'02',value:'',src:'https://img.alicdn.com/imgextra/i4/2285959110/TB2hwrbhBsmBKNjSZFsXXaXSVXa_!!2285959110.jpg',linkhref:''},
                {id:'03',value:'',src:'http://www.guoyueyihao.com/uploads/allimg/160914/1-1609141AZ3629.jpg',linkhref:''},
                {id:'04',value:'',src:'https://img.alicdn.com/imgextra/i4/2285959110/TB2JSCNsmtkpuFjy0FhXXXQzFXa_!!2285959110.jpg',linkhref:''},
                {id:'05',value:'',src:'https://img.alicdn.com/imgextra/i2/2285959110/TB2O.WvcMAq0eJjSZFtXXc.qVXa_!!2285959110.jpg',linkhref:''},
                {id:'06',value:'',src:'http://www.guoyueyihao.com/uploads/allimg/160914/1-1609141F011131.jpg',linkhref:''},
                {id:'07',value:'',src:'http://www.guoyueyihao.com//uploads/allimg/160914/1-1609141F022Z8.jpg',linkhref:''},
                {id:'08',value:'',src:'http://www.guoyueyihao.com/uploads/allimg/160914/1-1609141F02L43.jpg',linkhref:''},
                {id:'09',value:'',src:'http://www.guoyueyihao.com/uploads/allimg/160914/1-1609141F033212.jpg',linkhref:''},
                {id:'10',value:'',src:'http://www.guoyueyihao.com/uploads/allimg/160914/1-1609141F03N25.jpg',linkhref:''}
              ]
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
        Mock.Random.extend({
          products: function(date) {
            var products = [
              'http://www.guoyueyihao.com/uploads/160811/1-160Q11A334423.jpg',
              'http://www.guoyueyihao.com/uploads/160307/2-16030G1320QW.jpg',
              'http://www.guoyueyihao.com/uploads/160305/2-160305145ZI34.jpg',
              'http://www.guoyueyihao.com/uploads/allimg/170929/2-1F9291G1160-L.jpg',
              'http://www.guoyueyihao.com/uploads/allimg/180731/2-1PI1142K00-L.jpg',
              'http://www.guoyueyihao.com/uploads/180104/2-1P104153KH18.jpg',
              'http://www.guoyueyihao.com/uploads/allimg/180724/2-1PH41146120-L.jpg']
            return this.pick(products)
          }
        })
        this.Odata=Mock.mock({
          'list|100':[{
            'id|+1':1,
            'name':'@ctitle',
            'oldprice':'@natural(1600,2000)',
            'newprice':'@natural(1000,1600)',
            'count':'@natural(25,230)',
            'brand':'@csentence(3,6)',
            'discount_full':'@natural(1000,1005)',
            'discount_reduce':'@natural(100,105)',
            'src':'@products'
          }]
        })
        _.map(this.Odata.list,(item)=>{
            return item.id=`0${item.id}`
        })
      },
      tab($event){
        if($event.target.className=='active'){
          return;
        }
       this.isShow=!this.isShow
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
    /*position: fixed;*/
    /*overflow: auto;*/
    /*left: 0;*/
    /*top: 144px;*/
    /*right: 0;*/
    /*bottom: 0;*/
    /*margin-bottom: 66px;*/
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
    width: 600px;
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

   border-radius: 2px;
  }
  .productInfo_hd li{
    flex: 1;
    height: 30px;
    line-height: 30px;
    font-size: 24px;
    color: #fff;
    background: #8b8a8a;
    text-align: center;
  }
  .productInfo_hd .active{
    background: #b89639;
  }
  .productInfo_con{
    width: 100%;
    overflow: hidden;
  }
  .productInfo_con ul{
    width: 200%;
  }
  .productInfo_con li{
    float: left;
    width: 50%;
  }
  .img_section{
    width: 100%;
  }
  .img_section img{
    width: 100%;
  }
.show-enter-active,.show-leave-active{
  transition: all .3s ;
}
  .show-enter,.show-leave-to{
    transform: translate3d(100%,0,0);
  }
  .evaluate{
    width: 600px;
    background: #fff;
    color: red;
    text-align: center;
    margin: 20px auto;
    border: $line-border;
    border-radius: 10px;

  }
</style>
