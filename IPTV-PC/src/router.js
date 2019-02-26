import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import Detail from '@/components/Detail.vue'
import State from '@/components/State.vue'
import ProgressBar from '@/components/ProgressBar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
    },
    {
      path: '/state',
      name: 'State',
      component: State
    },  
    {
      path: '/ProgressBar',
      name: 'ProgressBar',
      component: ProgressBar
    },                  
  ]
})
