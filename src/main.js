import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import APlayer from "@moefe/vue-aplayer";

Vue.use(APlayer, VueAxios, axios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
