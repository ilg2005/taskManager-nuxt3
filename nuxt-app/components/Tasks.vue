<template>
  <div>
    <h1 class="text-white center" v-if="!tasks.length">Задач пока нет</h1>
    <div v-else>
      <h3 class="text-white">Всего {{ }} задач: {{ tasks.length }}</h3>
      <task-card v-for="task of tasks"
                 :key="task.id"
                 :task="task"
      />
    </div>
  </div>
</template>

<script setup>

defineProps(['tasks']);

</script>

<style scoped>

</style>
