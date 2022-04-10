<template>
  <div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded w-20"
      @click="increment"
    >
      <!-- ref unwrapping -->
      {{ count }}
    </button>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded w-20"
      @click="increase('foo')"
    >
      {{ numbers.foo }}
    </button>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded w-20"
      @click="increase('bar')"
    >
      {{ numbers.bar }}
    </button>

    <p>Total :{{ total }}</p>
  </div>
</template>

<script>
// 显示地 开发模式
// 更模块化
import { ref, reactive, computed } from "vue";

export default {
  setup() {
    // number, string
    const count = ref(0);
    // {}
    const numbers = reactive({
      foo: 0,
      bar: 0,
    });
    const total = computed(() => {
      return count.value + numbers.foo + numbers.bar;
    });
    function increase(key) {
      numbers[key]++;
    }
    function increment() {
      // 修改 value 而不是 count
      console.log(count);
      count.value++;
    }
    return {
      count,
      numbers,
      increment,
      increase,
      total,
    };
  },
  methods: {},
};
</script>

<style></style>
