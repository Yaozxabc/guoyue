import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/pages/index'
import zitherType from '@/components/pages/Types/zitherType'
import jeanType from '@/components/pages/Types/jeanType'
import zither from '@/components/pages/zither'
import jean from '@/components/pages/jean'
import about from '@/components/pages/about'
import discount from '@/components/pages/discount'
import address from '@/components/pages/address'
import product from '@/components/pages/product'
import article from '@/components/pages/TeachArticle'
import ProductDetail from '@/components/pages/ProductDetail'

Vue.use(Router)

const  router=new Router({
  scrollBehavior(to, from, savedPosition){
   return {y:0}
    },
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{title:'主页'}
    },
    {
      path: '/baidu',
      name: 'baidu',
      beforeEnter() {window.location.href = 'http://www.baidu.com'}
    },
    {
      path: '/article',
      name: 'article',
      component:article
    },
    {
      path:'/zitherType',
      name:'zitheType',
      component:zitherType,
      meta:{title:'古筝种类'}
    },
    {
      path:'/jeanType',
      name:'jeanType',
      component:jeanType,
      meta:{title:'古琴种类'}
    },
    {
      path: '/about',
      name: 'about',
      component:about
    },
    {
      path:'/zither',
      name:'zither',
      component:zither,
      meta:{title:'古筝列表'}
    },
    {
      path:'/jean',
      name:'jean',
      component:jean,
      meta:{title:'古琴列表'}
    },
    {
      path:'/discount',
      name:'discount',
      component:discount,
      meta:{title:'优惠享不停'}
    },
    {
      path:'/address',
      name:'address',
      component:address,
      meta:{title:'来店路线'}
    },
    {
      path:'/product',
      name:'product',
      component:product,
      meta:{title:'商品列表'},
      children:[
        {
          name:'detail',
          path:':id',
        component:ProductDetail
        }
      ]
    },
  ]
});
router.beforeEach((to,from,next)=>{
  let documentTitle='国乐一号';
  to.matched.forEach((path)=>{
    if(path.meta.title){
      documentTitle += `-${path.meta.title}`;
    }
  })
  document.title=documentTitle;
  next();
})
export default router
