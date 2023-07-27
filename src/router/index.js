import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("../views/DetailView.vue"),
    },
    {
      path: "/addCart/:id",
      name: "addCart",
      component: () => import("../views/addCart.vue"),
    },
    {
      path: "/cuisine",
      name: "cuisine",
      component: () => import("../views/cuisineView.vue"),
    },
    {
      path: "/formCuisine",
      name: "formCuisine",
      component: () => import("../views/formCuisine.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token;

  if (to.name === "cart" && !isAuthenticated) {
    next("/login");
  } else if (to.name === "login" && isAuthenticated) {
    next("/");
  } else if (to.name === "register" && isAuthenticated) {
    next("/");
  } else if (to.name === "cuisine" && localStorage.role !== "Admin") {
    next("/");
  } else {
    next();
  }
});

export default router;
