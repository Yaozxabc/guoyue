<template>
<div class="about_warp">
  <h3 class="warn">只要发送国乐一号到10086就可以获得100元优惠券</h3>
  <h2>放心的价格，贴心的服务</h2>
  <div class="img_section" v-for="img in imglist">
    <a href="javascript:">
      <img :src="img.src" :alt="img.value"/>
    </a>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  import jsonp from '@/assets/scripts/jsonp.js'

    export default{
      data(){
      return {
        text:"",
        imglist:[
          {id:'01',value:'',src:'http://www.guoyueyihao.com/uploads/allimg/160629/1-160629152RD17.jpg',linkhref:''},
          {id:'02',value:'',src:'http://www.guoyueyihao.com/uploads/allimg/160629/1-160629152UJR.jpg',linkhref:''},
          {id:'03',value:'',src:'http://www.guoyueyihao.com/uploads/allimg/160629/1-160629152ZJ93.jpg',linkhref:''},
          {id:'04',value:'',src:'http://www.guoyueyihao.com/uploads/allimg/160629/1-160629152ZJ93.jpg',linkhref:''},
          {id:'05',value:'',src:'http://www.guoyueyihao.com/uploads/allimg/160629/1-16062915291H12.jpg',linkhref:''},
          {id:'06',value:'',src:'http://www.guoyueyihao.com/uploads/allimg/170711/1-1FG1111603M7.jpg',linkhref:''},
          {id:'07',value:'',src:'http://www.guoyueyihao.com/uploads/allimg/160629/1-1606291529351V.jpg',linkhref:''},
          {id:'08',value:'',src:'http://www.guoyueyihao.com/uploads/allimg/160629/1-160629152943Z9.jpg',linkhref:''},
          {id:'09',value:'',src:'http://www.guoyueyihao.com/uploads/170422/1-1F42214344M20.jpg',linkhref:''},
          {id:'10',value:'',src:'http://www.guoyueyihao.com/uploads/allimg/160629/1-1606291530035N.jpg',linkhref:''}
        ]
      }
    },
  created(){

  },
    methods:{
      getInfo(){
        const url="https://u.y.qq.com/cgi-bin/musicu.fcg?";
        const Comparams={
          g_tk:5381,
          loginUin:0,
          hostUin:0,
          format:'jsonp',
          inCharset:'utf8',
          outCharset:'utf-8',
          notice:0,
          platform:'yqq',
          needNewCode:0,
          data:'{"comm":{"ct":24,"cv":10000},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}}'
        }
        const options={
          param: 'callback'
        }

        const data=Object.assign({},Comparams)
jsonp(url,data,options).then((res)=>{
          console.log(res.singerList.data.singerlist[20].country)
  this.text=res.singerList.data.singerlist
        })
      }
    }
    }
</script>


<style scoped>
.about{
  min-height: 600px;
}
.warn{
  width: 100%;
  height: 44px;
  line-height: 44px;
  font-size: 18px;
  text-align: center;
  color: orange;
}
h2{
  height: 64px;
  line-height: 64px;
  background: #fff;
  font-size:24px;
  text-align: center;
  font-weight: bold;
}
  .img_section{
    width: 100%;
  }
  .img_section img{
    width: 100%;
  }
</style>
