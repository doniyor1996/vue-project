import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/users",
    name: "users",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Users.vue"),
  },
  {
    path: "/my-input",
    name: "MyInput",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyInput.vue"),
  },
  {
    path: "/my-table",
    name: "MyTable",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyTable.vue"),
  },
  {
    path: "/my-form",
    name: "MyForm",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyForm.vue"),
  },
  {
    path: "/my-components",
    name: "MyComponents",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyComponents.vue"),
  },
  {
    path: "/axios",
    name: "axios",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Axios.vue"),
  },
  {
    path: "/element",
    components: {
      default: () => import("@/views/element-plus/index"),
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      {
        path: "",
        name: "element-index",
        component: () => import("@/views/element-plus/Element"),
      },
      {
        path: "buttons",
        name: "buttons",
        component: () => import("@/views/element-plus/Buttons"),
      },
      {
        path: "with-props/:name/:id",
        name: "with-props",
        props: true,
        component: () => import("@/views/element-plus/WithProps"),
      },
      {
        path: "color/:use",
        name: "color",
        props: true,
        component: () => import("@/views/element-plus/Color"),
      },
    ],
  },
  {
    path: "/e-plus",
    components: {
      default: () => import("@/views/element-plus-form/index"),
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      {
        path: "",
        name: "input",
        props: true,
        component: () => import("@/views/element-plus-form/Input"),
      },
      {
        path: "checkbox",
        name: "checkbox",
        props: true,
        component: () => import("@/views/element-plus-form/Checkbox"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
