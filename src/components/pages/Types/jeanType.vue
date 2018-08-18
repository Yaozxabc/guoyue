<template>
<div>
  <slider-type :list="jeanlist" :productlist="jeanProductlist" :offsetT="topVal"></slider-type>
</div>
</template>

<script type="text/ecmascript-6">
  import SliderType from '@/components/pages/SliderType.vue'
    export default{
        data(){
            return {
              topVal:false,
              jeanlist:[
                {id:"01",value:"仲尼式",path:"",src:require('@/assets/images/bananer/TypeBan/01.png')},
                {id:"02",value:"伏羲式",path:"",src:require('@/assets/images/bananer/TypeBan/02.png')},
                {id:"03",value:"列子式",path:"",src:require('@/assets/images/bananer/TypeBan/03.png')},
                {id:"04",value:"连珠式",path:"",src:require('@/assets/images/bananer/TypeBan/04.png')},
                {id:"05",value:"灵机式",path:"",src:require('@/assets/images/bananer/TypeBan/05.png')},
                {id:"06",value:"落霞式",path:"",src:require('@/assets/images/bananer/TypeBan/06.png')},
                {id:"07",value:"伶官式",path:"",src:require('@/assets/images/bananer/TypeBan/07.png')},
                {id:"08",value:"蕉叶式",path:"",src:require('@/assets/images/bananer/TypeBan/08.png')},
                {id:"09",value:"神农式",path:"",src:require('@/assets/images/bananer/TypeBan/09.png')},
                {id:"10",value:"响泉式",path:"",src:require('@/assets/images/bananer/TypeBan/10.png')},
                {id:"11",value:"凤势式",path:"",src:require('@/assets/images/bananer/TypeBan/11.png')}
              ],
              jeanProductlist: [
                [{id:'01',
                  name: "孔子读易",
                  oldPrice: "5980",
                  newPrice: "5180",
                  src: require("@/assets/images/products/jean/01.jpg")
                },
                  {id:'02',
                    name: "阳关三叠",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require("@/assets/images/products/jean/02.jpg")
                  },
                  {id:'03',
                    name: "归去来辞",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require("@/assets/images/products/jean/03.jpg")
                  },
                  {id:'04',
                    name: "秋夜长",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: require("@/assets/images/products/jean/04.jpg")
                  },
                ],
                [
                  {id:'05',
                    name: "渴望",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: require("@/assets/images/products/jean/05.jpg")
                  },
                  {id:'06',
                    name: "双核潮阳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require("@/assets/images/products/jean/06.jpg")
                  },
                  {id:'07',
                    name: "极乐吟",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require("@/assets/images/products/jean/07.jpg")
                  },
                  {id:'08',
                    name: "良宵引",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: require("@/assets/images/products/jean/08.jpg")
                  },
                ],
                [
                  {id:'09',
                    name: "精忠词",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: require("@/assets/images/products/jean/09.jpg")
                  },
                  {id:'10',
                    name: "玉楼春晓",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require("@/assets/images/products/jean/10.jpg")
                  },
                  {id:'011',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require("@/assets/images/products/jean/11.jpg")
                  },
                  {id:'012',
                    name: "小草",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: require("@/assets/images/products/jean/12.jpg")
                  },
                ],
                [
                  {id:'013',
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: "https://s1.ax1x.com/2018/07/22/PGKUBQ.png"
                  },
                  {id:'014',
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: "https://s1.ax1x.com/2018/07/22/PGKa7j.png"
                  },
                  {id:'015',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: "https://s1.ax1x.com/2018/07/22/PGKNng.png"
                  },
                  {id:'016',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: "https://s1.ax1x.com/2018/07/22/PGKYjS.png"
                  },
                ],
                [
                  {id:'017',
                    name: "520定制古筝",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: require('@/assets/images/products/best/01.png')
                  },
                  {id:'018',
                    name: "双核潮阳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require('@/assets/images/products/best/02.png')
                  },
                  {id:'019',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require('@/assets/images/products/best/03.png')
                  },
                  {id:'020',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: require('@/assets/images/products/best/03.png')
                  },
                ],
                [
                  {id:'021',
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: require('@/assets/images/products/moderm/05.png')
                  },
                  {id:'022',
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require('@/assets/images/products/moderm/02.png')
                  },
                  {id:'023',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require('@/assets/images/products/moderm/03.png')
                  },
                  {id:'024',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: require('@/assets/images/products/moderm/04.png')
                  },
                ],
                [
                  {id:'025',
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: "https://s1.ax1x.com/2018/07/22/PGKUBQ.png"
                  },
                  {id:'026',
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: "https://s1.ax1x.com/2018/07/22/PGKa7j.png"
                  },
                  {id:'027',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: "https://s1.ax1x.com/2018/07/22/PGKNng.png"
                  },
                  {id:'028',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: "https://s1.ax1x.com/2018/07/22/PGKYjS.png"
                  },
                ],
                [
                  {id:'029',
                    name: "520定制古筝",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: require('@/assets/images/products/best/01.png')
                  },
                  {id:'030',
                    name: "双核潮阳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require('@/assets/images/products/best/02.png')
                  },
                  {id:'031',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require('@/assets/images/products/best/03.png')
                  },
                  {id:'032',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: require('@/assets/images/products/best/03.png')
                  },
                ],
                [
                  {id:'033',
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: "https://s1.ax1x.com/2018/07/22/PGKUBQ.png"
                  },
                  {id:'034',
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: "https://s1.ax1x.com/2018/07/22/PGKa7j.png"
                  },
                  {id:'035',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: "https://s1.ax1x.com/2018/07/22/PGKNng.png"
                  },
                  {id:'036',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: "https://s1.ax1x.com/2018/07/22/PGKYjS.png"
                  },
                ],
                [
                  {id:'037',
                    name: "520定制古筝",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: require('@/assets/images/products/best/01.png')
                  },
                  {id:'038',
                    name: "双核潮阳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require('@/assets/images/products/best/02.png')
                  },
                  {id:'039',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require('@/assets/images/products/best/03.png')
                  },
                  {id:'040',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: require('@/assets/images/products/best/03.png')
                  },
                ],
                [
                  {id:'041',
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: require('@/assets/images/products/moderm/05.png')
                  },
                  {id:'042',
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require('@/assets/images/products/moderm/02.png')
                  },
                  {id:'043',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require('@/assets/images/products/moderm/03.png')
                  },
                  {id:'044',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: require('@/assets/images/products/moderm/04.png')
                  },
                ]
              ]
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
