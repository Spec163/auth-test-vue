<template>
  <div>
    <h3>Token from vuex: </h3>
    <h4 class="get-info"> {{ GET_USER_TOKEN }}</h4>

    <profile-info
        :accountInfo="GET_ACCOUNT_INFORMATION"
        :replenishBalance="replenishBalance"
        :message="message"
    />

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Balance from '../../models/balance'
import ProfileInfo from './ProfileInfo'

export default {
  name: "Profile",
  components: {ProfileInfo},
  template: {
    ProfileInfo
  },
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
      'GET_ACCOUNT_INFORMATION',
    ]),
  },

  methods: {
    ...mapActions(['GET_ACCOUNT_INFORMATION_FROM_API', 'UPDATE_ACCOUNT_BALANCE']),
    replenishBalance(money) {
      this.balance.money = money
      if (this.balance.money > 0 && this.balance.money !== null) {
        const isReplenished = this.UPDATE_ACCOUNT_BALANCE(this.balance)
        if (isReplenished) {
          this.message = 'Your balance has been replenished'
        } else {
          this.message = 'An unexpected error. Try to top up your balance later.'
        }
      } else {
        this.message = 'Amount entered incorrectly'
      }
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