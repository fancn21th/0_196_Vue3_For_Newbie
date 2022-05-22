<template>
  <ul class="mt-4">
    <todo v-for="todo in todos" :key="todo.id" :todo="todo"></todo>
  </ul>
</template>

<script>
import Todo from "./Todo.vue";
import { store } from "./store";

export default {
  components: {
    Todo,
  },
  setup() {
    return {
      todos: store.state.todos,
    };
  },
};
</script>

<style></style>
