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
]

export default routes
