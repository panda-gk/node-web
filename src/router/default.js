const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      requireAuth: true
    },
    component: () => import(/* webpackChunkName: "home" */ '@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      requireAuth: true
    },
    component: () => import(/* webpackChunkName: "home" */ '@/views/Register.vue')
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      requireAuth: true
    },
    component: () => import(/* webpackChunkName: "home" */ '@/views/Test.vue')
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    redirect: '/login'
  }
]

export default routes
