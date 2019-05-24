import Vue from "vue";
import Router from "vue-router";

// Routes
import { authRoutes } from "../../Authentication/shared/routes";
Vue.use(Router);

const routes = [...authRoutes];

const router = new Router({
  mode: "history",
  routes
});

export default router;
