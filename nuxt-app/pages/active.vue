<template>
  <Tasks :tasks="tasks"/>
</template>

<script setup>

const tasks = computed(() => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('tasks')).filter(task => task.status === 'active') ?? [];
  }
});


</script>
