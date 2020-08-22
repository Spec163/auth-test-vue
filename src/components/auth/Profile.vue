<template>
  <div>
    <h3>Token from vuex: </h3>
    <h4 class="get-info"> {{ GET_USER_TOKEN }} <br> {{ GET_USER_ROLE }} </h4>

    <h4>Информация о вашем аккаунте: <br>{{ GET_ACCOUNT_INFORMATION }}</h4>


    <h2>{{ message }}</h2>
    <v-form @submit.prevent="replenishBalance">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="3">
            <v-text-field
                type="number"
                outlined
                label="Money"
                v-model="balance.money"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="3">
            <v-text-field
                label="Phone Number"
                type="text"
                v-model="balance.phoneNumber"
                v-if="IS_ADMIN_ROLE"
                outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-btn class="mx-2" fab dark color="indigo" @click="replenishBalance">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>

      </v-container>
    </v-form>

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Balance from '../../models/balance'
import BalanceReplenishmentService from '../../services/billing-service/balance-replenishment-service'

export default {
  name: "Profile",
  data() {
    return {
      balance: new Balance('', ''),
      message: ''
    };
  },
  computed: {
    ...mapGetters([
      'GET_USER_TOKEN',
      'GET_USER_ROLE',
      'IS_ADMIN_ROLE',
      'GET_ACCOUNT_INFORMATION',
    ]),
  },

  methods: {
    ...mapActions(['GET_ACCOUNT_INFORMATION_FROM_API']),
    replenishBalance() {
      if (this.balance.money > 0 && this.balance.money !== null) {
        BalanceReplenishmentService.replenish(this.balance)
        console.log(this.balance)
      } else this.message = 'Amount entered incorrectly'
      this.balance = ''
    }
  },

  created() {
    this.GET_ACCOUNT_INFORMATION_FROM_API()
  }
}
</script>

<style scoped>
.get-info {
  text-align: justify;
  color: red;
  width: 1000px;
  word-break: break-all;
}

h3 {
  color: darkblue;
  font-family: "Arial Black";
  text-align: left;
  margin-right: 20px;
}
</style>