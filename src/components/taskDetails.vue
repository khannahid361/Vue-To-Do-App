<script setup>
    defineProps(['task'])
</script>

<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <dv class="icons">
            <i class="material-icons">delete</i>
            <i class="material-icons">favorite</i>
        </dv>
    </div>
</template>

<style scoped>

</style>