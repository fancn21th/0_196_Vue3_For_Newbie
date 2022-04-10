<template>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20"
    @click="increment"
  >
    <!-- ref unwrapping -->
    {{ count }}
  </button>
</template>

<script>
// 显示地 开发模式
// 更模块化
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    function increment() {
      // 修改 value 而不是 count
      console.log(count);
      count.value++;
    }
    return {
      count,
      increment,
    };
  },
  methods: {},
};
</script>

<style></style>
