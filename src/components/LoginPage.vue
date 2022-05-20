<template>
    <div>
    <base-card>
      <h2>Login</h2>
      <div class="main">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required/>
      </div><br>
      <div class="main">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div><br>
      <base-button @click="login">Login</base-button>
    </base-card>
  </div>
</template>

<script>
import BaseButton from './ui/BaseButton.vue';
import BaseCard from './ui/BaseCard.vue';
export default {
    components:{
        BaseButton,
        BaseCard,
    },
    data(){
        return{
            email: '',
            password: '',
        }
    },
    methods: {
        login() {
            this.$router.push('/dashboard')
        }
    }
}
</script>