<script setup>
    defineProps(['task'])
    import { ref } from 'vue'
    import { useTaskStore } from "../stores/taskStore.js"

    const taskStore = useTaskStore()
    
</script>

<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <dv class="icons">
            <i class="material-icons" @click="taskStore.deleteTask(task.id)">delete</i>
            <i class="material-icons" @click="taskStore.toggleFav(task.id)" :class="{active:task.isFav}">favorite</i>
        </dv>
    </div>
</template>

<style scoped>

</style>