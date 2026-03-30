<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="I need to ..." v-model="newTask">

        <button>Save</button>
    </form>
</template>

<script setup>
    import { ref } from 'vue'
    import { useTaskStore } from "../stores/taskStore.js"

    const taskStore = useTaskStore()
    const newTask = ref("")
    const handleSubmit = () => {
        const timestampMs = Date.now();
        if (newTask.value.length > 0) {
            taskStore.addTask({
                id: timestampMs,
                title: newTask.value,
                isFav: false
            })
            newTask.value = ""
        }
    }
</script>

<style>

</style>