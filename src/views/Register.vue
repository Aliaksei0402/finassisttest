<template>
  <div class="form">
    <h1 class="title">Register</h1>
    <div class="tile is-vertical is-4">
      <b-field label="Email">
        <b-input icon="email" type="email" v-model="email" />
      </b-field>
      <b-field label="Password">
        <b-input type="password" password-reveal v-model="password" />
      </b-field>
      <b-message type="is-danger" v-if="error">{{ error }}</b-message>
      <b-message has-icon icon="account">
        <router-link to="/">I have an account</router-link>
      </b-message>
      <b-button class="is-primary" @click="register()">Register</b-button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    error() {
      return this.$store.state.registerError;
    }
  },
  methods: {
    register() {
      this.$store.dispatch({ type: "register", email: this.email, password: this.password, error: this.error })
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