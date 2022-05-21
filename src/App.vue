<template>
  <div class="flex bg-gray-100">
    <div
      class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12"
    >
      <div class="xl:max-w-lg xl:ml-auto">
        <img
          src="https://images.unsplash.com/photo-1641261689141-ee46b8a0470c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370"
          alt="todos"
          class="h-32 rounded-lg shadow-xl sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
        />
        <h1 class="mt-6 text-2xl font-bold text-gray-900 leading-tight">
          What is your next <span class="text-indigo-400">TODOs</span>
        </h1>
        <p class="mt-2 text-gray-600">
          A simple todo list app built with Vue.js and TailwindCSS.
        </p>
        <div class="mt-4 flex-col">
          <input
            class="shadow appearance-none border-l border-y rounded-l-lg px-3 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-2/3"
            id="username"
            type="text"
            placeholder="Username"
          />
          <a
            href="#"
            class="shadow appearance-none border-r border-y inline-block bg-indigo-500 text-white text-center py-3 rounded-r-lg uppercase tracking-wider font-semibold text-sm w-1/3 hover:bg-indigo-700"
            >Add</a
          >
        </div>
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
export default {
  setup() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
