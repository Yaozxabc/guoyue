<template>
<div class="MainBgColor">
  <div class="form">
    <i class="iconfont icon-return"></i>
    <span class="searchInput">
      <input type="text" value="" placeholder="敦煌"/>
      <i class="iconfont icon-search"></i>
    </span>
    <i class="iconfont icon-menu"></i>
  </div>
  <div class="banan_lt">
    <img v-lazy="bananer.imgSrc" :alt="bananer.value"/>
  </div>
  <div class="MainSort">
    <ul>
      <li v-for="(item,index) in sortlist" :class="{active:nowIndex==index}" @click="Sort(index,item.type)">{{item.value}}
        <i :class="[{active_arrow_bottom:nowIndex==index && sort},{active_arrow_top:nowIndex==index && !sort}]"></i>
      </li>
    </ul>
  </div>
  <div>
    <productlist :products="curlist" :isShow="true"></productlist>
    <pageNum :list="products" @onChange="tabPage"></pageNum>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  import productlist from '@/components/common/productlist'
    export default{
      props:{
        products:{
          type:Array,
          default:[]
        },
        bananer:{
          type:Object,
          default:{}
        }
      },
        data(){
            return {
              start:0,
              end:4,
              nowIndex:0,
              sort:true,
              sortlist:[
                {id:'01',value:'销量',type:'count'},
                {id:'02',value:'上新',type:'pushTime'},
                {id:'03',value:'价格',type:'newPrice'},
                {id:'04',value:'评价',type:'star'}
              ],
              active:true,
              isShow:true,
              curlist:[]
            }
        },
  methods:{
    Sort(index,type){
      this.nowIndex=index;
      var oType=type.toString();
      this.products.sort((n1,n2)=>{
        let a1=n1[oType];
        let a2=n2[oType];
        return a1-a2
      })
      if(!this.sort){
        this.products.reverse()
      }
      this.tabPage()
      this.sort=!this.sort
    },
    tabPage(PageNum){
      if(PageNum){
        this.start=PageNum.startNum;
        this.end=PageNum.endNum;
      }
      this.curlist=this.products.slice(this.start,this.end)
    }
  },
  components:{
    productlist
  },
  mounted(){
    this.tabPage()
  }
    }
</script>


<style scoped lang="scss">
.form{
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
  .icon-return,.icon-search,.icon-menu{
    position: absolute;
    width: 40px;
    height: 40px;
    line-height: 40px;
    color: $font-color;
    font-size: 25px;
    text-align: center;
  }
.icon-return{
  left: 0;
  top: 0;
}
  .icon-search{
    width: 30px;
    height: 30px;
    right: 0;
    top: 0;
  }
  .icon-menu{
    top: 0;
    right: 0;
  }
  .searchInput{
    position: absolute;
    left: calc(50% - 200px);
    width: 440px;
    height: 30px;
    padding: 0;
    margin-top: 5px;
    border-radius: 3px;
    border:1px solid #666;
    background: #fff;
    overflow: hidden;
  }
  .searchInput input{
    display: block;
    width: 400px;
    height: 28px;
    line-height: 28px;
    padding: 1px;
    border: none;
    text-align: left;
    color: $font-color;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .banan_lt{
    width: 100%;
    height: auto;
  }
  .banan_lt img{
    width: 100%;
  }
  .MainSort ul{
    display: flex;
    border-bottom: 1px solid #c7aa5a;;
  }
  .MainSort li{
    flex: 1;
    height: 40px;
    left: 40px;
    font-size: 22px;
    color: #c7aa5a;
    text-align: center;
  }
  .MainSort li i{
    display: inline-block;
  }
  .MainSort .active{
    color: #d60f0f;
    border-bottom: 5px solid #d60f0f;
  }
</style>
