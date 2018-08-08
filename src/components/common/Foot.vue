<template>
  <div>
    <div class="FootBan">
      <img src="../../assets/images/bananer/footban.png" alt="国乐一号"/>
    </div>
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
  .FootBan{
    margin: 0 auto;
    margin-top: 20px;
    width: 90%;
    height: 295px;
  }
  .FootBan img{
    width: 100%;
    height: 100%;
  }
  .contact{
    text-align: center;
    border: 1px solid black;
    margin: 20px auto;
    width: 90%;
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
    width: 90%;
    height: 40px;
    line-height: 40px;
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
