import Vue from "vue";
import App from "./App.vue";

new Vue({
  /**
   * Renders the app.
   *
   * @param {*} h -
   * @returns
   */
  render: h => h(App)
}).$mount("#app");
