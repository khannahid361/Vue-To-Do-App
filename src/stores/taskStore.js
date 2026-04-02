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
    async addTask(task) {
      this.tasks.push(task);

      const res = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (res.error) {
        console.log("Error adding task")
      }
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter(t => {
        return t.id != id
      })
      const res = await fetch("http://localhost:3000/tasks/" + id, {
        method: "DELETE"
      })
      if (res.error) {
        console.log("Error deleting task")
      }
    },
    async toggleFav(id) {
      const task = this.tasks.find(t => t.id === id)
      task.isFav = !task.isFav
      const res = await fetch("http://localhost:3000/tasks/" + id, {
        method: "PATCH",
        body: JSON.stringify({ isFav: task.isFav }),
        headers: {
          "Content-Type": "application/json"
        }
      })
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
    totalCount: (state) => {
      return state.tasks.length
    }
  },
});