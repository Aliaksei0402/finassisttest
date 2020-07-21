<template>
  <div class="form">
    <h1 class="title">Регистрация</h1>
    <div class="tile is-vertical is-4">
      <b-field>
        <b-input type="email" placeholder="E-mail" v-model="email" />
      </b-field>
      <b-field>
        <b-input type="password" placeholder="Пароль" password-reveal v-model="password" />
      </b-field>
      <b-field>
        <b-input
          type="password"
          placeholder="Подтверждение пароля"
          password-reveal
          v-model="passwordCheck"
        />
      </b-field>
      <b-message type="is-danger" v-if="error || errorPass">{{ error || errorPass }}</b-message>
      <b-button class="is-primary" @click="register()">Зарегистрироваться</b-button>
      <b-message>
        <router-link to="/">У меня уже есть аккаунт</router-link>
      </b-message>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      password: '',
      passwordCheck: '',
      errorPass: null
    }
  },
  computed: {
    error() {
      return this.$store.state.registerError;
    }
  },
  methods: {
    register() {
      if (this.password === this.passwordCheck) {
        this.$store.dispatch("register", { email: this.email, password: this.password, error: this.error })
        this.$router.replace("/");      }
      else {
        this.errorPass = "Неверно введен пароль подтверждения"
      }
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