import * as Vue from "vue/dist/vue.esm-bundler.js";

const app = Vue.createApp({
  template: `
   <div>
      <input type="radio" v-model="radioValue" value="a" /> a
      <input type="radio" v-model="radioValue" value="b" /> b
      <input type="radio" v-model="radioValue" value="c" /> c
      <p>你 输入了：{{ radioValue }}</p>
      <input type="checkbox" v-model="checkValue" value="a" /> a
      <input type="checkbox" v-model="checkValue" value="b" /> b
      <input type="checkbox" v-model="checkValue" value="c" /> c
      <p>你 输入了：{{ checkValue }}</p>
   </div>
  `,
  data: () => ({
    radioValue: "a",
    checkValue: ["a"],
  }),
  methods: {
    input(e) {
      this.value = e.target.value;
    },
  },
  computed: {
    error() {
      if (this.value.length <= 5) {
        return "长度必须大于5";
      }
    },
  },
});

app.mount("#app");
app.config.devtools = true;
