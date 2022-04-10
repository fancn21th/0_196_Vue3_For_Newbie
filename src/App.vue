<template>
  <h2>{{ msg }}</h2>
</template>

<script>
// 显示地 开发模式
// 更模块化
export default {
  setup() {
    const msg = "Hello Vue!";
    return {
      msg,
    };
  },
};
</script>

<style></style>
