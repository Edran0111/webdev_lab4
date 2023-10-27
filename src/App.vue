<script setup>
import HomePage from './pages/HomePage.vue'
import BaseLayout from './components/BaseLayout.vue'
import BaseButton from './components/BaseButton.vue'
import AsyncButton from './components/AsyncButton.vue'


</script>

<template>
  <div>
    <BaseLayout>
      <HomePage />
      <BaseButton dangerValue="danger"/>
      <AsyncButton/>
     
    </BaseLayout>
  </div>
</template>

<style scoped>
</style>
