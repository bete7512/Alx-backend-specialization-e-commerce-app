import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/login.vue";
import Signup from "../pages/signup.vue";
import Cart from "../pages/cart.vue";
import favorite from '../pages/favorite.vue'
// import product_detail from '../pages/product_detail.vue'
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
      }
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
      }    
    },

  ],
});

export default router;
