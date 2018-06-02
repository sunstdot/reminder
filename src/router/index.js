import Vue from 'vue'
import Router from 'vue-router'
import PathPurge from '@/components/usercenter'
// import MachineMonitor from '@/components/sendlove'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/usercenter',
      name: 'usercenter',
      component: PathPurge
    }
  ]
})
