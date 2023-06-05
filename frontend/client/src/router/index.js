import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/login.vue";
import Signup from "../pages/signup.vue";
import Cart from "../pages/cart.vue";
import favorite from "../pages/favorite.vue";
import Profile from "../pages/Profile.vue";
import Order_address_form from "../pages/Order_address_form.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { layout: "main" },
    },
    {
      path: "/login",
      name: "login",
      beforeRouteEnter(to, from, next) {
        // ...
      },
      component: Login,
      meta: { layout: "empty" },
    },
    {
      path: "/favorite",
      name: "favorite",
      component: favorite,
      meta: { layout: "main" },
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("ClientToken")) {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: { layout: "main" },
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("ClientToken")) {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "/order/:id",
      name: "order_address",
      component: Order_address_form,
      meta: { layout: "main" },
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("ClientToken")) {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
      meta: { layout: "empty" },
    },
    {
      path: "/carts",
      name: "cart",
      component: Cart,
      meta: { layout: "main" },
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("ClientToken")) {
          next();
        } else {
          next("/login");
        }
      },
    },
  ],
});

export default router;
