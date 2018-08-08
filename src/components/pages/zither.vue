<template>
  <SortType :products="zitherProducts" :bananer="bananer"></SortType>
</template>

<script type="text/ecmascript-6">
  import SortType from '@/components/pages/SortType.vue'
    export default{
        data(){
            return {
              zitherProducts:[
                {name:"月牙06山水知音",pushTime:"2017-11-21",star:"5",oldPrice:"1280",newPrice:"880",count:'61',src:require("@/assets/images/products/base/01.png")},
                {name:"鼎韵903午后清芳",pushTime:"2014-08-01",star:"3",oldPrice:"680",newPrice:"580",count:'126',src:require("@/assets/images/products/base/02.png")},
                {name:"敦煌694k蕉窗夜雨",pushTime:"2016-10-23",star:"4",oldPrice:"980",newPrice:"680",count:'64',src:require("@/assets/images/products/base/03.png")},
                {name:"鼎韵903红木竹简",pushTime:"2017-12-30",star:"5",oldPrice:"1980",newPrice:"1780",count:'35',src:require("@/assets/images/products/base/04.png")},
                {name:"朱雀古筝520古筝",pushTime:"2018-07-09",star:"2",oldPrice:"7280",newPrice:"6580",count:'126',src:require("@/assets/images/products/best/01.png")},
                {name:"敦煌古筝双鹤朝阳",pushTime:"2017-04-09",star:"4",oldPrice:"380",newPrice:"180",count:'83',src:require("@/assets/images/products/best/02.png")},
                {name:"月牙06山水知音",pushTime:"2015-07-03",star:"1",oldPrice:"1180",newPrice:"880",count:'75',src:require("@/assets/images/products/best/03.png")},
                {name:"鼎韵903红木竹简",pushTime:"2017-12-30",star:"5",oldPrice:"1980",newPrice:"1780",count:'35',src:require("@/assets/images/products/base/04.png")},
                {name:"朱雀古筝520古筝",pushTime:"2018-07-09",star:"2",oldPrice:"7280",newPrice:"6580",count:'126',src:require("@/assets/images/products/best/01.png")},
                {name:"敦煌古筝双鹤朝阳",pushTime:"2017-04-09",star:"4",oldPrice:"380",newPrice:"180",count:'83',src:require("@/assets/images/products/best/02.png")},
                {name:"月牙06山水知音",pushTime:"2015-07-03",star:"1",oldPrice:"1180",newPrice:"880",count:'75',src:require("@/assets/images/products/best/03.png")}
              ],
              bananer:{id:"01",value:'古筝',imgSrc:require("@/assets/images/bananer/lt_ban/01.png")}
            }
        },
  components:{
    SortType
  }
    }
</script>


<style scoped>

</style>
