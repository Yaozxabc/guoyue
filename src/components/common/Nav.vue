<template>
<div>
  <ul class="menu">
    <li v-for="(item,index) in navMenu">
     <router-link :to="{path:item.path}" tag="a" :class="item.className"></router-link>
      <p>{{item.value}}</p>
    </li>
  </ul>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
              navMenu:[
                {value:"教你如何弹琴说爱",path:"/baidu",className:"nav1th"},
                {value:"网购的价格 实体的服务",path:"/",className:"nav2th"},
                {value:"用心服务 保证正品",path:"/",className:"nav3th"},
                {value:"放心价格 细心服务",path:"/about",className:"nav4th"}
      ]
            }
        }
    }
</script>


<style scoped>
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
    background-image: url("https://s1.ax1x.com/2018/07/23/PJgW7D.png");
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
</style>
