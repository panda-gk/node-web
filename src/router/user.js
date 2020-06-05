const userRoutes = [
  {
    path: "/home",
    component: () => import(/* webpackChunkName: "about" */ "@/views/Home.vue"),
    meta: {
      title: '用户管理'
    },
    redirect: '/list',
    children: [
      {
        path: "/list",
        name: "list",
        meta: {
          title: '用户列表'
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/user/Index.vue")
      },
      {
        path: "/add",
        name: "add",
        meta: {
          title: '发布'
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/add/Index.vue")
      },
      {
        path: "/blog",
        name: "blog",
        meta: {
          title: '文章列表'
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/blog/Index.vue")
      },
      {
        path: "/attention",
        name: "attention",
        meta: {
          title: '关注'
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/attention/Index.vue")
      },
    ]
  },
];

export default userRoutes;
