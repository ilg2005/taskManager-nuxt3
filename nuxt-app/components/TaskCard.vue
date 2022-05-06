<template>
  <div class="card">
    <h2 class="card-title">
      {{ task.title }}
      <AppStatus :type="task.status"/>
    </h2>
    <p>
      <strong>
        <small>
          {{ new Date(task.deadline).toLocaleDateString() }}
        </small>
      </strong>
    </p>
    <button class="btn primary" @click="showTask(`/task/${task.id}`)">Посмотреть</button>
  </div>
</template>

<script setup>
import {navigateTo} from "nuxt/app";

defineProps(['task']);

const showTask = url => navigateTo(url);

</script>
