<template>
  <div id="app" class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch("onAuthStateChanged")
  }
}
</script>