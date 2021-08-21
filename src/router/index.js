import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/Home"
import Rank from "@/views/Rank"
import Statistic from "@/views/Statistic"
import About from "@/views/About"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path:'/home',
      component:Home
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/statistic',
      component: Statistic
    },{
      path:'/about',
      component:About
    }
  ]
})
