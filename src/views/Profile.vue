<template>
  <div class="form">
    <p>{{user.email}}</p>
    <b-button @click="logOut()">Выйти</b-button>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    logOut() {
      this.$store.dispatch("logOut");
      this.$router.replace("/");
    }
  }
}
</script>