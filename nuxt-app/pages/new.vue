<template>
  <form class="card" @submit.prevent="createTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model.trim="task.title">
    </div>

    <div class="form-control">
      <label for="date">Дедлайн</label>
      <input type="date" id="date" v-model.trim="task.deadline">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model.trim="task.description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValid">Создать</button>
  </form>
</template>


<script setup>

import moment from 'moment';
import {navigateTo, useState} from "nuxt/app";

const task = useState('task', () => ({
  title: '',
  deadline: '',
  description: '',
  status: 'active'
}));

const tasks = useState('allTasks', () => ([]));

const isValid = computed(() => !Object.values(task.value).includes(''));


const createTask = () => {
  if (isValid.value) {
    task.value.id = Date.now();

    task.value.status = moment(task.value.deadline).unix() >= moment().startOf('day').unix() ? 'active' : 'cancelled'

    tasks.value.push(task.value);
    task.value = {};
    task.value.title = '';
    localStorage.setItem('tasks', JSON.stringify(tasks.value));

    navigateTo('/');
  }
}
</script>
