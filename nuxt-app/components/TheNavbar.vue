<template>
  <div class="container">
    <nav class="navbar">
      <h3>
        Task Manager
      </h3>

      <ul class="navbar-menu">
        <li>
          <NuxtLink to="/">Все задачи</NuxtLink>
        </li>
        <li v-for="(item, i) in statusMap"
            :key="i"
        >
          <router-link :to="`/${i}`">{{ item.navTitle }}</router-link>
        </li>
        <li>
          <router-link to="/new">Создать</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import {statusMap} from "@/components/AppStatus";
</script>

<style scoped>
.container {
  margin-bottom: 5rem;
}
</style>
