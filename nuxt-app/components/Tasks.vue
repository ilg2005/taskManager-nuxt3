<template>
  <div>
    <h1 class="text-white center" v-if="!allTasks.length">Задач пока нет</h1>
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

</style>
