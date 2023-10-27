<script setup>
import HomePage from './pages/HomePage.vue'
import BaseLayout from './components/BaseLayout.vue'
import BaseButton from './components/BaseButton.vue'
import AsyncButton from './components/AsyncButton.vue'
import {signInAndGetUser} from './lib/microsoftGraph.js'

</script>

<template>
  <div>
    <BaseLayout>
      <HomePage />
      <BaseButton dangerValue="danger"/>
      <AsyncButton />
      <button @click="signInAndGetUser">Login</button>
    </BaseLayout>
  </div>
</template>

<style scoped>
</style>
