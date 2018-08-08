<template>
<div class="product">
  <ul>
    <li v-for="product in products" :class="{border:isShow}">
      <a href="javascript:">
        <img :src="product.src" alt="product.name" :class="{imgBg:isShow}"/>
        <h4 class="name">{{product.name}}<span class="count">月销量：{{product.count}}</span></h4>

        <div class="price">
          <span class="old_price">￥{{product.oldPrice}}</span>
          <span class="new_price">￥{{product.newPrice}}</span>
        </div>
        <i class="goBuy"></i>
      </a>
    </li>
  </ul>
  <button class="more" v-show="!isShow">查看更多</button>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
      props:{
        isShow:{
          type:Boolean,
          default:false
        },
        products:{
          type:Array,
          default:[{name:"月牙06山水知音",oldPrice:"5980",newPrice:"5180",src:require("../../assets/images/products/base/01.png")}]
        }
      },
        data(){
            return {

            }
        }
    }
</script>


<style scoped="" type="text/css" lang="scss">
$wd:620*0.45px;
.product{
  width: 93%;
  margin: 16px auto;
}
.product ul{
  width: 100%;
  overflow: hidden;
}
  .product li{
    width: 50%;
    float: left;
    box-sizing: border-box;
    padding: 1%;
    padding-bottom: 20px;
    position: relative;
  }
  .product li:nth-child(2n){
    margin-right:0;
  }
  .product a{
    color: black;
  }
  .product img{
    width: 100%;
    height: $wd;;
  }
  .product h4{
    margin-top: 18px;
    height: 20px;
    line-height: 20px;
  }
  .count{
    margin-left: 10px;
    padding-left: 10px;
    font-weight: bold;
    color: crimson;
    text-align: center;
    border-left: 1px solid slategrey;
  }
  .price{
    float: left;
    width: 66px;
    margin-top: 22px;
  }
  .old_price{
    width: 100%;
    text-decoration: line-through;
    font-size: 14px;
    color: #a7a8aa;
  }
  .new_price{
    width: 100%;
    font-size: 20px;
    color: red;
  }
  .goBuy{
    position: absolute;
    bottom: 10px;
    right: 60px;
    width: 70px;
    height: 30px;
    background-image: url("https://s1.ax1x.com/2018/07/23/PJgW7D.png");
    background-repeat: no-repeat;
    background-position: -30px -103px;
    background-size: 400px 400px;
  }
  .more{
    display: block;
    margin: 15px auto;
    width: 94%;
    background: #c9391f;
    border: none;
    border-radius: 2px;
    color: white;
  }
  .border{
    border:$line-border
  }
  .imgBg{
    background: $img-bg;
  }
</style>
