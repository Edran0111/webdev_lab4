<script setup>
import HomePage from './pages/HomePage.vue'
import BaseLayout from './components/BaseLayout.vue'
import BaseButton from './components/BaseButton.vue'
import AsyncButton from './components/AsyncButton.vue'
import signInButton from './components/signInButton.vue'
import { ref, provide } from 'vue'

const user = ref(null);

provide('user', user);
const updateUser = (newUser) => {
  user.value = newUser;
};


</script>

<template>
  <div>
    <BaseLayout>
      <HomePage :user="user" />
      <BaseButton dangerValue="danger"/>
      <signInButton :user="user" @userChanged="updateUser"/>
      <AsyncButton />
     
    </BaseLayout>
  </div>
</template>




<style scoped>
</style>
