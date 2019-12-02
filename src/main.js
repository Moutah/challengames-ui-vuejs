import App from "./App.vue";
import Vue from "vue";
import VueRouter from "vue-router";

import { store } from "./plugins/store";
import "./plugins/vuetify";
import i18n from "@/plugins/i18n";
import "./plugins/vue-flag";

import router from "@/plugins/routes.js";

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
