<template>
  <div class="content">
    <section>
      <RoundMap></RoundMap>
    </section>
   <section>
     <ul class="menu">
       <li>
         <a href="javascript:" class="nav1th"></a>
         <p>教你如何弹琴说爱</p>
       </li>
       <li><a href="javascript:" class="nav2th"></a>
        <p>教你如何弹琴说爱</p>
       </li>
       <li><a href="javascript:" class="nav3th"></a>
        <p>教你如何弹琴说爱</p>
       </li>
       <li><a href="javascript:" class="nav4th"></a>
        <p>教你如何弹琴说爱</p>
       </li>
     </ul>
   </section>
    <section>
      <div class="ad_hd clearfix">
        <h3>买筝必看</h3>
        <div class="ad_txt">
          <p><i>促销</i>古筝挑选</p>
          <p><i>促销</i>放心的价格，细心的服务</p>
        </div>
      </div>
    </section>
    <section>
      <div class="menu2 clearfix" >
        <ul >
          <li>
            <a href="javascript:">
            <i class="icon1"></i>
            <p>敦煌古筝</p>
            </a>
          </li>
          <li>
            <a href="javascript:">
            <i class="icon2"></i>
            <p>敦煌古筝</p>
            </a>
          </li>
          <li>
            <a href="javascript:">
            <i class="icon3"></i>
            <p>敦煌古筝</p>
            </a>
          </li>
          <li>
            <a href="javascript:">
            <i class="icon4"></i>
            <p>敦煌古筝</p>
            </a>
          </li>
          <li>
            <a href="javascript:">
            <i class="icon5"></i>
            <p>敦煌古筝</p>
            </a>
          </li>
          <li>
            <a href="javascript:">
            <i class="icon6"></i>
            <p>敦煌古筝</p>
            </a>
          </li>
          <li>
            <a href="javascript:">
            <i class="icon7"></i>
            <p>敦煌古筝</p>
            </a>
          </li>
          <li>
            <a href="javascript:">
            <i class="icon8"></i>
            <p>敦煌古筝</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div class="md_bananer">
        <img src="../../assets/images/bananer/md_ban/01.png" alt=""/>
      </div>
    </section>
    <section>
      <mt-navbar v-model="selected2" class="NavList">
        <mt-tab-item id="sel1" >初级</mt-tab-item>
        <mt-tab-item id="sel2" >中级</mt-tab-item>
        <mt-tab-item id="sel3" >高级</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected2">
        <mt-tab-container-item id="sel1">
         <productlist :products="productlist"></productlist>
        </mt-tab-container-item>
        <mt-tab-container-item id="sel2">
          <productlist :products="productlist"></productlist>
        </mt-tab-container-item>
        <mt-tab-container-item id="sel3">
          <productlist :products="productlist"></productlist>
        </mt-tab-container-item>
      </mt-tab-container>
    </section>
    <section>
      <div class="video">
        <video src="../../assets/videos/show.mp4" controls="controls" preload="auto">你的浏览器不支持video</video>
      </div>
    </section>
    <section>
      <div class="lt_bananer">
        <img src="../../assets/images/bananer/lt_ban/01.png" alt=""/>
      </div>
    </section>
    <section>
      <h4>促销特价</h4>
      <productlist :products="productlist"></productlist>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import RoundMap from '../common/RoundMap.vue'
  import productlist from '../common/productlist.vue'
    export default{
        data(){
            return {
              selected2:"sel1",
              productlist:[
                {name:"月牙06山水知音",oldPrice:"5980",newPrice:"5180",src:require("../../assets/images/products/base/01.png")},
                {name:"鼎韵903午后清芳",oldPrice:"5800",newPrice:"4880",src:require("../../assets/images/products/base/02.png")},
                {name:"敦煌694蕉床夜月",oldPrice:"4980",newPrice:"3180",src:require("../../assets/images/products/base/03.png")},
                {name:"鼎韵903红木竹简",oldPrice:"2880",newPrice:"1480",src:require("../../assets/images/products/base/04.png")},
              ]
            }
        },
  components:{
    RoundMap,productlist
  }
    }
