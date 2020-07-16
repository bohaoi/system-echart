import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index";

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:"/index"
  },
  {
    path: "/index",
    name: "index",
    component: Index,
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/Home/Home")
      },
      {
        path: "/page1",
        name: "page1",
        component: () => import("@/views/Other/PageOne")
      },
      {
        path: "/page2",
        name: "page2",
        component: () => import("@/views/Other/PageTwo")
      },
      {
        path: "/video",
        name: "video",
        component: () => import("@/views/VideoManage/VideoManage")
      },
      {
        path: "/user",
        name: "user",
        component: () => import("@/views/UserManage/UserManage")
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login')
  }

];

const router = new VueRouter({
  routes,
});

export default router;
