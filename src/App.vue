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
    <ul>
      <li v-for="his in history" :key="his">
        {{ his }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useNumbers } from "./useNumbers";

export default {
  setup() {
    // methods
    function increase(key) {
      numbers[key]++;
    }
    function increment() {
      // 修改 value 而不是 count
      console.log(count);
      count.value++;
    }

    return {
      increment,
      increase,
      ...useNumbers(),
    };
  },
  methods: {},
};
</script>

<style></style>
