import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
        { id: 1, title: "Running in the morning", isFav: false },
        { id: 2, title: "Eating Foods", isFav: true },
        { id: 3, title: "Taking Medicine", isFav: false },
        { id: 4, title: "Cycling To Office", isFav: true },
    ],
  }),
    actions: {
      addTask(task) {
        this.tasks.push(task);
      } 
    }
});