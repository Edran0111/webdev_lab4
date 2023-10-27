<template>
    <div>
        <button @click="handleClick">Log in</button>
    </div>
</template>

<script>
import { signInAndGetUser } from '../lib/microsoftGraph';
import { inject } from 'vue';

export default{
    name: 'SignInButton',
    data(){
        return{
            // Your data goes here
        }
    },
    setup(){
        const user = inject('user');

        const handleClick = async () => {
            console.log('handleClick');
            const newUser = await signInAndGetUser();
            user.value = newUser;
            console.log(user);
        }

        return {handleClick};
    }
}
</script>