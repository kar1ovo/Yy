import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Yy from "../views/Yy.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/:type",
    component: Yy,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
