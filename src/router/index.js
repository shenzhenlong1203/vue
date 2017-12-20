import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AutoQuestion from '@/components/AutoQuestion'
import Animate from '@/components/Animate'
import AnimateColor from '@/components/AnimateColor'
import CarouselVue from '@/components/Carousel'
import Steps from '@/components/Steps'

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
    },
    {
      path: '/animate',
      name: 'Animate',
      component: Animate
    },
    {
      path: '/animate_color',
      name: 'AnimateColor',
      component: AnimateColor
    },
    {
      path: '/carousel',
      name: 'Carousel',
      component: CarouselVue
    },
    {
      path: '/steps',
      name: 'Steps',
      component: Steps
    }
  ]
})
