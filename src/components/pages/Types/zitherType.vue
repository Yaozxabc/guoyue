<template>
  <div>
    <slider-type :list="zitherlist" :productlist="zitherProductlist" :offsetT="topVal"></slider-type>
  </div>
</template>

<script type="text/ecmascript-6">
  import SliderType from '@/components/pages/SliderType.vue'
    export default{
        data(){
            return {
              zitherlist:[
                {id:"01",value:"月牙",src:require('@/assets/images/bananer/TypeBan/01.png')},
                {id:"02",value:"敦煌",src:require('@/assets/images/bananer/TypeBan/02.png')},
                {id:"03",value:"宏盛",src:require('@/assets/images/bananer/TypeBan/03.png')},
                {id:"04",value:"朱雀",src:require('@/assets/images/bananer/TypeBan/04.png')},
                {id:"05",value:"鼎韵",src:require('@/assets/images/bananer/TypeBan/05.png')},
                {id:"06",value:"碧泉",src:require('@/assets/images/bananer/TypeBan/06.png')},
                {id:"07",value:"琴园",src:require('@/assets/images/bananer/TypeBan/07.png')},
                {id:"08",value:"龙凤",src:require('@/assets/images/bananer/TypeBan/08.png')},
                {id:"09",value:"金韵",src:require('@/assets/images/bananer/TypeBan/09.png')},
                {id:"10",value:"天艺",src:require('@/assets/images/bananer/TypeBan/10.png')},
                {id:"11",value:"配件",src:require('@/assets/images/bananer/TypeBan/11.png')}
              ],
              zitherProductlist: [
                [
                  {
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: "https://s1.ax1x.com/2018/07/22/PGKUBQ.png"
                  },
                  {
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: "https://s1.ax1x.com/2018/07/22/PGKa7j.png"
                  },
                  {
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: "https://s1.ax1x.com/2018/07/22/PGKNng.png"
                  },
                  {
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: "https://s1.ax1x.com/2018/07/22/PGKYjS.png"
                  },
                ],
                [
                  {
                    name: "520定制古筝",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: require('@/assets/images/products/best/01.png')
                  },
                  {
                    name: "双核潮阳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require('@/assets/images/products/best/02.png')
                  },
                  {
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require('@/assets/images/products/best/03.png')
                  },
                  {
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: require('@/assets/images/products/best/03.png')
                  },
                ],
                [
                  {
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: require('@/assets/images/products/moderm/05.png')
                  },
                  {
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require('@/assets/images/products/moderm/02.png')
                  },
                  {
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require('@/assets/images/products/moderm/03.png')
                  },
                  {
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: require('@/assets/images/products/moderm/04.png')
                  },
                ],                 [
                  {
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: "https://s1.ax1x.com/2018/07/22/PGKUBQ.png"
                  },
                  {
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: "https://s1.ax1x.com/2018/07/22/PGKa7j.png"
                  },
                  {
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: "https://s1.ax1x.com/2018/07/22/PGKNng.png"
                  },
                  {
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: "https://s1.ax1x.com/2018/07/22/PGKYjS.png"
                  },
                ],
                [
                  {
                    name: "520定制古筝",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: require('@/assets/images/products/best/01.png')
                  },
                  {
                    name: "双核潮阳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require('@/assets/images/products/best/02.png')
                  },
                  {
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require('@/assets/images/products/best/03.png')
                  },
                  {
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: require('@/assets/images/products/best/03.png')
                  },
                ],
                [
                  {
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: require('@/assets/images/products/moderm/05.png')
                  },
                  {
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require('@/assets/images/products/moderm/02.png')
                  },
                  {
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require('@/assets/images/products/moderm/03.png')
                  },
                  {
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: require('@/assets/images/products/moderm/04.png')
                  },
                ],                 [
                  {
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: "https://s1.ax1x.com/2018/07/22/PGKUBQ.png"
                  },
                  {
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: "https://s1.ax1x.com/2018/07/22/PGKa7j.png"
                  },
                  {
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: "https://s1.ax1x.com/2018/07/22/PGKNng.png"
                  },
                  {
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: "https://s1.ax1x.com/2018/07/22/PGKYjS.png"
                  },
                ],
                [
                  {
                    name: "520定制古筝",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: require('@/assets/images/products/best/01.png')
                  },
                  {
                    name: "双核潮阳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require('@/assets/images/products/best/02.png')
                  },
                  {
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require('@/assets/images/products/best/03.png')
                  },
                  {
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: require('@/assets/images/products/best/03.png')
                  },
                ],
                [
                  {
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: require('@/assets/images/products/moderm/05.png')
                  },
                  {
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require('@/assets/images/products/moderm/02.png')
                  },
                  {
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require('@/assets/images/products/moderm/03.png')
                  },
                  {
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: require('@/assets/images/products/moderm/04.png')
                  },
                ]
              ],
              topVal:false
            }
        },
  methods:{
    onScroll(){
      if($(window).scrollTop()>=$('.top_hd').height()){
        this.topVal=true;
      }else{
        this.topVal=false;
      }
    }
  },
  computed:{

  },
  components:{
    SliderType
  },
  mounted(){
    window.addEventListener("scroll",()=>{
      this.onScroll()
    })
  }
    }
</script>


<style scoped>

</style>
