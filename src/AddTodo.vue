<template>
  <div class="mt-4 flex">
    <input
      ref="newTodo"
      type="text"
      class="shadow appearance-none border-l border-y rounded-l-lg px-3 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-2/3"
      placeholder="我准备干啥 #"
    />
    <a
      href="#"
      class="shadow appearance-none border-r border-y inline-block bg-indigo-500 text-white text-center py-3 rounded-r-lg uppercase tracking-wider font-semibold text-sm w-1/3 hover:bg-indigo-700"
      @click="addTodo"
      >Add</a
    >
  </div>
</template>

<script>
import { store } from "./store";
import { ref, onMounted } from "vue";

export default {
  setup(props, ctx) {
    const newTodo = ref(null);

    const addTodo = () => {
      const title = newTodo.value.value;
      title && store.addTodo(title);
    };
    return {
      addTodo,
      newTodo,
    };
  },
};
</script>

<style></style>
