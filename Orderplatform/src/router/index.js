import Vue from 'vue'
import Router from 'vue-router'
import orderSignIn from '@/components/SignIn/orderSignIn'
import globalCog from '@/components/globalCog'
import mainpage from '@/components/MainPage/mainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'globalCog',
      component: globalCog
    },{
      path:'/sign',
      name:'orderSignIn',
      component:orderSignIn
    },
    {
      path:'/mainpage',
      name:'mainpage',
      component:mainpage,
    }
  ]
})
