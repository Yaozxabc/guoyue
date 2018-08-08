<template>
<div>
  <div class="adnews">
    <p>只要发送<em>"国乐一号"</em> 到<em>10086</em> 即可以获得<em>50元</em>优惠券</p>
  </div>
  <div class="address_show">
    <img src="../../assets/images/address.png" alt="国乐一号"/>
  </div>
  <div class="store_info">
    <h5 class="address">广州市天河区体育西路国乐一号店</h5>
    <h6>地址</h6>
    <p>广州市体育西路F出口直走80米左转中国银行对面</p>
    <h6>营业时间</h6>
    <p>9:00-21:00（节假日，周末午休）</p>
    <h6>联系电话</h6>
    <p class="tel">114转2</p>
    <div class="btn">
      <button>预约咨询</button>
      <button>打开导航</button>
    </div>

  </div>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {}
        }
    }
</script>


<style scoped>
.adnews{
  width: 100%;
  height: 45px;
  text-align: center;
}
  .adnews p{
    font-size: 12px;
    height: 45px;
    line-height: 45px;
  }
  .adnews em{
    color: red;
  }
  .address_show{
    width: 100%;
    height: 400px;
  }
  .address_show img{
    width: 100%;
    height: 100%;
  }
  .store_info{
    width: 92%;
    margin: 30px auto;
    padding: 20px;
    background: #fff;
    box-sizing: border-box;
  }
  .address{
    height: 50px;
    line-height: 50px;
    font-size: 22px;
    font-weight: bold;
    border-bottom: 1px solid slategrey;
  }
  .store_info h6{
    font-size: 22px;
    font-weight: bold;
    margin-top: 24px;
  }
  .store_info p{
    font-size: 16px;
  }
  .store_info .tel{
    color: firebrick;
  }
  .btn{
    margin-top: 20px;
  }
  .store_info button{
    width: 144px;
    height: 44px;
    border-radius: 22px;
    background: firebrick;
    border: none;
    color: #ffffff;
  }
</style>
