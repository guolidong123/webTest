import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layouts/layout'
import Menu from '@/views/layouts/components/Sidebar/Menu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Layout
    },
    {
      path: '/Layout',
      name: '首页',
      component: Layout
    },
  ]
})
