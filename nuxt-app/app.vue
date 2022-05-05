<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title"/>
      <Link rel="shortcut icon" href="/icon_64x64.a3b4ce.png" as="favicon"/>
    </Head>
    <TheNavbar/>
    <NuxtPage/>
  </div>
</template>

<script setup>
const title = 'Task Manager';
</script>


