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

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition){
   return {y:0}
    },
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/baidu',
      name: 'baidu',
      beforeEnter() {window.location.href = 'http://www.baidu.com'}
    },
    {
      path:'/zitherType',
      name:'zitheType',
      component:zitherType
    },
    {
      path:'/jeanType',
      name:'jeanType',
      component:jeanType
    },
    {
      path: '/about',
      name: 'about',
      component:about
    },
    {
      path:'/zither',
      name:'zither',
      component:zither
    },
    {
      path:'/jean',
      name:'jean',
      component:jean
    },
    {
      path:'/discount',
      name:'discount',
      component:discount
    },
    {
      path:'/addresst',
      name:'address',
      component:address
    },
  ]
})
