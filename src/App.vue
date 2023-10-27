<script setup>
import HomePage from './pages/HomePage.vue'
import BaseLayout from './components/BaseLayout.vue'
import BaseButton from './components/BaseButton.vue'
import AsyncButton from './components/AsyncButton.vue'
import signInButton from './components/signInButton.vue'
import { ref, provide } from 'vue'
import { useStore } from 'vuex'

const store  = useStore();
const user = ref(null);

provide('user', user);
const updateUser = (newUser) => {
  user.value = newUser;
};

provide('user', store.state.user)

</script>

<template>
  <div>

    <router-link to="/">Home</router-link> |
    <router-link to="/conversation">Conversation</router-link>

    <router-view></router-view>
  
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
