import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Private from "../views/Private.vue";
import Callback from "../views/Callback.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/private",
    name: "Private",
    component: Private,
  },
  {
    path: "/callback",
    name: "Callback",
    component: Callback,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
