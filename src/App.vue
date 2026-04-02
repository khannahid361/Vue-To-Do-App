<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia Logo">
      <h1>Pinia To-Do List</h1>
    </header>
    <!-- new Task -->
    <div class="new-task-form">
      <taskForm />
    </div>
    <!-- filter Buttons -->
    <nav class="filter">
      <button @click="filter='all'">All Tasks</button>
      <button @click="filter='favs'">Favorite Tasks</button>
    </nav>
    <!-- End -->
    <!-- loading -->
    <div class="loading" v-if="loading">
      <p>Loading tasks...</p>
    </div>
    <!-- End  -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} tasks</p>
      <div v-for="task in all" :key="task.id">
        <taskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ favCount }} Favorite tasks</p>
      <div v-for="task in favs" :key="task.id">
        <taskDetails :task="task" />
      </div>
    </div>
    <button @click="taskStore.$reset()">Reset</button>
  </main>
</template>

<script setup>
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useTaskStore } from "./stores/taskStore.js"
  import taskDetails from "./components/taskDetails.vue"
  import taskForm from "./components/taskForm.vue"

  const taskStore = useTaskStore()
  // fetch tasks from the server when the component is mounted
  taskStore.fetchTasks()
  const filter = ref('all')

  const { loading, totalCount, all, favCount, favs } = storeToRefs(taskStore)
</script>

<style scoped>

</style>