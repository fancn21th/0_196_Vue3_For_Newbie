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
// 显示地 开发模式
// 更模块化
import { ref, reactive, computed, watch, watchEffect } from "vue";

export default {
  setup() {
    // ref <--> number, string
    const count = ref(0);
    const history = ref([]);
    // reactive <--> {}
    const numbers = reactive({
      foo: 0,
      bar: 0,
    });
    // computed <--> computed(() => {})
    const total = computed(() => {
      return count.value + numbers.foo + numbers.bar;
    });
    // methods
    function increase(key) {
      numbers[key]++;
    }
    function increment() {
      // 修改 value 而不是 count
      console.log(count);
      count.value++;
    }
    // watch
    watch(
      numbers,
      (newValue, oldValue) => {
        if (oldValue && oldValue !== newValue) {
          console.log(`foo: ${oldValue.foo} -> ${newValue.foo}`);
          console.log(`bar: ${oldValue.bar} -> ${newValue.bar}`);
        }
      },
      {
        immediate: true,
      }
    );
    watch(
      [count],
      ([newValue], [oldValue]) => {
        if (oldValue !== newValue) {
          history.value.push(`count: ${oldValue} -> ${newValue}`);
        }
      },
      {
        immediate: true,
      }
    );
    // watchEffect
    watchEffect(() => {
      // 只会监听 count 的变化
      console.log(count.value);
    });
    return {
      count,
      history,
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
