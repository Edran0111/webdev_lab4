<script setup>
import BaseHeader from './BaseHeader.vue';
import BaseFooter from './BaseFooter.vue';
</script>

<template>
    <div>
        <header>
            <base-header />
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <base-footer />
        </footer>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
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
