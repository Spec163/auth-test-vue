<template>
  <div id="app">
    <h2> Hello </h2>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  computed: {
    currentUser() {
      return this.$store.state.user;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
