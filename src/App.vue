<template>
  <v-app>
    <div>
      <v-app-bar
          app
          color="deep-purple accent-4"
          dense
          dark
      >

        <v-app-bar-nav-icon
            v-if="GET_USER_IS_ACTIVE"
            @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

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

      <v-navigation-drawer
          v-model="drawer"
          absolute
          bottom
          temporary
      >
        <v-list
            nav
        >
          <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
          >
            <v-list-item
                @click="$router.push('/profile')"
                :disabled="$route.name === 'profile'"
            >
              <v-list-item-title>
                  Profile
              </v-list-item-title>
            </v-list-item>

            <v-list-item
                @click="$router.push('/crm/user-list')"
                :disabled="$route.name === 'user-list'"
            >
              <v-list-item-title>
                  CRM
              </v-list-item-title>
            </v-list-item>

            <v-list-item
                @click="$router.push('/imitator')"
                :disabled="$route.name === 'imitator'"
            >
              <v-list-item-title>
                  Imitator
              </v-list-item-title>
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>


      <div class="container">
        <router-view/>
      </div>
    </div>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      group: null
    }
  },

  watch: {
    group () {
      this.drawer = false
    },
  },

  computed: {
    ...mapGetters([
      'GET_USER_IS_ACTIVE'
    ]),
  },

  methods: {
    logOut() {
      this.$store.dispatch('auth/LOGOUT');
      this.$router.push('/login');
    },
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
