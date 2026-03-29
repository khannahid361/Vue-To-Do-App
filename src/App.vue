<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia Logo">
      <h1>Pinia To-Do List</h1>
    </header>
    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
        <taskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script setup>
  import { useTaskStore } from "./stores/taskStore.js"
  import taskDetails from "./components/taskDetails.vue"
  const taskStore = useTaskStore()
</script>

<style scoped>

</style>