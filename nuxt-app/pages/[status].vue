<template>
  <Tasks :status="status"/>
</template>

<script setup>
import {useRoute} from "nuxt/app";

const route = useRoute();
const status = route.params.status;
</script>

