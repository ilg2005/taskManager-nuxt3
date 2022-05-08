<template>
  <div class="container">
    <div v-if="!allTasks.length">
      <h1 class="text-white center">Задач пока нет <br>
        <NuxtLink to="/new" class="new">Создать новую?</NuxtLink>
      </h1>
    </div>
    <div v-else>
      <h3 class="text-white">Всего {{ statusAdjective }} задач: {{ tasks.length }}</h3>
      <task-card v-for="task of tasks"
                 :key="task.id"
                 :task="task"
      />
    </div>
  </div>
</template>

<script setup>
import {statusMap} from "@/components/AppStatus";
import {useState} from "nuxt/app";

const props = defineProps(['status']);
const statusAdjective = computed(() => props.status !== 'all' ? statusMap[props.status].adj : '');

const allTasks = useState('allTasks');
const tasks = computed(() => props.status === 'all' ? allTasks.value :
    allTasks.value.filter(task => task.status === props.status))
</script>

<style scoped>
a.new {
  color: #89a9ef;
  font-size: 1.5rem;
}
</style>
