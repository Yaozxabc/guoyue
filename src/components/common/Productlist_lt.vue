<template>
<div class="products">
  <ul>
    <li v-for="product in products">
      <a href="javascript:">
        <img :src="product.src" alt="product.name"/>
        <h4 class="name">{{product.name}}</h4>
        <div class="price">
          <span class="new_price">￥{{product.newPrice}}</span>
          <span class="old_price">￥{{product.oldPrice}}</span>
        </div>
        <i class="goBuy"></i>
      </a>
    </li>
  </ul>
  <button class="more">查看更多</button>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
      props:{
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
  $width:440px;
$wd:$width*0.45;
.products{
  width: 620px;
  margin: 0 auto;
}
  .products li{
    width: $wd;
    float: left;
   padding: 2%;
    border-right: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    position: relative;
  }
  .products li:nth-child(2n){
    margin-right:0;
  }
  .products a{
    color: black;
  }
  .products img{
    width: 100%;
    height: $wd;;
    background: #ffffff;
  }
  .products h4{
    margin-top: 18px;
    height: 20px;
    line-height: 20px;
  }
  .price{
    float: left;
    width: 66px;
    margin-top: 22px;
  }
  .old_price{
    width: 100%;
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
    margin: 15px auto;
    width: $width;
    background: #c9391f;
    border: none;
    border-radius: 2px;
    color: white;
  }
</style>
