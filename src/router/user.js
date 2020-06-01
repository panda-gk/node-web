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
        path: "/content",
        name: "content",
        meta: {
          title: '发布内容'
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/content/Index.vue")
      },
    ]
  },
];

export default userRoutes;
