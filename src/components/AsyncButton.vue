<template>
    <div>
      <button :disabled="isPending" @click="AsyncClick">Async Button</button>
      <div v-if="user">
        <p>User Name: {{ user.name }}</p>
        <p>User Email: {{ user.email }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { signInAndGetUser } from '../lib/microsoftGraph';
  
  export default {
    name: 'AsyncButton',
    data() {
      return {
        isPending: false,
        cpt: 0,
        user: null, // Store the resolved user information
      }
    },
    methods: {
      async AsyncClick() {
        console.log('AsyncClick');
        if (this.isPending) {
          return;
        }
        this.isPending = true;
  
        try {
          // Call the signInAndGetUser function to initiate sign-in
          const user = await signInAndGetUser();
  
          // Update the user information in the component's state
          this.user = user;
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setTimeout(() => {
            this.isPending = false;
          }, 2000 + this.cpt * 1000);
        }
        this.cpt++;
      },
    }
  }
  </script>
  
  <style>
  button {
    background-color: lightgreen;
    padding: 1em;
    text-align: center;
    border: none;
    border-radius: 5px;
    margin: 0.5em;
  }
  
  button:disabled {
    background-color: grey;
    color: white;
    cursor: not-allowed;
  }
  
  button:disabled:hover {
    background-color: red;
  }
  
  button:hover {
    background-color: green;
  }
  </style>
  