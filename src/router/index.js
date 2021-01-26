import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/home.vue'),
    redirect: '/index', // 重定向
    children: [
      { path: '/index', name: '动态监视', component: () => import('@/components/index/index.vue') },
      { path: '/hsyb', name: '洪水预报', component: () => import('@/components/hsyb/hsyb') },
      { path: '/report', name: '逐日报表', component: () => import('@/components/report/report') },
      { path: '/slfx', name: '渗流分析', component: () => import('@/components/slfx/slfx') },
      {
        path: '/view',
        name: '全景图',
        component: () => import('@/components/view/view')
        // redirect: '/view3D',
        // children: [{ path: '/view3D', name: '3D全景图', component: () => import('@/static/tour/index.html') }]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash', // 去掉url中的#
  routes
})

export default router
