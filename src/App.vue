<template>
  <div id="app">
    <ploading v-show="loading">
      <h2 slot="title" class="welcome heartBeat">国乐一号琴筝馆</h2>
      <div class="text_warp" slot="text">
        <div><em>"国乐一号琴筝馆"</em>，广州市天河区天河琴筝国艺琴行旗下商城，旗下品牌有：敦煌古筝、鼎韵 古筝、天艺古筝、碧泉古筝、朱雀古筝。</div>
        <div><em>"古筝"</em>，又名汉筝、秦筝、瑶筝、鸾筝，是中国汉民族传统乐器中的筝乐器，属于弹拨乐器。它的音色优美，音域宽广、演奏技巧丰富，具有相当强的表现力，深受广大人民群众的喜爱。</div>
        <div><em>"古琴"</em>，又称瑶琴、玉琴、丝桐和七弦琴，是中国的传统乐器，目前存见南北朝至清代的琴谱百余种，琴曲达三千首，还有大量关于琴家、琴论、琴制、琴艺的文献，遗存之丰硕堪为中国乐器之最。</div>
      </div>
      <img slot="img" src="./components/base/pageLoading/loading_bird.gif" alt="loading"/>
    </ploading>
    <header>
      <div class="top_hd">
        <ul>
          <li v-for="(item,index) in topMenu">
            <router-link :to="{path:item.path,params:{top:topVal}}" tag="a">
              <h3>{{item.title}}</h3>
              <p>{{item.value}}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div :class="['NavList',{fix:topVal}]">
        <ul>
          <li v-for="item in pageNav" class="nav_title">
            <router-link tag="a" :to="{path:item.path}" >{{item.value}}</router-link>
          </li>
        </ul>
      </div>
    </header>
    <div class="container">
    <router-view></router-view>
  </div>
    <footer v-show="isShow">
      <Foot></Foot>
    </footer>
    <nav>
      <ul class="bottom_nav">
        <li><router-link :to="{path:'/zitherType'}" tag="a">
          <i class="gq"></i>
        <p>古筝专卖</p>
        </router-link></li>
        <li><router-link :to="{path:'/jeanType'}" tag="a">
          <i class="gq"></i>
          <p>古筝专卖</p>
        </router-link></li>
        <li @click="showTel"><a href="javascript:">
          <i class="ph"></i>
        <p>咨询热线</p>
        </a></li>
        <li class="active"><a href="tel:10086">
          <i class="msg"></i>
        <p>在线客服</p>
        </a></li>
      </ul>
    </nav>
    <a href="#app" class="toTop" v-show="topVal" @click="toTop">top</a>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { Navbar, TabItem } from 'mint-ui';
  import Foot from '@/components/common/Foot'

export default {
  name: 'App',
  data(){
    return{
      loading:true,
      pageNav:[
        {id:"01",value:"国乐首页",path:"/"},
        {id:"02",value:"古筝专卖",path:"/zither"},
        {id:"03",value:"古琴专卖",path:"/jean"},
        {id:"04",value:"优惠不停歇",path:"/discount"},
        {id:"05",value:"来店路线",path:"/address"}
      ],
      viewShow:false,
      topMenu:[
        {id:"01",title:"古筝专卖",value:"敦煌、鼎韵、月牙等",path:'/zitherType'},
        {id:"02",title:"古琴专卖",value:"练习琴，名家琴",path:'/jeanType'},
        {id:"03",title:"实体地址",value:"广州体育西路F出口",path:'/address'},
      ],
      topVal:false,
      isShow:true,
    }
  },
  methods:{
  onScroll(){
      if($(window).scrollTop()>$('.top_hd').height()){
        this.topVal=true;
      }else{
        this.topVal=false;
      }
      },
    toTop(){
      let oBody=document.documentElement||document.body;
      $(oBody,"html").animate({scrollTop:0},500)
    },
    showTel(){
      alert('咨询热线：10086转110')
    },
    loadingShow(){
      let oImg=new Image();
      oImg.src='./components/base/pageLoading/loading_bird.gif'
      window.addEventListener('load',()=>{
        if(document.readyState=='complete'){
          this.loading=false;
        }
      })
    }
  },
  components:{
    Foot
  },
  computed:{
  },
  watch:{
    $route(to,from){
      if(to.path=='/zitherType'||to.path=='/jeanType'){
        this.isShow=false
      }else{
        this.isShow=true
      }
    }
  },
  mounted(){
    this.loadingShow();
    window.addEventListener("scroll",()=>{
      this. onScroll();
    })
  }
}