</script>


<style scoped>
  .content{
    background: #ffffff;
  }
.menu{
  padding: 24px 0;
  border-bottom: 1px solid #eff0f3;
  display: flex;
}
  .menu li{
    flex: 1;
    float: left;
    width: 85px;
    text-align: center;
  }
  .menu a{
    margin: 0 auto;
    border-radius: 3px;
    display: block;
    height: 85px;
    width: 85px;
    background-image: url("../../assets/images/nav/navlist-all.png");
    background-repeat: no-repeat;
    background-size: 400px 400px;
  }
  .menu p{
    margin: 0 auto;
    width: 60px;
    font-size: 12px;
    color: slategrey;
  }
  .nav1th{
    background-position:-15px -15px;
  }
  .nav2th{
    background-position:-115px -15px;
  }
  .nav3th{
    background-position:-215px -15px;
  }
  .nav4th{
    background-position:-315px -15px;
  }
  .ad_hd{
    overflow: hidden;
    border-bottom: 1px solid #eff0f3;
  }
.ad_hd h3{
  float: left;
  margin-left: 10px;
  font-weight: bold;
  width: 40px;
  height: 40px;
  padding: 5px;

}
  .ad_txt{
    float: left;
    padding: 5px;
  }
  .ad_txt i{
    height: 20px;
    line-height: 20px;
    border: 1px solid red;
    border-radius: 2px;
    color: red;
    margin: 0 5px;
  }
  .menu2{
    margin: 15px;
    overflow: hidden;
    border: 1px solid #eff0f3;
    width: calc(100%-30px);
    padding: 20px 40px;
  }
  .menu2 ul{
    overflow: hidden;
  }
  .menu2 li{
    margin-top: 10px;
    float: left;
    width: 25%;
    height: 100px;
    text-align: center;
  }
  .menu2 a{
    margin: 0 auto;
    display: block;
    width:116px;
    height: 85px;
    box-sizing: border-box;
    background: #f5f3e6;
    border-radius: 10px;
    color: black;
  }
  .menu2 i{
    margin: 0 auto;
    display: block;
    width: 50px;
    height: 34px;
    background-image: url("../../assets/images/nav/navlist-all.png");
    background-size: 400px 400px;
    background-repeat: no-repeat;
    margin-bottom: 10px;

  }
  .icon1{
    background-position: 0 -166px;
  }
  .icon2{
    background-position: -50px -166px;
  }
  .icon3{
    background-position: -100px -166px;
  }
  .icon4{
    background-position: -150px -166px;
  }
  .icon5{
    background-position: -200px -166px;
  }
  .icon6{
    background-position: -250px -166px;
  }
  .icon7{
    background-position: -300px -166px;
  }
  .icon8{
    background-position: -350px -166px;
  }
  .md_bananer{
    width: 100%;
    height: 415px;
    background: red;
    margin-bottom: 15px;
  }
  .md_bananer img{
    width: 100%;
    height: 100%;
  }
  .NavList{
    width: 620px;
    height: 40px;
    margin: 0 auto;
    background: #c9391f;
  }
  .NavList a{
    color: #ffffff;
  }
  .NavList .is-selected{
    background: #fff;
    color:  #c9391f;;
  }
  .video{
    margin: 0 auto;
    width: 620px;
    text-align: center;
    height: 400px;
    padding: 10px 0;
    border-bottom: 1px solid darkgrey;
  }
  .video video{
    width: 100%;
    height: 90%;
  }
  .lt_bananer{
    width: 640px;
    height: 80px;
  }
  .lt_bananer img{
    width: 100%;
    height: 100%;
  }
  h4{
    color: red;
  }
</style>
