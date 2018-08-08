<template>
  <SortType :products="jeanProducts" :bananer="bananer"></SortType>
</template>

<script type="text/ecmascript-6">
  import SortType from '@/components/pages/SortType.vue'
    export default{
        data(){
            return {
              topVal:false,
              jeanProducts:[
                {name:"石上流泉",pushTime:"2017-11-21",star:"5",oldPrice:"2180",newPrice:"1980",count:'31',src:require("@/assets/images/products/jean/01.jpg")},
                {name:"神人畅",pushTime:"2014-08-01",star:"3",oldPrice:"1680",newPrice:"1580",count:'146',src:require("@/assets/images/products/jean/02.jpg")},
                {name:"酒狂",pushTime:"2016-10-23",star:"4",oldPrice:"1380",newPrice:"1280",count:'164',src:require("@/assets/images/products/jean/03.jpg")},
                {name:"韦编三绝",pushTime:"2017-12-30",star:"5",oldPrice:"1280",newPrice:"880",count:'335',src:require("@/assets/images/products/jean/04.jpg")},
                {name:"朱雀古筝520古筝",pushTime:"2018-07-09",star:"2",oldPrice:"1080",newPrice:"780",count:'136',src:require("@/assets/images/products/jean/05.jpg")},
                {name:"风雷引",pushTime:"2017-04-09",star:"4",oldPrice:"980",newPrice:"698",count:'99',src:require("@/assets/images/products/jean/06.jpg")},
                {name:"秋江夜泊",pushTime:"2015-07-03",star:"1",oldPrice:"1380",newPrice:"970",count:'47',src:require("@/assets/images/products/jean/07.jpg")},
                {name:"映山红",pushTime:"2016-06-03",star:"3",oldPrice:"1980",newPrice:"1480",count:'42',src:require("@/assets/images/products/jean/08.jpg")}
              ],
              bananer:{id:"01",value:'古筝',imgSrc:require("@/assets/images/bananer/lt_ban/02.jpg")}
            }
        },
  components:{
    SortType
  }
    }
</script>


<style scoped>

</style>
