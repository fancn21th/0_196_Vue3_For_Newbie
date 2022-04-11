// 显示地 开发模式
// 更模块化
import { ref, reactive, computed, watch, watchEffect } from "vue";

export function useNumbers() {
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
    console.log(count.value);
  });

  return {
    count,
    history,
    numbers,
    total,
  };
}
