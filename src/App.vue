<template>
  <div id="app">
    <v-app-bar app color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <v-btn v-if="true" icon href="/logout">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>

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
  .font-size {
    font-size: 110%;
  }
  .navigate-btn {
    color: #6200ea;
  }
</style>
