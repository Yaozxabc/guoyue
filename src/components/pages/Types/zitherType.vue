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
                    id:'01',
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: "https://s1.ax1x.com/2018/07/22/PGKUBQ.png"
                  },
                  {
                    id:'02',
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: "https://s1.ax1x.com/2018/07/22/PGKa7j.png"
                  },
                  {
                    id:'03',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: "https://s1.ax1x.com/2018/07/22/PGKNng.png"
                  },
                  {
                    id:'04',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: "https://s1.ax1x.com/2018/07/22/PGKYjS.png"
                  },
                ],
                [
                  {
                    id:'05',
                    name: "520定制古筝",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: require('@/assets/images/products/best/01.png')
                  },
                  {
                    id:'06',
                    name: "双核潮阳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require('@/assets/images/products/best/02.png')
                  },
                  {
                    id:'07',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require('@/assets/images/products/best/03.png')
                  },
                  {
                    id:'08',name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: require('@/assets/images/products/best/03.png')
                  },
                ],
                [
                  {
                    id:'09',
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: require('@/assets/images/products/moderm/05.png')
                  },
                  {
                    id:'010',
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require('@/assets/images/products/moderm/02.png')
                  },
                  {
                    id:'011',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require('@/assets/images/products/moderm/03.png')
                  },
                  {
                    id:'012',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: require('@/assets/images/products/moderm/04.png')
                  },
                ],
                [
                  {
                    id:'013',
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: "https://s1.ax1x.com/2018/07/22/PGKUBQ.png"
                  },
                  {
                    id:'014',
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: "https://s1.ax1x.com/2018/07/22/PGKa7j.png"
                  },
                  {
                    id:'015',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: "https://s1.ax1x.com/2018/07/22/PGKNng.png"
                  },
                  {
                    id:'016',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: "https://s1.ax1x.com/2018/07/22/PGKYjS.png"
                  },
                ],
                [
                  {
                    id:'017',
                    name: "520定制古筝",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: require('@/assets/images/products/best/01.png')
                  },
                  {
                    id:'018',
                    name: "双核潮阳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: require('@/assets/images/products/best/02.png')
                  },
                  {
                    id:'019',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: require('@/assets/images/products/best/03.png')
                  },
                  {
                    id:'020',
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
                    src: "http://www.guoyueyihao.com/uploads/allimg/180724/2-1PH41152050-L.jpg"
                  },
                  {id:'022',
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: "http://www.guoyueyihao.com/uploads/allimg/180724/2-1PH41146120-L.jpg"
                  },
                  {id:'023',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: "http://www.guoyueyihao.com/uploads/150310/2-1503101T44X26.jpg"
                  },
                  {id:'024',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: "http://www.guoyueyihao.com/uploads/150120/2-150120150925356.jpg"
                  },
                ],
                [
                  {id:'025',
                    name: "月牙06山水知音",
                    oldPrice: "5980",
                    newPrice: "5180",
                    src: "http://www.guoyueyihao.com/uploads/180717/1-1PGG40K4531.jpg"
                  },
                  {id:'026',
                    name: "鼎韵903午后清芳",
                    oldPrice: "5800",
                    newPrice: "4880",
                    src: "http://www.guoyueyihao.com/uploads/180717/1-1PGG40T4155.jpg"
                  },
                  {id:'027',
                    name: "敦煌694蕉床夜月",
                    oldPrice: "4980",
                    newPrice: "3180",
                    src: "http://www.guoyueyihao.com/uploads/180615/2-1P615102643243.jpg"
                  },
                  {id:'028',
                    name: "鼎韵903红木竹简",
                    oldPrice: "2880",
                    newPrice: "1480",
                    src: "http://www.guoyueyihao.com/uploads/180614/2-1P6141Z144628.jpg"
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
