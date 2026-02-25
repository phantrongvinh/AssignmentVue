import { useAuthStore } from "@/store/authStore";
import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/blogs",
      name: "blogs",
      component: () => import("../views/Blogs.vue"),
    },
    {
      path: "/stories",
      name: "stories",
      component: () => import("../views/Stories.vue"),
    },
    {
      path: "/poems",
      name: "poems",
      component: () => import("../views/Poems.vue"),
    },
    {
      path: "/englishWritings",
      name: "englishWritings",
      component: () => import("../views/EnglishWritings.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/blogs/detail/:id",
      name: "about",
      component: () => import("../views/BlogDetail.vue"),
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/Auth.vue"),
    },
  ],
});

// Route guard kiểm tra xác thực
router.beforeEach((to, form, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next("/auth");
  } else {
    next();
  }
});

export default router;
