<template>
    <div>
        <div v-if="user">
            <p>User : {{user}}</p>
        </div>
    </div>
</template>

<script>
import {ref, inject} from 'vue'

export default {
    name: 'HomePage',
    setup() {
        const user = inject('user');
        return {user};
    },
    data() {
        return {
            // Your data goes here
        }
    },
    methods: {
        // Your methods go here
    },
    mounted() {
        // Your mounted code goes here
    }
}
</script>

<style>
/* Your styles go here */
</style>
