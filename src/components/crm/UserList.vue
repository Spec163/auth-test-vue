<template>
  <div>
    <v-col cols="12" sm="5">
      <v-text-field
          class="ma-4"
          v-model="search"
          append-icon="mdi-magnify"
          label="Введите номер телефона"
          single-line
          hide-details
      ></v-text-field>
    </v-col>

    <user-list-item
        v-for="user in filteredUserList"
        :key="user.id"
        :user_data="user"
        :replenishBalance="replenishBalance"
    />

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import UserListItem from './UserListItem'
import Balance from '../../models/balance'
import UserInfo from '../../models/user-info'
import BalanceReplenishmentService from '../../services/billing-service/balance-replenishment-service'

export default {
  name: "UserList",
  data() {
    return {
      search: '',
      balance: new Balance('', 0),
      userInfo: new UserInfo(
          '', 0, '', '',
          0, 0, 0, 0
      )
    }
  },
  components: {
    UserListItem
  },
  computed: {
    ...mapGetters([
      'GET_USERS_INFO',
    ]),
    filteredUserList() {
      return this.GET_USERS_INFO.filter(user => {
        return user.phoneNumber.toLowerCase().includes(this.search.toLowerCase())
            || user.login.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },

  methods: {
    ...mapActions([
      'GET_USERS_INFO_FROM_API',
      'UPDATE_USERS_INFO_BALANCE'
    ]),

    replenishBalance(newUserInfo, money) {

      this.balance.phoneNumber = newUserInfo.phoneNumber
      this.balance.money = parseInt(money)
      this.userInfo = newUserInfo

      BalanceReplenishmentService.replenish(this.balance)

      this.UPDATE_USERS_INFO_BALANCE(this.userInfo)
    }
  },
  created() {
    this.GET_USERS_INFO_FROM_API()
        .then(response => {
          if (response.data) {
            console.log('Data arrived!')
          }
        })
  }
}
</script>

<style scoped>

</style>