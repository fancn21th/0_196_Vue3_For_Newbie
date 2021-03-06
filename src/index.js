import * as Vue from "vue/dist/vue.esm-bundler.js";

const app = Vue.createApp({
  template: `
   <div>
     <h1 class="text-3xl font-bold underline">{{message}}</h1>
     <button class="bg-green-200 border-0 text-white p-6" @click="increment">Click</button>
     <p>{{count}}</p>
     <p v-if="count % 2 === 0">你输入的是偶数</p>
     <p v-else>你输入的是奇数</p>
   </div>
  `,
  data: () => ({
    count: 1,
  }),
  methods: {
    increment() {
      this.count++;
    },
  },
});

app.mount("#app");
