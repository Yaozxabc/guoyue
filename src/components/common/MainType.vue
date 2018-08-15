<template>
  <div class="menu2 clearfix" >
    <ul >
      <li v-for="item in navlist">
        <router-link :to="{path:item.path}" tag="a">
          <i :class="item.className"></i>
          <p>{{item.value}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
              navlist:[
                {id:"01",value:"敦煌古筝",path:"/zither",className:"icon1"},
                {id:"02",value:"鼎韵古筝",path:"/zither",className:"icon2"},
                {id:"03",value:"朱雀古筝",path:"/zither",className:"icon3"},
                {id:"04",value:"月牙古筝",path:"/zither",className:"icon4"},
                {id:"05",value:"天艺古筝",path:"/zither",className:"icon5"},
                {id:"06",value:"龙凤古筝",path:"/zither",className:"icon6"},
                {id:"07",value:"金运古筝",path:"/zither",className:"icon7"},
                {id:"08",value:"琴园古筝",path:"/zither",className:"icon8"}
              ]
            }
        }
    }
</script>


<style scoped>
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
    background-image: url("https://s1.ax1x.com/2018/07/23/PJgW7D.png");
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
</style>
