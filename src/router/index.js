import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AutoQuestion from '@/components/AutoQuestion'

Vue.use(Router)

/* 关闭#本地路由 */
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/question',
      name: 'AutoQuestion',
      component: AutoQuestion
    }
  ]
})
