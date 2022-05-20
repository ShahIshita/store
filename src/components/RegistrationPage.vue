<template>
  <div>
     
    <base-card>
      <h2>Registration page</h2><br>
      <div class="main">
        <label for="userName">Name</label>
        <input type="userUser" id="userName" v-model="userName" required />
      </div><br>
      <div class="main">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required/>
      </div><br>
      <div class="main">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div><br>
      <base-button @click="Register">Register</base-button>
    </base-card>
  </div>
</template>

<script>
import BaseButton from "./ui/BaseButton.vue";
import BaseCard from "./ui/BaseCard.vue";
export default {
  components: {
     
    BaseButton,
    BaseCard,
  },
  data() {
    return {
      userName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    Register() {
      this.$store.dispatch("actionData", {
        userName: this.userName,
        email: this.email,
      });
      this.$router.push("/login");
    },
  },
};
</script>