<template>
  <div class="content">
    <div class="warn">只要发送国乐一号到10086就可以获得100元优惠券</div>
    <section>
      <RoundMap></RoundMap>
    </section>
   <section>
    <Nav></Nav>
   </section>
    <section>
     <ScrollAd></ScrollAd>
    </section>
    <section>
      <MainType></MainType>
    </section>
    <section>
      <div class="md_bananer">
        <img :src="md_ban.src" :alt="md_ban.value"/>
      </div>
    </section>
    <section>
      <LevelTab :products="productlist" @select="selectPage"></LevelTab>
    </section>
    <section>
      <div class="video">
        <video src="../../assets/videos/show.mp4" controls="controls" preload="auto" poster="https://s1.ax1x.com/2018/07/22/PGQedH.jpg">你的浏览器不支持video</video>
      </div>
    </section>
    <section>
      <div class="lt_bananer">
        <img v-lazy="lt_ban.src" :alt="lt_ban.value"/>
      </div>
    </section>
    <section>
      <div class="Promotion">
      <h4>促销特价</h4>
      <productlist :products="productlist.NO1" @select="selectPage"></productlist>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import Bus from '@/assets/scripts/bus.js'
  import RoundMap from '../common/RoundMap.vue'
  import Nav from '../common/Nav.vue'
  import MainType from '../common/MainType.vue'
  import ScrollAd from '../common/ScrollAd.vue'
  import LevelTab from '../common/LevelTab.vue'
  import productlist from '../common/productlist.vue'
    export default{
        data(){
            return {
              md_ban:{id:'01',value:'古琴',src:require('../../assets/images/bananer/md_ban/01.png')},
              lt_ban:{id:'02',value:'古筝',src:require('../../assets/images/bananer/lt_ban/01.png')},
              productlist: {
                "NO1": [
                  {id:'01',
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: "https://s1.ax1x.com/2018/07/22/PGKUBQ.png",
                    count:'30'
                  },
                  {id:'02',
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: "https://s1.ax1x.com/2018/07/22/PGKa7j.png",
                    count:'366'
                  },
                  { id:'03',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: "https://s1.ax1x.com/2018/07/22/PGKNng.png"
                  },
                  {id:'04',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: "https://s1.ax1x.com/2018/07/22/PGKYjS.png",
                    count:'67'
                  },
                ],
                "NO2": [
                  {id:'05',
                    name: "520定制古筝",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: require('../../assets/images/products/best/01.png'),
                    count:'360'
                  },
                  {id:'06',
                    name: "双核潮阳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require('../../assets/images/products/best/02.png'),
                    count:'363'
                  },
                  {id:'07',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require('../../assets/images/products/best/03.png'),
                    count:'336'
                  },
                  {id:'08',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: require('../../assets/images/products/best/03.png'),
                    count:'346'
                  },
                ],
                "NO3": [
                  {id:'09',
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: require('../../assets/images/products/moderm/05.png'),
                    count:'26'
                  },
                  {id:'010',
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require('../../assets/images/products/moderm/02.png'),
                    count:'136'
                  },
                  {id:'011',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require('../../assets/images/products/moderm/03.png'),
                    count:'316'
                  },
                  {id:'012',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: require('../../assets/images/products/moderm/04.png'),
                    count:'36'
                  },
                ]
              }
            }
        },
  created(){

  },
  mounted(){
    let self=this
    Bus.$on('select',(product)=>{
      self.selectPage(product)
    })
  },
  methods:{
    selectPage(product){
      this.$router.push({
        path:`/product/${product.id}`,
        params: {id:product.id}
      })
    }
  },
  components:{
    RoundMap,productlist,Nav,MainType,ScrollAd,LevelTab
  }
    }
</script>


<style scoped>
  .content{
    background: #ffffff;
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

  .Promotion h4{
    padding: 5px 8px;
    font-size: 24px;
    font-weight: bold;
    color: #C21F39;
  }
  .warn{
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 18px;
    text-align: center;
    color: orange;
  }
</style>
