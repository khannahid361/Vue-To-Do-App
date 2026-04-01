import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    loading: false
  }),
  actions: {
    async fetchTasks() {
      this.loading = true
      const res = await fetch("http://localhost:3000/tasks")
      const data = await res.json()

      this.tasks = data
      this.loading = false
    },
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(id){
      this.tasks = this.tasks.filter(t => {
        return t.id!=id
      })
    },
    toggleFav(id){
      const task = this.tasks.find(t => t.id === id)
      task.isFav = !task.isFav
    }
  },
  getters: {
    all() {
      return this.tasks
    },
    favs() {
      return this.tasks.filter(t => t.isFav)
    },
    favCount() {
      return this.tasks.reduce((prevValue, currentValue) => {
        return currentValue.isFav ? prevValue + 1 : prevValue
      }, 0)
    },
    totalCount:(state) => {
      return state.tasks.length
    }
  },
});