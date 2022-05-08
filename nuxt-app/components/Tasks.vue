<template>
  <div>
    <h1 class="text-white center" v-if="!tasks.length">Задач пока нет</h1>
    <div v-else>
      <h3 class="text-white">Всего {{ status }} задач: {{ tasks.length }}</h3>
      <task-card v-for="task of tasks"
                 :key="task.id"
                 :task="task"
      />
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "nuxt/app";
import {statusMap} from "@/components/AppStatus";


const route = useRoute();
const status = computed(() => route.name !== 'index' ? statusMap[route.name].adj : '');
defineProps(['tasks']);

</script>

<style scoped>

</style>
