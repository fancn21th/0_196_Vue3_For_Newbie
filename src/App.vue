<template>
  <div class="flex bg-gray-100">
    <div
      class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12"
    >
      <div class="xl:max-w-lg xl:ml-auto">
        <hero />
        <add-todo />
        <router-view></router-view>
      </div>
    </div>
    <div class="hidden lg:block lg:w-1/2 lg:relative">
      <img
        src="https://images.unsplash.com/photo-1641261689141-ee46b8a0470c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370"
        alt="todos"
        class="absolute inset-0 h-full w-full object-cover object-center"
      />
    </div>
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import AddTodo from "./AddTodo.vue";

export default {
  components: {
    Hero,
    AddTodo,
  },
  setup() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
