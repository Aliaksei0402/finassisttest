<template>
  <div class="form">
    <h1 class="title">Login</h1>
    <div class="tile is-vertical is-4">
      <b-field label="Email">
        <b-input icon="email" type="email" v-model="email" />
      </b-field>
      <b-field label="Password">
        <b-input type="password" password-reveal v-model="password" />
      </b-field>
      <b-message type="is-danger" v-if="error">{{ error.message }}</b-message>
      <b-message has-icon icon="account">
        <router-link to="/register">Register</router-link>
      </b-message>
      <b-button class="is-primary" @click="login()">Login</b-button>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(["user"]),
    nextRoute() {
      return this.$route.query.redirect || "/profile";
    },
    error() {
      return this.$store.state.loginError;
    }
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    user: function (changedUser) {
      if (changedUser) {
        this.$router.replace(this.nextRoute);
      }
    },
  },
  methods: {
    login() {
      this.$store.dispatch({ type: "login", email: this.email, password: this.password, error: this.error })
    }
  }
}
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
}
</style>