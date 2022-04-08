import * as Vue from "vue/dist/vue.esm-bundler.js";

const app = Vue.createApp({
  template: `
   <div>
      <h1 class="text-3xl font-bold underline">{{message}}</h1>
      <button class="bg-green-200 border-0 text-white p-6" @click="toggle">Click</button>
      <ul>
        <li v-for="number in evenNumbers" >{{number}}</li>
      </ul>
   </div>
  `,
  data: () => ({
    isEven: true,
    numbers: Array.from(new Array(10).keys()),
  }),
  methods: {
    toggle() {
      this.isEven = !this.isEven;
    },
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter(
        (number) => (number % 2 === 0) === this.isEven
      );
    },
  },
});

app.mount("#app");
app.config.devtools = true;
