<template>
  <AppLoader v-if="isLoading"/>
  <div v-else>
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
  </div>
</template>

<script setup>

import {useRoute, useState} from "nuxt/app";

const route = useRoute();
const id = +route.params.id;

const tasks = ref();
const selectedTask = ref();

const isLoading = computed(() => {
  tasks.value = JSON.parse(localStorage.getItem('tasks'));
  selectedTask.value = tasks.value.find(task => task.id === id);
  return typeof window === 'undefined';
});

const statusChanged = ref(0);


const changeStatus = (status) => {
  tasks.value.find((task) => task.id === id).status = status;
  localStorage.setItem('tasks', JSON.stringify(tasks.value));
  const allTasks = useState('allTasks');
  allTasks.value.find((task) => task.id === id).status = status;
  statusChanged.value++;
}

</script>