</script>

<style scoped lang="scss" >
.text_warp{
  position: relative;
  width: 300px;
  height: 180px;
  overflow: hidden;
  margin-bottom: 50px;
}
.text_warp div{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background: #fff;
  font-size: 20px;
  text-indent: 40px;
  height: 100%;
  line-height: 30px;
  text-align: left;
}
.text_warp em{
  color: red;
  font-weight: bold;
}
@keyframes  move{
  0%{opacity: 1}
  25%{opacity: 1}
  30%{opacity: 0}
  90%{opacity: 0}
  95%{opacity: 1}
  100%{opacity: 1}
}

.text_warp div:nth-child(1){
  z-index: 3;
  animation: move 12s ease 0s infinite;
}
.text_warp div:nth-child(2){
  z-index: 2;
  animation: move 12s ease 4s infinite;
}
.text_warp div:nth-child(3){
  z-index: 1;
  animation: move 12s ease 8s infinite;;
}

  @media screen and (min-width: 320px) and (max-width: 370px) {
    .nav_title{
      font-size: 24px;;
    }
    .bottom_nav p{
      font-size: 26px;;
    }
  }

  @media screen and (min-width: 371px) and (max-width: 480px) {
    .nav_title{
      font-size: 24px;;
    }
    .bottom_nav p{
      font-size: 21px;;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 64px) {
    .nav_title{
      font-size: 18px;;
    }
    .bottom_nav p{
      font-size: 14px;;
    }
  }
  .nav_title{
    color: #ffffff;
  }
  .mint-navbar .mint-tab-item.is-selected{
  color:#ffffff;
    border-bottom: none;
}
.fix{
  z-index: 2;
  max-width: 640px;
  width: 100%;
  position: fixed;
  top: 0;
}
#app {
  margin: 0 auto;
  max-width: 640px;
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
  .NavList ul{
    display: flex;
  }
  .NavList li{
    flex: 1;
    text-align: center;
  }
  .NavList li a{
    color: #ffffff;
  }
  nav{
    max-width: 640px;
    width: 100%;
    position: fixed;
    left: calc(50% - 320px);
    bottom: 0;
  }
  .bottom_nav{
    background: #f5f3e6;
    display: flex;
    width: 100%;
    min-height: 60px;
    border-top: 1px solid #dddddd;
  }
  .bottom_nav li{
    width: 140px;
    height: 100%;
    border-right: 1px solid #dddddd;
    text-align: center;
  }
  .bottom_nav a{
    display: block;
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
    color: #000;
  }
  .bottom_nav .active{
    background: firebrick;
    flex-grow: 1;
  }
  .bottom_nav i{
    margin: 0 auto;
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-image: url("https://s1.ax1x.com/2018/07/23/PJgW7D.png");
    background-size: 400px 400px;
  }

  .gq{
    background-position: -111px -100px;
  }
  .gz{
    background-position: -162px -100px;
  }
  .ph{
    background-position: -264px -100px;
  }
  .msg{
    background-position: -216px -100px;
  }
  .active a{
    color: white;
  }
  .toTop{
    position: fixed;
    left: calc(50% + 160px );
    bottom: 150px;
    display: block;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border: none;
    border-radius: 50%;
    opacity: .8;
    background: darkmagenta;
    color: white;
  }
</style>
