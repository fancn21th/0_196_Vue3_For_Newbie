import * as Vue from "vue/dist/vue.esm-bundler.js";

const app = Vue.createApp({
  template: `
   <div>
      <input 
        :value="value"
        @input="input"
        type="text"
        class="border border-gray-400 p-2"
      />
      <div class="text-red-800">{{error}}</div>
   </div>
  `,
  data: () => ({
    value: "hello",
    numbers: Array.from(new Array(10).keys()),
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
