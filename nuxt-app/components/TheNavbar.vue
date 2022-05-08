<template>
    <nav class="navbar">
      <div class="title">
        <img src="/nuxt-js.svg" alt="Logo" class="logo">
        <h3>Task Manager</h3>
      </div>

      <ul class="navbar-menu">
        <li>
          <NuxtLink to="/">Все задачи</NuxtLink>
        </li>
        <li v-for="(item, i) in statusMap"
            :key="i"
        >
          <NuxtLink :to="`/${i}`">{{ item.navTitle }}</NuxtLink>
        </li>
        <li>
          <router-link to="/new">Создать</router-link>
        </li>
      </ul>
    </nav>
</template>

<script setup>
import {statusMap} from "@/components/AppStatus";
</script>

<style scoped>

.logo {
  margin-right: 1rem;
  width: 60px;
}

.title {
  display: flex;
  justify-items: center;
  margin: 1rem;
}
</style>
