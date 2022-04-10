<template>
  <h2>{{ msg }}</h2>
  <input
    type="text"
    v-model="msg"
    class="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
</template>

<script>
// 显示地 开发模式
// 更模块化
import { ref } from "vue";

export default {
  setup() {
    const msg = ref("Hello Vue!");
    return {
      msg,
    };
  },
};
</script>

<style></style>
