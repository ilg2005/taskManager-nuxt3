<template>
  <Tasks :tasks="tasks"/>
</template>

<script setup>

const tasks = ref();
const tasksFromLS= computed(() => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('tasks')) ?? [];
  }
});

tasks.value = tasksFromLS.value;

</script>
