<template>
    <div>
        <button :class=this.dangerValue>click here !</button>
        <button id="disabled">I'm disabled</button>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    props: {
        dangerValue: String
    },
    data() {
        return {
            buttonColor: ""
        }
    },
    methods: {
        // Your methods go here
    }
}
</script>

<style>
.warn{
    background-color: orange;
}

.warn:hover{
    background-color: rgb(255, 106, 0);
}

.danger {
  background-color: red;
}

.danger:hover{
    background-color: rgb(124, 0, 0);
}
  
.safe {
  background-color: lightgreen;
}
.safe:hover{
    background-color: green;
}

button{
    padding: 1em;
    text-align: center;
    border: none;
    border-radius: 5px;
    margin: 0.5em;
}

#disabled{
    background-color: grey;
    color: white;
    cursor: not-allowed;
}

button:hover{
    background-color: green;
}
</style>