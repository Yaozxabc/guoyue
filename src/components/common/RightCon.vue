<template>
<div>
  <header>
    <div class="md_bananer">
      <img :src="curImg.src" alt="curImg.value"/>
    </div>
  </header>
  <div class="main">
    <div class="products">
      <productlist :products="curPro"></productlist>
    </div>
  </div>
  <footer>
    <Foot></Foot>
  </footer>
</div>
</template>

<script type="text/ecmascript-6">
  import productlist from '../common/Productlist_lt.vue'
  import Foot from '../common/Foot.vue'

    export default{
      props:{
        curPro:{
          type:Array,
          default :[
            {name:"月牙06山水知音",oldPrice:"5980",newPrice:"5180",src:require("../../assets/images/products/base/01.png")},
            {name:"月牙06山水知音",oldPrice:"5980",newPrice:"5180",src:require("../../assets/images/products/base/01.png")},
            {name:"月牙06山水知音",oldPrice:"5980",newPrice:"5180",src:require("../../assets/images/products/base/01.png")},
            {name:"月牙06山水知音",oldPrice:"5980",newPrice:"5180",src:require("../../assets/images/products/base/01.png")},
          ]
        },
        curImg:{
          type:Object,
          default:{}
        }
      },
        data(){
            return {
              products:[
                {name:"月牙06山水知音",oldPrice:"5980",newPrice:"5180",src:require("../../assets/images/products/base/01.png")},
                {name:"月牙06山水知音",oldPrice:"5980",newPrice:"5180",src:require("../../assets/images/products/base/01.png")},
                {name:"月牙06山水知音",oldPrice:"5980",newPrice:"5180",src:require("../../assets/images/products/base/01.png")},
                {name:"月牙06山水知音",oldPrice:"5980",newPrice:"5180",src:require("../../assets/images/products/base/01.png")},
              ]
            }
        },
  components:{
    productlist,Foot
  }
    }
</script>


<style scoped>
  .md_bananer{
    width: 100%;
    height: 180px;
    background-image: url("http://www.guoyuechina.com/uploads/170327/1-1F32G4414M27.jpg");
    background-repeat: no-repeat;
    background-size: contain;
  }
  .md_bananer img{
    width: 100%;
    height: 100%;
  }
  .main{
    width: 100%;
  }
  .products{
    overflow-x: hidden;
    overflow-y: scroll;
    margin-right: -20px;
    width: calc(100% + 20px)
  }
  .products ul{
    overflow: auto;
    width: 100%;
  }

</style>
