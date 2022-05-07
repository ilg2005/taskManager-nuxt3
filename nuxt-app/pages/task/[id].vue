<template>
  <div class="card" v-if="selectedTask">
    <h2>{{ selectedTask.title }}</h2>
    <p><strong>Статус</strong>:
      <AppStatus :type="selectedTask.status" :key="statusChanged"/>
    </p>
    <p><strong>Дедлайн</strong>: {{ new Date(selectedTask.deadline).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ selectedTask.description }}</p>
    <div>
      <button class="btn" @click="changeStatus('pending')">Взять в работу</button>
      <button class="btn primary" @click="changeStatus('done')">Завершить</button>
      <button class="btn danger" @click="changeStatus('cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ id }}</strong> нет.
  </h3>
</template>

<script setup>

import {useRoute} from "nuxt/app";

const route = useRoute();
const id = +route.params.id;

const tasks = computed(() => JSON.parse(localStorage.getItem('tasks')));
const selectedTask = tasks.value.find(task => task.id === id);

const statusChanged = ref(0);

const changeStatus = (status) => {
  tasks.value.find((task) => task.id === id).status = status;
  localStorage.setItem('tasks', JSON.stringify(tasks.value));
  statusChanged.value++;
}

</script>
