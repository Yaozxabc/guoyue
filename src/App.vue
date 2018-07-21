<template>
  <div id="app">
    <header>
      <div class="top_hd">
        <ul>
          <li>
            <a href="javascript:">
              <h3>古筝专卖</h3>
              <p>敦煌、鼎韵、月牙等</p>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <h3>古筝专卖</h3>
              <p>练习琴</p>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <h3>古筝专卖</h3>
              <p>敦煌、鼎韵、月牙等</p>
            </a>
          </li>
        </ul>
      </div>
      <mt-navbar v-model="selected" class="NavList">
        <mt-tab-item id="1" class="nav_title">国乐首页</mt-tab-item>
        <mt-tab-item id="2" class="nav_title">古筝专卖</mt-tab-item>
        <mt-tab-item id="3" class="nav_title">古琴专卖</mt-tab-item>
        <mt-tab-item id="4" class="nav_title">优惠不停歇</mt-tab-item>
        <mt-tab-item id="5" class="nav_title">来店路线</mt-tab-item>
      </mt-navbar>
      <div class="warn">只要发送国乐一号到10086就可以获得100元优惠券</div>
    </header>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
       <index></index>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
dddd
      </mt-tab-container-item>
      <mt-tab-container-item id="3">

      </mt-tab-container-item>
    </mt-tab-container>
    <footer>
      <div class="contact">
        <h5>获取最优惠价格</h5>
        <div class="form">
          <div class="name"><span>姓名:</span><input type="text" placeholder="请输入你的名字"/></div>
          <div class="telphone"><span>电话:</span><input type="text" placeholder="请输入你的手机号码"/></div>
          <input type="submit"  value="提交" class="submit"/>
        </div>
      </div>
      <div class="business_info">
        <p>免费咨询热线：10086</p>
        <p>qq咨询：10000</p>
        <p>微信咨询：10010</p>
        <p>地址：天河东体育西路广场北2楼</p>
        <p>2014-2016 粤d31123231cp</p>
      </div>
    </footer>
  </div>
</template>

<script>
  import { Navbar, TabItem } from 'mint-ui';
  import index from './components/pages/index.vue';

export default {
  name: 'App',
  data(){
    return{
      selected:"1"
    }
  },
  methods:{
    handleClick: function() {
      this.$toast('Hello world!')
    }
  },
  components:{
    index
  }
}


</script>

<style scoped>
  body{

  }
#app {
  width: 100%;
  background: #fff0f5;
  padding-top: 14px;
}
  .top_hd ul{
    display: flex;
  }
  .top_hd li{
    flex: 1;
    border-right: 1px solid slategrey;
  }
  .top_hd a{
    display: block;
    width: 100%;
    height: 100%;
    color: black;
    text-align: center;
  }
  .top_hd h3{
    font-family: huawen_kaiti;
    font-weight: bold;

    font-size: 30px;
  }
  .top_hd p{
    font-family: huawen_black;
    font-size: 20px;
  }
  .NavList{
    height: 44px;
    line-height: 44px;
    width: 100%;
    background: #c9391f;
  }
  .NavList .nav_title{
    font-size: 18px;
    color: #fff0f5;
  }
  .warn{
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 18px;
    text-align: center;
    color: orange;
  }
  .contact{
    text-align: center;
    border: 1px solid black;
    margin: 0 auto;
    width: 584px;
    height: 200px;
    border-radius: 10px;
    padding: 25px 0 0;
  }
  .contact h5{
    color: #0055aa;
    font-weight: bold;
  }
  .form div{
    margin: 10px auto;
    width: 100%;
    height: 32px;
  }
  .name input,.telphone input{
    width: 300px;
    height: 30px;
    margin-left: 5px;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid slategrey;
  }
  .submit{
    border-radius: 5px;
    border: none;
    width: 520px;
    height: 30px;
    background: #ff5a60;
    color: white;
  }
  .business_info{
    margin-bottom: 60px;
    text-align: center;
  }
  .business_info p{
    margin-top: 5px;
    height: 20px;
    line-height: 20px;
  }
</style>
