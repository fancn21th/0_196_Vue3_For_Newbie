import { reactive } from "vue";
import { useStorage } from "@vueuse/core";

class Store {
  constructor() {
    const todos = useStorage("fyj-todos", []);

    this.idx = 1;
    this.state = reactive({
      todos,
    });
  }

  // 封装
  addTodo(title) {
    this.state.todos.push({
      id: this.idx++,
      title,
      done: false,
    });
  }
}

export const store = new Store();
