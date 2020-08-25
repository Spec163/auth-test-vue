<template>
  <div>
    <v-row>
      <v-col cols="12" sm="7">
        <v-card class="my-4" width="800px" height="auto">
          <v-main class="yellow darken-3 black--text pt-8">
            <div class="main-block">
              <v-card-title primary-title>
                <h2>Тарифф <q>{{ accountInfo.title }}</q></h2>
              </v-card-title>

              <!--  Запретить показывать кнопки если роль != admin    -->
              <v-card-actions>
                <v-btn
                    class="mt-1 mb-2"
                    color="red"
                    dark
                    @click="$router.push('/profile/tariff')"
                >
                  Перейти к списку тарифов
                </v-btn>
              </v-card-actions>

            </div>
            <v-card-text class="my-2">
              <v-simple-table height="120px" class="yellow darken-3 black--text title">
                <thead>
                <tr>
                  <th class="text-left">Стоимость</th>
                  <th class="text-left">Кол-во минут</th>
                  <th class="text-left">Кол-во СМС</th>
                  <th class="text-left">Кол-во интернет трафика</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>{{ accountInfo.price }} руб</td>
                  <td>{{ accountInfo.call }} мин</td>
                  <td>{{ accountInfo.sms }} смс</td>
                  <td>{{ accountInfo.internet }} Гб</td>
                </tr>
                </tbody>
              </v-simple-table>
            </v-card-text>
          </v-main>
        </v-card>
      </v-col>

      <v-col cols="12" sm="5">
        <v-card class="my-4 text-settings" width="700" height="auto">
          <v-main class="blue accent-2 black--text pt-8">
            <div class="main-block">
              <v-card-title primary-title>
                <h3 class="text-settings-login">{{ accountInfo.login }}</h3>
              </v-card-title>

              <v-card-actions>
                <v-btn
                    dark
                    @click="dialog = !dialog"
                    small
                    style="font-size: 10px"
                >
                  Пополнить баланс
                </v-btn>
              </v-card-actions>
            </div>


            <v-card-text>

              <v-row>
                <v-col cols="4" sm="6">
                  Номер:
                </v-col>

                <v-col cols="4" sm="6">
                  {{ accountInfo.phoneNumber }}
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4" sm="6">
                  Баланс:
                </v-col>
                <v-col cols="4" sm="6">
                  {{ accountInfo.balance }} руб.
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" sm="6">
                  Роль:
                </v-col>
                <v-col cols="4" sm="6">
                  {{ reverseMessage() }}
                </v-col>
              </v-row>
            </v-card-text>
          </v-main>
        </v-card>
      </v-col>
    </v-row>

    <template>
      <v-dialog v-model="dialog" max-width="400px">
        <v-card class="black--text text-center">
          <v-col cols="12" sm="12">
            <v-form @submit.prevent="replenishAccountBalance">
              <v-container>
                <v-row justify="center">
                  <v-text-field
                      type="number"
                      outlined
                      label="Введите сумму"
                      v-model="money"
                  ></v-text-field>
                </v-row>

                <v-btn
                    class="mx-2"
                    fab
                    dark
                    color="indigo"
                    @click="replenishAccountBalance"
                >
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>

              </v-container>
            </v-form>
          </v-col>
        </v-card>
      </v-dialog>
    </template>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "ProfileInfo",
  props: ['accountInfo', 'replenishBalance', 'message'],

  data() {
    return {
      dialog: false,
      money: '',
    }
  },

  computed: {
    ...mapGetters(['GET_USER_ROLE']),
  },

  methods: {
    replenishAccountBalance() {
      this.dialog = false
      this.replenishBalance(this.money)
      this.money = ''
    },
    reverseMessage() {
      return this.GET_USER_ROLE.replace('ROLE_', '')
    }
  },
}
</script>

<style scoped>
.main-block {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
}

.text-settings {
  font-size: 26px;
  color: black;
}

.text-settings-login {
  font-size: 40px;
  font-style: italic;
  color: black;
}

q {
  quotes: "\00ab" "\00bb";
}

</style>