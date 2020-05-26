const userRoutes = [
  {
    path: "/home",
    component: () => import(/* webpackChunkName: "about" */ "@/views/Home.vue"),
    redirect: '/list',
    children: [
      {
        path: "/list",
        name: "list",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/user/Index.vue")
      },
      {
        path: "/content",
        name: "content",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/content/Index.vue")
      },
    ]
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    redirect: '/login'
  }
];

export default userRoutes;
