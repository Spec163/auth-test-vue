<template>
  <div id="app">
    <v-app-bar app color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>


      <v-btn v-if="GET_USER_IS_ACTIVE" icon @click="logOut">
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
  import {mapGetters} from 'vuex'

  export default {
    name: 'App',
    computed: {
      ...mapGetters ([
              'GET_USER_IS_ACTIVE'
      ]),
    },

    methods: {
      logOut() {
        this.$store.dispatch('auth/LOGOUT');
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
