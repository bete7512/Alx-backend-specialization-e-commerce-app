import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Signup from "../pages/Signup.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { layout: "main" },
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("SellerToken")) {
          next();
        } else {
          next("/login");
        }
      },
 
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { layout: "empty" },
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
      meta: {
        layout: "empty",
      },
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../pages/Products/Products.vue"),
      meta: { layout: "main" },
       beforeEnter: (to, from, next) => {
        if (localStorage.getItem('SellerToken')) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: "/addnewproduct",
      name: "addnewproduct",
      component: () =>
        import("../pages/Products/AddProducts/AddnewProduct.vue"),
      meta: { layout: "main" },
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('SellerToken')) {
          next()
        } else {
          next('/login')
        }
      }
    },

    {
      path: "/orders",
      name: "orders",
      component: () => import("../pages/Products/Order.vue"),
      meta: { layout: "main" },
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('SellerToken')) {
          next()
        } else {
          next('/login')
        }
      }
    },
  ],
});

// window.localStorage.removeItem('SellerToken')
// router.beforeEach(async (to) => {
//   const publicPages = ['/login', '/signup'];
//   const authRequired = !publicPages.includes(to.path);
//   if (authRequired && !window.localStorage.getItem("SellerToken")) {
//     // returnUrl = to.fullPath;
//     return '/login';
//   }
// });
// console.log(window.localStorage.getItem("SellerToken"));
export default router;
