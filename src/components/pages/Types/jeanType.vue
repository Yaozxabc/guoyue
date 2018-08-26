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
                {id:"01",value:"仲尼式",path:"",src:'http://www.guoyueyihao.com/templets/images/banner_02.jpg'},
                {id:"02",value:"伏羲式",path:"",src:'http://www.guoyueyihao.com/ueditor/php/upload/image/20150310/1425970960112515.jpg'},
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
                [
                  {id:'01',
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
                    src: "http://www.guoyueyihao.com/uploads/160307/2-16030G1263U28.jpg"
                  },
                  {id:'014',
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: "http://www.guoyueyihao.com/uploads/170929/2-1F9291A202V8.jpg"
                  },
                  {id:'015',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: "http://www.guoyueyihao.com/uploads/141009/1-1410091J600605.jpg"
                  },
                  {id:'016',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: "http://www.guoyueyihao.com/uploads/160307/2-16030G12445510.jpg"
                  },
                ],
                [
                  {id:'017',
                    name: "520定制古筝",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: "http://www.guoyueyihao.com/uploads/141009/1-1410091KSB14.jpg"
                  },
                  {id:'018',
                    name: "双核潮阳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: "http://www.guoyueyihao.com/uploads/160307/2-16030G12K2U2.jpg"
                  },
                  {id:'019',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: "http://www.guoyueyihao.com/uploads/160307/2-16030G109512Y.jpg"
                  },
                  {id:'020',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: "http://www.guoyueyihao.com/uploads/160307/2-16030G12U4C9.jpg"
                  },
                ],
                [
                  {id:'021',
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: "http://www.guoyueyihao.com/uploads/141009/1-14100920022X29.jpg"
                  },
                  {id:'022',
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: "http://www.guoyueyihao.com/uploads/141009/1-1410091JT6140.jpg"
                  },
                  {id:'023',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: "http://www.guoyueyihao.com/uploads/160307/2-16030G10P61W.jpg"
                  },
                  {id:'024',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: "http://www.guoyueyihao.com/uploads/141009/1-141009200352624.jpg"
                  },
                ],
                [
                  {id:'025',
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: "http://www.guoyueyihao.com/uploads/160307/2-16030G129403a.jpg"
                  },
                  {id:'026',
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: "http://www.guoyueyihao.com/uploads/160307/2-16030G11251940.jpg"
                  },
                  {id:'027',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: "http://www.guoyueyihao.com/uploads/160307/2-16030G1311L91.jpg"
                  },
                  {id:'028',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: "http://www.guoyueyihao.com/uploads/160307/2-16030G13225310.jpg"
                  },
                ],
                [
                  {id:'029',
                    name: "520定制古筝",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: "http://www.guoyueyihao.com/uploads/180615/2-1P6151040592I.jpg"
                  },
                  {id:'030',
                    name: "双核潮阳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: "http://www.guoyueyihao.com/uploads/180717/1-1PGG41025154.jpg"
                  },
                  {id:'031',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: "http://www.guoyueyihao.com/uploads/180731/2-1PI1144I24C.jpg"
                  },
                  {id:'032',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: "http://www.guoyueyihao.com/uploads/180731/2-1PI114423aE.jpg"
                  },
                ],
                [
                  {id:'033',
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: "http://www.guoyueyihao.com/uploads/150330/2-150330134041626.jpg"
                  },
                  {id:'034',
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: "http://www.guoyueyihao.com/uploads/150330/2-150330134041626.jpg"
                  },
                  {id:'035',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: "http://www.guoyueyihao.com/uploads/150330/2-150330115950B9.jpg"
                  },
                  {id:'036',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: "http://www.guoyueyihao.com/uploads/150330/2-150330120JOS.jpg"
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
