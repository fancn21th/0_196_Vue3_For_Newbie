<template>
  <li class="text-gray-700 text-xl after:content-['#'] mb-2">
    <input
      class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      type="checkbox"
      v-model="todo.done"
      :id="todo.id"
    />
    <label class="ml-2" :for="todo.id">{{ todo.title }}</label>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    console.log(props);

    return {
      todo: props.todo,
    };
  },
};
</script>

<style></style>
