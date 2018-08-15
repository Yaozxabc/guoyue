<template>
  <div>
    <mt-navbar v-model="selected2" class="NavList">
      <mt-tab-item id="sel1"  @click.native="tab">初级</mt-tab-item>
      <mt-tab-item id="sel2" @click.native="tab">中级</mt-tab-item>
      <mt-tab-item id="sel3"  @click.native="tab">高级</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected2">
      <mt-tab-container-item id="sel1" :class="['animated',{bounceInRight:ok}]">
        <productlist :products="products.NO1" @select="getPage"></productlist>
      </mt-tab-container-item>
      <mt-tab-container-item id="sel2" :class="['animated',{bounceInRight:ok}]">
        <productlist :products="products.NO2" @select="getPage"></productlist>
      </mt-tab-container-item >
      <mt-tab-container-item id="sel3" :class="['animated',{bounceInRight:ok}]">
        <productlist :products="products.NO3" @select="getPage"></productlist>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script type="text/ecmascript-6">
  import productlist from '../common/productlist.vue'
    export default{
      props:{
        products:{
          type:Object,
          default:{}
        }
      },
        data(){
            return {
              selected2:"sel1",
              ok:false
            }
        },
  methods:{
    tab(){
      this.ok=true;
    },
    getPage(product){
      this.$emit('select',product)
    }
  },
        components:{
          productlist
        }
    }
</script>


<style scoped>
  .NavList{
    width: 620px;
    height: 40px;
    margin: 0 auto;
    background: #c9391f;
  }
  .NavList a{
    color: #ffffff;
  }
  .NavList .is-selected{
    background: #fff;
    color:  #c9391f;;
  }
</style>
