import * as Vue from "vue/dist/vue.esm-bundler.js";

const app = Vue.createApp({
  template: `<h1 class="text-3xl font-bold underline">{{message}}</h1>`,
  data: () => ({
    message: "Hello Vue3 & Vite",
  }),
});

app.mount("#app");
