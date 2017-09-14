import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Methodology from '@/components/Methodology'

Vue.use(Router)

export default new Router({  
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/methodology',
      name: 'Methodology',
      component: Methodology
    }
  ]
})
