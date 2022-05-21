import { reactive } from "vue";

class Store {
  constructor() {
    this.state = reactive({
      todos: [
        {
          id: 1,
          title: "Learn Vue 3",
          done: true,
        },
        {
          id: 2,
          title: "Learn React",
          done: false,
        },
        {
          id: 3,
          title: "Learn Tailwind CSS",
          done: true,
        },
      ],
    });
  }
}

export const store = new Store();
