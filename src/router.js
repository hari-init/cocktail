import { createWebHashHistory, createRouter } from "vue-router";

import Mood from "./components/Mood.vue";
import Drink from "./components/Drink.vue";

const routes = [
  { path: "/", component: Mood },
  { path: "/drink/:id", component: Drink },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
