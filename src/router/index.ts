import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/registerAdmin",
      component: () => import("../views/RegisterAdmin.vue"),
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/employeeList",
      component: () => import("../views/EmployeeList.vue"),
    },
  ],
});

export default router;
