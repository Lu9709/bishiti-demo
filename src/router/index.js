import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path:'/home',
      component:()=>import("@/views/Home")
    },
    {
      path: '/rank',
      component: ()=>import("@/views/Rank")
    },
    {
      path: '/statistic',
      component: ()=>import("@/views/Statistic")
    },{
      path:'/about',
      component:()=>import("@/views/About")
    },{
      path:'/article',
      component:()=>import("@/components/Article")
    },{
      path:'/demo',
      component:()=>import("@/components/Guide/demo")
    },{
      path:'/photo-gallery',
      component:()=>import("@/components/PhotoGallery")
    }
  ]
})
