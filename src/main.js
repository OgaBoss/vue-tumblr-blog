import Vue from "vue";
import App from "./App.vue";
import router from "./app/shared/router";
import store from "./app/shared/store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
