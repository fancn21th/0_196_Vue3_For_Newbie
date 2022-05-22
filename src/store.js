import { reactive } from "vue";

class Store {
  constructor() {
    this.idx = 1;
    this.state = reactive({
      todos: [
        {
          id: this.idx++,
          title: "Learn Vue 3",
          done: true,
        },
        {
          id: this.idx++,
          title: "Learn React",
          done: false,
        },
        {
          id: this.idx++,
          title: "Learn Tailwind CSS",
          done: true,
        },
      ],
    });
  }
  addTodo(title) {
    this.state.todos.push({
      id: this.idx++,
      title,
      done: false,
    });
  }
}

export const store = new Store();
