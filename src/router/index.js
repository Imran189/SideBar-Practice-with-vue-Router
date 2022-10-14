import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Overview from "../views/Overview.vue";
import Messages from "../views/Messages.vue";
import Profile from "../views/Profile.vue";
import Setting from "../views/Settings.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: Dashboard,
      children: [
        {
          path: "",
          component: Overview,
        },
        {
          path: "messages",
          component: Messages,
        },
        {
          path: "profile",
          component: Profile,
        },
        {
          path: "settings",
          component: Setting,
        },
      ],
    },
  ],
});

export default router;
