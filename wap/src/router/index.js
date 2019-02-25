import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'  
import Detail from '@/components/detail'  
import Result from '@/components/result'  
import Loading from '@/components/loading'  

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
    {
      path: '/loading',
      name: 'loading',
      component: Loading
    }
  ]
})
