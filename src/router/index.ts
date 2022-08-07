import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/policy",
    name: "policy",
    component: () => import("../views/PolicyView.vue"),
  },
  {
    path: "/summary",
    name: "summary",
    component: () => import("../views/SummaryVue.vue"),
  },
  {
    path: "/error",
    name: "age-error",
    component: () => import("../views/OverAgeUsersView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../views/PageNotFoundView.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "bad-not-found",
    component: () => import("../views/PageNotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
