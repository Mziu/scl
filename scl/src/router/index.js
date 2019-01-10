import Vue from 'vue'
import Router from 'vue-router'
const lazyLoading = (name) => (resolve) => require([`../pages/${name}`], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: lazyLoading('index/index')
    },
    {
      path: '/index',
      name: '',
      component: lazyLoading('index/index')
    },
    {
      path: '/product',
      name: 'product',
      meta: { keepAlive: true },
      component: lazyLoading('product/index')
    },
    {
      path: '/service',
      name: 'service',
      component: lazyLoading('service/index')
    },
    {
      path: '/contact',
      name: 'contact',
      component: lazyLoading('contact/index')
    },
    {
      path: '/friends',
      name: 'friends',
      component: lazyLoading('friends/index')
    },
    {
      path: '/consult',
      name: 'consult',
      component: lazyLoading('consult/index')
    },
    {
      path: '/skill',
      name: 'skill',
      component: lazyLoading('skill/index')
    },
    {
      path: '/data',
      name: 'data',
      component: lazyLoading('data/index')
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: lazyLoading('copyright/index')
    },
    {
      path: '/medical',
      name: 'medical',
      component: lazyLoading('medical/index')
    },
    {
      path: '/brand',
      name: 'brand',
      component: lazyLoading('brand/index')
    },
    {
      path: '/watch',
      name: 'watch',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: lazyLoading('watch/index')
    },
    {
      path: '/gelatin',
      name: 'gelatin',
      component: lazyLoading('gelatin/index')
    },
    {
      path: '/demo',
      name: 'demo',
      component: lazyLoading('demo')
    }
  ]
})
