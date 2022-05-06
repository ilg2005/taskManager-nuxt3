<template>
  <h1 class="text-white center" v-if="!tasks.length">Задач пока нет</h1>
  <div v-else>
    <h3 class="text-white">Всего {{  }} задач: {{ tasks.length }}</h3>
    <task-card v-for="task of tasks"
                    :key="task.id"
                    :task="task"
    />
  </div>
</template>

<script setup>

const tasks = computed(() => JSON.parse(localStorage.getItem('tasks')) ?? []);

</script>
