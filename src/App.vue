<template>
  <v-app>
    <div> <!-- id="app"-->
      <v-app-bar app color="deep-purple accent-4" dense dark>
        <v-app-bar-nav-icon v-if="GET_USER_IS_ACTIVE"></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <router-link to="registration">
          <v-btn
                v-if="!GET_USER_IS_ACTIVE"
                icon
                :disabled="$route.path === '/registration'"
          >
            <v-icon>person_add</v-icon>
          </v-btn>
        </router-link>

        <router-link to="login">
          <v-btn
                v-if="!GET_USER_IS_ACTIVE"
                icon
                :disabled="$route.path === '/login'"
          >
            <v-icon>login</v-icon>
          </v-btn>

        </router-link>
        <v-btn v-if="GET_USER_IS_ACTIVE" icon @click="logOut">
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </v-app-bar>

      <div class="container">
        <router-view />
      </div>
    </div>
  </v-app>
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
