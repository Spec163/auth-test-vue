<template>
  <v-card height="auto" class="blue-grey black--text title ma-4">
    <h3>{{ message }}</h3>
    <v-form @submit.prevent="replenishAccountBalance">
      <v-container>
        <v-simple-table class="blue-grey black--text title">
          <template v-slot:default>
            <thead>
            <tr>
              <td>{{ user_data.login }}</td>
              <td>{{ user_data.phoneNumber }}</td>
              <td>{{ user_data.balance }} руб.</td>
              <td>{{ user_data.title }}</td>
              <td>{{ user_data.price }}</td>
              <td>{{ user_data.call }}</td>
              <td>{{ user_data.sms }}</td>
              <td>{{ user_data.internet }}</td>
              <td>
                <v-text-field
                    outlined
                    type="number"
                    v-model="money"
                ></v-text-field>
              </td>
              <td>
                <v-btn class="mx-2" fab dark x-small color="indigo" @click="replenishAccountBalance">
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>
              </td>
            </tr>
            </thead>
          </template>
        </v-simple-table>

      </v-container>
    </v-form>
  </v-card>
</template>

<script>

export default {
  name: "UserListItem",
  props: [
    'replenishBalance',
    'user_data'
  ],
  data() {
    return {
      message: '', // вывести сообщение во временном всплывающем окне
      money: 0
    }
  },
  methods: {
    replenishAccountBalance() {
      if (this.money > 0 && this.money !== null) {
        this.user_data.balance = parseInt(this.user_data.balance) + parseInt(this.money)
        this.$emit('replenishBalance', this.user_data, this.money)
      } else this.message = 'Amount entered incorrectly'
      this.money = 0
    }
  }
}
</script>

<style scoped>

</style>