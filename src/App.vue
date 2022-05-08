<template>
  <h2>{{ msg }}</h2>
  <input type="text" v-model="msg" />
</template>

<script>
// 显示地 开发模式
// 更模块化
export default {
  // 执行一次， 因此 msg 其实不会变
  setup() {
    const msg = "Hello Vue!";
    return {
      msg,
    };
  },
};
</script>

<style></style>
